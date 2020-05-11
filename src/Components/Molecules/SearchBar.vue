<template>
  <div class='search-bar-area'>
    <form>
      <div class='search-bar' :class='inputtingClass'>
        <i class='fas fa-search search_icon'/>
        <MyInput class='fix-fullsize no-border-bottom no-outline' label='' :value.sync='searchWord' type='text' placeholder='Search' />
        <i class='fas fa-times search_icon' v-show='inputting' @click='clearSearchText'/>
      </div>
    </form>
  </div>
</template>

<script>
import MyInput from '@/Components/Atoms/MyInput.vue'

export default {
  name: 'SearchBar',
  components: {
    MyInput
  },
  data: function () {
    return {
      inputtingSearchWord: ''
    }
  },
  computed: {
    searchWord: {
      get () {
        return this.$store.state.searchWord
      },
      set (val) {
        this.$store.commit('ON_INPUT_SEARCH_WORD', val)
      }
    },
    inputting () {
      return this.searchWord && this.searchWord.length > 0
    },
    inputtingClass () {
      return this.inputting ? 'focus-search-bar' : null
    }
  },
  methods: {
    clearSearchText () {
      this.searchWord = ''
    }
  }
}
</script>

<style scoped>
div.search-bar-area {
  flex-grow: 3;
  flex-shrink: 3;
  padding-left: 1.0em;
  padding-right: 1.0em;
  padding-top: 0.1em;
}

div.search-bar-area form {
  height: 100%;
}

div.search-bar {
  color: #4b7447;
  background-color: #ffffff;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.0rem;
  height: 30px;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
div.search-bar:hover {
  box-shadow: 1px 2px 2px gray;
}
div.search-bar.focus-search-bar {
  box-shadow: 1px 2px 2px gray;
}
</style>
