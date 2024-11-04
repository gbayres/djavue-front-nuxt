import type { Task } from "~/types/tasks";

export const useTaskStore = defineStore('task-store', () => {
    const tasks = ref<Task[]>([])
    const newTaskDescription = ref<string | null>(null)

    async function create() {
        if (newTaskDescription.value) {
            const { $api } = useNuxtApp();
            tasks.value.push({
                done: false,
                description: newTaskDescription.value,
                id: tasks.value[tasks.value.length - 1].id + 1,
            });
            try {
                await $api("/api/core/tasks/add", {
                    method: "post",
                    body: {
                        description: newTaskDescription.value,
                    },
                });
            } catch (e) {
                console.log(e);
                tasks.value.pop();
            }
    
            newTaskDescription.value = null;
        }
    }

    return { tasks, newTaskDescription, create }
})