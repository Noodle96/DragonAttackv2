<template>
  <section class="math-overview">
    <div class="overview-content">
      <h1>MathAdventure</h1>
      <h2>¡Aprende, Juega y Mejora Tus Habilidades!</h2>
      <p>
        MathAdventure es una aventura educativa que mezcla desafíos matemáticos con acción física. 
        Los jugadores esquivan obstáculos y resuelven problemas matemáticos en un entorno interactivo, 
        ¡donde cada movimiento cuenta! Desarrolla rapidez mental, mejora tus reflejos y fortalece el 
        equilibrio mientras te diviertes.
      </p>
      <p>
        Este juego desafía a los niños a medida que avanzan, aumentando la dificultad de los problemas y obstáculos. 
        Con recompensas y retroalimentación instantánea, MathAdventure mantiene la motivación y compromiso, 
        ofreciendo una experiencia lúdica y educativa ideal para el desarrollo integral.
      </p>
      <button class="explore-more" @click="goToGameFeatures">Explorar Más</button>
    </div>
    <div class="overview-image">
      <img src="../assets/math_adventure.png" alt="Math World VR Image" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'OverviewSection',
  methods: {
    goToGameFeatures() {
      this.$router.push('/videos');
    },
  },
};
</script>

<style scoped>
.math-overview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom right, #81c784, #64b5f6);
  color: #ffffff;
  padding: 3em;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}

.overview-content {
  max-width: 50%;
  text-align: center;
}

.overview-content h1 {
  font-size: 4em;
  color: #ff7043;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  margin-bottom: 0.5em;
  text-shadow: 2px 2px #ffcc00;
}

.overview-content h2 {
  font-size: 2.5em;
  color: #ffcc80;
  margin-bottom: 1em;
  text-shadow: 1px 1px #ff7043;
}

.overview-content p {
  font-size: 1.5em;
  line-height: 1.8;
  color: #ffffff;
  font-family: Arial, sans-serif;
  margin-bottom: 1.2em;
}

.explore-more {
  margin-top: 1em;
  background-color: #ff7043;
  color: #ffffff;
  padding: 1em 2em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.5em;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-shadow: 1px 1px #000000;
  transition: background-color 0.3s ease;
}

.explore-more:hover {
  background-color: #ffa500;
}

.overview-image {
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overview-image img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
}
</style>
