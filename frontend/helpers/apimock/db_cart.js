export const cart = {
  data: {
    cart: [
      { id: 'scol', preco: 2.50, quantidade: 12 },
      { id: 'brohmo', preco: 2.50, quantidade: 8 },
      { id: 'boazinha', preco: 50, quantidade: 1 }
    ]
  },
  computed: {
    total () {
      return this.cart.reduce((t, p) => t + p.preco * p.quantidade, 0)
    }
  },
  methods: {
    remove_from_cart (p) {
      this.cart = this.cart = this.cart.filter(i => i.nome !== p.nome)
    },
    totalItem (p) {
      return p.preco * p.quantidade
    }
  }
}
