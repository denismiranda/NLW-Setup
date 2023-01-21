const button = document.querySelector("header button")

button.addEventListener('click', add)



function add(){ 

    const today = new Date().toLocaleDateString()
    
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert('‼ Day already included ‼')
        return
    } 


    nlwSetup.addDay(today)
}
