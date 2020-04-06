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
  created: function () {
    firebase.onAuth()
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    userStatus () {
      return this.$store.getters.userStatus
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
      console.log('action dispatched!')
    }
  }
}
</script>
