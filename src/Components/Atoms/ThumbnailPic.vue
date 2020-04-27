<template>
  <div class='thumbnailPic'>
    <label>
      <img class='recipie-thumbnail' :src='updatedImageSrc' v-if='!isResizing'>
      <input type='file' @change='fileChanged' />
    </label>
    <div v-if='isResizing' class='loading resize'>
      <p>Now resizing...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThumbnailPic',
  data: function () {
    return {
      isResizing: false,
      updatedImageSrc: null,
      uploadedFile: null,
      smallImage: null,
      maxWidth: 300
    }
  },
  props: {
    imageSrc: {
      required: true,
      default: '/noimage.jpg',
      type: String
    }
  },
  created () {
    this.updatedImageSrc = this.imageSrc
  },
  methods: {
    fileChanged: function (e) {
      const files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
    },
    createImage (file) {
      const reader = new FileReader()
      this.isResizing = true
      this.$emit('update:isResizing', this.isResizing)

      reader.onload = e => {
        this.updatedImageSrc = e.target.result
        this.$emit('update:imageSrc', this.updatedImageSrc)
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
            this.$emit('update:isResizing', this.isResizing)
            this.$emit('update:uploadedFile', this.uploadedFile)
          }, file.type, 1)
        }
        img.src = e.target.result
      }
      reader.readAsDataURL(file)
    }

  }
}
</script>

<style scoped>

label > input[type='file'] {
  display: none;
}

.thumbnailPic {
  margin: auto;
  position: relative;
  max-width: 300px;
}
.thumbnailPic > label > img {
  max-width: 300px;
}

</style>
