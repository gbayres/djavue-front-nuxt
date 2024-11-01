export default defineNuxtPlugin(() => {  
    const config = useRuntimeConfig()
    const csrftoken = useCookie('csrftoken')
    const headers = useRequestHeaders()

    const api = $fetch.create({
      baseURL: config.public.baseURL,
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN': csrftoken.value ?? '',
        ...headers
      },
    })
    return {
      provide: {
        api
      }
    }
  })
  