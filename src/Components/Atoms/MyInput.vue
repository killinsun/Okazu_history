<template>
  <div class='inputWrapper'>
    <label>
      {{ label }}
      <input
        :type='type'
        v-model='updateValue'
        :placeholder='placeholder'
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    label: {
      require: true,
      type: String
    },
    type: {
      require: true,
      type: String
    },
    value: {
      require: true
    },
    placeholder: {
      require: false
    }
  },
  computed: {
    updateValue: {
      get () {
        return this.value
      },
      set (val) {
        console.log(val)
        this.$emit('update:value', val)
      }
    }
  }

}
</script>

<style>
input {
  color: #4b7447;
  font-size: 1em;
  box-sizing: border-box;
  width: 100%;
  padding: 0.3em;
  padding-left: 20px;
  letter-spacing: 1px;
  border: 0;
}

.inputWrapper {
  position: relative;
  width: 95%;
  margin: 40px auto;
}
@media (min-width: 800px) {
  .inputWrapper {
    width: 50%;
  }
}
.inputWrapper:after {
  display: block;
  height: 4px;
  margin-top: -1px;
  content: '';
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: #eb8a44;
}

</style>
