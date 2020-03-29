import Vuex from 'vuex'
import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/Components/Atoms/SearchBar.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('SearchBar.vue', () => {
  describe('Elements', () => {
    it('should have classes', () => {
      const wrapper = shallowMount(Component)
      expect(wrapper.find('input').classes()).to.includes('recipies-search-input')
    })
  })
  describe('Events', () => {
    describe('When type any characters over 1 char', () => {
      it('should be emitted a event which has true when characters length is 1', () => {
        const wrapper = shallowMount(Component)
        wrapper.find('input[type="text"]').setValue('a')
        expect(wrapper.emitted('isInputtingSearchBar')[0][0]).to.equal(true)
      })
      it('should be emitted a event which has true when characters length over 1', () => {
        const wrapper = shallowMount(Component)
        wrapper.find('input[type="text"]').setValue('long text')
        expect(wrapper.emitted('isInputtingSearchBar')[0][0]).to.equal(true)
      })
    })
    describe('When search bar is empty', () => {
      it('should be disabled inputting state', async () => {
        const wrapper = shallowMount(Component)
        await wrapper.find('input[type="text"]').setValue('')
        expect(wrapper.emitted('isInputtingSearchBar')[0][0]).to.equal(false)
      })
    })
  })
})
