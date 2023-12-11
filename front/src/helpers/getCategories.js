const categories = async () => {

    const response = await fetch('http://52.55.101.199:8080/api/category', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const content = await response.json();
    return content.data;
};

export { categories };