<script setup>
import { BrainCircuit, Boxes, ChartNoAxesCombined, Workflow } from 'lucide-vue-next'
import { expertise } from '../data/profile'

const icons = [BrainCircuit, ChartNoAxesCombined, Boxes, Workflow]
</script>

<template>
  <section id="expertise" class="section container">
    <div class="section-heading">
      <div>
        <p class="section-kicker">Core expertise</p>
        <h2>Technical depth across data, mechanics, and research software.</h2>
      </div>
      <p>Rather than a long software inventory, this is the set of problems I am strongest at solving.</p>
    </div>

    <div class="expertise-grid">
      <article v-for="(item, index) in expertise" :key="item.title" class="expertise-card">
        <component :is="icons[index]" :size="25" stroke-width="1.7" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="tags compact-tags">
          <span v-for="tech in item.technologies" :key="tech">{{ tech }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
