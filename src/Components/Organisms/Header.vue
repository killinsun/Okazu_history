<template>
  <div id='header-container'>
    <div class='logo-area'>
      <router-link to='/'>
        <img src='/okazulog_black.png'>
      </router-link>
    </div>
    <div class='profile-icon-area'>
      <router-link to='/profile' v-if='userStatus'>
        <img :src='user.photoURL' class='profile-icon'>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    user () {
      return this.$store.getters.user
    },
    userStatus () {
      return this.$store.getters.userStatus
    }
  }
}
</script>

<style scoped>

div#header-container {
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  padding-left: 3vw;
  padding-right: 3vw;
  margin: auto;
}

img {
  max-height: 50px;
}

div.logo-area img {
  height: auto;
}

div.profile-icon-area {
  margin-left: auto;
  flex-grow: 0;
  flex-basis: 1vw;

}

img.profile-icon {
  border-radius: 50%;
}

@media screen and (max-width: 500px ){
  div.logo-area img {
  }
}
</style>
