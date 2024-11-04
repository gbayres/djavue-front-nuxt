<template>
    <v-container style="max-width: 500px">
        <h1 class="text-h5 font-weight-bold text-center text-primary mb-4">
            Lista de tarefas
        </h1>
        <v-text-field v-model="newTask" @input="limitLength" label="Escreva uma tarefa aqui..." variant="solo" color="primary"
            @keydown.enter="create">
            <template v-slot:append-inner>
                <v-fade-transition>
                    <v-btn color="primary" v-show="newTask" icon="mdi-plus-circle" variant="text"
                        @click="create"></v-btn>
                </v-fade-transition>
            </template>
        </v-text-field>

        <v-divider></v-divider>

        <TaskListOverview :tasks="tasks" />

        <v-divider class="mb-4"></v-divider>

        <TaskListCard :tasks="tasks" />
    </v-container>
</template>


<script setup lang="ts">
import type { Task, TasksOutput } from "~/types/tasks";

const tasks = ref<Task[]>([]);
const newTask = ref<string | null>(null);
const { data, status } = useAPI<TasksOutput>("/api/core/tasks/list", {
    immediate: true,
});

watch(status, () => {
    tasks.value = data.value?.tasks ?? [];
});

function limitLength() {
    if (newTask.value && newTask.value.length > 140) {
        newTask.value = newTask.value.slice(0, 140)
    }
}

async function create() {
    if (newTask.value) {
        const { $api } = useNuxtApp();
        tasks.value.push({
            done: false,
            description: newTask.value,
            id: tasks.value[tasks.value.length - 1].id + 1,
        });
        try {
            await $api("/api/core/tasks/add", {
                method: "post",
                body: {
                    description: newTask.value,
                },
            });
        } catch (e) {
            console.log(e);
            tasks.value.pop();
        }

        newTask.value = null;
    }
}
</script>
