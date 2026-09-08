<script setup>
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, PanelsTopLeft } from 'lucide-vue-next'
import { profile } from '../data/profile'
</script>

<template>
  <section id="top" class="hero-section">
    <div class="hero-grid container">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span class="status-dot"></span>{{ profile.location }}</div>
        <h1>{{ profile.name }}</h1>
        <p class="hero-role">{{ profile.role }}</p>
        <p class="hero-intro">{{ profile.intro }}</p>

        <div class="hero-actions">
          <a class="button button-primary" href="#work">Selected work <ArrowDown :size="18" /></a>
          <a class="button button-secondary" :href="profile.links.cv" target="_blank">CV <Download :size="18" /></a>
        </div>

        <div class="hero-social-row">
          <a :href="profile.links.github" target="_blank" rel="noreferrer"><Github :size="18" /> GitHub</a>
          <a :href="profile.links.linkedin" target="_blank" rel="noreferrer"><Linkedin :size="18" /> LinkedIn</a>
          <a :href="profile.links.streamlit" target="_blank" rel="noreferrer"><PanelsTopLeft :size="18" /> Streamlit</a>
          <a :href="profile.links.email"><Mail :size="18" /> Email</a>
        </div>
      </div>

      <aside class="profile-panel reveal" aria-label="Profile summary">
        <div class="portrait-wrap">
          <img :src="profile.photo" alt="Portrait of Benjamín Rodríguez Romo" class="portrait" />
          <div class="portrait-caption"><MapPin :size="15" /> Switzerland</div>
        </div>
        <p>{{ profile.summary }}</p>
        <div class="availability">{{ profile.availability }}</div>
      </aside>
    </div>
  </section>
</template>
