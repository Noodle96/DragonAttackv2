<template>
  <div>
    <section id="about">
      <AboutDragon />
    </section>
    <section id="videos">
      <VideosSection />
    </section>
    <section id="process">
      <ProcessSection />
    </section>
    <section id="team">
      <TeamSection />
    </section>
  </div>
</template>

<script>
import AboutDragon from './AboutDragon.vue';
import VideosSection from './VideosSection.vue';
import ProcessSection from './ProcessSection.vue';
import TeamSection from './TeamSection.vue';

export default {
  name: 'DragonAttackHome',
  components: {
    AboutDragon,
    VideosSection,
    ProcessSection,
    TeamSection,
  },
};
</script>

<style scoped>
section {
  padding: 2em 0;
}
</style>
