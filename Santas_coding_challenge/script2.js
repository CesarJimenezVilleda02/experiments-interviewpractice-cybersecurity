const fs = require("fs");

fs.readFile("./santa2.txt", (err, data) => {
    const gifts = data.toString()
    const medidas = gifts.split('\r\n', 1000);
    // Hasta aqui array de medida
    var areatotal = 0;
    medidas.forEach((meass, i) => { 
        console.log("------------");
        var lados = meass.split("x");
        // console.log(lados)
        var l = lados[0];
        var w = lados[1];
        var h = lados[2];
        var areaCaras = 2*l*w + 2*w*h + 2*h*l;
        var areaSobra;
        var areaCarasYSobra;
        var cara1 = l*w;
        var cara2 = w*h;
        var cara3 = h*l;

        if (l===w && w===h) {
            var areaSobra = l*w;
            var areaCarasYSobra = areaSobra + areaCaras;
            console.log("l===w && w===h");
        } else if (cara1 < cara2 && cara1 < cara3) {
            var areaSobra = l*w;
            var areaCarasYSobra = areaSobra + areaCaras;
            console.log("l y w");
        } else if (cara3 < cara2 && cara3 < cara1) {
            var areaSobra = l*h;
            var areaCarasYSobra = areaSobra + areaCaras;
            console.log("l y h")
        } else if (cara2 < cara1 && cara2 < cara3) {
            var areaSobra = w*h;
            var areaCarasYSobra = areaSobra + areaCaras;
            console.log("h y w");

            // Con caras iguales
        } else if (l===w) {
            if ( l < h) {
                var areaSobra = l*w;
                var areaCarasYSobra = areaSobra + areaCaras;
                console.log("l=w y l<h");
            } else {
                var areaSobra = l*h;
                var areaCarasYSobra = areaSobra + areaCaras;
                console.log("l=w y l>h");
            }
        } else if (l===h) {
            if ( l < w) {
                var areaSobra = l*h;
                var areaCarasYSobra = areaSobra + areaCaras;
                console.log("l=h y l<w");
            } else {
                var areaSobra = l*w;
                var areaCarasYSobra = areaSobra + areaCaras;
                console.log("l=h y l>w");
            }
        } else if (w===h) {
            if ( h < l ) {
                var areaSobra = h*w;
                var areaCarasYSobra = areaSobra + areaCaras;
                console.log("h=w y h<l");
            } else {
                var areaSobra = h*l;
                var areaCarasYSobra = areaSobra + areaCaras;
                console.log("h=w y h>l");
            }
        } 
        // if (l===w && w===h) {
        //     console.log(i);
        //     console.log(areaCaras)
        //     areaCarasYSobra= areaCaras + l*w;
        //     console.log(areaCarasYSobra)
        // }
        console.log(areaCaras);
        console.log(areaSobra);
        console.log(l, w, h);
        console.log(areaCarasYSobra);
        areatotal = areatotal + areaCarasYSobra;
        console.log(areatotal);
    })
})