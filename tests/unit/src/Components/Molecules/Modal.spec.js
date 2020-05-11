import { expect } from 'chai'
import { mount, shallowMount } from '@vue/test-utils'
import Component from '@/Components/Molecules/Modal.vue'
// import MyButton from '@/Components/Atoms/MyButton.vue'

describe('Modal.vue', () => {
  describe('Elements', () => {
    describe('Title', () => {
      it('should have a title when component has a prop', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            title: 'Modal title',
            message: 'Hoge',
            visible: true
          }
        })
        expect(wrapper.find('p.modalTitle').text()).to.equal('Modal title')
      })
      it('should be set the default title when component doesnt have a prop', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            message: 'Hoge',
            visible: true
          }
        })
        expect(wrapper.find('p.modalTitle').text()).to.equal('Information')
      })
    })
    describe('Modal body', () => {
      it('should have a modal message body', () => {
        const wrapper = shallowMount(Component, {
          propsData: {
            title: 'Modal title',
            message: 'Hoge',
            visible: true
          }
        })
        expect(wrapper.find('p.modalMessage').text()).to.equal('Hoge')
      })
    })

    describe('Footer buttons', () => {
      describe('primaryButton', () => {
        describe('button title', () => {
          it('should have a button value', () => {
            const wrapper = mount(Component, {
              propsData: {
                title: 'Modal title',
                message: 'Hoge',
                visible: true,
                primaryButtonValue: 'Primary'
              }
            })
            expect(wrapper.find('.primaryButton').text()).to.equal('Primary')
          })
        })
      })
      describe('secondaryButton', () => {
        describe('button title', () => {
          it('should have a button value', () => {
            const wrapper = mount(Component, {
              propsData: {
                title: 'Modal title',
                message: 'Hoge',
                visible: true,
                secondaryButtonValue: 'Secondary'
              }
            })
            expect(wrapper.find('.secondaryButton').text()).to.equal('Secondary')
          })
        })
      })
    })

    describe('Events', () => {
      describe('Modal close', () => {
        describe('Click cross button', () => {
          it('should be emitted an event with value:false', () => {
            const wrapper = shallowMount(Component, {
              propsData: {
                title: 'Modal title',
                message: 'Hoge',
                visible: true
              }
            })
            wrapper.find('.closeButton').trigger('click')
            expect(wrapper.emitted('update:visible')[0][0]).to.equal(false)
          })
        })
        describe('Click outside of the modal', () => {
          it('should be emitted an event with value:false', () => {
            const wrapper = shallowMount(Component, {
              propsData: {
                title: 'Modal title',
                message: 'Hoge',
                visible: true
              }
            })
            wrapper.find('#overlay').trigger('click')
            expect(wrapper.emitted('update:visible')[0][0]).to.equal(false)
          })
        })
      })
    })
  })
})
