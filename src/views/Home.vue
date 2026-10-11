<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>Welcome to Gatherly</h1>
      <p>Discover, connect, and engage with extraordinary events around you.</p>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  animation: fadeIn 0.5s ease;
}

.hero-section {
  text-align: center;
  padding: 4rem 2rem;
  background: #fdfdfd;
  border-radius: 20px;
  border: 1px solid #f0f0f0;
}

.hero-section h1 {
  font-size: 3rem;
  color: #1c1948;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
  color: #666;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>