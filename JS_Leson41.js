function show(data) {
    console.log(data);
}

//Завдання 1
var g = (prompt('Введіть число')%2) == 0?"парне":"непарне";
show(g);

//Завдання 2
var h = 10;
var h1 = prompt('Введіть число1');
var h2 = prompt('Введіть число2');
show((Math.abs(h1-h)<Math.abs(h2-h))?h1:h2);

//Завдання 3
var num=1000
while(num<9999){
    show(num);
    num+=3;
};

//Завдання 4
k=-1;
for (var i=1; i<=55; i++){
    show(k+=2);
}

//Завдання 5
var a = prompt('Введіть число a');
var b = prompt('Введіть число b');
var c = prompt('Введіть число c');
var x1=1 , x2=1;
D = Math.pow(b,2)- 4*a*c;
if (D > 0) {
    x1 = (-b + Math.sqrt( D )) / (2*a);
    x2 = (-b - Math.sqrt( D )) / (2*a);
    show("Рішення "+x1+" та "+x2);
} else if (D < 0) {
    show("Дійсних рішень немає");
} else {
    x1 = (-b ) / (2*a);
    show("Рішення "+x1);;
}

//Завдання 6
var num=90
do{
    show(num);
    num-=5;
}while(num>0);

//Завдання 7
k=1;
for (var i=1; i<=20; i++){
    show(k*=2);
}

