
    function validarNom(){
        limpiar("nemail");
        pattern = new RegExp('^[A-Z]+$', 'i');
        nombre = document.getElementById("nombre");
        nombre.classList.remove("correcto");
        nombre.classList.remove("erroneo");
        comprobar = false;
        var padre = nemail.parentNode;
        if(nombre.value == "" || nombre.value ==" "){
            EsVacio(nombre, padre,"nemail");
        }
        else if(!pattern.test(nombre.value)){

            nombre.classList.add('erroneo');
             var campoAnterior = document.getElementById("nemail");
            var  noNom = document.createElement("p");
            noNom.textContent ='No debe tener n\u00FAmeros';
             noNom.setAttribute("id", "noNom");
             padre.insertBefore(noNom, campoAnterior);
             noNom.classList.add('vacio');
        }
        else {
            nombre.classList.add("correcto");
            comprobar = true;
        }
        return comprobar;
    }
    function validarEmail(){
        var pattern =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        email = document.getElementById("email");
        email.classList.remove("correcto");
        email.classList.remove("erroneo");
        limpiar("nClave");
        comprobar = false;
        var padre = nClave.parentNode;
        if(email.value == "" || email.value ==" "){
        
            EsVacio(email, padre,"nClave");
        }
        else if(!pattern.test(email.value)){
            email.classList.add('erroneo');
             var campoAnterior = document.getElementById("nClave");
            var  noEmail = document.createElement("p");
            noEmail.textContent ='Email inv\u00E1';
            noEmail.setAttribute("id", "noEmail");
             padre.insertBefore(noEmail, campoAnterior);
             noEmail.classList.add('vacio');
        }
        else {
            email.classList.add("correcto");
            comprobar = true;
        }
        return comprobar
    }
    function validarClave(){
        var padre = nClaveCon.parentNode;
        clave = document.getElementById("clave");
        clave.classList.remove("correcto");
        clave.classList.remove("erroneo");
        limpiar("nClaveCon");
        comprobar = false;
        if(clave.value == "" || clave.value ==" "){
           
            EsVacio(clave, padre,"nClaveCon");
        }
        else if (clave.value.length > 8){
            clave.classList.add('erroneo');
            var campoAnterior = document.getElementById("nClaveCon");
           var  noClave = document.createElement("p");
           noClave.textContent ='No debe de tener m\u00E1s de 8 Caracteres';
           noClave.setAttribute("id", "noClave");
            padre.insertBefore(noClave, campoAnterior);
            noClave.classList.add('vacio');
        }
        else {
            clave.classList.add('correcto');
            comprobar = true;
        }
        return comprobar;
    }
    function validarConfirmar(){
        limpiar("saltoLinea");
        claveCon = document.getElementById("claveCon");
        clave = document.getElementById("clave");
        claveCon.classList.remove("correcto");
        claveCon.classList.remove("erroneo");
        var padre = nClaveCon.parentNode;
        comprobar = false;
        if(claveCon.value == "" || claveCon.value ==" "){
            
            EsVacio(claveCon, padre,"saltoLinea");
            //var form = document.getElementById("formulario");
        }
        else if (claveCon.value != clave.value){
            claveCon.classList.add('erroneo');
            var campoAnterior = document.getElementById("saltoLinea");
           var  noClaveCon = document.createElement("p");
           noClaveCon.textContent ='Las contrase\u00F1as no coinciden';
           noClaveCon.setAttribute("id", "noClaveCon");
            padre.insertBefore(noClaveCon, campoAnterior);
            noClaveCon.classList.add('vacio');
        }
        else {
            claveCon.classList.add("correcto");
            comprobar = true;
        }
        return comprobar;
    }
    
    function EsVacio(campo, padre,campoSig){
        campo.classList.add('erroneo');
       // nombre.className += "erroneo";
        var campoAnterior = document.getElementById(campoSig);
       var  vacio = document.createElement("p");
       vacio.textContent ="Rellene este campo";
        vacio.setAttribute("id", "vacio"+campoSig);
        padre.insertBefore(vacio, campoAnterior);
        vacio.classList.add('vacio');
        
    }

function limpiar(campo){
    form = document.getElementById("formulario");
    if(document.getElementById("vacio"+ campo) != null){
    var validar = form.removeChild(document.getElementById("vacio"+ campo));}
    if (campo == "nemail"){
    if(document.getElementById("noNom") != null){
        var validar = form.removeChild(document.getElementById("noNom"));}}
    else if (campo == "nClave"){
        if (document.getElementById("noEmail") != null){
    var validar = form.removeChild(document.getElementById("noEmail"));}}
    else if (campo == "nClaveCon"){
        if (document.getElementById("noClave") != null){
    var validar = form.removeChild(document.getElementById("noClave"));}}
    else if (campo == "saltoLinea"){
        if (document.getElementById("noClaveCon")!= null){
        var validar = form.removeChild(document.getElementById("noClaveCon"))}
    }
    }
function crear(){
    nom = validarNom();
    ema = validarEmail();
    cla = validarClave();
    con = validarConfirmar();
   if (nom && ema && cla && con){
    console.log("correcto");
    alert('La inscripci\u00F3n se ha hecho correctamente');
   }
   else{
    console.log ('no correcto');
   }
}

