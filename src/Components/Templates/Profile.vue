<template>
  <div>
    <div>
      <img :src='user.photoURL' wovn-ignore>
    </div>
    <div>
      <span> ID </span>
      <span wovn-ignore> {{ user.uid }} </span>
    </div>
    <div>
      <span> Name </span>
      <span wovn-ignore> {{ user.displayName }} </span>
    </div>
    <div>
      <span> Group ID</span>
      <span wovn-ignore> {{ user.gId }} </span>
    </div>
    <div>
      <button type='button' @click='logout'>Logout</button>
    </div>
  </div>
</template>

<script>
import firebase from '@/firebase'

export default {
  name: 'Profile',
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    logout: function () {
      firebase.logout()
      this.$router.push('/signin', () => {}, () => {})
    }
  }

}
</script>
