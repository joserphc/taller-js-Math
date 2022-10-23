const form = document.querySelector('#form')
const inputPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#coupon')
const texResult = document.querySelector('#text-content')
const calculateButton = document.querySelector('#calculate-button')

const couponsArray = []

couponsArray.push({
    name: 'Free', discount: 100
})
couponsArray.push({
    name: 'Basic', discount: 10
})
couponsArray.push({
    name: 'Medium', discount: 20
})
couponsArray.push({
    name: 'Expert', discount: 50
})


form.addEventListener('submit', calculateDiscount)


function calculateDiscount(event){
    event.preventDefault()
    const price = Number(inputPrice.value)
    const coupon = inputCoupon.value

    if(!price || !coupon){
        texResult.innerText = `Please complete this form`
        return
    }

    let discount

    const couponSelected = couponsArray.find(function(couponElement){
        return couponElement.name == coupon
    })
    
    if(couponSelected){
        discount = couponSelected.discount
    }else{
        texResult.innerText = `This coupon is not validate`
        return
    }

    const result = (price * (100 - discount)) / 100
        texResult.innerText = `El precio con el ${discount} % de descuento es : ${result}`
}