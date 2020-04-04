import { expect } from 'chai'
import { mutations } from '@/store'

describe('mutations', () => {
  it('CREATE_NEW_RECIPIE', () => {
    const state = {
      recipies: [{
        id: 0,
        name: 'hoge',
        count: 0,
        lastDate: null,
        deleted: false,
        favorited: false,
        imageSrc: '/noimage.jpg'
      }]
    }
    mutations.CREATE_NEW_RECIPIE(state, { name: 'test', imageSrc: '/test.jpg' })
    expect(state.recipies.length).to.equal(2)
  })
  it('UPDATE_RECIPIE_STATE', () => {
    const state = {
      recipies: [{
        id: 0,
        name: 'hoge',
        count: 0,
        lastDate: null,
        deleted: false,
        favorited: false,
        imageSrc: '/noimage.jpg'
      }]
    }
    const recipie = {
      id: 0,
      name: 'modified name!!',
      count: 10
    }
    mutations.UPDATE_RECIPIE_STATE(state, { recipie: recipie })
    expect(state.recipies[0].name).to.equal('modified name!!')
    expect(state.recipies[0].count).to.equal(10)
    expect(state.recipies[0].lastDate).to.equal(null)
    expect(state.recipies[0].deleted).to.equal(false)
    expect(state.recipies[0].favorited).to.equal(false)
    expect(state.recipies[0].imageSrc).to.equal('/noimage.jpg')
  })
  it('TOGGLE_FAV_RECIPIE', () => {
    const state = {
      recipies: [{
        id: 0,
        name: 'hoge',
        count: 0,
        lastDate: null,
        deleted: false,
        favorited: false
      }]
    }

    mutations.TOGGLE_FAV_RECIPIE(state, { id: 0 })
    expect(state.recipies[0].favorited).to.equal(true)
    mutations.TOGGLE_FAV_RECIPIE(state, { id: 0 })
    expect(state.recipies[0].favorited).to.equal(false)
  })
})
