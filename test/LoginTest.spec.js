import { mount, shallowMount } from '@vue/test-utils'
import Login from '~/components/Login.vue'

describe('Login', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Login)
    expect(wrapper.vm).toBeTruthy()
  })

  it('should contain default message', () => {
    const wrapper = shallowMount(Login)
    const title = wrapper.find('h1')
    expect(title.text()).toContain('Mon compte')
  })

  it('should contain forgot password message', () => {
    const wrapper = shallowMount(Login)
    const title = wrapper.find('a')
    expect(title.text()).toContain('Mot de passe oublié ?')
  })
})
