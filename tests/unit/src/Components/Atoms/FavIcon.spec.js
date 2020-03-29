import Vuex from 'vuex'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/Components/Atoms/FavIcon.vue'

chai.use(sinonChai)

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FavIcon.vue', () => {
  let store

  const state = {
    state: {
      recipies: [{
        id: 0,
        name: 'hoge',
        count: 0,
        lastDate: null,
        deleted: false,
        favorited: false
      }],
      nextRecipieId: 1
    }
  }

  const mutations = {
    TOGGLE_FAV_RECIPIE: sinon.stub()
  }
  describe('Elements', () => {
    describe('when recipie is favorited', () => {
      it('should have following classes fas fa-heart', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            recipieId: 0,
            favorited: true
          }
        })
        expect(wrapper.find('i').classes()).to.includes('fas')
        expect(wrapper.find('i').classes()).to.includes('fa-heart')
      })
    })
    describe('when recipie is not favorited', () => {
      it('should have following classes far fa-heart', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            recipieId: 0,
            favorited: false
          }
        })
        expect(wrapper.find('i').classes()).to.includes('far')
        expect(wrapper.find('i').classes()).to.includes('fa-heart')
      })
    })
  })
  describe('Events', () => {
    beforeEach(() => {
      store = new Vuex.Store({
        state,
        mutations
      })
    })

    describe('Click', () => {
      it('should be triggered mutation', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            favorited: false
          },
          store,
          localVue
        })
        wrapper.trigger('click')
        expect(mutations.TOGGLE_FAV_RECIPIE.called).to.equal(true)
      })
    })
  })
})
