import Vuex from 'vuex'
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/Components/Atoms/ThumbnailPic.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('ThumbnailPic.vue', () => {
  describe('Elements', () => {
    it('should have a pic url', () => {
      const wrapper = shallowMount(Component, {
        propsData: {
          imageSrc: './assets/thumbnail.jpg'
        },
        localVue
      })
      expect(wrapper.find('img').attributes().src).to.equal('./assets/thumbnail.jpg')
    })
    describe('Default', () => {
      it('should appear when component is default', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            imageSrc: './assets/thumbnail.jpg'
          },
          localVue
        })
        expect(wrapper.find('img').exists()).to.equal(true)
      })
    })
    describe('A image is resizing', () => {
      it('should not appear a image when component is being resized it', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            imageSrc: './assets/thumbnail.jpg'
          },
          localVue
        })
        wrapper.setData({ isResizing: true })
        wrapper.vm.$nextTick(() => {
          expect(wrapper.find('img').exists()).to.equal(false)
        })
      })
    })
  })
})
