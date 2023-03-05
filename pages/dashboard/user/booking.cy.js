import Booking from './booking.vue'

describe('<Booking />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Booking)
  })
})