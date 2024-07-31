<template>
    <div class="mb-6">
        <div class="text-white p-3 rounded-t" :class="headingBackground" v-if="heading">
          <i class="fas" :class="icon" v-if="icon"></i>
          {{ heading }}
          <!-- Named slot for the toggle button -->
          <slot name="toggle-button"></slot>
        </div>

        <div class="border border-gray-300 bg-white" :class="bodyClass + (heading ? ' border-t-0 rounded-b' : ' rounded') + (padding ? ' p-6' : '')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'panelComponent',
  props: {
    heading: {
      type: String
    },
    bodyClass: {
      type: String
    },
    padding: {
      type: Boolean,
      default: true
    },
    headingBackground: {
      type: String,
      default: 'bg-primary-600'
    },
    icon: {
      type: String,
      default: null
    }
  }
}
</script>
