<template>
    <v-app-bar is="header" scroll-threshold="32" scroll-behavior="hide" class="px-md-12" elevation="0"
        color="#cccccc50">
        <v-toolbar-title class="font-weight-black text-primary">
            D-jà Vue
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <HeaderNav :items="items" direction="horizontal" />
        <div class="mx-md-3">
            <DarkModeSwitch />
        </div>
        <v-app-bar-nav-icon class="d-flex d-md-none" variant="text" @click.stop="drawer = !drawer" />
    </v-app-bar>
    <ClientOnly>
        <v-navigation-drawer class="pa-4" v-model="drawer" location="right" temporary>
            <HeaderNav :items="items" direction="vertical" />
        </v-navigation-drawer>
    </ClientOnly>
</template>

<script setup lang="ts">
const drawer = ref(false)
const items = ref([
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Login',
        href: '/login'
    },
])
</script>