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

  const getters = {
    getRecipieById: () => function (id) {
      return { id: 'test', name: 'test', imageSrc: '/noimage.jpg' }
    }
  }
  const actions = {
    store_new_recipie: sinon.stub()
  }

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      getters,
      actions
    })
    router = new Router(
      { path: '/', component: null }
    )
  })

  describe('Elements', () => {
    describe('when create', () => {
      it('should appear Create button', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            id: undefined
          },
          store,
          localVue
        })
        expect(wrapper.find('button').classes()).to.includes('createButton')
      })
    })
    describe('when update', () => {
      it('should appear Update button', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            id: 'hogehoge'
          },
          store,
          localVue
        })
        expect(wrapper.find('button').classes()).to.includes('updateButton')
      })
    })
  })
  describe('Events', () => {
    describe('Click', () => {
      it('should be triggered action', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            create: true
          },
          store,
          router,
          localVue
        })
        wrapper.find('.controlButton > button').trigger('click')
        expect(actions.store_new_recipie.called).to.equal(true)
      })
    })
  })
})
