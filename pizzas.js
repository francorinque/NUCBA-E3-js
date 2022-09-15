const d = document;
const $form = d.querySelector('.form'),
  $inputText = d.querySelector('.input'),
  $contenedorCards = d.querySelector('.cards'),
  $mensajeError = d.querySelector('.mensaje');

let pizzas = [
  {
    id: 1,
    nombre: 'Pizza de chorizo y morrones',
    src: 'Assets/PizzaDeChorizo-1.jpg',
    precio: 990,
    ing: ['tomate', 'chorizo', 'morrones'],
  },
  {
    id: 2,
    nombre: 'Pizza de carne picada',
    src: 'Assets/PizzaDeCarnePicada-2.jpg',
    precio: 1000,
    ing: ['tomate triturado', 'carne picada', 'queso'],
  },
  {
    id: 3,
    nombre: 'Pizza fugazzeta rellena',
    src: 'Assets/PizzaFugazzetaFellena-3.jpg',
    precio: 900,
    ing: ['queso', 'cebolla'],
  },
  {
    id: 4,
    nombre: 'Pizza de jamón y morrones',
    src: 'Assets/PizzaDeJamónyMorrones-4.jpg',
    precio: 1200,
    ing: ['queso', 'jamón', 'morrones'],
  },
  {
    id: 5,
    nombre: 'Pizza de chorizo y aceitunas',
    src: 'Assets/PizzaChorizoAceitunas-5.jpg',
    precio: 800,
    ing: ['chorizo', 'aceitunas', 'queso'],
  },
];


const saveLocalStorage = array =>{
  localStorage.setItem("pizzas", JSON.stringify(array))
}


const buscarPizza = () =>{
   let pizzaEncontrada = pizzas.find(pizza => pizza.id === Number($inputText.value))
   const {nombre,src,precio,ing} = pizzaEncontrada;
   return `<article class="card">
        <img class="card__img" src="${src}">
        <div class="card__info">
          <h2 class="card__title">${nombre}</h2>
          <p class="card__ingredientes">INGREDIENTES: ${ing}</p>
          <p class="card__price">$${precio}</p>
          <a href="#" class="card__btn">COMPRAR</a>
        </div>
      </article>`
}


// renderizar pizza
const renderPizza = array => {
  $contenedorCards.innerHTML = buscarPizza()
}



const addPizza = e => {
  e.preventDefault();
  const pizzaId = $inputText.value.trim();

  if(Number(pizzaId) > pizzas.length){
    $mensajeError.classList.add("showMensaje");
    $contenedorCards.innerHTML = "";
  } else {
    $mensajeError.classList.remove("showMensaje");
    renderPizza(pizzas);
  }

  $inputText.value = "";
  saveLocalStorage(pizzas)
}


const init = () => {
  $form.addEventListener('submit', addPizza)
}
init();
