/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const BASE_URL = "https://platzi-avo.vercel.app/";
const API_URL = BASE_URL + "api/avo";
const appNode = document.querySelector("#app");


// Intl
// 1 - format fechas
// 2 - format monedas
const INTL_USD = new Intl.NumberFormat('es-SV', {
    style: "currency",
    currency: "USD"
});

const formatPrice = (price) => {
    return INTL_USD.format(price);
}

async function obtenerDatos() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const allItems = [];
    data.data.forEach((item) => {
        //crear imagen
        const img = document.createElement('img');
        img.src = BASE_URL + item.image;
        //crear titulo
        const titulo = document.createElement('h2');
        titulo.textContent = item.name;
        titulo.className = "text-xl text-red-600";
        //crear precio
        const precio = document.createElement('div');
        precio.textContent = formatPrice(item.price);

        const container = document.createElement('div');
        container.append(img, titulo, precio)

        allItems.push(container);
    });
    appNode.append(...allItems);
}

obtenerDatos();