<template>
  <div>
    <div class='profile-row'>
      <img class='photo' :src='user.photoURL' wovn-ignore>
    </div>
    <div>
      <span wovn-ignore> {{ user.displayName }} </span>
    </div>
    <div class='profile-row'>
      <span class='profile-label'> ID </span>
      <span class='profile-value' wovn-ignore> {{ user.uid }} </span>
    </div>
    <div class='profile-row'>
      <span class='profile-label'> Group ID</span>
      <span class='profile-value' wovn-ignore> {{ user.gId }} </span>
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

<style scoped>
  img.photo {
    max-width: 300px
  }

  .profile-row{
    margin-bottom: 1vh;
  }

  .profile-label {
    display: inline-block;
    width: 10vw;
    min-width: 150px;
    text-align: left;
  }

  .profile-value {
    display: inline-block;
    width: 30vw;
    min-width: 400px;
    text-align: left;
    padding: 0.3em;
    border-radius: 10px;
    background-color: #dddddd;
    white-space: -moz-pre-wrap; /* Mozilla */
    white-space: -pre-wrap;     /* Opera 4-6 */
    white-space: -o-pre-wrap;   /* Opera 7 */
    white-space: pre-wrap;      /* CSS3 */
    word-wrap: break-word;      /* IE 5.5+ */
  }

  @media (max-width: 800px) {
    .profile-row {
      font-size: 0.5em;
    }
    .profile-label {
      min-width: 60px;
    }
    .profile-value {
      min-width: 250px;
    }
  }

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
