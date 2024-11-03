export const useAccountStore = defineStore("account-store", () => {
  const loggedUser = ref<unknown | null>(null);
  const loading = ref(false);
  const { $api } = useNuxtApp();

  async function login(username: string, password: string) {
    loading.value = true;
    try {
      const response = await $api("api/accounts/login", {
        method: "post",
        body: { username, password },
      });
      loggedUser.value = response;
      return response;
    } catch (e) {
      console.log(e);
    } finally {
      loading.value = false;
    }
    return null;
  }

  type Response = {
    authenticated: boolean;
  };

  async function logout() {
    loading.value = true;
    try {
      //   const csrftoken = useCookie("csrftoken").value ?? "";
      const response: Response = await $api("api/accounts/logout", {
        method: "post",
        // headers: { "X-CSRFTOKEN": csrftoken },
      });
      if (response.authenticated === false) {
        loggedUser.value = null;
      }
      return response;
    } catch (e) {
      console.log(e);
    } finally {
      loading.value = false;
    }
    return null;
  }

  return { login, logout, loading, loggedUser };
});
