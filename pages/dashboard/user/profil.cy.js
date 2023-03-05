import Profil from './profil.vue'

describe('<Profil />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Profil)
  })
})