<<<<<<< HEAD
const getBenefit = async () => {
    const response = await fetch('http://localhost:8080/api/benefit', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const content = await response.json();
    return content.data;
};

=======
const getBenefit = async () => {
    const response = await fetch('http://localhost:8080/api/benefit', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const content = await response.json();
    return content.data;
};

>>>>>>> edf39ba066ff11a0c1e5bf276d2f1af66686e1dd
export { getBenefit };