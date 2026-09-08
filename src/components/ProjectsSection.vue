<script setup>
import { computed, ref } from 'vue'
import { X, ExternalLink } from 'lucide-vue-next'
import ProjectCard from './ProjectCard.vue'
import { getProjects } from '../services/projects'

const projects = computed(() => getProjects())
const previewProject = ref(null)

const embedUrl = computed(() => {
  if (!previewProject.value?.liveUrl) return ''
  const clean = previewProject.value.liveUrl.replace(/\/$/, '')
  return `${clean}/?embed=true&embed_options=hide_loading_screen&embed_options=light_theme`
})
</script>

<template>
  <section id="work" class="section section-work">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Selected work</p>
          <h2>Projects that demonstrate how I work.</h2>
        </div>
        <p>
          Public GitHub projects are refreshed during the site build. Institution-owned or private work is presented as a curated technical case study instead of exposing repository credentials.
        </p>
      </div>

      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" @preview="previewProject = $event" />
      </div>
    </div>

    <div v-if="previewProject" class="modal-backdrop" @click.self="previewProject = null">
      <div class="preview-modal" role="dialog" aria-modal="true" :aria-label="`Preview ${previewProject.title}`">
        <div class="preview-header">
          <div>
            <span>Interactive Streamlit demo</span>
            <strong>{{ previewProject.title }}</strong>
          </div>
          <div class="preview-header-actions">
            <a :href="previewProject.liveUrl" target="_blank" rel="noreferrer" aria-label="Open app in new tab"><ExternalLink :size="18" /></a>
            <button type="button" @click="previewProject = null" aria-label="Close preview"><X :size="20" /></button>
          </div>
        </div>
        <iframe :src="embedUrl" title="Streamlit project preview" loading="lazy"></iframe>
      </div>
    </div>
  </section>
</template>
