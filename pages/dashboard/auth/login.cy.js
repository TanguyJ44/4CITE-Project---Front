import Login from './login.vue'

describe('<Login />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Login)
  })
})