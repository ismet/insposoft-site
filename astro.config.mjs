import { defineConfig, envField } from 'astro/config';

export default defineConfig({
  site: 'https://insposoft.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  env: {
    schema: {
      // Public endpoint inlined into the static build and read via `astro:env/client`
      // in ContactForm.astro. Default '' keeps the bilingual "contact route not
      // configured" notice when the variable is unset.
      PUBLIC_FORMSPREE_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        default: '',
      }),
    },
  },
});
