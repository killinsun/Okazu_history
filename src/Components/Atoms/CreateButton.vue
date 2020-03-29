<template>
  <div class='create-button-wrapper'>
      <router-link to='/create'>
        <div class='create-button'>
            <i class='fas fa-pencil-alt'/>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'CreateButton'
}
</script>

<style scoped>
.create-button-wrapper {
  position: fixed;
  bottom: 1em;
  right: 0.3em;
}
.create-button {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  color: white;
  background-color: #eb8a44;
  position: relative
}

.create-button > i {
  font-size: 1.2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%,-50%);
}
</style>
