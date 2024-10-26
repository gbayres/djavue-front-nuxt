<template>
    <header style="transition: all 0.5s; z-index: 1;" :class="`${scrollPosition > 0 && 'bg-background'}`"
        class=" d-flex w-100 align-center justify-center font-weight-bold py-3 position-fixed top-0">
        <div style="max-width: 1380px;" class="d-flex w-100 align-center mx-8 justify-space-between">
            <span>D-Jà Vue</span>
            <div style="height: 2.5rem;" class="d-none d-md-flex align-center ga-3">
                <template v-if="route.path !== '/'">
                    <v-btn variant="plain" class="px-2 text-primary font-weight-bold text-capitalize"
                        style="text-decoration: none" href="/">Início</v-btn>
                    <v-divider class="py-auto" vertical inset thickness="2px"></v-divider>
                </template>
                <template v-if="route.path !== '/login'">
                    <v-btn variant="plain" class="px-2 text-primary font-weight-bold text-capitalize"
                    style="text-decoration: none" href="login">Login</v-btn>
                    <v-divider class="py-auto" vertical inset thickness="2px"></v-divider>
                </template>
                <v-btn variant="plain" class="px-2 text-primary font-weight-bold text-capitalize"
                    style="text-decoration: none" href="https://www.djavue.org/01-o-que-eh.html"
                    target="_blank">Documentação</v-btn>
                <v-divider class="py-auto" vertical inset thickness="2px"></v-divider>
                <v-switch class="text-h1" inset style="transform: scale(0.7)" v-model="isDark"
                    true-icon="mdi-weather-night" false-icon="mdi-weather-sunny" hide-details />
            </div>
        </div>
    </header>
    <div :style="`margin-top: 2rem; padding: ${$vuetify.display.mdAndUp ? '4rem' : '1.5rem'};`">
        <slot ></slot>
    </div>
    <!-- <div style="margin-top: 90px;" :style="`padding: ${$vuetify.display.mdAndUp ? '4rem' : '1.5rem'}`"
        class="d-flex justify-center w-100 h-100">
        <slot></slot>
    </div> -->
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
const theme = useTheme();
const scrollPosition = useScroll()
const route = useRoute()

const isDark = ref(theme.global.current.value.dark);

watch(isDark, () => {
    theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
});
</script>
