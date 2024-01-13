// create the character chards for the page 
fetch('https://rickandmortyapi.com/api/character')
.then((response) => {return response.json()})
.then((data) => {
    let arr = data.results;
    console.log(arr)
    createCharacterCard(arr)
})

let divContainer = document.getElementById('character-cards')
let style =  document.getElementsByTagName('style')
console.log(style[0].innerText)
let styleButton = document.getElementById('style-button')
let form = document.getElementById('ricknmorty-form')

function createCharacterCard(arr){
    forLoopCharacterCard(arr)
    // for(const character of arr){  
    //     let cardDiv = document.createElement('div')
    //     let h2 = document.createElement('h2')
    //     let img = document.createElement('img')
    //     let smallDiv = document.createElement('div')

    //     h2.innerText = `${character.name}`
    //     img.classList.add('character-img')
    //     img.setAttribute('src',`${character.image}`)
    //     img.setAttribute('id',`${character.name}`)
    //     cardDiv.classList.add('card')
    //     smallDiv.classList.add('scroll-div')

    //     cardDiv.appendChild(img)
    //     cardDiv.appendChild(h2)
    //     cardDiv.appendChild(smallDiv)

    //     divContainer.append(cardDiv)
    //     console.log(character)

    //     cardDiv.addEventListener('dblclick',(e) => {
    //         setInterval(alert(`${character.name} has been liked`),1500)
    //     })
    // }
    styleButton.addEventListener('click',(e) => changeBackgroundImage(e))
    form.addEventListener('submit',(e) => {
        submitListener(e)
    })
}


// add a event listener that listens for a dble click and when a dble click event is triggered an alert is supossed to pop up and say this character has been likeed( this being the targeted character card )
// function for event listener 
//for loop function that creates the character cards 
function forLoopCharacterCard(arr){
    for(const character of arr){  
        let cardDiv = document.createElement('div')
        let h2 = document.createElement('h2')
        let img = document.createElement('img')
        let smallDiv = document.createElement('div')
        let p = document.createElement('p')
        let li = document.createElement('li')

        h2.innerText = `${character.name}`
        img.classList.add('character-img')
        img.setAttribute('src',`${character.image}`)
        img.setAttribute('id',`${character.name}`)
        cardDiv.classList.add('card')
        smallDiv.classList.add('scroll-div')
        p.classList.add('para')
            for(const ep of character.episode){
                let ul = document.createElement('ul')
                let li = document.createElement('li')
                ul.appendChild(li)
                li.innerText = ep;
                p.appendChild(ul)
            }
        smallDiv.appendChild(p)
        p.appendChild(li)
        cardDiv.appendChild(img)
        cardDiv.appendChild(h2)
        cardDiv.appendChild(smallDiv)

        divContainer.append(cardDiv)
        console.log(character)

        cardDiv.addEventListener('dblclick',(e) => {
            setInterval(alert(`${character.name} was liked`),1500)
        })
    }
}

//create a submit event listner for every cahracter card that filters the and tries to finds the specific they were in 
// or have a submt event listner that filter the characters by episode and displays the first 5-10 on the screen 
//fucntion for event listener 
//going to have to reset the div and then innerText = '' and then adjust it to show what characters where in the episode
function submitListener(e){
    e.preventDefault()
    let inputValue = document.getElementById('input-text').value
    fetch(`https://rickandmortyapi.com/api/episode/${inputValue}`)
    .then((res) => { return res.json()})
    .then((fetchData) => {
        divContainer.innerHTML = ""
        let characterArr = fetchData.characters

        for(const character of characterArr){  
            fetch(character)
            .then((response3) => {return response3.json()})
            .then((data3) => {
             let cardDiv = document.createElement('div')
             let h2 = document.createElement('h2')
             let img = document.createElement('img')

             h2.innerText = `${data3.name}`
             img.classList.add('character-img')
             img.setAttribute('src',`${data3.image}`)
             img.setAttribute('id',`${data3.name}`)
             cardDiv.classList.add('card')
            
             h2.style.color = "black";
             img.style.height = "35rem";
             cardDiv.appendChild(img)
             cardDiv.appendChild(h2)

             divContainer.append(cardDiv)
             console.log(character)

            cardDiv.addEventListener('dblclick',(e) => {
            setInterval(alert(`${data3.name} was liked`),1500)
                    })
                })
            } 
        })
    form.reset()
}


// on every card there will be a list showing the episodes they were in and will have a scroll event listener 
// use it as an event listner for the smallDiv portion and create it and style it in the css 
//function for event listener 

// so instead of an event listener for scroll do a copy and the header of the small div will say copy and paste into the search bar and it will fetch the episode that was inputted and display all the characters from said episode 

//add buttons and label them properly, name them accordingly 
// the buttons should go into the card as a click event listner 
// or a fullscreen
// so new idea is to have it be like a link 

// function for changing the background image 

function changeBackgroundImage(e){
    console.log(e)

    style[0].innerHTML = ""
    document.body.style.backgroundImage = "url('https://theastroenthusiast.com/wp-content/uploads/2021/09/annotated_small-scaled.jpg')";
    style[0].style.backgroundrepeat= "no-repeat";
    style[0].style.backgroundAttachment = "fixed";
    style[0].style.backgroundSize = "cover";
    style[0].style.display = "flex";
    style[0].style.justifyContent = "center"

    // let img1 = "https://theastroenthusiast.com/wp-content/uploads/2021/09/annotated_small-scaled.jpg"
    // let img2 = "https://www.wallpapertip.com/wmimgs/3-34435_galaxy-wallpaper-hd.jpg"
    // let img3 = "https://static.vecteezy.com/system/resources/previews/004/704/028/large_2x/light-blue-and-green-colorful-dramatic-space-with-colorful-galaxies-and-stars-for-background-free-photo.jpg"
}