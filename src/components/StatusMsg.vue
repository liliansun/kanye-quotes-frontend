<template>
  <div class="fixed md:sticky top-0 right-0 left-0 z-40 parallax">
    <div class="text-white p-3 mb-6 flex items-center msg" :class="className" v-if="display">
      <div class="flex-grow">
        <i class="fas" :class="icon"></i> {{ message }}
      </div>
      <div class="flex-shrink">
        <i class="fas fa-times text-white opacity-75 hover:opacity-100 cursor-pointer" @click="clear" title="Dismiss"></i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StatusMsg',
  props: ['errorMessage', 'successMessage'],
  computed: {
    display: function () {
      return !(this.errorMessage === null && this.successMessage === null)
    },
    className: function () {
      return this.errorMessage ? 'bg-red-600' : 'bg-green-600'
    },
    message: function () {
      return this.errorMessage ? this.errorMessage : this.successMessage
    },
    icon: function () {
      return this.errorMessage ? 'fa-times-circle' : 'fa-check-circle'
    }
  },
  methods: {
    clear () {
      this.$emit('clearStatus')
    }
  }
}
</script>
