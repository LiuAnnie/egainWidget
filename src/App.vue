<script>
import InteractiveGuidanceWidget from './components/InteractiveGuidanceWidget.vue'
import AdminPanel from './components/AdminPanel.vue'

export default {
  name: 'App',
  components: {
    InteractiveGuidanceWidget,
    AdminPanel
  },
  data() {
    return {
      currentRoute: 'widget', // 'widget' or 'admin'
      widgetConfig: {
        logo: 'public/images/logo.svg',
        colors: {
          primary: '#4CAF50',
          secondary: '#2196F3',
          background: '#ffffff',
          text: '#333333'
        },
        fonts: {
          primary: 'Arial, sans-serif',
          sizes: {
            heading: '24px',
            subheading: '18px',
            body: '16px'
          }
        },
        presentation: 'single' // 'single' for one question at a time, 'multiple' for all questions at once
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.currentRoute = route
    },
    updateFontSizes(newSizes) {
      this.widgetConfig.fonts.sizes = {
        heading: `${newSizes.heading}px`,
        subheading: `${newSizes.subheading}px`,
        body: `${newSizes.body}px`
      }
    }
  },
  mounted() {
    // Listen for font size changes from the admin panel
    window.addEventListener('widgetFontSizesChanged', (event) => {
      this.updateFontSizes(event.detail)
    })
  },
  beforeUnmount() {
    // Clean up event listener
    window.removeEventListener('widgetFontSizesChanged', this.updateFontSizes)
  }
}
</script>

<template>
  <div class="app">
    <nav class="navigation">
      <button 
        @click="navigateTo('widget')" 
        :class="{ active: currentRoute === 'widget' }"
      >
        Widget
      </button>
      <button 
        @click="navigateTo('admin')" 
        :class="{ active: currentRoute === 'admin' }"
      >
        Admin Panel
      </button>
    </nav>

    <main class="content">
      <InteractiveGuidanceWidget 
        v-if="currentRoute === 'widget'" 
        :config="widgetConfig" 
      />
      <AdminPanel v-else />
    </main>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navigation button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
}

.navigation button:hover {
  background-color: #e5e5e5;
}

.navigation button.active {
  background-color: #470FF4;
  color: white;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
</style>
