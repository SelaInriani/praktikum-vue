<script setup>
const categories = [
  { name: 'Music & Concerts', icon: '🎵', count: 24 },
  { name: 'Technology', icon: '💻', count: 18 },
  { name: 'Art & Design', icon: '🎨', count: 12 },
  { name: 'Business', icon: '💼', count: 30 },
  { name: 'Health & Wellness', icon: '🧘', count: 15 },
  { name: 'Food & Drink', icon: '🍔', count: 22 }
]
</script>

<template>
  <div class="category-page">
    <h2 class="section-title">Explore by Category</h2>
    <div class="category-grid">
      <div class="category-card" v-for="(cat, index) in categories" :key="index">
        <div class="cat-icon">{{ cat.icon }}</div>
        <h3>{{ cat.name }}</h3>
        <p>{{ cat.count }} Events</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-page {
  animation: fadeIn 0.4s ease;
}

.section-title {
  font-size: 2rem;
  color: #1c1948;
  margin-bottom: 2rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: #ddd;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.cat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  color: #1c1948;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.category-card p {
  color: #888;
  font-size: 0.9rem;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>