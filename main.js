


document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault()
    console.log(event.target.name.value);
    const token = await fetch('https://token-api-wine.vercel.app/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": event.target.name.value
        })
    }).then(res => res.json()).then(res => {
        console.log(res);
        return res
    })

    fetch(`https://token-api-wine.vercel.app/?name=${event.target.name.value}`, {
        headers: {
            Authorization: `Bearer ${token.token}`,
        }
    }).then(res => res.json()).then(res => console.log(res))



})