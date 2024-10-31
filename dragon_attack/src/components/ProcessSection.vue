<template>
  <section class="process-section" id="process">
    <h2>Proceso de Desarrollo del Juego</h2>
    <p>Explora los pasos y la evolución creativa detrás de DragonAttack.</p>
    
    <div class="carousel">
      <button @click="prevSlide" class="carousel-nav left">❮</button>
      
      <div class="carousel-track-container">
        <ul class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <li v-for="(step, index) in processSteps" :key="index" class="carousel-slide">
            <h3>{{ step.title }}</h3>
            <img :src="step.image" :alt="step.title" class="step-image"/>
            <p>{{ step.description }}</p>
          </li>
        </ul>
      </div>
      
      <button @click="nextSlide" class="carousel-nav right">❯</button>
    </div>
    
    <div class="carousel-indicators">
      <span 
        v-for="(step, index) in processSteps" 
        :key="index" 
        :class="{ active: index === currentSlide }" 
        @click="goToSlide(index)">
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProcessSection',
  data() {
    return {
      currentSlide: 0,
      processSteps: [
        { 
          title: 'Concepto Inicial', 
          description: 'En esta etapa inicial, conceptualizamos DragonAttack. Creamos un menú donde los jugadores pueden elegir el tipo de escudo que usarán en el juego, anticipando la estrategia que mejor se adapte a los desafíos que enfrentarán.', 
          image: require('@/assets/eleccion_escudo.png') 
        },
        { 
          title: 'Diseño de Personajes', 
          description: 'Desarrollamos un menú de selección de armas, que permite a los jugadores personalizar sus estrategias. Los jugadores deben elegir cuidadosamente su armamento para sobrevivir en un mundo dominado por dragones y criaturas hostiles.', 
          image: require('@/assets/eleccion_arma.png') 
        },
        { 
          title: 'Escenarios y Niveles', 
          description: 'Diseñamos los niveles y escenarios del juego. Aquí, los dragones y otras criaturas atacan en plena batalla, brindando una experiencia inmersiva de combate en primera persona donde cada decisión cuenta.', 
          image: require('@/assets/dragones_atacan.png') 
        },
        { 
          title: 'Desarrollo de Jugabilidad', 
          description: 'Implementamos las mecánicas de combate y exploración. Se añadió un sistema de combate en tiempo real y escenarios detallados que enriquecen la experiencia de juego, manteniendo a los jugadores en suspenso.', 
          image: require('@/assets/logo.png') 
        },
        { 
          title: 'Pruebas y Optimización', 
          description: 'Realizamos pruebas de jugabilidad y optimizamos el rendimiento del juego para ofrecer una experiencia fluida y sin interrupciones. Esta fase es crucial para detectar errores y mejorar la experiencia de usuario.', 
          image: require('@/assets/logo.png') 
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.processSteps.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.processSteps.length - 1;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

<style scoped>
.process-section {
  padding: 3em 2em;
  text-align: center;
  background-color: #1e1e1e;
  color: #ffffff;
}

.process-section h2 {
  font-size: 2.5em;
  color: #ca9c3a;
  margin-bottom: 0.5em;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 800px;
  margin: 2em auto;
}

.carousel-track-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
  padding: 2em;
  background: rgba(34, 34, 34, 0.9);
  border-radius: 10px;
  text-align: center;
}

.step-image {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin-bottom: 1em;
  border: 3px solid #ffcc00;
}

.carousel-nav {
  background: none;
  border: none;
  color: #ffcc00;
  font-size: 2em;
  cursor: pointer;
}

.carousel-nav.left {
  position: absolute;
  left: -2em;
}

.carousel-nav.right {
  position: absolute;
  right: -2em;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5em;
  margin-top: 1em;
}

.carousel-indicators span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #777;
  border-radius: 50%;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: #ffcc00;
}
</style>
