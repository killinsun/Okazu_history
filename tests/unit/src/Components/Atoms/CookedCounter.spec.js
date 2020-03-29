import Vuex from 'vuex'
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/Components/Atoms/CookedCounter.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CookedCounter.vue', () => {
  describe('Elements', () => {
    it('should have a counter', () => {
      const wrapper = shallowMount(Component, {
        propsData: {
          counter: 100
        }
      })
      expect(wrapper.find('span').text()).to.equal('100')
    })
  })

  describe('Events', () => {
    describe('Click', () => {
      it('should be emitted an event', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            counter: 100
          }
        })

        wrapper.trigger('click')
        expect(wrapper.emitted().TappedCounter.length).to.equal(1)
      })
    })
  })
})
