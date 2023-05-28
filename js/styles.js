let elForm = document.querySelector('form')
let elNameProduct = document.querySelector('.input__name')
let elPrice = document.querySelector('.input__price')
let wrapper = document.querySelector('.wrapper')
let totalPrice = document.querySelector('.total__price')

let prices = []
let count = 1

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let totalPriceValue = 0
    
    let elNameValue = elNameProduct.value 
    let elPriceValue = elPrice.value 
    
    prices.push(Number(elPriceValue));
    totalPriceValue = prices.reduce((acc,item) => acc + item)
    
    let infoWrapper = document.createElement('div')
    infoWrapper.setAttribute('class','info__wrapper')
    wrapper.appendChild(infoWrapper)
    
    let titleName = document.createElement('p')
    titleName.textContent = `${count}. ${elNameValue}`
    infoWrapper.appendChild(titleName)
    titleName.setAttribute('class','style')
    count ++
    elNameProduct.value = null
    
    let titlePrice = document.createElement('p')
    titlePrice.textContent = `${elPriceValue} $`
    titlePrice.setAttribute('class','style')
    infoWrapper.appendChild(titlePrice)
    elPrice.value = null

    totalPrice.textContent = `Total price: ${totalPriceValue} $`
    
})

