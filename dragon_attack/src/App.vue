<template>
  <div id="app" class="app-container">
    <AppNavbar />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import './assets/styles.css';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style scoped>
/* Configura el contenedor principal para evitar cualquier borde o padding */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-content {
  flex: 1;
  padding: 0; /* Asegura que no haya padding alrededor */
  margin: 0;  /* Asegura que no haya margen adicional */
  width: 100%;
  box-sizing: border-box;
}
</style>
