const display = document.getElementById('display');
const btnGenerator = document.getElementById('generator');
const btnCopy = document.getElementById('copy');

btnGenerator.addEventListener('click', () => {
    const numbers = [];
    for (let i = 0; i <= 9; i++) {
        numbers.push(i.toString());
    }
    
    const lowercaseLetters = [];
    for (let i = 97; i <= 122; i++) {
        lowercaseLetters.push(String.fromCharCode(i))
    }
    
    const uppercaseLetters= [];
    for (let i = 65; i <= 90; i++) {
        uppercaseLetters.push(String.fromCharCode(i));
    }
    
    const especialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?'];


    const allCharacters = numbers.concat(numbers, lowercaseLetters, uppercaseLetters, especialCharacters);

    function generarContraseña(longitud) {
        let contraseña = '';
        for (let i = 0; i < longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * allCharacters.length);
            contraseña += allCharacters[indiceAleatorio];
        }
        return contraseña;
    }

    const length = document.getElementById('length');
    const valuelength = length.value;
    
    const data = generarContraseña(valuelength);
    display.textContent=data
})

btnCopy.addEventListener('click', () => {
    try {
        const data = display.textContent
        navigator.clipboard.writeText(data)
        console.log('Contraseña copiada exitosamente!')
    } catch (error) {
        console.log('Ha ocurrido un error!')
    }
})
