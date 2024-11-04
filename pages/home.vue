<template>
    <div class="d-flex flex-column pa-4 align-center ga-4 w-100">
        <h1 class="text-h5 font-weight-bold text-center">Lista de tarefas</h1>
        <v-skeleton-loader v-if="status === 'pending'" type="image"></v-skeleton-loader>
        <template v-else v-for="(item, i) in tasks">
            <div class="d-flex align-center bg-grey w-100" style="max-width: 600px;">
                <v-checkbox hide-details></v-checkbox>
                <span>{{ item.description }}</span>
            </div>
            <!-- <p>{{ `${i} - ${item.description}` }}</p> -->
        </template>
    </div>
</template>

<script setup lang="ts">
import type { MiddlewareKey } from '#build/types/middleware';
definePageMeta({
    middleware: 'authenticated' as MiddlewareKey
})

type Task = {
    id: number
    description: string
    done: boolean
}

type TasksOutput = {
    tasks: Task[]
}

const { data, status } = useAPI<TasksOutput>('/api/core/tasks/list', { immediate: true })
const tasks = computed(() => data.value?.tasks ?? [])
</script>