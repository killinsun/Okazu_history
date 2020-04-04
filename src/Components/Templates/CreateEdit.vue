<template>
  <main>
    <div class='thumbnailPic'>
      <ThumbnailPic :imageSrc='recipieImage'/>
    </div>
    <div class='recipieNameWrapper'>
      <label>Name</label>
      <input
        type='text'
        placeholder='Input a recipie`s name'
        v-model='innerRecipieName'
      />
    </div>
    <div class='controlButton'>
        <button
          type='button'
          class='createButton'
          @click='createNewRecipie'
          v-if='create'
        >
          Create
        </button>
        <button
          type='button'
          class='updateButton'
          @click='updateRecipie'
          v-if='!create'
        >
          Update
        </button>
    </div>
  </main>
</template>

<script>
import ThumbnailPic from '@/Components/Atoms/ThumbnailPic.vue'
export default {
  name: 'CreateEdit',
  components: {
    ThumbnailPic
  },
  data: function () {
    return {
      recipieName: ''
    }
  },
  props: {
    create: {
      type: Boolean,
      require: true,
      default: true
    },
    recipieImage: {
      type: String,
      require: true,
      default: '/noimage.jpg'
    }
  },
  computed: {
    innerRecipieName: {
      get: function () {
        return this.recipieName
      },
      set: function (value) {
        this.recipieName = value
      }
    }
  },
  methods: {
    createNewRecipie: function () {
      this.$store.commit('CREATE_NEW_RECIPIE', {
        name: this.recipieName,
        imageSrc: this.recipieImage
      })
      this.innerRecipieName = ''
      this.$router.push('/')
    },
    updateRecipie: function () {
      // TODO: implement this
    }
  }
}
</script>
