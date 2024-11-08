

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
]

//Aquí optengo un array de cada obejto
const namee = users.map(user => user.user_name);
const descr = users.map(user => user.description);
const ageUser = users.map(user => user.age);
const bandList = users.map(user => user.fav_music.bands);


//Hice un contador considerando longitud del array de usuario, para que posteriormente ciclo for me formara la cantidad de tarjetas acorde a la cantidad de usuarios
let count=0;
for (let i=0; i < namee.length; i++){
    count++;   
}

//Utilice una funcion que tuviera como valor el contador de usuarios
function componenteCard (count){

    const contenedor = document.getElementById("contenedorCards"); //En este contenedor de mi html se agregaran las nuevas tarjetas hijas

    for (let i = 0; i < count; i++) { //Se realiza ciclo for para crear tarjetas con inf
        const nameInCard = document.createElement("div");  //Se crea div
        nameInCard.classList.add("card");  //Se le añade una clase al div

        const pName = document.createElement("p"); //Se crea un parrafo al cual se le agrega como contenido el valor del objeto.
        pName.textContent = `Nombre: ${namee[i]}`; 
        nameInCard.appendChild(pName); //Se agrega elemento a la tarjeta div creada.

        const pdescr = document.createElement("p");
        pdescr.textContent = `Descripción: ${descr[i]}`;
        nameInCard.appendChild(pdescr);

        const pAgeUser = document.createElement("p");
        pAgeUser.textContent = `Edad: ${ageUser[i]}`;
        nameInCard.appendChild(pAgeUser);

        const ulBands = document.createElement("ul"); //Se creo un elemento de lista desordenada en el HTML
        
         bandList[i].map(bands => {
            const liBand = document.createElement("li"); //Se accede al usuario en la posiscion i y se utiliza map para accader al array; se van creando los elementos li
            liBand.textContent = bands; 
            ulBands.appendChild(liBand);//Se agrega al elemento ul que es el padre
        });

        nameInCard.appendChild(ulBands); //Agrega todo el contenido ul al div principal

    
        contenedor.appendChild(nameInCard); //Se agrega todos los elementos al div padre
    }
}


componenteCard(count); //Se manda llamar la función y como parametro se le asigna el contador