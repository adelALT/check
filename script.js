
const data = {
    burgers: [
        {
            name: 'super burger',
            img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
            price:100,
            category:'burgers'
        },
        {
            name: 'pro burger',
            img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
            price:150,
            category:'burgers'
        },
        {
            name: 'extra burger',
            img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
            price:180,
            category:'burgers'
        },
    ],
    pizzas: [
        {
            name: 'italian pizza',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg',
            price:300,
            category:'pizzas'
        },
        {
            name: 'meat pizza',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg',
            price:400,
            category:'pizzas'
        },

    ],
    drinks: [
        {
            name: 'pivo',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg',
            price:500,
            category:'drinks'
        },
        {
            name: 'vino',
            img: 'https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg',
            price:1000,
            category:'drinks'
        },
        {
            name: 'vodka',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU',
            price:2000,
            category:'drinks'
        },
        {
            name: 'tequila',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU',
            price:3000,
            category:'drinks'
        },
    ]
}




//destr
const { burgers, pizzas, drinks } = data
//destr

//merge data
const all = [...burgers, ...pizzas, ...drinks]
//merge data

//console.log(all);





const categoriesRender = (data) => {
    const output = document.querySelector('.output')
    output.innerHTML = ''

    console.log(data);
    data.forEach(el => {
     const image = document.createElement('img') 
     image.src = el.img
     
     output.append(image)
    });

}
categoriesRender(all)


const categoriesChoiseData = [
    {
        title: 'all',
        dataForRender: all
    },
    {
        title: 'burgers',
        dataForRender: burgers
    },
    {
        title: 'pizzas',
        dataForRender: pizzas
    },
    {
        title: 'drinks',
        dataForRender: drinks
    },
]



//const allDOM = document.querySelector('.all')
//const burgersDOM = document.querySelector('.burgers')
//const pizzasDOM = document.querySelector('.pizzas')
//const drinksDOM = document.querySelector('.drinks')


//allDOM.addEventListener('click', () => {
   // categoriesRender(all)
//})

//allDOM.addEventListener('click', () => {
   // categoriesRender(burgers)
//})

//allDOM.addEventListener('click', () => {
    //categoriesRender(pizzas)
//})

//allDOM.addEventListener('click', () => {
    //categoriesRender(drinks)
//})




const renderButtons = () => {
    const buttonWrap = document.querySelector('.categories_choise')

    categoriesChoiseData.forEach(el => {
        console.log(el);
        const button = document.createElement('button')
        button.className = 'btns'
        button.textContent = el.title
        console.log(button);

        button.addEventListener('click', () => {
            categoriesRender(el.dataForRender)
        })

        buttonWrap.append(button)
    })
}



const searchItems = () => {
    const input = document.querySelector('#search')
    const form = document.querySelector('#form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const filteretDefault = dataAlt.filter(el =>{
            return el.name.includes(input.value)
        })
        categoriesRender(filtereditems)

    })

}

searchItems()
