document.addEventListener("DOMContentLoaded", function () {
    const h2Element = document.getElementById("carousel-h2");
    const texts = [
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        "A nadie le gusta el dolor para sí mismo, o lo busca y desea tenerlo, apenas porque es dolor...",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    ];
    let currentIndex = 0;

    function updateCarousel() {
        h2Element.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    updateCarousel(); // Muestra el primer texto de inmediato

    setInterval(updateCarousel, 2000); // Cambia cada 2 segundos
});