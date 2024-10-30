export const formatPrice = (price) => new Intl.NumberFormat('ja-JB', {style: 'currency', currency: 'JPY'}).format(price)
