// Program to compute Fibonacci sequence to N terms.


// Three constant variables for example uses of the function.


// A function to compute the Fibonacci sequence.
// Parameter indicates how many terms to progress to.
function Fibonacci (terms = 0) {
    // Variables for the two terms to add together, starting with 0 and 1.
    let n1 = 0
    let n2 = 1


    // Variable for storing the next term.
    let nextTerm = 0

    // Loop through until we have computed the specified number of terms.
    for (let i = 1; i <= terms; i++) {
        // Print the current value of the first term to the console.
        console.log(n1)

        // Compute the next term and store it.
        nextTerm = n1 + n2

        // Set the values of the values to add together for the next term.
        n1 = n2
        n2 = nextTerm
    }
    return nextTerm
}


// Call the function above with each of the constant variables.
const number = 3
console.log(Fibonacci(number))