<template>
  <header class="d-flex w-100 align-center justify-center font-weight-bold py-3 position-fixed top-0">
    <div :style="`${$vuetify.display.mdAndUp ? 'max-width: 1380px' : ''}`" class="d-flex w-100 align-center mx-8 justify-space-between">
      <span>D-Jà Vue</span>
      <div style="height: 2.5rem;" class="d-flex align-center ga-3">
        <v-btn variant="plain" class="px-2 text-primary font-weight-bold text-capitalize" style="text-decoration: none"
          href="https://www.djavue.org/01-o-que-eh.html">Documentação</v-btn>
          <v-divider class="py-auto" vertical inset thickness="2px"></v-divider>
        <v-btn variant="plain" class="px-2 text-primary font-weight-bold text-capitalize" style="text-decoration: none"
          href="login">Login</v-btn>
        <v-divider class="py-auto" vertical inset thickness="2px"></v-divider>
        <v-switch class="text-h1" inset style="transform: scale(0.7)" v-model="isDark" true-icon="mdi-weather-night"
          false-icon="mdi-weather-sunny" hide-details />
      </div>
    </div>
  </header>
  <div :style="`padding: ${$vuetify.display.mdAndUp ? '4rem' : '2rem'};`" class="d-flex justify-center align-center w-100 h-100">
    <div class="d-flex flex-column w-100" style="max-width: 1200px">
      <div class="d-flex flex-column" :style="`${$vuetify.display.mdAndUp ? 'width: 600px' : ''}`">
        <h1 class="text-h5 text-md-h2 mb-2 text-primary font-weight-bold">D-Jà
          Vue</h1>
        <h1 :style="`${$vuetify.display.mdAndUp ? 'line-height: 4rem;' : '' }opacity: 0.85`" class="text-h5 text-md-h2 font-weight-extrabold text-accent">
          Gerador de projeto full-stack,
          pronto para produção e
          focado na
          produtividade
          ⚡</h1>
        <p style="font-weight: 400;" class="mt-4 text-h5 text-grey-darken-1">Vue 3 | Vite | Vuetify e Backend Django 🦄
          API</p>
        <v-btn width="90px" style="height: 2.5rem; font-weight: 700;" variant="tonal"
          class="text-bold mt-8 text-capitalize bg-primary rounded-xl">Iniciar</v-btn>
      </div>
      <div class="d-flex flex-column flex-md-row ga-4 mt-10">
        <v-card width="100%" variant="tonal" title="Backend" subtitle="Django API | Python decouple | Pytest | Linter"
          class="flex-fill pa-md-4 rounded-card" />
        <v-card width="100%" variant="tonal" title="Frontend" subtitle="Vue.js | Vuetify | Pinia | Vite"
          class="flex-fill pa-md-4 rounded-card" />
        <v-card width="100%" variant="tonal" title="CI" subtitle="Github Actions, Linter, Tests"
          class="flex-fill pa-md-4 rounded-card" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();
useHead({
  title: 'D-jà Vue',
  meta: [
    { name: 'description', content: 'Gerador de projeto full-stack com Django e Vue' }
  ],
})
const isDark = ref(theme.global.current.value.dark);

watch(isDark, () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
});
</script>

<style scoped lang="css">
h1 {
  font-family: 'Inter';
  font-weight: 700;
}

.rounded-card {
  border-radius: 18px;
}
</style>