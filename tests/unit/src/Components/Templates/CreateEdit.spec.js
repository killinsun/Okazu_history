import Vuex from 'vuex'
import Router from 'vue-router'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/Components/Templates/CreateEdit.vue'

chai.use(sinonChai)

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Router)

// TODO: modify this describe structure below

describe('CreateEdit.vue', () => {
  let store
  let router

  const state = {
    state: {
      recipies: [{
        id: 0
      }],
      nextRecipieId: 1
    }
  }

  const mutations = {
    CREATE_NEW_RECIPIE: sinon.stub()
  }
  describe('Elements', () => {
    describe('when create', () => {
      it('should appear Create button', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            create: true
          }
        })
        expect(wrapper.find('button').classes()).to.includes('createButton')
      })
    })
    describe('when update', () => {
      it('should appear Update button', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            create: false
          }
        })
        expect(wrapper.find('button').classes()).to.includes('updateButton')
      })
    })
  })
  describe('Events', () => {
    beforeEach(() => {
      store = new Vuex.Store({
        state,
        mutations
      })
      router = new Router(
        { path: '/', component: null }
      )
    })

    describe('Click', () => {
      it('should be triggered mutation', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            create: true
          },
          store,
          router,
          localVue
        })
        wrapper.find('.controlButton > button').trigger('click')
        expect(mutations.CREATE_NEW_RECIPIE.called).to.equal(true)
      })
    })
  })
})
