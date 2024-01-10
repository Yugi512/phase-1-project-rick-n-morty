// create the character chards for the page 
fetch('https://rickandmortyapi.com/api/character')
.then((response) => {return response.json()})
.then((data) => {
    let arr = data.results;
    console.log(arr)
    createCharacterCard(arr)
})

let divContainer = document.getElementById('character-cards')

function createCharacterCard(arr){

    for(const character of arr){  
        let cardDiv = document.createElement('div')
        let h2 = document.createElement('h2')
        let img = document.createElement('img')
        let smallDiv = document.createElement('div')
        let p = document.createElement('p')
        let li = document.createElement('li')

        for(const ep of character.episode){
            li.innerText= `${ep}`
        }
        

        h2.innerText = `${character.name}`
        img.classList.add('character-img')
        img.setAttribute('src',`${character.image}`)
        cardDiv.classList.add('card')
        smallDiv.classList.add('scroll-div')
        p.appendChild(li)

        smallDiv.appendChild(p)
        cardDiv.appendChild(img)
        cardDiv.appendChild(h2)
        cardDiv.appendChild(smallDiv)

        divContainer.append(cardDiv)
        console.log(character)
    }
}




// add a event listener that listens for a dble click and when a dble click event is triggered an alert is supossed to pop up and say this character has been likeed( this being the targeted character card )
// function for event listener 



//create a submit event listner for every cahracter card that filters the and tries to finds the specific they were in 
// or have a submt event listner that filter the characters by episode and displays the first 5-10 on the screen 
//fucntion for event listener 



// on every card there will be a list showing the episodes they were in and will have a scroll event listener 
//function for event listener 



//add buttons and label them properly, name them accordingly 
// the buttons should go into the card as a click event listner 
// or a fullscreen