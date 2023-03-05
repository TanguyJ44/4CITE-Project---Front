import Register from './register.vue'

describe('<Register />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Register)
  })
})