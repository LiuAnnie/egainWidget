<template>
  <div class="admin-panel">
    <h1>Widget Admin Panel</h1>
    
    <div class="admin-section">
      <h2>Font Size Settings</h2>
      
      <div class="font-size-controls">
        <div class="control-group">
          <label for="heading-size">Heading Size:</label>
          <div class="size-control">
            <input 
              type="range" 
              id="heading-size" 
              v-model="fontSizes.heading" 
              min="16" 
              max="48" 
              step="1"
              @input="updateFontSizes"
            />
            <span class="size-value">{{ fontSizes.heading }}px</span>
          </div>
        </div>
        
        <div class="control-group">
          <label for="subheading-size">Subheading Size:</label>
          <div class="size-control">
            <input 
              type="range" 
              id="subheading-size" 
              v-model="fontSizes.subheading" 
              min="14" 
              max="36" 
              step="1"
              @input="updateFontSizes"
            />
            <span class="size-value">{{ fontSizes.subheading }}px</span>
          </div>
        </div>
        
        <div class="control-group">
          <label for="body-size">Body Size:</label>
          <div class="size-control">
            <input 
              type="range" 
              id="body-size" 
              v-model="fontSizes.body" 
              min="12" 
              max="24" 
              step="1"
              @input="updateFontSizes"
            />
            <span class="size-value">{{ fontSizes.body }}px</span>
          </div>
        </div>
      </div>
      
      <div class="preview-section">
        <h3>Preview</h3>
        <div class="preview-container" :style="previewStyles">
          <h2>Heading Text</h2>
          <h3>Subheading Text</h3>
          <p>Body text example. This is how the text will appear in the widget.</p>
        </div>
      </div>
      
      <div class="actions">
        <button @click="saveSettings" class="save-button">Save Settings</button>
        <button @click="resetSettings" class="reset-button">Reset to Default</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPanel',
  data() {
    return {
      fontSizes: {
        heading: 24,
        subheading: 18,
        body: 16
      },
      defaultFontSizes: {
        heading: 24,
        subheading: 18,
        body: 16
      }
    }
  },
  computed: {
    previewStyles() {
      return {
        '--heading-size': `${this.fontSizes.heading}px`,
        '--subheading-size': `${this.fontSizes.subheading}px`,
        '--body-size': `${this.fontSizes.body}px`
      }
    }
  },
  methods: {
    updateFontSizes() {
      // This method is called when the sliders are moved
      // We'll implement the actual update logic later
    },
    saveSettings() {
      // Save the font sizes to localStorage
      localStorage.setItem('widgetFontSizes', JSON.stringify(this.fontSizes))
      
      // Dispatch an event to notify the widget of the changes
      window.dispatchEvent(new CustomEvent('widgetFontSizesChanged', {
        detail: this.fontSizes
      }))
      
      alert('Font size settings saved successfully!')
    },
    resetSettings() {
      this.fontSizes = { ...this.defaultFontSizes }
      this.updateFontSizes()
    },
    loadSettings() {
      // Load font sizes from localStorage if available
      const savedFontSizes = localStorage.getItem('widgetFontSizes')
      if (savedFontSizes) {
        try {
          this.fontSizes = JSON.parse(savedFontSizes)
        } catch (e) {
          console.error('Error parsing saved font sizes:', e)
        }
      }
    }
  },
  mounted() {
    this.loadSettings()
  }
}
</script>

<style scoped>
.admin-panel {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.admin-section {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  color: #444;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

h3 {
  color: #555;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.font-size-controls {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
  color: #555;
}

.size-control {
  display: flex;
  align-items: center;
  gap: 1rem;
}

input[type="range"] {
  flex: 1;
  height: 8px;
  -webkit-appearance: none;
  appearance: none;
  background: #ddd;
  outline: none;
  border-radius: 4px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #470FF4;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #470FF4;
  cursor: pointer;
  border: none;
}

.size-value {
  min-width: 50px;
  text-align: right;
  font-weight: bold;
  color: #470FF4;
}

.preview-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ddd;
}

.preview-container {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-top: 1rem;
}

.preview-container h2 {
  font-size: var(--heading-size);
  margin-bottom: 1rem;
}

.preview-container h3 {
  font-size: var(--subheading-size);
  margin-bottom: 1rem;
}

.preview-container p {
  font-size: var(--body-size);
  line-height: 1.5;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.save-button {
  background-color: #470FF4;
  color: white;
  border: none;
}

.save-button:hover {
  background-color: #3a0dc8;
}

.reset-button {
  background-color: #f5f5f5;
  color: #555;
  border: 1px solid #ddd;
}

.reset-button:hover {
  background-color: #e5e5e5;
}

@media (max-width: 768px) {
  .admin-panel {
    padding: 1rem;
  }
  
  .size-control {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .size-value {
    margin-top: 0.5rem;
  }
}
</style> 