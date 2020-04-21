<template>
  <div id='authentication'>
    <button type='button' @click='signIn' v-if='!userStatus'>Login</button>
    <button type='button' @click='signOut' v-if='userStatus'>Logout</button>
    <span v-if='userStatus'> {{ user.displayName }} </span>
  </div>
</template>

<script>
import firebase from '@/firebase'

export default {
  name: 'Authentication',
  computed: {
    user () {
      return this.$store.getters.user
    },
    userStatus () {
      return this.$store.getters.userStatus
    }
  },
  watch: {
    userStatus: function () {
      firebase.storeNewUser()
      this.$router.push('/', () => {}, () => {})
    }
  },
  methods: {
    signIn: function () {
      firebase.login()
    },
    signOut: function () {
      firebase.logout()
    },
    load: async function () {
      this.$store.dispatch('fetch_recipies')
    }
  }
}
</script>

<style scoped>
button[type='button'] {
  display: inline-block;
  padding: 0.3em 1em;
  font-size: 1em;
  text-decoration: none;
  color: #eb8a44;
  border: solid 2px #eb8a44;
  background: #ffffff;
  border-radius: 3px;
  transition: .4s;
}
button[type='button']:hover {
  background: #eb8a44;
  color: white;
}

</style>
