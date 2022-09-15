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


window.addEventListener('load', e=>{

  const getPizza = JSON.parse(localStorage.getItem("myPizza"))
  if(getPizza === null){
    return;
  } else {
    $contenedorCards.innerHTML = getPizza;
    renderPizza(getPizza)
  }

})


 $form.addEventListener('submit', e => {
    e.preventDefault();

    const datoUser = $inputText.value.trim();
    if(Number(datoUser) > pizzas.length){
      $mensajeError.classList.add("showMensaje");
      $contenedorCards.innerHTML = "";
      $form.reset();
      return;
    } else {
      $mensajeError.classList.remove("showMensaje")
    }
    buscarPizza(pizzas)
    $form.reset();
 })


 function buscarPizza(arreglo){
  const pizzaEncontrada  = pizzas.find(pizza => pizza.id === Number($inputText.value));
  localStorage.setItem("myPizza",JSON.stringify(pizzaEncontrada))
  renderPizza(pizzaEncontrada)
 }

 function renderPizza(pizza){
    const {nombre,src,precio,ing} = pizza
    $contenedorCards.innerHTML = `<article class="card">
    <img src=${src} class="card__img">
    <div class="card__info">
      <h2 class="card__title">${nombre}</h2>
      <p class="card__ingredientes">Ingredientes: ${ing}</p>
      <p class="card__precio">$${precio}</p>
      <a href="#" class="card__btn">COMPRAR</a>
    </div>
  </article>`
 }