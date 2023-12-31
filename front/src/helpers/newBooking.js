const newBooking = async (book) => {

    const token = localStorage.getItem('token');
    
    const response = await fetch('http://52.55.101.199:8080/api/booking', {
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
};

export { newBooking };