<template>
  <main @click.self='disableEditing'>
    <ThumbnailPic :imageSrc.sync='imageSrc' :isResizing.sync='isResizing' :uploadedFile.sync='uploadedFile' />
    <MyInput label='' :value.sync='name' type='text' placeholder='Recipie Name' />
    <div class='recipieStatus' v-if='id'>
      <p class='lastDay'>
        The last day you cooked: {{ recipie.lastDate }}
      </p>
      <div class='coockedCountWrapper'>
      <p class='cookedCount' v-if='!editing' @click='enableEditing'>
        You cooked: {{ innerCounter }} times
      </p>
      <MyInput label='' :value.sync='innerCounter' type='number' v-if='editing' />
      </div>
    </div>
    <div class='controlButton'>
        <button
          type='button'
          class='deleteButton'
          @click='deleteRecipie'
          v-if='id'
          :disabled='isResizing'
        >
        Delete
        </button>
        <button
          type='button'
          class='createButton'
          @click='createNewRecipie'
          v-if='!id'
          :disabled='isResizing'
        >
          Create
        </button>
        <button
          type='button'
          class='updateButton'
          @click='updateRecipie'
          v-if='id'
          :disabled='isResizing'
        >
          Update
        </button>
    </div>
  </main>
</template>

<script>
import MyInput from '@/Components/Atoms/MyInput.vue'
import ThumbnailPic from '@/Components/Atoms/ThumbnailPic.vue'

export default {
  name: 'CreateEdit',
  components: {
    MyInput,
    ThumbnailPic
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      name: '',
      innerCounter: 0,
      imageSrc: '/noimage.jpg',
      recipie: null,
      uploadedFile: null,
      isResizing: false,
      editing: false
    }
  },
  created () {
    if (this.id != null && this.id !== '') {
      this.recipie = this.$store.getters.getRecipieById(this.id)
      this.name = this.recipie.name
      this.imageSrc = this.recipie.imageSrc
      this.innerCounter = this.recipie.count
    }
  },
  computed: {
    user: function () {
      return this.$store.getters.user
    }

  },
  methods: {
    createNewRecipie: function () {
      this.$store.commit('ON_LOADING_STATUS_CHANGED', true)
      this.$store.dispatch('store_new_recipie', {
        uid: this.user.uid,
        gId: this.user.gId,
        newRecipieItem: {
          name: this.name
        },
        file: this.uploadedFile
      })
      this.name = ''
      this.$router.push('/', () => {}, () => {})
    },
    updateRecipie: function () {
      this.$store.commit('ON_LOADING_STATUS_CHANGED', true)
      this.$store.dispatch('update_recipie', {
        uid: this.user.uid,
        updatedItems: {
          recipieId: this.id,
          name: this.name,
          imageSrc: this.imageSrc,
          count: this.innerCounter
        },
        file: this.uploadedFile
      })
      this.name = ''
      this.$router.push('/', () => {}, () => {})
    },
    deleteRecipie: function () {
      const result = window.confirm("Are you sure? You can't restore this state.")
      if (!result) return

      this.$store.commit('ON_LOADING_STATUS_CHANGED', true)
      this.$store.dispatch('delete_recipie', {
        deleteRecipieItem: {
          recipieId: this.id
        }
      })
      this.name = ''
      this.$router.push('/', () => {}, () => {})
    },
    enableEditing: function () {
      this.editing = true
    },
    disableEditing: function () {
      this.editing = false
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

button[type='button'].deleteButton{
  background: none;
  color: #ee3333;
  border: solid 1px #ee3333;
}

button[type='button'].deleteButton:hover{
  background: #ee3333;
  color: white;
  border: solid 1px #ee3333;
}
button[type='button']:hover {
  background: #eb8a44;
  color: white;
}

button[type='button']:disabled {
  background: #ffffff;
  border: solid 2px #aaaaaa;
  color: #dddddd;
  transition: .0s;
}

</style>
