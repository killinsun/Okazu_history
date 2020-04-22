<template>
  <main>
    <div class='thumbnailPic'>
      <label>
        <img class='recipie-thumbnail' :src=imageSrc v-if='!isResizing'>
        <input type='file' @change='fileChanged' />
      </label>
      <div v-if='isResizing' class='loading resize'>
        <p>Now resizing...</p>
      </div>
    </div>
    <div class='recipieNameWrapper'>
      <input
        type='text'
        placeholder='Recipie Name'
        v-model='name'
      />
    </div>
    <div class='controlButton'>
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
export default {
  name: 'CreateEdit',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      name: '',
      imageSrc: '/noimage.jpg',
      recipie: null,
      uploadedFile: null,
      smallImage: null,
      maxWidth: 400,
      isResizing: false
    }
  },
  created () {
    if (this.id != null && this.id !== '') {
      this.recipie = this.$store.getters.getRecipieById(this.id)
      this.name = this.recipie.name
      this.imageSrc = this.recipie.imageSrc
    }
  },
  computed: {
    user: function () {
      return this.$store.getters.user
    }

  },
  methods: {
    fileChanged: function (e) {
      const files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
    },
    createImage (file) {
      const reader = new FileReader()
      this.isResizing = true

      reader.onload = e => {
        this.imageSrc = e.target.result
        const img = new Image()
        img.onload = () => {
          let width = img.width
          let height = img.height

          if (width > this.maxWidth) {
            height = Math.round(height * this.maxWidth / width)
            width = this.maxWidth
          }

          const canvas = document.createElement('canvas')
          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          ctx.canvas.toBlob((blob) => {
            const imageFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now()
            })
            this.smallImage = imageFile
            this.uploadedFile = imageFile
            this.isResizing = false
          }, file.type, 1)
        }
        img.src = e.target.result
      }
      reader.readAsDataURL(file)
    },
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
          imageSrc: this.imageSrc
        },
        file: this.uploadedFile
      })
      this.name = ''
      this.$router.push('/', () => {}, () => {})
    }
  }
}
</script>

<style scoped>

label > input {
  display: none;
}

.recipieNameWrapper {
  position: relative;
  width: 95%;
  margin: 40px auto;
}

@media (min-width: 800px) {
  .recipieNameWrapper {
    width: 50%;
  }
}

.recipieNameWrapper input[type='text'] {
  color: #4b7447;
  font-size: 1em;
  box-sizing: border-box;
  width: 100%;
  padding: 0.3em;
  padding-left: 40px;
  letter-spacing: 1px;
  border: 0;
}
.recipieNameWrapper input[type='text']:focus {
  outline: none;
}

.recipieNameWrapper input[type='text']:focus::after {
  outline: none;
}

input:focus {
  width: 55vw;
  outline: none;
}
.recipieNameWrapper::after {
  display: block;
  width: 100%;
  height: 4px;
  margin-top: -1px;
  content: '';
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: #eb8a44;
}

.thumbnailPic {
  margin: auto;
  position: relative;
  max-width: 400px;
}
.thumbnailPic > label > img {
  max-width: 400px;
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

button[type='button']:disabled {
  background: #ffffff;
  border: solid 2px #aaaaaa;
  color: #dddddd;
  transition: .0s;
}

</style>
