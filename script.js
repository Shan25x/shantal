const bolsas= [
    {
        imagen: 'imagen1.webp',
        titulo: 'CERAVE ANTI-IMPERFECCIONES',
        descripcion: 'Gel para pieles grasas o con acné',
        precio: '$350.99 MXN',
        link: 'http://cerave.mx/'
    },
    {
        imagen: 'imagen2.webp',
        titulo: 'HIDRATANTE SLAM DUNK',
        descripcion: 'Crema para piel normal a seca',
        precio: '$405.99 MXN',
        link: 'https://www.uhlala.mx/products/slam-dunk-bubble-skincare-crema-hidratante'
    },
    {
        imagen: 'imagen3.webp',
        titulo: 'GEL LIMPIADOR',
        descripcion: 'Limpia sebo, suciedad y maquillaje',
        precio: '$450.99 MXN',
        link: 'http://cerave.mx/'
    },
    {
        imagen: 'imagen4.webp',
        titulo: 'LIMPIADOR FACIAL',
        descripcion: 'Limpieza profunda sin resecar',
        precio: '$500.99 MXN ',
        link: 'https://www.cetaphil.com.mx/'
    }
];

function crearCatalogo() {
    const catalogo = document.getElementById('catalogo');

    bolsas.forEach(bs => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${bs.imagen}" alt="${bs.titulo}">
            <h2>${bs.titulo}</h2>
            <p>${bs.descripcion}</p>
            <p class="price">${bs.precio}</p>
            <a href="${bs.link}" target="_blank">
                <button>Comprar</button>
            </a>
        `;

        catalogo.appendChild(card);
    });
}

// Llamar a la función para crear el catálogo
crearCatalogo();
