//1
let firstName = prompt("как тебя зовут?");
let lastName = prompt("какая у тебя фамилия?");

let greeting = `привет, ${firstName} ${lastName}!`;

console.log(greeting);




//2
let num1 = prompt("первое число:");
let num2 = prompt("второе число:");

if (num1 == num2) {
    console.log("они равны.");
} else if (num1 > num2) {
    console.log("первое число больше.");
} else {
    console.log("второе число больше.");
}

//3
let color = prompt("Enter the traffic light color (red, yellow, green):").toLowerCase();

switch (color) {
    case "red":
        console.log("остановись.");
        break;
    case "yellow":
        console.log("жди зелёного.");
        break;
    case "green":
        console.log("можешь идти.");
        break;
    default:
        console.log("выбери ты уже!!!!!!.");
}
