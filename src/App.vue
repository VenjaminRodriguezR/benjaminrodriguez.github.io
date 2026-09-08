<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExpertiseGrid from './components/ExpertiseGrid.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import PublicationsSection from './components/PublicationsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteNav />
  <main>
    <HeroSection />
    <ProjectsSection />
    <ExpertiseGrid />
    <ExperienceSection />
    <EducationSection />
    <PublicationsSection />
  </main>
  <SiteFooter />
</template>
