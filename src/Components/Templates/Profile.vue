<template>
  <div>
    <div>
      <span> ID </span>
      <span> {{ user.uid }} </span>
    </div>
    <div>
      <span> 名前 </span>
      <span> {{ user.displayName }} </span>
    </div>
    <div>
      <span> プロフィール画像 </span>
      <img :src='user.photoURL'>
    </div>
    <div>
      <span> グループID </span>
      <span> {{ user.gId }} </span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Profile',
  computed: {
    user () {
      return this.$store.getters.user
    }
  }

}
</script>
