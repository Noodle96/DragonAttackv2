<template>
  <div class="math-adventure-home">
    <section id="overview">
      <OverviewSection />
    </section>
    <section id="demos">
      <DemosSection />
    </section>
    <section id="learning-process">
      <LearningProcessSection />
    </section>
    <section id="team">
      <TeamSection />
    </section>
  </div>
</template>

<script>
import OverviewSection from './OverviewSection.vue';
import DemosSection from './DemosSection.vue';
import LearningProcessSection from './LearningProcessSection.vue';
import TeamSection from './TeamSection.vue';

export default {
  name: 'MathAdventureHome',
  components: {
    OverviewSection,
    DemosSection,
    LearningProcessSection,
    TeamSection,
  },
};
</script>

<style scoped>
.math-adventure-home {
  display: flex;
  flex-direction: column;
  gap: 2em;
}

section {
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
