const updateUser = async (data) => {

    const token = localStorage.getItem('token');

    const response = await fetch('http://52.55.101.199:8080/api/user', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    return content;
};

export { updateUser };