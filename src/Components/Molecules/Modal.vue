<template>
  <div id='overlay' v-show='updatedVisible' @click.self='close'>
    <div class='modal'>
      <div class='modalWrapper'>
        <div class='modalHeader'>
          <p class='modalTitle'>
            {{ title }}
          </p>
          <div class='closeButton' @click='close'>
            <i class='fas fa-times' />
          </div>
        </div>
        <div class='modalBody'>
          <p class='modalMessage'>
            {{ message }}
          </p>
        </div>
        <div class='modalFooter'>
          <MyButton :value='secondaryButtonValue' :class='secondaryButtonClass' v-on:onMyButtonClick='secondaryEvent' />
          <MyButton :value='primaryButtonValue' :class='primaryButtonClass'  v-on:onMyButtonClick='primaryEvent'/>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import MyButton from '@/Components/Atoms/MyButton.vue'

export default {
  name: 'Modal',
  components: {
    MyButton
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Information'
    },
    message: {
      type: String,
      required: true
    },
    primaryButtonValue: {
      type: String,
      required: false
    },
    primaryButtonClass: {
      type: String,
      required: false
    },
    secondaryButtonValue: {
      type: String,
      required: false
    },
    secondaryButtonClass: {
      type: String,
      required: false
    },
    visible: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    updatedVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  methods: {
    close () {
      this.updatedVisible = false
      console.log(this.updatedVisible)
    },
    primaryEvent () {
      this.$emit('onPrimaryClick')
    },
    secondaryEvent () {
      this.$emit('onSecondaryClick')
    }

  }

}
</script>

<style>
#overlay{
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;;
}

.modal {
  background-color: #FFFFFF;
  border-radius: 20px;
  width: 70vw;
  max-width: 1200px;
  height: auto;
  color: #4b7447;
}

@media screen and (max-width: 500px ){
  .modal {
    width: 100vw;
  }
}

.modalHeader {
  display: flex;
  height: 6vh;
  justify-content: flex-end;
  align-items: center;
  background-color: #eb8a44;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.modalTitle {
  margin-right: auto;
  margin-left: 5vw;
  margin-bottom: 20px;
  font-weight: bold;
}

.closeButton {
  width: 50px;
  color: #000000;
}

.closeButton:hover {
  width: 50px;
  font-size: 1.2em;
  color: #000000;
}

.modalBody {
  margin: 0 5vw;
  text-align: left;
  font-size: 1em;
}
.modalBody > p {
  margin: 0;
}
.modalMessage {
  font-size: 0.8em;
}

</style>
