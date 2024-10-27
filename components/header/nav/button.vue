<template>
    <v-btn variant="plain" class="px-2 text-primary font-weight-bold text-capitalize" style="text-decoration: none"
        :href="href">
        <slot></slot>
    </v-btn>
    <HeaderNavDivider v-if="divider" />
</template>

<script setup lang="ts">
const { href, divider = false } = defineProps<{
    href: string,
    divider?: boolean,
}>()
</script>