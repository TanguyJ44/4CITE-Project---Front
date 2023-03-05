import { mount, shallowMount } from '@vue/test-utils'
import BookingSearchBar from '@/components/BookingSearchBar'

describe('BookingSearchBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BookingSearchBar)
    expect(wrapper.vm).toBeTruthy()
  })

  it('sets the minimum departure date to the day after the arrival date', () => {
    const wrapper = shallowMount(BookingSearchBar)
    const arrivalDate = '2023-03-10'
    const departureDate = wrapper.vm.getNextDay(arrivalDate)
    expect(departureDate).toBe('2023-03-11')
  })

  it('should contain default message', () => {
    const wrapper = shallowMount(BookingSearchBar)
    const title = wrapper.find('h2')
    expect(title.text()).toContain(
      'Trouvez votre hôtel au meilleur prix garanti !'
    )
  })
})
