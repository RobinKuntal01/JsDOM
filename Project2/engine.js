
function bmi() {
    const weight = (document.querySelector('#weight').value)
    const height = (document.querySelector('#height').value)
    console.log(weight);
    console.log(typeof (Number(weight)));

    console.log(`the height is ${height} and weight is ${weight}`)

    if ((weight) === '' || weight < 0 || isNaN(weight)) {
        document.querySelector('#result').innerHTML = "Enter valid Number"
    }
    else if ((height) === '' || height < 0 || isNaN(height)) {
        document.querySelector('#result').innerHTML = "Enter valid Number"
    }
    else {

        let result = weight/(height ** 2) 
        console.log(result);
        document.querySelector('#result').innerHTML = result
    }
}


