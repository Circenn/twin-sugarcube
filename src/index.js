import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello cocolina!</h1>
<div>
El goteo frio del agua te despierta, mojando tu frente. Parpadeas desorientado sin sabr donde estas. Tus ojos se van acostumbrando a la poca luz. Un escalofrio te recorre el cuerpo. Apenas llevas nada puesto, unos pantalones de un tejido rasposo y una camisa olgada.

</div>
`;

const pepitoTest = () => {
  //document.getElementsByClassName('passage')[0].appendChild('<div class="c-image-bakground-container"></div>')
  document
    .getElementsByClassName("passage")
    .map(el =>
      el.appendChild('<div class="c-image-bakground-container"></div>')
    );
  $(".passage").appendChild('<div class="c-image-bakground-container"></div>');
};
