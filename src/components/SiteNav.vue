<script setup>
import { Github, Linkedin } from 'lucide-vue-next'
import { profile } from '../data/profile'
</script>

<template>
  <header class="site-nav-shell">
    <nav class="site-nav container" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="Back to top">BR<span>.</span></a>
      <div class="nav-links">
        <a href="#work">Work</a>
        <a href="#expertise">Expertise</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#publications">Publications</a>
      </div>
      <div class="nav-socials">
        <a :href="profile.links.github" target="_blank" rel="noreferrer" aria-label="GitHub"><Github :size="19" /></a>
        <a :href="profile.links.linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin :size="19" /></a>
      </div>
    </nav>
  </header>
</template>
