import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// PWA Config
const title = "Rmnch";
const shortTitle = "Rmnch";
const description = "Rmnch resume";
const author = "fmr";
const themeColor = "#4f46e5";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss", "vuetify/lib/styles/main.sass"],

  plugins: [{ src: "~/plugins/inputmask", mode: "client" }],

  devtools: { enabled: true },
  // enable takeover mode
  imports: {
    dirs: ["composables/**", "stores/**"],
  },

  build: { transpile: ["vuetify"] },

  modules: [
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    async (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: "assets/scss/vuetify.scss",
            },
          })
        );
      });
    },
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '~/assets/scss/_mixins.scss' as *;
            @use '~/assets/scss/_functions.scss' as *;
            @use 'vuetify/settings' as *;
            @use 'sass:map' as map;
          `,
        },
      },
    },
    ssr: {
      noExternal: ["vuetify"],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  app: {
    head: {
      title: "fmr resume",
      titleTemplate: "%s | frontend developer",
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        // {
        //   hid: "og:url",
        //   property: "og:url",
        //   content: url,
        // },
        // {
        //   hid: "og:image:secure_url",
        //   property: "og:image:secure_url",
        //   content: image,
        // },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: image,
        // },
      ],
    },
  },

  pwa: {
    includeAssets: ["favicon.ico", "robots.txt"],
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      description: description,
      theme_color: themeColor,
      lang: "en",
      background_color: "#ffffff",
      icons: [
        {
          src: "/icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icons/pwa-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/icons/pwa-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },

  compatibilityDate: "2025-03-05",
});
