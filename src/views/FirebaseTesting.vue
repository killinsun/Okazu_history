<template>
  <div id='firebase-testing'>
    <Modal title='test!!!' message='hogeee' :visible.sync='modalVisible' />
    <div v-if='userStatus'>
      {{ user.email }}
    </div>
    <router-link to='/'>Go home</router-link>
    <MyInput label='' :value.sync='inputValue' type='text' />
    <MyButton value='show modal' v-on:onMyButtonClick='showModal()' />
  </div>
</template>

<script>
import firebase from '@/firebase'
import MyInput from '@/Components/Atoms/MyInput.vue'
import MyButton from '@/Components/Atoms/MyButton.vue'
import Modal from '@/Components/Molecules/Modal.vue'

export default {
  name: 'FirebaseTesting',
  data: function () {
    return {
      inputValue: '',
      modalVisible: false
    }
  },
  components: {
    MyInput,
    MyButton,
    Modal
  },
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
    },
    showModal () {
      this.modalVisible = true
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
