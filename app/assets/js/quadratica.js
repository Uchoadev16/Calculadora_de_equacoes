/*fuction for calculate the equation */
function calcular() {

    /*creating the variables*/
    let ax2TXT = window.document.getElementById('ax2');
    let bxTXT = window.document.getElementById('bx');
    let cTXT = window.document.getElementById('c');
    let res = window.document.getElementById('res');
    let cal = window.document.getElementById('cal');

    /*transforming the variables in numbers*/
    let ax2 = Number(ax2TXT.value);
    let bx = Number(bxTXT.value);
    let c = Number(cTXT.value);

    /*if ax2TXT for equal the zero and if bxTXT for equal the zero and if cTXT*/
    if (ax2TXT.value.length == 0 && bxTXT.value.length == 0 && cTXT.value.length == 0) {

        res.innerHTML = ''
        res.innerHTML =
            `formúla:${ax2}X² + ${bx}X + ${c} = 0<br>
             resposta:[ERRO] Está função não existe!`;
        cal.innerHTML = ''

    } else if (bxTXT.value.length == 0 && cTXT.value.length == 0) {

        const raiz = ax2 ** 0.5

        res.innerHTML = ''
        res.innerHTML +=
            `Formúla: ${ax2}X² = 0, está é uma função quadratica incompleta em B e C!<br>
                resposta:X é igual a ${raiz}.<br>`

        cal.innerHTML = ''
        cal.innerHTML +=
            `${ax2}X² = 0<br>
                X² = ${ax2}<br>
                X = √${ax2}<br>
                X = ${raiz}
                `
    } else if (ax2TXT.value.length == 0 && bxTXT.value.length == 0) {

        res.innerHTML = ''
        res.innerHTML =
            `Formúla: ${c} = 0<br>
        resposta:[Erro] falta dados!
        `
        cal.innerHTML = ''

    } else if (ax2TXT.value.length == 0) {

        res.innerHTML = ''
        res.innerHTML =
            `Formúla: ${bx}X + ${c} = 0<br>
         resposta:Está função é uma função afim!`;

        cal.innerHTML = ''
    } else if (bxTXT.value.length == 0) {

        const b2 = bx ** 2
        const ac4 = 4 * ax2 * c
        const delta = b2 - ac4

        if (delta < 0) {

            res.innerHTML = ''
            res.innerHTML =
                `Formúla: ${ax2}X² + ${c} = 0, está é uma função quadratica incompleta em B<br>
             resposta:O delta é menor que zero, as raiz não existe! delta igual a ${delta}`

            cal.innerHTML = ''
            cal.innerHTML =
                `${ax2}X² + ${c} = 0<br>
                △ = ${bx}² - 4 . ${ax2} . ${c}<br>
                △ = ${b2} - ${ac4}<br>
                △ = ${delta}`
        } else {

            const RaizDeDelta = delta ** 0.5
            const ax2Vezes2 = ax2 * 2

            const bxMaisRaiz = -(bx) + RaizDeDelta
            const x1 = bxMaisRaiz / ax2Vezes2

            const bxMenosRaiz = -(bx) - RaizDeDelta
            const x2 = bxMenosRaiz / ax2Vezes2

            res.innerHTML = ''
            res.innerHTML =
                `Formúla: ${ax2}X² + ${c} = 0, está é uma função quadratica incompleta em B<br>
                 resposta:X1 é igual a ${x1} e X2 é igual a ${x2}.<br>`

            cal.innerHTML = ''
            cal.innerHTML +=
                `${ax2}X² + ${c} = 0<br>
                △ = ${bx}² - 4 . ${ax2} . ${c}<br>
                △ = ${b2} - ${ac4}<br>
                △ = ${delta}<br><br>
    
                X1 = ${bx} + √${delta} /${ax2} . 2<br>
                X1 = ${bx} + ${RaizDeDelta} / ${ax2Vezes2}<br>
                X1 = ${bxMaisRaiz} / ${ax2Vezes2}<br>
                X1 = ${x1}<br><br>
    
                X2 = ${bx} - √${delta} /${ax2} . 2<br>
                X2 = ${bx} - ${RaizDeDelta} / ${ax2Vezes2}<br>
                X2 = ${bxMenosRaiz} / ${ax2Vezes2}<br>
                X2 = ${x2}`
        }


    } else if (cTXT.value.length == 0) {

        const b2 = bx ** 2
        const ac4 = 4 * ax2 * c
        const delta = b2 - ac4

        if (delta < 0) {

            res.innerHTML = ''
            res.innerHTML =
                `Formúla: ${ax2}X² + ${bx}X = 0, está é uma função quadratica incompleta em C<br>
             resposta:O delta é menor que zero, as raiz não existe! delta igual a ${delta}`

            cal.innerHTML = ''
            cal.innerHTML =
                `${ax2}X² + ${c} = 0<br>
                △ = ${bx}² - 4 . ${ax2} . ${c}<br>
                △ = ${b2} - ${ac4}<br>
                △ = ${delta}`
        } else {

            const RaizDeDelta = delta ** 0.5
            const ax2Vezes2 = ax2 * 2

            bPositivoOuNegativo = -(bx)
            const bxMaisRaiz = bPositivoOuNegativo + RaizDeDelta
            const x1 = bxMaisRaiz / ax2Vezes2

            const bxMenosRaiz = bPositivoOuNegativo - RaizDeDelta
            const x2 = bxMenosRaiz / ax2Vezes2

            res.innerHTML = ''
            res.innerHTML =
                `Formúla: ${ax2}X² + ${bx}X = 0, está é uma função quadratica incompleta em C<br>
                 resposta:X1 é igual a ${x1} e X2 é igual a ${x2}.<br>`

            cal.innerHTML = ''
            cal.innerHTML +=
                `${ax2}X² + ${bx}X = 0<br>
                △ = ${bx}² - 4 . ${ax2} . ${c}<br>
                △ = ${b2} - ${ac4}<br>
                △ = ${delta}<br><br>
    
                X1 = -(${bx}) + √${delta} /${ax2} . 2<br>
                X1 = ${bPositivoOuNegativo} + ${RaizDeDelta} / ${ax2Vezes2}<br>
                X1 = ${bxMaisRaiz} / ${ax2Vezes2}<br>
                X1 = ${x1}<br><br>
    
                X2 = -(${bx}) - √${delta} /${ax2} . 2<br>
                X2 = ${bPositivoOuNegativo} - ${RaizDeDelta} / ${ax2Vezes2}<br>
                X2 = ${bxMenosRaiz} / ${ax2Vezes2}<br>
                X2 = ${x2}`

        }

    } else if (ax2TXT.value.length !== 0 && bxTXT.value.length !== 0 && cTXT.value.length !== 0) {

        const b2 = bx ** 2
        const ac4 = 4 * ax2 * c
        const delta = b2 - ac4

        if (delta < 0) {

            res.innerHTML = ''
            res.innerHTML =
                `Formúla: ${ax2}X² + ${bx}X + ${c}= 0, está é uma função quadratica completa!<br>
             resposta:O delta é menor que zero, as raiz não existe! delta igual a ${delta}`

            cal.innerHTML = ''
            cal.innerHTML =
                `${ax2}X² + ${bx} + ${c} = 0<br>
                △ = ${bx}² - 4 . ${ax2} . ${c}<br>
                △ = ${b2} - ${ac4}<br>
                △ = ${delta}`
        } else {

            const RaizDeDelta = delta ** 0.5
            const ax2Vezes2 = ax2 * 2

            bPositivoOuNegativo = -(bx)
            const bxMaisRaiz = bPositivoOuNegativo + RaizDeDelta
            const x1 = bxMaisRaiz / ax2Vezes2

            const bxMenosRaiz = bPositivoOuNegativo - RaizDeDelta
            const x2 = bxMenosRaiz / ax2Vezes2

            res.innerHTML = ''
            res.innerHTML =
                `Formúla: ${ax2}X² + ${bx}X + ${c}= 0, está é uma função quadratica completa!<br>
                 resposta:X1 é igual a ${x1} e X2 é igual a ${x2}.<br>`

            cal.innerHTML = ''
            cal.innerHTML +=
                `${ax2}X² + ${bx}X + ${c}= 0<br>
                △ = ${bx}² - 4 . ${ax2} . ${c}<br>
                △ = ${b2} - ${ac4}<br>
                △ = ${delta}<br><br>
    
                X1 = -(${bx}) + √${delta} /${ax2} . 2<br>
                X1 = ${bPositivoOuNegativo} + ${RaizDeDelta} / ${ax2Vezes2}<br>
                X1 = ${bxMaisRaiz} / ${ax2Vezes2}<br>
                X1 = ${x1}<br><br>
    
                X2 = -(${bx}) - √${delta} /${ax2} . 2<br>
                X2 = ${bPositivoOuNegativo} - ${RaizDeDelta} / ${ax2Vezes2}<br>
                X2 = ${bxMenosRaiz} / ${ax2Vezes2}<br>
                X2 = ${x2}`

        }

    }

}





