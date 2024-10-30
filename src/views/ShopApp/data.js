export const shopData = [
  {
    id: 1,
    name: 'Head phones',
    price: 400,
    publicDate: '05-05-2021',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png',
    hot: true,
    brand: 'Sony',
    description: 'lorem ipsum dolor, sit amet consectetur elit',
    inStock: [
      { color: '#e74c3c', quantity: 6, name: 'red', soldOut: false },
      { color: '#e84393', quantity: 3 , name: 'pink', soldOut: false},
    ],
  },
  {
    id: 2,
    name: 'Iphone 14',
    price: 790,
    publicDate: '02-01-2021',
    image: 'https://cdn.hoanghamobile.com/i/previewV2/Uploads/2024/06/24/14-tim-1.png',
    hot: false,
    brand: 'Apple',
    description: 'lorem ipsum dolor, sit amet consectetur elit',
    inStock: [
      { color: '#2980b9', quantity: 4, name: 'blue' , soldOut: false},
      { color: '#39383d', quantity: 2 , name: 'black', soldOut: false},
    ],
  },
  {
    id: 3,
    name: 'Mi band 7',
    price: 199,
    publicDate: '02-01-2023',
    image: 'https://fireboltt.vn/cdn/shop/products/1.png?v=1655371288',
    hot: false,
    brand: 'Xiaomi',
    description: 'lorem ipsum dolor, sit amet consectetur elit',
    inStock: [
      { color: '#e67e22', quantity: 6, name: 'orange' , soldOut: false},
      { color: '#27ae60', quantity: 2, name: 'green', soldOut: false},
      { color: '#f1c40f', quantity: 2, name: 'yellow' , soldOut: false},
    ],
  },
  {
    id: 4,
    name: 'PS5',
    price: 2199,
    publicDate: '03-01-2023',
    image: 'https://asg.com.eg/wp-content/uploads/2024/07/PS5-Digital-Slim-New-Hero-1-v2.webp',
    hot: true,
    brand: 'Sony',
    description: 'lorem ipsum dolor, sit amet consectetur elit',
    inStock: [
      { color: '#2980b9', quantity: 1, name: 'blue' , soldOut: false},
      { color: '#e84393', quantity: 2, name: 'pink', soldOut: false },
    ],
  }
]
