import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        booking: resolve(__dirname, 'booking.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        privacy: resolve(__dirname, 'privacy-policy.html'),
        terms: resolve(__dirname, 'terms-conditions.html'),
        recurring: resolve(__dirname, 'recurring-cleaning.html'),
        oneTime: resolve(__dirname, 'one-time-cleaning.html'),
        deep: resolve(__dirname, 'deep-cleaning.html'),
        commercial: resolve(__dirname, 'commercial-cleaning.html'),
        organizational: resolve(__dirname, 'organizational-services.html')
      }
    }
  }
})
