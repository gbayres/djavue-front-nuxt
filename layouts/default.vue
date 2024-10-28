<template>
    <v-card>
        <v-layout>
            <v-app-bar scroll-threshold="32" scroll-behavior="hide" class="px-md-12" elevation="0" color="#cccccc50">
                <v-toolbar-title class="font-weight-black text-primary">
                    D-jà Vue
                </v-toolbar-title>

                <v-spacer></v-spacer>
                <nav class="d-none d-md-flex align-center ga-3">
                    <template v-for="item in items">
                        <HeaderNavButton :key="item.href" :href="item.href" v-if="route.path != item.href" divider>
                            {{ item.title }}
                        </HeaderNavButton>
                    </template>
                    <DevOnly>
                        <HeaderNavButton href="https://www.djavue.org/01-o-que-eh.html" divider>Documentação
                        </HeaderNavButton>
                    </DevOnly>
                </nav>
                <div class="mx-md-3">
                    <DarkModeSwitch />
                </div>
                <v-app-bar-nav-icon class="d-flex d-md-none" variant="text" @click.stop="drawer = !drawer" />

            </v-app-bar>
            <ClientOnly>
                <v-navigation-drawer v-model="drawer" location="right" temporary>
                    <v-list class="d-flex align-start flex-column">
                        <template v-for="item in items">
                            <HeaderNavButton :key="item.href" :href="item.href" v-if="route.path != item.href" divider>
                                {{ item.title }}
                            </HeaderNavButton>
                        </template>
                        <DevOnly>
                            <HeaderNavButton href="https://www.djavue.org/01-o-que-eh.html" divider>Documentação
                            </HeaderNavButton>
                        </DevOnly>
                    </v-list>
                </v-navigation-drawer>
            </ClientOnly>
            <slot></slot>
        </v-layout>
    </v-card>
</template>

<style></style>

<script setup lang="ts">
const route = useRoute()
const items = ref([
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Login',
        href: '/login'
    },
    // {
    //     title: 'Documentação',
    //     href: "https://www.djavue.org/01-o-que-eh.html"
    // },
],)
const drawer = ref(false)
</script>