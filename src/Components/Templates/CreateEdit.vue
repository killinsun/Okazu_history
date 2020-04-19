<template>
  <main>
    <div class='thumbnailPic'>
      <label>
        <img :src=imageSrc>
        <input type='file' @change='fileChanged' />
      </label>
    </div>
    <div class='recipieNameWrapper'>
      <label>Name</label>
      <input
        type='text'
        placeholder='Input a recipie`s name'
        v-model='name'
      />
    </div>
    <div class='controlButton'>
        <button
          type='button'
          class='createButton'
          @click='createNewRecipie'
          v-if='!id'
        >
          Create
        </button>
        <button
          type='button'
          class='updateButton'
          @click='updateRecipie'
          v-if='id'
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
          }, file.type, 1)
        }
        img.src = e.target.result
      }
      console.log('file', file)
      reader.readAsDataURL(file)
    },
    createNewRecipie: function () {
      this.$store.dispatch('store_new_recipie', {
        name: this.name,
        uid: this.user.id,
        gId: this.user.gId,
        file: this.uploadedFile
      })
      this.name = ''
      this.$router.push('/', () => {}, () => {})
    },
    updateRecipie: function () {
      this.$store.dispatch('update_recipie', {
        uid: this.user.id,
        updatedItems: {
          id: this.id,
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

</style>
