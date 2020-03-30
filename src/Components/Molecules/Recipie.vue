<template>
  <div class='recipie'>
    <div class='leftItems'>
      <ThumbnailPic :imageSrc='recipie.image'/>
    </div>
    <div class='middleItems'>
      <div class='recipieName'>
        <span>
          {{ recipie.name }}
        </span>
      </div>
      <div class='lastCooked'>
        <div>
          Last date
        </div>
        <span>
          {{ recipie.lastDate }}
        </span>
      </div>
    </div>
    <div class='rightItems'>
      <div class='favorite'>
        <FavIcon :recipieId='recipie.id' :favorited='recipie.favorited'/>
      </div>
      <div class='cookedCounter'>
        <CookedCounter :recipieId='recipie.id' :counter='recipie.count' v-on:TappedCounter='incrementCounter()' />
      </div>
    </div>
  </div>
</template>

<script>
import ThumbnailPic from '@/Components/Atoms/ThumbnailPic.vue'
import FavIcon from '@/Components/Atoms/FavIcon.vue'
import CookedCounter from '@/Components/Atoms/CookedCounter.vue'

export default {
  name: 'Recipie',
  components: {
    ThumbnailPic,
    FavIcon,
    CookedCounter
  },
  props: {
    recipie: {
      required: true,
      Type: Object
    }
  },
  methods: {
    incrementCounter: function () {
      this.$store.commit('INCREMENT_COOCKED_COUNTER', { id: this.recipie.id })
    }
  }

}
</script>

<style scoped>
  .recipie {
    max-height: 200px;
    margin: 0.5em 0.3em;
    background-color: #ffffff;
    box-shadow: 1px 2px 2px gray;
    color: #4b7447;
    display: flex;
    font-size: 1.2em;
    padding: 0.1em;
  }

  .leftItems {
    flex-grow: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .middleItems {
    flex-grow: 5;
    text-align: left;
    position: relative;
  }

  .lastCooked {
    font-size: 0.5em;
    line-height: 1;
    position: absolute;
    bottom:1.5vh;
  }

  .rightItems {
    flex-grow: 1;
  }

@media screen and (max-width: 500px ){
  .recipie {
    font-size: 0.8em;
  }
}

</style>
