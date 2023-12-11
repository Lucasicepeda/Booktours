
async function postRegister(value) {
    const response = await fetch('http://52.55.101.199:8080/api/user/register', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    return content;
};

export { postRegister };