let generarDominio = function(){
    let pronombres = ['the', 'our', 'your', 'my', 'their', 'this', 'that'];
    let adjetivos = ['innovative', 'leading', 'dynamic', 'modern', 'advanced', 'creative', 'strategic', 'smart', 'efficient'];
    let sustantivos = ['solution', 'platform', 'service', 'technology', 'strategy', 'concept', 'vision', 'network', 'system', 'project', 'idea', 'enterprise', 'software', 'development', 'application', 'innovation'];
    let extensiones = ['.com', '.org', '.net', '.info', '.biz', '.io', '.edu', '.gov', '.co', '.us', '.uk', '.es', '.de', '.fr', '.it', '.ru', '.cn', '.jp', '.in', '.ca', '.au', '.br', '.mx', '.ar', '.cl'];
    let dominio = '';
    for(let componenteDominio = 0; componenteDominio < 4; componenteDominio++){
        if(componenteDominio == 0){
            let randomNumberPronombres = Math.floor(Math.random()*pronombres.length);
            dominio += pronombres[randomNumberPronombres];
        }
        else if(componenteDominio == 1){
            let randomNumberAdjetivos = Math.floor(Math.random()*adjetivos.length);
            dominio += adjetivos[randomNumberAdjetivos];
        }
        else if(componenteDominio == 2){
            let randomNumberSustantivos = Math.floor(Math.random()*sustantivos.length);
            dominio += sustantivos[randomNumberSustantivos];
        }
        else{
            let randomNumberExtension = Math.floor(Math.random()*extensiones.length);
            dominio += extensiones[randomNumberExtension];
        }
        }
        document.getElementById("campovacio").value = dominio;
        console.log(dominio);
}
