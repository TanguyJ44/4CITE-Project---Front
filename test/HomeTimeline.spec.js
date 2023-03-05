import { mount } from '@vue/test-utils'
import HomeTimeline from '~/components/HomeTimeline.vue'

describe('HomeTimeline', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomeTimeline)
    expect(wrapper.vm).toBeTruthy()
  })
})
