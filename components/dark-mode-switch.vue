<template>
    <v-switch class="text-h1" inset style="transform: scale(0.7)" v-model="isDark" true-icon="mdi-weather-night"
        false-icon="mdi-weather-sunny" hide-details />
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();

const isDark = ref(theme.global.current.value.dark);

watch(isDark, () => {
    theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
});
</script>