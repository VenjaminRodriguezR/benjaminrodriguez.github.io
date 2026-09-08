<script setup>
import { experience } from '../data/profile'
</script>

<template>
  <section id="experience" class="section container">
    <div class="section-heading">
      <div>
        <p class="section-kicker">Research experience</p>
        <h2>A profile built around applied biomedical R&D.</h2>
      </div>
    </div>

    <div class="timeline">
      <article v-for="item in experience" :key="item.organization" class="timeline-item">
        <div class="timeline-meta">
          <span>{{ item.period }}</span>
          <span>{{ item.location }}</span>
        </div>
        <div class="timeline-content">
          <h3>{{ item.organization }}</h3>
          <p class="timeline-role">{{ item.role }}</p>
          <ul>
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
