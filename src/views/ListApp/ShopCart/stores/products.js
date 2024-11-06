import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'Head phones',
      price: 400,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png',
      brand: 'Sony',
      description: 'lorem ipsum dolor, sit amet consectetur elit',
      color: '#e84393'
    },
    {
      id: 2,
      name: 'Iphone 14',
      price: 790,
      image: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/06/24/14-tim-1.png',
      brand: 'Apple',
      description: 'lorem ipsum dolor, sit amet consectetur elit',
      color: '#2980b9'
    },
    {
      id: 3,
      name: 'Mi band 7',
      price: 199,
      image: 'https://fireboltt.vn/cdn/shop/products/1.png?v=1655371288',
      brand: 'Xiaomi',
      description: 'lorem ipsum dolor, sit amet consectetur elit',
      color: '#27ae60'
    },
    {
      id: 4,
      name: 'PS5',
      price: 2199,
      image: 'https://asg.com.eg/wp-content/uploads/2024/07/PS5-Digital-Slim-New-Hero-1-v2.webp',
      brand: 'Sony',
      description: 'lorem ipsum dolor, sit amet consectetur elit',
      color: '#e84393'
    }
  ])

  const cart = ref([])

  const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

  const addToCart = (item) => {
    const isExist = cart.value.find(itemC => itemC.id === item.id)
    if (isExist) {
      alert('Item already exist in cart')
      return
    }
    cart.value.push(item)
  }

  return {
    products,
    cart,
    addToCart,
    totalPrice
  }
})
