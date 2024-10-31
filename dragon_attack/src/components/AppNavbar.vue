<template>
  <nav class="navbar">
    <div class="section-links">
      <ul v-if="currentProject === 'dragon'">
        <li><a href="#about">About</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#team">Our Team</a></li>
      </ul>
      <ul v-else-if="currentProject === 'math'">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#demos">Demos</a></li>
        <li><a href="#learning-process">Learning Process</a></li>
        <li><a href="#team">Our Team</a></li>
      </ul>
    </div>
    <div class="project-switch">
      <button @click="goToDragonAttack">DragonAttack</button>
      <button @click="goToMathAdventure">MathAdventure</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  computed: {
    currentProject() {
      // Asegura que $route.name esté definido antes de usar includes
      return this.$route.name && this.$route.name.includes('Dragon') ? 'dragon' : 'math';
    },
  },
  methods: {
    goToDragonAttack() {
      this.$router.push('/dragon-attack');
    },
    goToMathAdventure() {
      this.$router.push('/math-adventure');
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #272525;
  padding: 1em;
}

.section-links ul {
  display: flex;
  list-style: none;
  gap: 1em;
}

.section-links a {
  text-decoration: none;
  color: #fff;
}

.project-switch {
  display: flex;
  gap: 0.5em;
}

.project-switch button {
  padding: 0.3em 0.6em;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
}

.project-switch button:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
