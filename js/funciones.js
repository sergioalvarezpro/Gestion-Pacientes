document.write(`<h2>Lista completa de pacientes.</h2>`);

function pintarPacientes(pListaPacientes) {
    let contenido = `
    <table class="pacientes">
    <tr>
    <th>Id</th>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Edad</th>
    <th>Diagnóstico</th>
    <th>Número SS</th>
    </tr>`
    for (let paciente of pListaPacientes) {
        contenido += `<tr>
        <td>${paciente.id}</td>
        <td>${paciente.nombre}</td>
        <td>${paciente.apellido}</td>
        <td>${paciente.edad}</td>
        <td>${paciente.diagnostico}</td>
        <td>${paciente.numeroSS}</td>
        </tr>`
    }

    contenido += '</table>'
    document.write(contenido);
}

function filterByEdad(pEdadMin, pEdadMax, pListaPacientes) {
    document.write(`<h2>Lista de pacientes con edad entre los 18 y 25 años.</h2>`);
    let listaFiltradaEdad = new Array();

    for (let paciente of pListaPacientes) {
        if (paciente.edad >= pEdadMin && paciente.edad <= pEdadMax) {
            listaFiltradaEdad[listaFiltradaEdad.length] = paciente;
        }
    }

    return listaFiltradaEdad;
}

function solicitarDiagnostico() {
    let diagnostico = prompt('Dime por que diagnóstico quieres filtrar: CERVICALGIA, NEUMONIA, PANCREATITIS, SINUSITIS, URTICARIA');
    diagnostico = diagnostico.toLowerCase();

    return diagnostico;
}

function filterByDiagnostico(pDimeDiagnostico, pListaPacientes) {
    document.write(`<h2>Lista de pacientes con diagnóstico: ${pDimeDiagnostico}.</h2>`);
    let listaFiltradaDiagnostico = new Array();

    for (let paciente of pListaPacientes) {
        if (pDimeDiagnostico === paciente.diagnostico) {
            listaFiltradaDiagnostico[listaFiltradaDiagnostico.length] = paciente;
        }
    }

    return listaFiltradaDiagnostico;
}

function bolaExtra(pListaPacientes) {
    document.write(`<h2>Lista de pacientes con números SS acabados en 0.</h2>`);
    let numerosSSZero = new Array();

    for (let paciente of pListaPacientes) {
        if (paciente.numeroSS % 10 === 0) {
            numerosSSZero[numerosSSZero.length] = paciente;
        }
    }

    return numerosSSZero;
}

pintarPacientes(pacientes);

let listaEdadEntre1825 = filterByEdad(18, 25, pacientes);
pintarPacientes(listaEdadEntre1825);

let dimeDiagnostico = solicitarDiagnostico();

let listaDiagnosticoPaciente = filterByDiagnostico(dimeDiagnostico, pacientes);
pintarPacientes(listaDiagnosticoPaciente);

let listaNumeroSSZero = bolaExtra(pacientes);
pintarPacientes(listaNumeroSSZero);