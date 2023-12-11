const getAllUsers = async () => {

    const token = localStorage.getItem('token');

    const response = await fetch('http://52.55.101.199:8080/api/user/all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

    const content = await response.json();
    return content.data;
};

export { getAllUsers };