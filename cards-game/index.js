let cards=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbNZ5HysizRH2v7LmEcZ3-TsSyzghMhCCdQ&usqp=CAU",value:1,status:"closed"
    },
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbNZ5HysizRH2v7LmEcZ3-TsSyzghMhCCdQ&usqp=CAU",value:1,status:"closed"
    },
    {image:"https://cdn.videogamesblogger.com/wp-content/uploads/2011/04/thor-god-of-thunder-game-wallpaper-small.jpg",value:2,status:"closed"},
    {image:"https://cdn.videogamesblogger.com/wp-content/uploads/2011/04/thor-god-of-thunder-game-wallpaper-small.jpg",value:2,status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSncyh9zHeEI-2ycHVLrfH1MX-chNK0kw_tlg&usqp=CAU",value:3,status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSncyh9zHeEI-2ycHVLrfH1MX-chNK0kw_tlg&usqp=CAU",value:3,status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvf3G-iiZgqkb3Udk9P68O04wQMfdJVJ9Rg&usqp=CAU",value:4,status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvf3G-iiZgqkb3Udk9P68O04wQMfdJVJ9Rg&usqp=CAU",value:4,status:"closed"
    },
    {
        image:"https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",value:5,status:"closed"
    },
    {
        image:"https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",value:5,status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4it_kGUkkgFUeIw3teT6eyvQkTtLFVfKSwg&usqp=CAU",value:6,status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4it_kGUkkgFUeIw3teT6eyvQkTtLFVfKSwg&usqp=CAU",value:6,status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXOyXN-QtkhSuk8h9iFFkHf0yYerA1DpJHUQ&usqp=CAU",value:7,status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXOyXN-QtkhSuk8h9iFFkHf0yYerA1DpJHUQ&usqp=CAU",value:7,status:"closed"
    },
    {
        image:"https://c4.wallpaperflare.com/wallpaper/713/828/896/cats-cat-baby-animal-kitten-wallpaper-preview.jpg",value:8,status:"closed"
    },
    {
        image:"https://c4.wallpaperflare.com/wallpaper/713/828/896/cats-cat-baby-animal-kitten-wallpaper-preview.jpg",value:8,status:"closed"
    }
]
//durnsten shuffling algo
let temp;
for(let i=cards.length-1;i>=0;i--)
{
    let j=Math.floor(Math.random()*(i+1));//i+1 liya , i nahi so that we have less chances of getting the same number again or else it is swapped by itself
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}
let copy=cards;
function dispcards(data){
    let cardstr="";
    data.forEach(function(card,index){
        cardstr+=`
        <div class="card-item" style="background-image:url('${card.image}')">
            <div class=" overlay ${card.status}" onclick="opencard(${index})">
            </div>
        </div>
        `;
    });

document.getElementById('card').innerHTML=cardstr;
}
dispcards(cards)
//console.log(cards)
//now we want to hide all the cards
let cardcount=1;
let val1=null,val2=null;
let score=0;
function opencard(index){
cards[index].status="opened";
if(cardcount===1){
    val1=cards[index].value;
    cardcount++;
}
else if(cardcount===2)
{
    val2=cards[index].value;
    if(val1===val2)
    {
        score++;
        document.getElementById('score').innerHTML=score;
        cardcount=1;
    }
    else{
        alert("game over: all pictures will be reshuffled");
        location.reload();
    }
}
dispcards(cards);
}