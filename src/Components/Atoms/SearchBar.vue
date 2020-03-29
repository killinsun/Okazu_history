<template>
  <form>
    <input
      type='text'
      ref='inputTextSearch'
      placeholder='Search'
      class='recipies-search-input'
      v-model='isInputting'
    >
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data: function () {
    return {
      inputtingSearchText: ''
    }
  },
  computed: {
    isInputting: {
      get () {
        return this.inputtingSearchText
      },
      set (value) {
        (value.trim().length >= 1)
          ? this.$emit('isInputtingSearchBar', true)
          : this.$emit('isInputtingSearchBar', false)
      }
    }
  }
}
</script>
