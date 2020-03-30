<template>
  <div class='counter' @click='incrementCount'>
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
    incrementCount: function () {
      this.$emit('TappedCounter')
    }
  }
}
</script>
