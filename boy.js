//Math - модуль. floor - окгругление до целого. Умножая случайное число на 5, 
//мы получаем число в диапазоне от 0 до 5, не включая 5
// Math.random генерирует числа от 0 до 1, не включая 1, и эти числа в данном случае
// умножаются на 5 (0*5-0.999*5)
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1
var guess; 
var hits = 0;
var guesses = 0;
var isSunk = false;
let arr = []

while (isSunk == false) {
    // prompt вызывает на экран диалоговое окно с переданной 
    //строкой и предоставляет место, в котором пользователь может ввести ответ
    guess = prompt("ГАААТОВСЬ! ЦЕЕЕЕЕЕЛЬСЬ! ПЛИИИИ!!!! (введи номер от 0 до 6):");
    //если введенное значение не входит в диапазон от 0 до 6
    if (guess < 0 || guess > 6) { // || - ИЛИ
        //вызываем окно с сообщением
        alert("Please enter a valid cell number!");
        } else if(isNaN(guess) ){
        alert("Нужно ввести ЧИСЛО!")
    }
    
         else {
        //иначе: прибавляем к значению количество попыток одну новую попытку и... 
        //новое условие при вводе валидного числа
        if ((guess == location1 || guess == location2 || guess == location3) && arr.includes(guess)) {
            alert("Это число уже было");
            guesses = guesses + 1;
          } else if (guess == location1 || guess == location2 || guess == location3) {
            arr.push(guess);
            hits = hits + 1;
            guesses = guesses + 1;
            alert("HIT!");
            if (hits == 3) {
              isSunk = true;
              alert("Ты потопил мой корабль!");
            }
            
            } else {
                alert("MISS");
                guesses = guesses + 1;
            }
}
}

var stats = "Тебе потребовалось " + guesses + " попытки, чтобы потопить корабль, " +
 "что означает, что твочность твоей стрельбы равняется " + (3/guesses);
alert(stats);
