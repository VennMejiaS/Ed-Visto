document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Realiza una solicitud GET al servidor para obtener la historia generada por OpenAI
        const response = await fetch('http://localhost:3000/api/narrativa');
        
        
        if (!response.ok) {
            throw new Error('Error al obtener la información de la historia');
        }

        const data = await response.json();
        const caminoStoryTextarea = document.getElementById('camino-story');
        caminoStoryTextarea.value = data.textoGenerado; // Ajusta según la estructura de tu respuesta del servidor
    } catch (error) {
        console.error(error);
    }
});