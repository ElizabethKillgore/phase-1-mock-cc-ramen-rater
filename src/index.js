document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded")
     
fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramenData => { 
        ramenData.forEach(ramen => {
        addImage(ramen)
        })
    console.log(ramenData) 
    })
    
    function addImage(ramen) {
        let ramenImage = document.createElement('img')
        ramenImage.src = ramen.image
        let ramenImageContainer = document.querySelector('#ramen-menu')
        ramenImageContainer.append(ramenImage)
        ramenImage.addEventListener('click', (e) => {
                displayRamenDetails(ramen)
         }) 
    }
    
    function displayRamenDetails(ramen) {
        let ramenImageDetail = document.querySelector('.detail-image')
        ramenImageDetail.src = ramen.image
        let ramenName = document.querySelector('.name')
        ramenName.className = 'name'
        ramenName.innerText = ramen.name
        let ramenRestaurant = document.querySelector('.restaurant')
        ramenRestaurant.className = 'restaurant'
        ramenRestaurant.innerText = ramen.restaurant    
    } 
    
    let newRamenForm = document.querySelector('#new-ramen')
    newRamenForm.addEventListener('submit', addNewRamen)
        function addNewRamen(e) {
        e.preventDefault() 
        console.log(e)
        let newRamen = {
            name:e.target[0].value,
            restaurant:e.target[1].value,
            image:e.target[2].value,
        }
        
    addImage(newRamen)
    
    }
    

    

    })
    
     
         
            
    
    




      
    
    
    
    
    
    
    
    
    
    
    
    
    
