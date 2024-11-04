<template>
    <v-btn @click="navigate" variant="plain" class="text-primary font-weight-bold text-capitalize"
        style="text-decoration: none;">
        <slot></slot>
    </v-btn>
    <HeaderNavDivider v-if="divider" />
</template>

<script setup lang="ts">
const { href, divider } = defineProps<{
    href: string,
    divider?: boolean,
}>()
function navigate() {
    if (href.startsWith('http') && typeof window !== undefined) {
        window.location.replace(href)
    } else {
        navigateTo(href)
    }
}
</script>