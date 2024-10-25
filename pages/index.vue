<template>
  <header
    class="d-flex w-100 align-center justify-center font-weight-bold py-2 position-fixed top-0"
  >
    <div
      style="max-width: 1400px"
      class="d-flex w-100 align-center mx-8 justify-space-between"
    >
      <span>D-Jà Vue</span>
      <div class="d-flex align-center ga-3">
        <a class="px-2" style="text-decoration: none" href="www.google.com"
          >Login</a
        >
        <span class="bg-grey" style="height: 24px; width: 1px"></span>
        <v-switch
          class="text-h1"
          inset
          style="transform: scale(0.7)"
          v-model="isDark"
          true-icon="mdi-weather-night"
          false-icon="mdi-weather-sunny"
          hide-details
        />
      </div>
    </div>
  </header>
  <div
    class="d-flex w-100 flex-column align-center justify-center bg-background h-100"
  >
    <img height="240" src="~/assets/logo.svg" />
    <blockquote class="text-h6 text-lg-h5 text-center">
      "First, solve the problem. Then, write the code."
    </blockquote>
    <p class="text-body-1 font-italic">- John Johnson -</p>
    <h1>{{ isDark }}</h1>
    <h1>Text</h1>
    <h1>Text</h1>
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
