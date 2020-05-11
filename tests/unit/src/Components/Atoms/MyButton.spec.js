import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Component from '@/Components/Atoms/MyButton.vue'

describe('MyButton.vue', () => {
  describe('Elements', () => {
    it('should have a default class', () => {
      const wrapper = shallowMount(Component)
      expect(wrapper.find('button').classes()).to.includes('defaultButtonClass')
    })
  })

  describe('Events', () => {
    describe('Click', () => {
      it('should be emitted an event', () => {
        const wrapper = shallowMount(Component)
        wrapper.trigger('click')
        expect(wrapper.emitted().onMyButtonClick.length).to.equal(1)
      })
    })
  })
})
