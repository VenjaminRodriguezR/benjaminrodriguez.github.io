<script setup>
import { GraduationCap } from 'lucide-vue-next'
import { education } from '../data/profile'
</script>

<template>
  <section id="education" class="section section-education">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Education</p>
          <h2>Engineering training across bioengineering and computing.</h2>
        </div>
        <p>
          A multidisciplinary academic background combining biomedical engineering, computer engineering,
          data science, and research-oriented computational methods.
        </p>
      </div>

      <div class="education-grid">
        <article v-for="item in education" :key="item.degree" class="education-card">
          <div class="education-icon"><GraduationCap :size="22" /></div>
          <div class="education-period">{{ item.period }}</div>
          <h3>{{ item.degree }}</h3>
          <p class="education-school">{{ item.institution }}</p>
          <p v-if="item.detail" class="education-detail">{{ item.detail }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
