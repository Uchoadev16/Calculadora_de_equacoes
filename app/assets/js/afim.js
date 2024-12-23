function calcular() {

    let axTXT = window.document.getElementById('ax')
    let bTXT = window.document.getElementById('b')
    let res = window.document.getElementById('res')
    let cal = window.document.getElementById('cal')

    let ax = Number(axTXT.value)
    let b = Number(bTXT.value)

    if (axTXT.value.length == 0 && bTXT.value.length == 0) {

        res.innerHTML = ''
        res.innerHTML =
            `Formúla: ${ax}X + ${b} = 0<br>
        resposta: esta função não existe!
        `
        cal.innerHTML = ''
    } else if (axTXT.value.length == 0) {

        res.innerHTML = ''
        res.innerHTML =
            `Formúla: ${ax}X + ${b} = 0<br>
        resposta: esta função não existe!
        `
        cal.innerHTML = ''
    } else if (bTXT.value.length == 0) {

        const x = 0 / ax
        res.innerHTML = ''
        res.innerHTML =
            `Formúla: ${ax}X + ${b} = 0<br>
        resposta: X é igual á ${x}
        `
        cal.innerHTML = ''
        cal.innerHTML =
            `${ax}X + ${b} = 0<br>
        ${ax}X = 0<br>
        x = 0/${ax}<br>
        x = ${x}

        `
    } else if (axTXT.value.length != 0 && bTXT.value.length != 0) {

        const bNegativoOuPositivo = -b
        const x = bNegativoOuPositivo / ax

        res.innerHTML = ''
        res.innerHTML =
            `Formúla: ${ax}X + ${b} = 0<br>
        resposta: X é igual a ${x}
        `

        cal.innerHTML = ''
        cal.innerHTML =
            `${ax}X + ${b} = 0<br>
        ${ax}X = ${bNegativoOuPositivo}<br>
        X = ${bNegativoOuPositivo}/${ax}<br>
        X = ${x}
        `
    }
}