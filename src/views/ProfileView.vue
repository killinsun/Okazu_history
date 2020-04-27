<template>
  <div class="profile">
    <Profile />
  </div>
</template>

<script>
import Profile from '@/Components/Templates/Profile.vue'

export default {
  name: 'ProfileView',
  components: {
    Profile
  }
}
</script>

<style scoped>
.profile {
  padding-top: 2em;
  height: auto;
}
</style>
