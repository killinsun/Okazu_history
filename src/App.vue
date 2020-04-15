<template>
  <div id="app">
    <header>
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html {
  font-size: 16px;
  height: 100%;
}

body {
  font-size: 1.6rem;
  line-height: 1.5;
  height: 100%;
  background-color: #efefef;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 1200px;
  margin:auto;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

header {
  width: 100%;
  background-color: #eb8a44;
  box-shadow: 0px 4px 4px gray;
  height: 2em;
  margin-bottom: 2vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
