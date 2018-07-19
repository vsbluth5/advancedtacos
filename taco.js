// Check that the program is running
console.log("Hello World")

// Get all the divs which have a class=taco
let tacos = document.querySelectorAll('.taco')
console.log(tacos)

// Get the label where we'll write the results
let resultDiv = document.querySelector('#result')

// Declare a counter and start it at zero.
let counter = 0

//  For each taco in the tacos list
tacos.forEach(taco => {
    // Add an event listener which does the following
    // when a taco is clicked
    taco.addEventListener('click', e => {
        // toggle the taco
        taco.classList.toggle('active')
        // Restart the count
        counter=0
        
        // For every t2 in tacos...
        tacos.forEach(t2 => {
            // If the t2's classlist contains active
            if (t2.classList.contains('active')) {
                // increment count
                counter++;
            }
            // Display the result.
            resultDiv.innerHTML = `You selected ${counter} tacos!`
            resultDiv.classList.remove('hidden')
        })
    })




})
