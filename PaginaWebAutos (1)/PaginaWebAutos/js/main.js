document.addEventListener('DOMContentLoaded', () => {
    // 1. Simulación de búsqueda en el botón del header
    const searchBtn = document.querySelector('.header__search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = prompt('¿Qué vehículo o marca estás buscando en RACE GARAGE?');
            if (query) {
                alert(`Buscando resultados para: "${query}". ¡Pronto implementaremos el catálogo completo!`);
            }
        });
    }

    // 2. Interacción al hacer clic en las tarjetas de vehículos destacados
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        card.addEventListener('click', () => {
            const carTitle = card.querySelector('.car-card__title').innerText;
            const carPrice = card.querySelector('.car-card__price').innerText;
            console.log(`Usuario interesado en: ${carTitle} con precio ${carPrice}`);
        });
    });
});