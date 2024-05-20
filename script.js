async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

async function waitCall() {
    try {
        const response = await fetch('URL_DE_L_API');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données de l\'API :', error);
    }
}

async function waitCall() {
    try {
        const response = await fetch('URL_DE_L_API');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données de l\'API :', error.message);
    }
}
