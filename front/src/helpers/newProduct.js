const newProduct = async (product) => {

    const token = localStorage.getItem('token');
    
    const response = await fetch('http://52.55.101.199:8080/api/product', {
        method: 'POST',
        body: product,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

    const content = await response.json();
    return content;
};

export { newProduct };