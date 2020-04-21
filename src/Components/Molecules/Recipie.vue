<template>
  <div class='recipie'>
    <div class='leftItems'>
      <img :src='recipie.imageSrc' />
    </div>
      <div class='middleItems'>
        <router-link :to="{ name: 'Edit', params: { id: recipie.id } } ">
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
      </router-link>
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
import FavIcon from '@/Components/Atoms/FavIcon.vue'
import CookedCounter from '@/Components/Atoms/CookedCounter.vue'

export default {
  name: 'Recipie',
  components: {
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
      this.$store.dispatch('increment_cooked_counter', { id: this.recipie.id })
    }
  }

}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #4b7447;
  }
  img {
    width: 3em;
    height: auto;
  }
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
  .middleItems a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .recipieName{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .recipieName p{
    overflow: hidden;
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
