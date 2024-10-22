async function getData() {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    console.log(character)
    const characterArr = character.results.map(elemento => Object.entries(elemento));
    console.log(characterArr)
    const characterArrSliced = characterArr.slice(0,4);
    character.results.forEach(element => {
        const randInt = randomData(1, characterArr.length)
        const randIndex = randInt;
      for(i = 0; i < characterArrSliced.length; i++){
        if(element.id == i){
            const pricing_box = document.createRange().createContextualFragment(`
                   
            <div class="pricing-box pricing-box-${i}">
                <img src="${characterArr[randIndex][8][1]}" alt="">
                <h3>${characterArr[randIndex][1][1]}</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Viverra euismod sagittis quam suspendisse. Eu ut egestas consectetur in rutrum amet sed lorem ipsum.</p>
            </div>
                
                `)
                const pricing = document.getElementById('pricing');
                pricing.append(pricing_box);
        }
      }
      function randomData(min, max){
        return Math.floor(Math.random() * (min - max + 1) + max);
      }
    });
}

const box_1 = document.querySelector('.box-1');
box_1.style.backgroundImage = "url('/images/showcase-4.jpg')";

const box_4 = document.querySelector('.box-4');
box_4.style.backgroundImage = "url('/images/showcase-5.jpg')";

const btn_enviar = document.getElementById('btn-enviar');
const sendData = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const fecha = document.getElementById('fecha');
const hora = document.getElementById('hora');
const mensaje = document.getElementById('mensaje');
const arr = [];
const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
arr.push(nombre, email, fecha, hora, mensaje);
for(i = 0 ; i < arr.length; i++){
    if(arr[i].value == ""){
        swal({
            title: `El campo ${messageArr[i]} no puede estar vacío`,
            icon: "error",
             })
             return false;
    }
}
if(!emailValido(email)){
    swal({
        title: `El campo ${messageArr[1]} no tiene el formato adecuado`,
        icon: "error",
         })
         return false;
}
swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
nombre.value = "";
email.value = "";
fecha.value = "";
hora.value = "";
mensaje.value = "";
return true;
}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

getData()
btn_enviar.addEventListener("click", sendData);