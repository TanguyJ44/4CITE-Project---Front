import { mount } from '@vue/test-utils'
import HomeCarousel from '~/components/HomeCarousel.vue'

describe('HomeCarousel', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomeCarousel)
    expect(wrapper.vm).toBeTruthy()
  })
})
