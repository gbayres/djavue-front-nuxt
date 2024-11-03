type UserType = {
  id: number;
  name: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string | null;
  bio: string | null;
  permissions: {
    ADMIN: boolean;
    STAFF: boolean;
  };
};

type AuthenticatedType = {
  authenticated: boolean;
};

export const useAccountStore = defineStore("account-store", () => {
  const loggedUser = ref<UserType | null>(null);
  const loading = ref(false);
  const { $api } = useNuxtApp();

  async function whoAmI() {
    try {
      const response: { user?: UserType; authenticated: boolean } = await $api(
        "/api/accounts/whoami"
      );
      const loggedIn = response.authenticated && response.user;
      loggedUser.value = null;
      if (loggedIn && response.user) {
        loggedUser.value = response.user;
      }
      return loggedUser.value;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  async function login(username: string, password: string) {
    loading.value = true;
    try {
      const response: UserType = await $api("api/accounts/login", {
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

  async function logout() {
    loading.value = true;
    try {
      const response: AuthenticatedType = await $api("api/accounts/logout", {
        method: "post",
      });
      if (!response.authenticated) {
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

  return { login, logout, whoAmI, loading, loggedUser };
});
