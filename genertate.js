

const data = fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
.then(res => res.json())
.then(res =>  {
    res.data.forEach(element => {
        console.log(element)
    });

    console.log(res.data[0])
})




async function getYugiCards(url) {

    const requst = await fetch(url)
    const data = await requst.json()

    console.log(data)
    data.data.forEach(card =>{
        console.log(card)
    })
}

getYugiCards('https://db.ygoprodeck.com/api/v7/cardinfo.php')