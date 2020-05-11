import Vuex from 'vuex'
import VueRouter from 'vue-router'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/Components/Molecules/Recipie.vue'
import FavIcon from '@/Components/Atoms/FavIcon.vue'
import CookedCounter from '@/Components/Atoms/CookedCounter.vue'

chai.use(sinonChai)

const localVue = createLocalVue()
const router = new VueRouter()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('Recipie.vue', () => {
  const recipie = {
    id: 'hoge001',
    name: 'Test',
    imageSrc: '/noimage.jpg',
    lastDate: '2020/01/01',
    favorited: false,
    cooked: 0
  }
  describe('Elements', () => {
    describe('Recipie thumbnail image', () => {
      it('should have a src', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            recipie: recipie
          },
          localVue
        })
        expect(wrapper.find('img').attributes('src')).to.equal('/noimage.jpg')
      })
    })
    describe('Recipie name', () => {
      it('should have a recipie name', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            recipie: recipie
          },
          localVue
        })
        expect(wrapper.find('div.recipieName > span').text()).to.equal('Test')
      })
    })
    describe('Last date', () => {
      it('should have a last coocked date', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            recipie: recipie
          },
          localVue
        })
        expect(wrapper.find('div.lastCooked > span').text()).to.equal('2020/01/01')
      })
    })

    describe('FavIcon', () => {
      it('should have a component FavIcon', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            recipie: recipie
          },
          localVue
        })
        expect(wrapper.contains(FavIcon)).to.equal(true)
      })
    })

    describe('CookedCounter', () => {
      it('should have a component CookedCounter', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            recipie: recipie
          },
          localVue
        })
        expect(wrapper.contains(CookedCounter)).to.equal(true)
      })
    })
  })

  describe('Events', () => {
    const actions = {
      increment_cooked_counter: sinon.stub()
    }
    const store = new Vuex.Store({
      actions
    })
    describe('incrementCounter', () => {
      it('should be dispatched an action', () => {
        const wrapper = mount(Component, {
          propsData: {
            recipie: recipie
          },
          store,
          localVue,
          router
        })
        wrapper.find(CookedCounter).trigger('click')
        expect(actions.increment_cooked_counter.called).to.equal(true)
      })
    })
  })
})
