const input = document.getElementById('input')
document.getElementById('value').addEventListener('click', function(){
    input.value = input.value === '' ? 'Óla, mundo!' : ''
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'digite algo...'
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something
    input.dataset.something = 'algum outro valor..'
})