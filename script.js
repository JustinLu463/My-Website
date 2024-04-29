function generateFireflies() {
    const firefliesContainer = document.getElementById('fireflies');
    const numberOfFireflies = 75; // Adjust the number of fireflies

    for (let i = 0; i < numberOfFireflies; i++) {
        let firefly = document.createElement('div');
        firefly.className = 'firefly';

        // Randomize firefly size and initial position
        const fireflySize = Math.random() * 10 + 5; // Fireflies are between 5px and 15px
        firefly.style.width = `${fireflySize}px`;
        firefly.style.height = `${fireflySize}px`;
        firefly.style.left = `${Math.random() * 100}%`;
        firefly.style.top = `${Math.random() * 100}%`;

        // Increase animation duration to slow down fireflies
        const animationDuration = Math.random() * 40 + 30; // Between 30s and 70s
        const animationDelay = Math.random() * 1; // Random start delay

        firefly.style.animationDuration = `${animationDuration}s`;
        firefly.style.animationDelay = `${animationDelay}s`;

        firefliesContainer.appendChild(firefly);
    }
}

generateFireflies(); // Call the function to generate the fireflies




function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
