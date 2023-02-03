//constructor y clase para crear los objetos

class Clima {
  constructor(
    nombre,
    pais,
    id,
    mar,
    temperaturaEnero,
    temperaturaAbril,
    temperaturaJulio,
    temperaturaSeptiembre,
    lluviaEnero,
    lluviaAbril,
    lluviaJulio,
    lluviaSeptiembre,
    diasSolEnero,
    diasSolJulio,
    nieve,
    huracanes,
    tornados
  ) {
    this.nombre = nombre;
    this.pais = pais;
    this.id = id;
    this.mar = mar;
    this.temperaturaEnero = temperaturaEnero;
    this.temperaturaAbril = temperaturaAbril;
    this.temperaturaJulio = temperaturaJulio;
    this.temperaturaSeptiembre = temperaturaSeptiembre;
    this.lluviaEnero = lluviaEnero;
    this.lluviaAbril = lluviaAbril;
    this.lluviaJulio = lluviaJulio;
    this.lluviaSeptiembre = lluviaSeptiembre;
    this.diasSolEnero = diasSolEnero;
    this.diasSolJulio = diasSolJulio;
    this.nieve = nieve;
    this.huracanes = huracanes;
    this.Tornados = tornados;
  }

  //Dos metodos que sacan el promedio de la temperatura y calulan las lluvias totales
  temperaturaPromedio() {
    return (
      (this.temperaturaEnero +
        this.temperaturaAbril +
        this.temperaturaJulio +
        this.temperaturaSeptiembre) /
      4
    );
  }
  lluviasTotales() {
    return (
      this.lluviaAbril +
      this.lluviaEnero +
      this.lluviaJulio +
      this.lluviaSeptiembre
    );
  }
}

//pusheamos los objetos instanciados en el array

const ciudades = [];

ciudades.push(
  new Clima(
    "roma",
    "italia",
    1,
    true,
    10,
    15,
    25,
    19,
    150,
    300,
    370,
    450,
    18,
    30,
    true,
    false,
    true
  )
),
  ciudades.push(
    new Clima(
      "londres",
      "Reino Unido",
      2,
      true,
      6,
      11,
      24,
      16,
      100,
      330,
      340,
      650,
      4,
      18,
      true,
      false,
      true
    )
  );
ciudades.push(
  new Clima(
    "paris",
    "Francia",
    3,
    false,
    8,
    13,
    25,
    16,
    150,
    370,
    470,
    550,
    10,
    23,
    true,
    false,
    true
  )
);
ciudades.push(
  new Clima(
    "oslo",
    "Noruega",
    4,
    true,
    0,
    3,
    20,
    10,
    250,
    360,
    370,
    550,
    0,
    26,
    true,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "reikjavik",
    "Islandia",
    5,
    true,
    0,
    2,
    7,
    3,
    150,
    200,
    470,
    850,
    0,
    28,
    true,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "casablanca",
    "Marruecos",
    6,
    false,
    14,
    15,
    25,
    19,
    150,
    100,
    70,
    50,
    24,
    30,
    false,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "Moscu",
    "Rusia",
    7,
    false,
    -1,
    5,
    15,
    9,
    150,
    200,
    170,
    150,
    10,
    18,
    true,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "Cabo",
    "Sudafrica",
    8,
    true,
    28,
    15,
    10,
    19,
    250,
    300,
    470,
    350,
    20,
    18,
    false,
    false,
    true
  )
);
ciudades.push(
  new Clima(
    "Tripoli",
    "Libia",
    9,
    true,
    10,
    15,
    25,
    19,
    50,
    100,
    70,
    20,
    20,
    28,
    false,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "Niger",
    "Nigeria",
    10,
    true,
    30,
    25,
    25,
    30,
    350,
    500,
    470,
    450,
    25,
    25,
    false,
    false,
    false
  )
),
  ciudades.push(
    new Clima(
      "sidney",
      "Australia",
      11,
      true,
      25,
      15,
      10,
      19,
      350,
      300,
      470,
      350,
      25,
      8,
      false,
      false,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Darwin",
      "Australia",
      12,
      true,
      30,
      30,
      25,
      29,
      450,
      400,
      570,
      450,
      20,
      18,
      false,
      true,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Bangkok",
      "Tailandia",
      13,
      true,
      28,
      25,
      28,
      29,
      850,
      600,
      370,
      550,
      20,
      18,
      false,
      true,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Dheli",
      "India",
      14,
      false,
      25,
      25,
      25,
      25,
      350,
      350,
      370,
      550,
      28,
      28,
      false,
      true,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Dacca",
      "Bangladesh",
      15,
      true,
      24,
      20,
      25,
      19,
      650,
      700,
      370,
      650,
      20,
      18,
      false,
      true,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Damasco",
      "Siria",
      16,
      true,
      8,
      13,
      35,
      19,
      50,
      100,
      70,
      20,
      20,
      30,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "NY",
      "EE. UU.",
      17,
      true,
      2,
      15,
      29,
      19,
      350,
      400,
      470,
      200,
      10,
      22,
      true,
      true,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Mexico",
      "Mexico",
      18,
      false,
      10,
      14,
      25,
      19,
      150,
      100,
      270,
      150,
      22,
      30,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Rio",
      "Brasil",
      19,
      true,
      32,
      25,
      25,
      29,
      350,
      400,
      270,
      350,
      25,
      20,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Lima",
      "Peru",
      20,
      true,
      10,
      15,
      25,
      28,
      10,
      4,
      15,
      25,
      4,
      4,
      false,
      false,
      false
    )
  );
ciudades.push(
  new Clima(
    "BA",
    "Argentina",
    21,
    false,
    28,
    15,
    14,
    17,
    450,
    300,
    260,
    350,
    20,
    15,
    true,
    false,
    true
  )
);

//introducimos el array en formato JSON en el localstorage, luego lo traemos parseado
const ciudadesStringificado = JSON.stringify(ciudades);
localStorage.setItem("ciudadesStringificado", ciudadesStringificado);
const ciudadesSinJSON = JSON.parse(ciudadesStringificado);
localStorage.getItem("ciudadesSinJSON", ciudadesSinJSON);

//titulo introductorio de la app. interaccion con el DOM
document.getElementById("presentacion").innerHTML =
  "bienvenidos a la app climatica";

//titulo introductorio de la app. interaccion con el DOM
document.getElementById("ciudades").innerHTML = "ciudades";

//llamo por intermedio de un ID un div en el HTML. En el a traves de template literals, voy iterando los datos del array en "tarjetitas." Ademas asocio los metodos del constructor y atraves de un click (utilizacion de eventos) permito determinar que tipo de clima tiene una ciudad
let div = document.getElementById("cartitas");
div.innerHTML = "";
let tempPromedio = "";
let lluviasTotales = "";
for (let i = 0; i < ciudades.length; i++) {
  tempPromedio = ciudades[i].temperaturaPromedio();
  lluviasTotales = ciudades[i].lluviasTotales();
  div.innerHTML =
    div.innerHTML +
    `<div id="${ciudades[i].nombre}" style="border:red 1px solid; margin:50px; padding:150px"> <h2>${ciudades[i].nombre}</h2><h3>${ciudades[i].pais}</h3><h4> temperatura de enero: ${ciudades[i].temperaturaEnero}</h4><h4> Temperatura en abril: ${ciudades[i].temperaturaAbril}</h4><h4>Temperatura en julio: ${ciudades[i].temperaturaJulio}</h4><h4> Temperatura en septiembre:${ciudades[i].temperaturaSeptiembre}</h4><h4>Lluvias en enero: ${ciudades[i].lluviaEnero}</h4><h4>Lluvias en abril: ${ciudades[i].lluviaAbril}</h4><h4>Lluvias en julio: ${ciudades[i].lluviaJulio}</h4> <h4>la temperatura promedio es ${tempPromedio}</h4><h4>las lluvias totales son: ${lluviasTotales} mm.</h4><button onClick = "descripcion(${i})">Descripcion climatica</button></div>`;
  console.log(tempPromedio);
}

function descripcion(i) {
  lluviasTotales = ciudades[i].lluviasTotales();
  tempPromedio = ciudades[i].temperaturaPromedio();
  if ((tempPromedio < 10) & (lluviasTotales < 500)) {
    h2 = document.createElement("h2");
    h2.innerHTML =
      "ES UN CLIMA FRIO Y SECO; extensas areas del centro de rusia y mongolia. Muy escasa vegetacion. Muy pocas especies sobreviven a estas condiciones";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if ((tempPromedio < 10) & (lluviasTotales > 500)) {
    h2 = document.createElement("h2");
    h2.innerHTML =
      "ES UN CLIMA FRIO Y HUMEDO; escandinavia, canada, el sur Argentino y areas de rusia y Alazka. Predominan los bosques compuestos de arces y pinos, y a medido que dismunuye la temperatura se transiciona a la tundra polar";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if (
    (tempPromedio >= 10) &
    (tempPromedio < 20) &
    (lluviasTotales < 500)
  ) {
    h2 = document.createElement("h2");
    h2.innerHTML =
      "ES UN CLIMA TEMPLADO Y SECO; temperaturas moderadas, con escasa precipitaciones. Prevalece la vegetacion baja, casi siempre perenee";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if (
    (tempPromedio >= 10) &
    (tempPromedio < 20) &
    (lluviasTotales > 500)
  ) {
    h2 = document.createElement("h2");
    h2.innerHTML =
      "ES UN CLIMA TEMPLADO Y HUMEDO; prevalece en zonas costeras de latitudes medias (china, argentina, Estados Unidos y casi la totalidad de Europa. Prevalece el bosque caducifolio templeado (manzanos, arces, tilos, pinos etc)";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if ((tempPromedio > 20) & (lluviasTotales > 500)) {
    h2 = document.createElement("h2");
    h2.innerHTML =
      "ES UN CLIMA CALIDO Y HUMEDO;caribe y centroamerica, sudeste asiatico y africa subsahariana. Tambien sudamerica. Luvias abundantes y temperaturas qye van de suaves a muy calidas. Las zonas costeras son propensas a ciclones";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else if ((tempPromedio > 20) & (lluviasTotales < 500)) {
    h2 = document.createElement("h2");
    h2.innerHTML =
      "ES UN CLIMA CALIDO Y SECO Areas deserticas del centro de australia, sectores del centro de africa, Areas de california y Asia. Muy escasas lluvias y temperaturas en su mayoria extremas";
    let divConId = document.getElementById(`${ciudades[i].nombre}`);

    divConId.append(h2);
  } else "no corresponde a ninguna clasificacion climatica de Koppen";
}

//Creo en el DOM un boton, y atraves de los eventos(click) con un boton llamado frio determino que ciudades son frias, y con un boton llamado calido, cuales son las ciudades calidas
//boton calido
let h2a = document.createElement("h2");
h2a.innerHTML =
  "Estas ciudades presentan una temperatura superior a 25 grados en enero";
document.body.appendChild(h2a);
let botonCalido = document.createElement("button");
botonCalido.innerText = "calido";
botonCalido.addEventListener("click", () => {
  const filtradoEnero1 = ciudades.filter((ciudad) => {
    return ciudad.temperaturaEnero > 25;
  });
  let lista1 = "";
  for (let i = 0; i < filtradoEnero1.length; i++) {
    console.log(filtradoEnero1.length);
    lista1 = lista1 + filtradoEnero1[i].nombre + " " + ",";
  }
  localStorage.setItem("paisesCalidos", lista1);
  localStorage.getItem("paisesCalidos");

  let h3 = document.createElement("h3");
  h3.append("Las ciudades son   " + lista1);
  document.body.appendChild(h3);
});
document.body.appendChild(botonCalido);

//boton frio

let h2b = document.createElement("h2");
h2b.innerHTML =
  "Estas ciudades presentan una temperatura inferior a 7 grados en enero";
document.body.appendChild(h2b);

let botonFrio = document.createElement("button");
botonFrio.innerText = "frio";
botonFrio.addEventListener("click", () => {
  const filtradoEnero1 = ciudades.filter((ciudad) => {
    return ciudad.temperaturaEnero < 7;
  });
  let lista1 = "";
  for (let i = 0; i < filtradoEnero1.length; i++) {
    console.log(filtradoEnero1.length);
    lista1 = lista1 + filtradoEnero1[i].nombre + " " + ",";
  }

  localStorage.setItem("paisesFrios", lista1);

  localStorage.getItem("paisesFrios");
  let h3 = document.createElement("h3");
  h3.append("Las ciudades son  " + lista1);
  document.body.appendChild(h3);
});
document.body.appendChild(botonFrio);
