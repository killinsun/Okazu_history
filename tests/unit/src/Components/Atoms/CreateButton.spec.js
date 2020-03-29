import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Component from '@/Components/Atoms/CreateButton.vue'

describe('CreateButton.vue', () => {
  describe('Elements', () => {
    it('should have classes', () => {
      const wrapper = shallowMount(Component)
      expect(wrapper.find('i').classes()).to.includes('fa-pencil-alt')
      expect(wrapper.find('i').classes()).to.includes('fas')
    })
  })
})
