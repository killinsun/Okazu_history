<template>
  <div id='header-container'>
    <div class='logo-area'>
      <router-link to='/'>
        <img src='/okazulog_black.png'>
      </router-link>
    </div>
    <div class='search-bar-area'>
      <form>
        <div class='search-bar'>
          <i class='fas fa-search search_icon'/>
          <input type='text' placeholder='Search'>
          <i class='fas fa-times search_icon'/>
        </div>
      </form>
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

div.logo-area {
}

div.logo-area img {
  height: auto;
}

div.search-bar-area {
  flex-grow: 3;
  flex-shrink: 3;
  padding-left: 2em;
  padding-top: 0.1em;

}

div.search-bar-area form {
  height: 100%;
}

div.search-bar {
  background-color: #fb9a54;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 2rem;
  height: 80%;
  padding-left: 0.5em;
  padding-right: 0.5em;
}
div.search-bar i {
}
div.search-bar input {
  margin-left: 0.5em;
  width: 100%;
  background-color: #fb9a54;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-size: 1.5rem;
  height: 100%;
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
  .search-bar-area{
    display: none
  }
}
</style>
