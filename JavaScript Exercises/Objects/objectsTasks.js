// Task 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2
function isEmpty(obj){
    for (let key in obj) {
        return false; // if loop starts, there is a key
    }
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// Task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

// Task 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
    
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}
  
multiplyNumeric(menu);
alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
