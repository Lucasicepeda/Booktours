const getConfirmDate = async (date) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`http://52.55.101.199:8080/api/booking/conf/${date.startDate}/${date.endDate}/${date.idProduct}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

    const content = await response.json();
    return content;
};

export { getConfirmDate }