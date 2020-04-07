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
      type: String,
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
      this.$store.dispatch('toggle_fav_status', { id: this.recipieId, favorited: this.favorited })
    }
  }
}
</script>
<style scoped>
  div {
    color: #eb8a44;
  }
</style>
