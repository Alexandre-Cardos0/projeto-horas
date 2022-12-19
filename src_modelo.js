function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes()
    
    msg.innerHTML=`Agora são ${hora}:${minutos}`;

    

    if(hora >= 0 && hora < 12){
        img.src = "fotomanha.jpg";
        document.body.style.background = '#DAA520';

    }else if(hora >=12 && hora <= 18){
        
        img.src = "fototarde.jpg";
        document.body.style.background = '#CD853F';

    }else{
        img.src = "fotonoite.jpg";
        document.body.style.background = '#1C1C1C';
    }
}