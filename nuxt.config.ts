import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"; // https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/google-fonts",
    //...
  ],
  googleFonts: {
    families: {
      Inter: [700, 800],
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
