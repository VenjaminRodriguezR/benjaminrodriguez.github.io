<script setup>
import { ArrowUpRight, Github, Linkedin, Mail, PanelsTopLeft } from 'lucide-vue-next'
import { profile } from '../data/profile'
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <p class="section-kicker">Contact</p>
        <h2>Interested in biomedical computation, R&D, or research software?</h2>
        <p>{{ profile.availability }}</p>
      </div>
      <div class="footer-links">
        <a :href="profile.links.email"><Mail :size="18" /> Email <ArrowUpRight :size="15" /></a>
        <a :href="profile.links.github" target="_blank" rel="noreferrer"><Github :size="18" /> GitHub <ArrowUpRight :size="15" /></a>
        <a :href="profile.links.linkedin" target="_blank" rel="noreferrer"><Linkedin :size="18" /> LinkedIn <ArrowUpRight :size="15" /></a>
        <a :href="profile.links.streamlit" target="_blank" rel="noreferrer"><PanelsTopLeft :size="18" /> Streamlit <ArrowUpRight :size="15" /></a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {{ new Date().getFullYear() }} Benjamín Rodríguez Romo</span>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
</template>
