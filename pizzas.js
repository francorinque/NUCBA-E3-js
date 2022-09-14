const d = document;
const $form = d.querySelector('.form'),
  $inputText = d.querySelector('.input'),
  $contenedorCards = d.querySelector('.cards'),
  $mensajeError = d.querySelector('.mensaje');

const pizzas = [
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

// valida que el input no tenga un 0-negativo, tampoco sea un numero id que en el arreglo pizzas no existe
const minMax = value => {
  if (Number(value) <= 0 || Number(value) > pizzas.length) {
      $mensajeError.classList.add('showMensaje');
      $contenedorCards.innerHTML = " ";
  } else {
    $mensajeError.classList.remove('showMensaje');
  }
};


const renderPizza = value =>{
   let pizzaId = pizzas.find(pizza => {
    pizza.id === Number(value)
    $contenedorCards.innerHTML = `<article class="card">
    <img class="card__img" src="${pizza.src}">
    <div class="card__info">
      <h2 class="card__title">${pizza.nombre}</h2>
      <p class="card__ingredientes">INGREDIENTES: ${pizza.ing}</p>
      <p class="card__price">$${pizza.precio}</p>
      <a href="#" class="card__btn">COMPRAR</a>
    </div>
  </article>`
   });
}


const saveLocalStorage = () =>{
  localStorage.setItem('pizzas',JSON.stringify(pizzas))
}



const addPizza = e => {
  e.preventDefault();
  const valueInput = $inputText.value.trim();
  minMax(valueInput);
  saveLocalStorage()
  if(!$mensajeError.classList.contains("showMensaje")){
    renderPizza(valueInput);
  }
  $form.reset();
};

const init = () => {
  $form.addEventListener('submit', addPizza);
};


init();


