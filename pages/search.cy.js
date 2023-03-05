import Search from './search.vue'

describe('<Search />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Search)
  })
})