<template>
  <button
    type='button'
    class='defaultButtonClass'
    @click='onClick'
    :disabled='disabled'
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    value: {
      require: true,
      type: String
    },
    disabled: {
      require: false,
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('onMyButtonClick')
    }
  }

}
</script>

<style scoped>
button[type='button'] {
  display: inline-block;
  padding: 0.3em 1em;
  margin: 0.5em;
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

button[type='button'].green{
  background: #4b7447;
  color: #ffffff;
  border: solid 1px #4b7447;
}

button[type='button'].green:hover{
  background: #8fb88b;
  border: solid 1px #8fb88b;
}

button[type='button'].warning{
  background: none;
  color: yellow;
  border: solid 1px yellow;
}

button[type='button'].warning:hover{
  background: yellow;
  color: black;
  border: solid 1px yellow;
}

button[type='button'].danger{
  background: none;
  color: #ee3333;
  border: solid 1px #ee3333;
}

button[type='button'].danger:hover{
  background: #ee3333;
  color: white;
  border: solid 1px #ee3333;
}

button[type='button']:disabled {
  background: #ffffff;
  border: solid 2px #aaaaaa;
  color: #dddddd;
  transition: .0s;
}

</style>
