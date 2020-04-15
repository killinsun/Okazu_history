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
  margin-top: 3em;
  height: 100%;
}
</style>
