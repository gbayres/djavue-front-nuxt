<template>
    <v-container style="max-width: 500px">
        <h1 class="text-h5 font-weight-bold text-center text-primary mb-4">Lista de tarefas</h1>
        <v-text-field v-model="newTask" label="Escreva uma tarefa aqui..." variant="solo" color="primary" @keydown.enter="create">
            <template v-slot:append-inner>
                <v-fade-transition>
                    <v-btn color="primary" v-show="newTask" icon="mdi-plus-circle" variant="text" @click="create"></v-btn>
                </v-fade-transition>
            </template>
        </v-text-field>

        <v-divider></v-divider>

        <v-row align="center" class="text-primary my-1">
            <strong class="mx-4 text-success-darken-2">
                Feitas: {{ completedTasks }}
            </strong>

            <v-divider vertical></v-divider>

            <strong class="mx-4 text-info-darken-2">
                Restam: {{ remainingTasks }}
            </strong>

            <v-divider vertical></v-divider>

            <strong class="mx-4 text-success-darken-2">
                Total: {{ tasks.length }}
            </strong>

            <v-spacer></v-spacer>

            <v-progress-circular color="primary" v-model="progress" class="d-none d-md-flex me-2"></v-progress-circular>
        </v-row>

        <v-divider class="mb-4"></v-divider>

        <v-card v-if="tasks.length > 0">
            <v-slide-y-transition class="py-0" tag="v-list" group>
                <template v-for="(task, i) in tasks" :key="`${i}-${task.description}`">
                    <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

                    <v-list-item @click="task.done = !task.done">
                        <template v-slot:prepend>
                            <v-checkbox-btn v-model="task.done" color="grey"></v-checkbox-btn>
                        </template>

                        <v-list-item-title>
                            <span :class="task.done ? 'text-grey text-decoration-line-through' : 'text-primary'">{{ task.description }}</span>
                        </v-list-item-title>

                        <template v-slot:append>
                            <v-expand-x-transition>
                                <v-icon v-if="task.done" color="success">
                                    mdi-check
                                </v-icon>
                            </v-expand-x-transition>
                        </template>
                    </v-list-item>
                </template>
            </v-slide-y-transition>
        </v-card>
    </v-container>
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

const tasks = ref<Task[]>([])
const newTask = ref<string | null>(null)
const { data, status, } = useAPI<TasksOutput>('/api/core/tasks/list', { immediate: true })

watch(status, () => {
    tasks.value = data.value?.tasks ?? []
})

const completedTasks = computed(() => {
    return tasks.value.filter(task => task.done).length;
});

const progress = computed(() => {
    return (completedTasks.value / tasks.value.length) * 100;
});

const remainingTasks = computed(() => {
    return tasks.value.length - completedTasks.value;
});

async function create() {
    if (newTask.value) {
        const { $api } = useNuxtApp()
        tasks.value.push({
            done: false,
            description: newTask.value,
            id: tasks.value.length + 1,
        });
        
        await $api("/api/core/tasks/add", {
            method: 'post', body: {
                description: newTask.value
            }
        })
        
        newTask.value = null;
    }
}


</script>