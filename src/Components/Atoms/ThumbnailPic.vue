<template>
  <div class='thumbnail'>
      <router-link to='/edit'>
        <img :src='imageSrc'/>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'ThumbnailPic',
  props: {
    imageSrc: {
      required: true,
      default: '/noimage.jpg'
    }
  }
}
</script>

<style scoped>
.thumbnail {
  margin-top: auto;
  margin-bottom: auto;
}
img {
  width: 3em;
  height: auto;
}

</style>
