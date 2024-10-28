<template>
    <div class="d-flex flex-column" style="max-width: 600px;">
        <h1 class="text-h4 text-md-h2 mb-2 text-primary font-weight-black">{{ title }}</h1>
        <h1 :style="descriptionStyle" class="text-h4 text-md-h2 font-weight-black text-accent">
            {{ description }}</h1>
        <p class="mt-4 text-h6 text-md-h5 text-grey-darken-1">{{ details }} </p>
    </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { title, description, details } = defineProps<{
    title: string,
    description: string,
    details: string,
}>()
const { mdAndUp } = useDisplay()

const descriptionStyle = computed(() => `${mdAndUp.value ? 'line-height: 4rem' : ''}; opacity: 0.85;`)
</script>
