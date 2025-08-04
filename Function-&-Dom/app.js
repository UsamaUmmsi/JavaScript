// function greetUser (){   
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// }

// greetUser()


// function greetUser(username , lastname , age){
//     console.log('hello ' + username + lastname + age);
// }

// greetUser(' Abdullah ' , 20 , ' khan ')


// let firstName = prompt("Enter Your FirstName")
// let lastName = prompt("Enter Your LastName")
// let age = prompt("25")


// function userDetails (username , lastname , age){
//     alert('hello' + username + " " + lastname + ",age: " + age)
// }

// userDetails(firstName , lastName , age)


function sum(num1 , num2){
    console.log('sum of two number ===>' , num1 + num2)
}
sum(19 , 20)


var lastname = 'khan'

function greetUser (){
    var username = 'abdullah'
    console.log(username + lastname);
}

console.log(username)
console.log(lastname)

greetUser()



























function showString(){
    console.log('hello world')
    return 'abdullah'
}
// showString()
var myFunc = showString()
console.log(myFunc);






function percentageCal (marks1 , marks2 , marks3 , marks4){
    var totalMarks = 400;
    var obtainedMarks = marks1 + marks2 + marks3 + marks4
    return obtainedMarks / totalMarks * 100

}

var usmanPercentage = percentageCal(10 , 50 , 90 ,60);

console.log(usmanPercentage);
