import Vuex from 'vuex'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/Components/Molecules/SearchBar.vue'

chai.use(sinonChai)

const localVue = createLocalVue()
localVue.use(Vuex)

describe('SearchBar.vue', () => {
  const mutations = {
    ON_INPUT_SEARCH_WORD: sinon.stub()
  }

  describe('Elements', () => {
    describe('Search bar class', () => {
      it('should have a class when form is being inputted', () => {
        const store = new Vuex.Store({
          state: { searchWord: 'now inputting' },
          mutations
        })

        const wrapper = shallowMount(Component, {
          store,
          localVue
        })
        expect(wrapper.find('form > div').classes()).to.includes('focus-search-bar')
      })
      it('should not have a class when form is empty', () => {
        const store = new Vuex.Store({
          state: { searchWord: '' },
          mutations
        })
        const wrapper = shallowMount(Component, {
          store,
          localVue
        })
        expect(wrapper.find('form > div').classes()).not.to.includes('focus-search-bar')
      })
    })
    describe('Clear button', () => {
      it('should appear clear button when form is being inputted', () => {
        const store = new Vuex.Store({
          state: { searchWord: 'now inputting' },
          mutations
        })
        const wrapper = shallowMount(Component, {
          store,
          localVue
        })
        expect(wrapper.find('i.fa-times').isVisible()).to.equal(true)
      })
      it('should not appear clear button when form is empty', () => {
        const store = new Vuex.Store({
          state: { searchWord: '' },
          mutations
        })
        const wrapper = shallowMount(Component, {
          store,
          localVue
        })
        expect(wrapper.find('i.fa-times').isVisible()).to.equal(false)
      })
    })

    describe('Events', () => {
      it('should be commited a mutation', () => {
        const store = new Vuex.Store({
          state: { searchWord: 'now inputting' },
          mutations
        })
        const wrapper = shallowMount(Component, {
          store,
          localVue
        })

        wrapper.find('i.fa-times').trigger('click')
        expect(mutations.ON_INPUT_SEARCH_WORD.called).to.equal(true)
      })
    })
  })
})
