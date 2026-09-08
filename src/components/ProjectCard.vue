<script setup>
import { ArrowUpRight, Github, LockKeyhole, Play, FlaskConical } from 'lucide-vue-next'

defineProps({
  project: { type: Object, required: true },
})

defineEmits(['preview'])
</script>

<template>
  <article class="project-card">
    <div class="project-topline">
      <span class="project-category">{{ project.category }}</span>
      <span v-if="project.kind === 'case-study'" class="case-study-label"><LockKeyhole :size="13" /> Case study</span>
    </div>

    <div class="project-mark" aria-hidden="true">
      <FlaskConical v-if="project.kind === 'case-study'" :size="30" />
      <span v-else>{{ project.title.slice(0, 2).toUpperCase() }}</span>
    </div>

    <h3>{{ project.title }}</h3>
    <p class="project-summary">{{ project.summary }}</p>
    <p v-if="project.impact" class="project-impact">{{ project.impact }}</p>

    <div class="tags">
      <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
    </div>

    <div class="project-actions">
      <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noreferrer">
        <Github :size="17" /> Repository <ArrowUpRight :size="15" />
      </a>
      <button v-if="project.streamlit && project.liveUrl" type="button" @click="$emit('preview', project)">
        <Play :size="17" /> Live preview
      </button>
      <a v-else-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noreferrer">
        Live demo <ArrowUpRight :size="15" />
      </a>
    </div>
  </article>
</template>
