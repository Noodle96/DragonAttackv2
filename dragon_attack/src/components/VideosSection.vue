<template>
  <section class="videos-section" id="videos">
    <h2>Explora el Gameplay Épico de DragonAttack</h2>
    <p>Sumérgete en las batallas y la acción que te esperan en el reino de DragonAttack.</p>
    
    <div class="video-container">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/0gLODoXanog" 
        title="DragonAttack Gameplay" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    
    <div class="video-thumbnails">
      <div class="thumbnail" v-for="(video, index) in gameplayVideos" :key="index">
        <img :src="video.thumbnail" :alt="video.title" />
        <h3>{{ video.title }}</h3>
        <button @click="openVideo(video.url)">Ver Video</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VideosSection',
  data() {
    return {
      gameplayVideos: [
        {
          title: 'Batalla en el Bosque Oscuro',
          url: 'https://www.youtube.com/watch?v=cF3CmJHiMvY',
          thumbnail: require('@/assets/bosque_thumbnail.jpg'),
        },
        {
          title: 'Lucha en el Valle del Fuego',
          url: 'https://www.youtube.com/watch?v=IMklgHkggrQ',
          thumbnail: require('@/assets/valle_thumbnail.avif'),
        },
        {
          title: 'Combate en la Ciudadela Sombría',
          url: 'https://www.youtube.com/watch?v=5fIAPcVdZO8',
          thumbnail: require('@/assets/ciudadela_thumbnail.avif'),
        },
      ],
    };
  },
  methods: {
    openVideo(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
.videos-section {
  padding: 3em 2em;
  text-align: center;
  color: #e0e0e0;
  background-color: #1e1e1e;
}

.videos-section h2 {
  font-size: 2.5em;
  color: #ffcc00;
  margin-bottom: 0.5em;
}

.videos-section p {
  font-size: 1.2em;
  color: #dcdcdc;
  margin-bottom: 2em;
}

.video-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

iframe {
  width: 100%;
  max-width: 800px;
  height: 450px;
  border: 5px solid #ffcc00;
  border-radius: 10px;
}

.video-thumbnails {
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
}

.thumbnail {
  text-align: center;
  max-width: 200px;
}

.thumbnail img {
  width: 100%;
  border-radius: 8px;
  border: 3px solid #ff9900;
  box-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
  cursor: pointer;
  transition: transform 0.3s;
}

.thumbnail img:hover {
  transform: scale(1.05);
}

.thumbnail h3 {
  font-size: 1em;
  color: #ffcc00;
  margin: 0.5em 0;
}

.thumbnail button {
  padding: 0.5em 1em;
  background-color: #ff9900;
  color: #1e1e1e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.thumbnail button:hover {
  background-color: #ffcc00;
}
</style>
