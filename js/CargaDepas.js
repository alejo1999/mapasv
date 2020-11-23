//Declaracion de Variables
const dHistoria = document.getElementById('dHistoria');
var muni,turis;
var infobtn = document.querySelector('#infocheck');
var close = document.querySelector('.close-icon');

infobtn.addEventListener('click', () =>{
    let info = document.getElementById('info');
    info.classList.add('activate');
});

close.addEventListener('click', () =>{
    let info = document.getElementById('info');
    info.classList.remove('activate');
});


window.onload = () => {
    try 
    {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        if(url.searchParams.get("id") === null || url.searchParams.get("id") == "")
        {
            window.location.href = 'index.html';
        }
        else
        {
            var id = url.searchParams.get("id");
            onloadinfo(id);
        }
    } 
    catch (err)
    {
        console.log("Issues with Parsing URL Parameter's - " + err);        
    }
}

function onloadinfo(id) 
{
    fetch("./js/departamentos.json")
        .then(function(resp) 
        {
            return resp.json();
        })
        .then(function(info) 
        {
            if(info.findIndex(obj => obj.id == id) != -1)
            {
                i = info.findIndex(obj => obj.id == id);
                muni = info[i].municipios; 
                turis = info[i].centros_turisticos;
                var NombreDepa = document.getElementById('depaN');
                var listam = document.getElementById('municipios');
    
                for (var b = 0; b < muni.length; b++) 
                {
                    var entrada = document.createElement('li');
                    entrada.appendChild(document.createTextNode(muni[b]));
                    listam.appendChild(entrada);
                }
    
                dHistoria.innerHTML = info[i].dato_historico;
    
                var lista2 = document.getElementById('cturistico');
                for (var t = 0; t < turis.length; t++) {
                    var entrada2 = document.createElement('li');
                    entrada2.appendChild(document.createTextNode(turis[t]));
                    lista2.appendChild(entrada2);
                }              
                NombreDepa.innerHTML= info[i].departamento;
    
                //Lagos
                var lagos = document.querySelector('#lago');
                lagos.innerHTML = `<p>${info[i].lagos}</p>`;
    
                //Rios
                var rios = document.querySelector('#rios');
                rios.innerHTML = `<p>${info[i].rios}</p>`;
    
                //Volcanes
                var volcanes = document.querySelector('#volcanes');
                volcanes.innerHTML = `<p>${info[i].volcanes} ${info[i].cerros}</p>`;
    
                //Imagenes
                var imagen = document.querySelector('#imagen');
                imagen.src = `img/departamentos/${info[i].imagen}.png`;
    
                //Personajes celebres
                var personajes_celebres = document.querySelector('#personajes');
                personajes_celebres.innerHTML = `<p><b>Alcalde:</b> ${info[i].personajes.alcalde}</p>`;
                if(info[i].personajes.escritores !== "")
                {
                    personajes_celebres.innerHTML += `<p><b>Escritores:</b> ${info[i].personajes.escritores}</p>`
                }
                if(info[i].personajes.celebres !== "")
                {
                    personajes_celebres.innerHTML += `<p><b>Celebres:</b> ${info[i].personajes.celebres}</p>`
                }
            }
            else
            {
                window.location.href = 'index.html';
            }
        })
}



