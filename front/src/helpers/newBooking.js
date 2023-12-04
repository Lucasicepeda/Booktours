const newBooking = async (book) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/api/booking', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });

        const content = await response.json();
        return content;
    } catch (error) {
        console.error('Error en la función newBooking:', error);
        throw error; // Puedes manejar el error según tus necesidades
    }
};

export { newBooking };
