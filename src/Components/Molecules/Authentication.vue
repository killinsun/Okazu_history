<template>
  <div id='authentication'>
    <button type='button' @click='signIn' v-if='!userStatus'>Login</button>
    <button type='button' @click='signOut' v-if='userStatus'>Logout</button>
    <span v-if='userStatus'> {{ user.displayName }} </span>
    <span><router-link to='/firebase-testing'>go testing</router-link></span>
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
      this.$router.push('/', () => {}, () => {})
    }
  },
  methods: {
    signIn: async function () {
      firebase.login()
      firebase.storeNewUser()
    },
    signOut: function () {
      firebase.logout()
    },
    load: async function () {
      this.$store.dispatch('fetch_recipies')
      console.log('action dispatched!')
    }
  }
}
</script>
