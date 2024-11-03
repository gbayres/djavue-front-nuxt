export default defineNuxtRouteMiddleware((to, from) => {
  const accounts = useAccountStore();
  const { loggedUser } = storeToRefs(accounts);
  if (loggedUser.value) {
    return navigateTo("/home");
  }
});
