import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Component from '@/Components/Atoms/MyInput.vue'

describe('MyInput.vue', () => {
  describe('Elements', () => {
    it('should have a default class', () => {
      const wrapper = shallowMount(Component)
      expect(wrapper.find('div').classes()).to.includes('inputWrapper')
    })
  })
  describe('Properties', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallowMount(Component, {
        propsData: {
          label: 'testLabel',
          type: 'text',
          value: 'My input',
          placeholder: 'My input placeholder',
          wrapperClasses: 'hoge'
        }
      })
    })

    it('should have a label', () => {
      expect(wrapper.vm.label).to.equal('testLabel')
    })
    it('should have a type', () => {
      expect(wrapper.vm.type).to.equal('text')
    })
    it('should have a value', () => {
      expect(wrapper.vm.value).to.equal('My input')
    })
    it('should have a placeholder', () => {
      expect(wrapper.vm.placeholder).to.equal('My input placeholder')
    })
    it('should have a class', () => {
      expect(wrapper.vm.wrapperClasses).to.equal('hoge')
    })
  })

  describe('Computed', () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        label: 'testLabel',
        type: 'text',
        value: 'My input',
        placeholder: 'My input placeholder',
        wrapperClasses: 'hoge'
      }
    })

    it('should be emitted an event when be inputting values', () => {
      wrapper.find('input').setValue('hogehoge')
      expect(wrapper.emitted('update:value')[0][0]).to.equal('hogehoge')
    })
  })
})
