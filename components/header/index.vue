<template>
    <header style="transition: all 0.5s; z-index: 1;"
        class="bg-background pa-2 d-flex w-100 align-center justify-center position-fixed font-weight-bold top-0">
        <div style="max-width: 1380px; height: 2.5rem;" class="d-flex w-100 align-center mx-8 justify-space-between">
            <span>D-Jà Vue</span>
            <nav class="d-none d-md-flex align-center ga-3">
                <HeaderNavButton v-if="route.path !== '/'" divider href="/">Início</HeaderNavButton>
                <HeaderNavButton v-if="route.path !== '/login'" divider href="login">Login</HeaderNavButton>
                <DevOnly>
                    <HeaderNavButton divider href="https://www.djavue.org/01-o-que-eh.html">Documentação
                    </HeaderNavButton>
                </DevOnly>
                <DarkModeSwitch />
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const route = useRoute()
</script>