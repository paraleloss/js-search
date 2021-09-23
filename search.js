const herramientas =[

    {nombre: 'Registro inventario B3', valor: 'Registro Inventario final Perecederos B3', url:'https://teams.wal-mart.com/sites/PAWalmex/Perecederos/Autoservicio/_layouts/15/FormServer.aspx?XsnLocation=https://teams.wal-mart.com/sites/PAWalmex/Perecederos/Autoservicio/202104_Inv_Auto_Final/Forms/template.xsn&OpenIn=browser&SaveLocation=https://teams.wal-mart.com/sites/PAWalmex/Perecederos/Autoservicio/202104_Inv_Auto_Final&Source=https://teams.wal-mart.com/sites/PAWalmex/Perecederos/Autoservicio/202104_Inv_Auto_Final'},
    {nombre: 'Registro inventario S2', valor: 'Registro Inventario final Perecederos S2', url:'https://teams.wal-mart.com/sites/PAWalmex/Perecederos/Autoservicio/_layouts/15/FormServer.aspx?XsnLocation=https://teams.wal-mart.com/sites/PAWalmex/Perecederos/Autoservicio/202104_Inv_Auto_Final/Forms/template.xsn&OpenIn=browser&SaveLocation=https://teams.wal-mart.com/sites/PAWalmex/Perecederos/Autoservicio/202104_Inv_Auto_Final&Source=https://teams.wal-mart.com/sites/PAWalmex/Perecederos/Autoservicio/202104_Inv_Auto_Final'},    
    {nombre: 'Perecederos en acción Diario', valor: 'Reporte Diario de Perecederos en Acción', url:'https://gcp.tableau.prod.walmart.com/views/PerecederosenAccion/VistaTiendaDiario?:embed=y#5'},																			
]

const texto = document.querySelector('#texto')
const boton = document.querySelector('#boton-buscar')
const resultado = document.querySelector('#resultado')

const filtrar = ()=>{
    resultado.style.display = 'block';
    resultado.innerHTML = '';
    const textuser= texto.value.toLowerCase();

    if (textuser === ''){
        resultado.innerHTML += `
            <li> Escribe algo en el cuadro de búsqueda...</li>
        `
    }else{

    for (let herramienta of herramientas){
        let nombre = herramienta.nombre.toLowerCase();
        let valor = herramienta.valor.toLowerCase(); 
        let url = herramienta.url.toLowerCase();                   
        if(nombre.indexOf(textuser) !== -1){
            resultado.innerHTML +=  `
            <li><a href ="${herramienta.url}" target="_blank">${herramienta.nombre} : <span>${herramienta.valor}</span></a></li>                        
            `                     
        }
    }

    if (resultado.innerHTML === ''){
        resultado.innerHTML += `
            <li> Sin coincidencias...</li>
        `
    }
 }
 document.onclick = function (e) {
    e = e;
    var target = e.target;
    var element = document.getElementById('resultado');
    var buscar = document.getElementById('boton-buscar');
    do {
     if (element == target || buscar == target) {
      // click dentro
      return;
     }
     target = target.parentNode;
    } while (target)
    // click fuera 
    element.style.display = 'none';
   }
 
}/*filtrar()*/


boton.addEventListener('click', filtrar)
texto.addEventListener('keyup', filtrar)

