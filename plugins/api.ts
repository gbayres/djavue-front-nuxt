export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.baseURL,
    onRequest: async ({ options }) => {
      const csrftoken = useCookie("csrftoken").value ?? "";
      options.headers = {
        ...options.headers,
        "X-CSRFTOKEN": csrftoken,
      } as Headers & { "X-CSRFTOKEN": string };
    },
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    provide: {
      api,
    },
  };
});
