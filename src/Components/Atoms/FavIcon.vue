<template>
  <div @click='toggleFav'>
    <i :class='classes'/>
  </div>
</template>

<script>
export default {
  name: 'FavIcon',
  props: {
    recipieId: {
      type: Number,
      required: true
    },
    favorited: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    classes: function () {
      return this.favorited ? 'fas fa-heart' : 'far fa-heart'
    }
  },
  methods: {
    toggleFav () {
      console.log('foga')
      this.$store.commit('TOGGLE_FAV_RECIPIE', { id: this.recipieId })
    }
  }
}
</script>
<style scoped>
  div {
    color: #eb8a44;
  }
</style>
