import { ref, computed, watch } from 'vue';

// DATA AWAL (Initial State): Dimulai dari array kosong untuk menguji Empty State
const STORAGE_KEY = 'gatherly_events';
const defaultEvents = [];

// SINGLE SOURCE OF TRUTH (di luar fungsi agar shared/singleton)
const savedData = localStorage.getItem(STORAGE_KEY);
const events = ref(savedData ? JSON.parse(savedData) : defaultEvents);

// WATCHER (Side Effect): simpan ke localStorage setiap state events berubah
watch(
  events,
  (newEvents) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newEvents));
  },
  { deep: true }
);

export function useEvents() {
  // DERIVED STATE
  const totalEvents = computed(() => events.value.length);
  const activeEvents = computed(() => events.value.filter(e => !e.done));
  const completedEvents = computed(() => events.value.filter(e => e.done));

  // MUTASI: TAMBAH DATA (Create)
  const createEvent = (eventData) => {
    const newEvent = {
      id: Date.now(),
      title: eventData.title,
      date: eventData.date,
      loc: eventData.loc.startsWith('📍') ? eventData.loc : `📍 ${eventData.loc}`,
      cat: eventData.cat,
      quota: Number(eventData.quota) || 100,
      price: eventData.price || 'Free',
      desc: eventData.desc,
      done: false
    };
    events.value.unshift(newEvent);
    return newEvent;
  };

  // MUTASI: UBAH STATUS (Update/Complete)
  const completeEvent = (id) => {
    const target = events.value.find(e => e.id === Number(id));
    if (target) {
      target.done = true;
    }
  };

  // MUTASI: HAPUS DATA (Delete)
  const deleteEvent = (id) => {
    const index = events.value.findIndex(e => e.id === Number(id));
    if (index !== -1) {
      events.value.splice(index, 1);
    }
  };

  // PENCARIAN BERDASARKAN ID
  const getEventById = (id) => {
    return events.value.find(e => e.id === Number(id));
  };

  // RESET DATA (opsional, untuk pengujian praktikum)
  const clearAllEvents = () => {
    events.value = [];
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    events,
    totalEvents,
    activeEvents,
    completedEvents,
    createEvent,
    completeEvent,
    deleteEvent,
    getEventById,
    clearAllEvents
  };
}