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
    id: {
      type: String,
      default: ''
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
        if (this.recipie === null || this.recipie === undefined) return null
        return this.recipie.name
      },
      set: function (value) {
        this.recipieName = value
      }
    },
    recipie: function () {
      return this.$store.getters.getRecipieById(this.id)
    },
    user: function () {
      return this.$store.getters.user
    }

  },
  methods: {
    createNewRecipie: function () {
      this.$store.dispatch('store_new_recipie', {
        name: this.recipieName,
        gId: this.user.gId
      })
      this.innerRecipieName = ''
      this.$router.push('/', () => {}, () => {})
    },
    updateRecipie: function () {
      this.$store.dispatch('update_recipie', {
        id: this.id,
        name: this.recipieName,
        imageSrc: '/noimage.jpg'
      })
      this.innerRecipieName = ''
      this.$router.push('/', () => {}, () => {})
    }
  }
}
</script>
