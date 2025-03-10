//votre code ici
function printNumbers(n) {

    let result = "";

    for (let i = 1; i <= n; i++) {
        result += i;

        // Ajouter un espace après chaque nombre sauf le dernier
        if (i < n) {
            result += " ";
          }
    }

    return result;
}

export default printNumbers
