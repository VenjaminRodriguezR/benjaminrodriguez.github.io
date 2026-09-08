<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { publications } from '../data/profile'
</script>

<template>
  <section id="publications" class="section section-publications">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Research output</p>
          <h2>Publications & conference work.</h2>
        </div>
      </div>

      <div class="publication-list">
        <article v-for="publication in publications" :key="publication.title" class="publication-row">
          <div class="publication-venue">{{ publication.venue }}</div>
          <div>
            <h3>{{ publication.title }}</h3>
            <p>{{ publication.status }}</p>
          </div>
          <a v-if="publication.url" :href="publication.url" target="_blank" rel="noreferrer" aria-label="Open publication">
            <ArrowUpRight :size="18" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
