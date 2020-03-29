import Vuex from 'vuex'
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/Components/Atoms/ThumbnailPic.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ThumbnailPic.vue', () => {
  describe('Elements', () => {
    it('should have a pic url', () => {
      const wrapper = shallowMount(Component, {
        propsData: {
          imageSrc: './assets/thumbnail.jpg'
        }
      })
      expect(wrapper.find('img').attributes().src).to.equal('./assets/thumbnail.jpg')
    })
  })
})
