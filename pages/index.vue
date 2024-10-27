<template>
  <div class="d-flex mx-auto justify-center flex-column w-100" style="max-width: 1200px; margin-top: 80px;">
    <div class="d-flex flex-column" style="max-width: 600px;">
      <h1 class="text-h4 text-md-h2 mb-2 text-primary font-weight-bold">D-Jà
        Vue</h1>
      <h1 :style="`${$vuetify.display.mdAndUp ? 'line-height: 4rem' : ''}; opacity: 0.85;`"
        class="text-h4 text-md-h2 font-weight-extrabold text-accent">
        Gerador de projeto full-stack,
        pronto para produção e
        focado na
        produtividade
        ⚡</h1>
      <p style="font-weight: 400;" class="mt-4 text-h6 text-md-h5 text-grey-darken-1">Vue 3 | Vite | Vuetify e Backend
        Django 🦄
        API </p>
      <div>
        <v-btn style="font-weight: 700;" variant="tonal" size="large"
          class="text-bold mt-8 text-capitalize bg-primary rounded-xl">Iniciar</v-btn>
      </div>
    </div>
    <div class="d-flex flex-column flex-md-row ga-4 mt-10">
      <v-card width="100%" variant="tonal" title="Backend" subtitle="Django API | Python decouple | Pytest | Linter"
        class="flex-fill pa-md-4" />
      <v-card width="100%" variant="tonal" title="Frontend" subtitle="Vue.js | Vuetify | Pinia | Vite"
        class="flex-fill pa-md-4" />
      <v-card width="100%" variant="tonal" title="CI" subtitle="Github Actions, Linter, Tests"
        class="flex-fill pa-md-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'D-jà Vue',
  meta: [
    { name: 'description', content: 'Gerador de projeto full-stack com Django e Vue' }
  ],
})


</script>

<style scoped>
@import url("~/assets/css/main.css");
</style>
