function amigoInvisible() {
    let amigos = [];
    let numAmigos = parseInt(prompt("¿Cuántos amigos van a participar?"));
    
    if (isNaN(numAmigos) || numAmigos < 2) {
        alert("Debe ingresar un número válido de al menos 2 personas.");
        return;
    }
    
    for (let i = 0; i < numAmigos; i++) {
        let nombre;
        do {
            nombre = prompt(`Ingrese el nombre del amigo ${i + 1}:`).trim();
            if (!nombre) {
                alert("No puede ingresar un nombre vacío. Inténtelo de nuevo.");
            }
        } while (!nombre);
        amigos.push(nombre);
    }
    
    let asignaciones = asignarAmigos(amigos);
    
    let resultado = "Resultados del amigo invisible:\n";
    for (let [amigo, asignado] of Object.entries(asignaciones)) {
        resultado += `${amigo} → ${asignado}\n`;
    }
    alert(resultado);
}

function asignarAmigos(amigos) {
    let asignaciones = {};
    let disponibles = [...amigos];
    
    for (let amigo of amigos) {
        let posibles = disponibles.filter(a => a !== amigo);
        
        if (posibles.length === 0) {
            return asignarAmigos(amigos); // Si no hay opciones válidas, reiniciar el proceso.
        }
        
        let asignado = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[amigo] = asignado;
        disponibles.splice(disponibles.indexOf(asignado), 1);
    }
    return asignaciones;
}

amigoInvisible();
