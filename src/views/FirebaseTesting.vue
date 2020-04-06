<template>
  <div id='firebase-testing'>
    <div v-if='userStatus'>
      {{ user.email }}
    </div>
    <router-link to='/'>Go home</router-link>
  </div>
</template>

<script>
import firebase from '@/firebase'

export default {
  name: 'FirebaseTesting',
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
    signIn: async function () {
      firebase.login()
    },
    signOut: async function () {
      firebase.logout()
    },
    load: async function () {
      this.$store.dispatch('fetch_recipies')
      console.log('action dispatched!')
    }
  }
}
</script>

<style scoped>
#firebase-testing {
  margin-top: 3em;
  height: 100%;
}
</style>
