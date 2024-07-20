function calculateDescountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDescount = price - discount
    return priceWithDescount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDescountedPrice(originalPrice, discountPercentage)

console.log('Original Price: ' + originalPrice)
console.log('Discount: ' + discountPercentage)
console.log('Price with discount: ' + finalPrice)