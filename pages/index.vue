<template>
  <header class="d-flex w-100 align-center justify-center font-weight-bold py-3 position-fixed top-0">
    <div style="max-width: 1380px" class="d-flex w-100 align-center mx-8 justify-space-between">
      <span>D-Jà Vue</span>
      <div style="height: 2.5rem;" class="d-flex align-center ga-3">
        <v-btn variant="plain" class="px-2 text-primary font-weight-bold text-capitalize" style="text-decoration: none"
          href="login">Login</v-btn>
        <!-- <span class="bg-grey" style="height: 24px; width: 1px"></span> -->
        <v-divider class="py-auto" vertical inset thickness="2px"></v-divider>
        <v-switch class="text-h1" inset style="transform: scale(0.7)" v-model="isDark" true-icon="mdi-weather-night"
          false-icon="mdi-weather-sunny" hide-details />
      </div>
    </div>
  </header>
  <div style="padding: 4rem; margin-top: 5rem" class="d-flex justify-center w-100 h-100">
    <div class="d-flex w-100" style="max-width: 1200px">
      <div class="d-flex flex-column" style="width: 600px">
        <h1 class="text-h2 text-primary-darken-1 font-weight-bold">D-Jà Vue</h1>
        <h1 style="line-height: 4rem; opacity: 0.85" class="text-h2 font-weight-bold text-accent">
          Gerador de projeto full-stack,
          pronto para produção e
          focado na
          produtividade
          ⚡</h1>
      </div>
    </div>
    <!-- <img height="240" src="~/assets/logo.svg" /> -->
    <!-- <blockquote class="text-h6 text-lg-h5 text-center">
      "First, solve the problem. Then, write the code."
    </blockquote> -->
    <!-- <p class="text-body-1 font-italic">- John Johnson -</p> -->
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();
const isDark = ref(theme.global.current.value.dark);

watch(isDark, () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
});
</script>
