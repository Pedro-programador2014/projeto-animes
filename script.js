function cordefundo(){
    let data = new Date()
    let agora = 11
    if( agora < 12 && agora > 0){
        document.body.style.backgroundColor = "#E5BA1B"
    }
    else if( agora > 12 && agora < 18){
        document.body.style.backgroundColor = "#F85C2B"
    }

    else{
        document.body.style.backgroundColor = "#332E33"
    }
   
    }

