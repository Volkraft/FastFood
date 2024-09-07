let tg = window.Telegram.WebApp
tg.expand()
tg.MainButton.textColor = '#ffffff';
tg.MainButton.textColor = '#000000';
let item = '';
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');
btn1.addEventListener('click', function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.setText('Вы выбрали товар Burger')
        item = '1';
        tg.MainButton.show()
    } 
    
})
btn2.addEventListener('click', function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.setText('Вы выбрали товар Cake')
        item = '2';
        tg.MainButton.show()
    } 
    
})
btn3.addEventListener('click', function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.setText('Вы выбрали товар Cookies')
        item = '3';
        tg.MainButton.show()
    } 
    
})
btn4.addEventListener('click', function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.setText('Вы выбрали товар Pizza')
        item = '4';
        tg.MainButton.show()
    } 
    
})
btn5.addEventListener('click', function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.setText('Вы выбрали товар Ramen')
        item = '5';
        tg.MainButton.show()
    } 
    
})
btn6.addEventListener('click', function() {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    }
    else {
        tg.MainButton.setText('Вы выбрали товар Rolls')
        item = '6';
        tg.MainButton.show()
    } 
    
})

Telegram.WebApp.onEvent('mainButtonClicked', function() {
    tg.sendData(item)
})
let userCard = document.getElementById('userCard');
let p = document.createElement('p')
p.innerText = `${tg.initDataUnsafe.user.first_name}`
p.innerText = `${tg.initDataUnsafe.user.Second_name}`
userCard.appendChild('p')