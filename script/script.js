// function
//get values
//calculate
//output

//bmi formula weight / height squared * 703

function calculateBmi() {
    let weight = document.querySelector('#weight')
    let height = document.querySelector('#height')

    let bmi = weight.value / ( (height.value/100) ** 2) 

    document.getElementById('message').innerHTML = 'Your BMI is :'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)

    if (bmi <= 16){
        document.getElementById('message').innerHTML = 'You are underweight'
    }else if (bmi>=22){
        document.getElementById('message').innerHTML = 'You are healthy weight'
    }else ( bmi<=24);{
        document.getElementById('message').innerHTML = 'You are overweight'
    }
}

function reload(){
    window.location.reload()
}