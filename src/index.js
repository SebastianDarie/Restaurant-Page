import home from './home'
import navbar from './navbar'
import menu from './menu'
import contact from './contact'


const content = document.querySelector('#content')

navbar(content)
home(content)

const tabs = document.querySelectorAll('.tabs')
const pizzaBtn = document.querySelector('.pizza-btn')

function changeTabs(e) {
    let target = e.target

    content.removeChild(content.lastElementChild)

    if(target.innerHTML === 'Home') {
        home(content)

        const pizzaBtn = document.querySelector('.pizza-btn')
        pizzaBtn.addEventListener('click', changeTabs)
    } else if(target.innerText === 'Menu' || target.innerText === 'See Today\'s Menu') {
        menu(content)
    } else {
        contact(content)
    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', changeTabs)
})

pizzaBtn.addEventListener('click', changeTabs)