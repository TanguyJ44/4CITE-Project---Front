import { mount, shallowMount } from '@vue/test-utils'
import Register from '~/components/Register.vue'

describe('Register', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Register)
    expect(wrapper.vm).toBeTruthy()
  })

  it('should contain default message', () => {
    const wrapper = shallowMount(Register)
    const title = wrapper.find('h1')
    expect(title.text()).toContain('Inscription')
  })

  it('should contain login redirect message', () => {
    const wrapper = shallowMount(Register)
    const title = wrapper.find('a')
    expect(title.text()).toContain('Déjà inscrit ? Connectez-vous')
  })
})
