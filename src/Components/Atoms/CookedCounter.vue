<template>
  <div class='counter' @click='addCount'>
    <span> {{ counter }} </span>
  </div>
</template>

<script>
export default {
  name: 'CookedCounter',
  props: {
    recipieId: {
      required: true
    },
    counter: {
      required: true,
      default: 0
    }
  },
  methods: {
    addCount: function () {
      this.$emit('TappedCounter')
    }
  }
}
</script>
