//Votre code ici
function add(a, b) {
    // Convertir les entrées en nombres
    const numA = Number(a);
    const numB = Number(b);
    
    // Vérifier que les conversions sont valides
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error("Les paramètres doivent être des nombres valides");
    }
    
    // Effectuer l'addition
    return numA + numB;
}

export default add;