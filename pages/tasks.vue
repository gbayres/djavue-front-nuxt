<template>
    <template v-for="item in data">
        <div>{{ item }}</div>

    </template>

</template>

<script setup lang="ts">
import type { MiddlewareKey } from '#build/types/middleware';
definePageMeta({
    middleware: 'authenticated' as MiddlewareKey
})
const { data, status } = useAPI('/api/core/tasks/list', { immediate: true })
</script>