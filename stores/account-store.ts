export const useAccountStore = defineStore("account-store", () => {
    const loggedUser = ref<unknown | null>(null)
    const loading = ref(false)
    const { $api } = useNuxtApp()

    async function login(username: string, password: string) {
        loading.value = true
        try {
            const response = await $api('api/accounts/login', { method: 'post', body: { username, password } })
            loggedUser.value = response
            return response
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false
        }
        return null
    }

    return { login, loading, loggedUser }
})