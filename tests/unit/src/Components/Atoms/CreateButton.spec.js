import VueRouter from 'vue-router'
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/Components/Atoms/CreateButton.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('CreateButton.vue', () => {
  describe('Elements', () => {
    it('should have classes', () => {
      const wrapper = shallowMount(Component, { localVue })
      expect(wrapper.find('i').classes()).to.includes('fa-pencil-alt')
      expect(wrapper.find('i').classes()).to.includes('fas')
    })
  })
})
