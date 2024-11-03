export default defineNuxtRouteMiddleware(async (to, from) => {
  const accounts = useAccountStore();
  const { loggedUser } = storeToRefs(accounts);
  if (loggedUser.value === undefined) {
    const { whoAmI } = useAccountStore();
    await whoAmI();
  }
});
