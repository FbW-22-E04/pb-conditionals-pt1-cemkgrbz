//1

const int1 = 50, int2 = 92;
if (int1 >= 50 && int1 <= 99 && int2 >= 50 && int2 <= 99) {
    console.log('true')
} else {
    console.log('false')
};

//2

const int3 = 48;
if (int1 >= 50 && int1 <= 99 || int2 >= 50 && int2 <= 99 || int3 >= 50 && int3 <= 99  ) {
    console.log('true')
} else {
    console.log('false')
};

//3

const a = 16, b = 32, c = 68;
if (a > b && a > c) {
    console.log('a is the biggest number')
} else if (b > a && b > c) {
    console.log('b is the biggest number')
} else {
    console.log('c is the biggest number')
};

if (int1 > int2 && int1 > int3) {
    console.log('int1 is the biggest number')
} else if (int2 > int1 && int2 > int3) {
    console.log('int2 is the biggest number')
} else {
    console.log('int3 is the biggest number')
};

//4

const str = 'thon';
if (str.includes('Py')) {
    console.log(str)
} else {
    console.log(`Py${str}`)
};

//5

if (int1 + int2 > 50 && int1 + int2 < 80) {
    console.log('65')
} else {
    console.log('80')
};

//6

const int4 = 5, int5 = 74;
if (int4 + int5 === 8 || int5 - int4 === 8) {
    console.log('true')
} else {
    console.log('false')
};

//7

if (int4 === 15 || int5 === 15 || int5 + int4 === 15) {
    console.log('true')
} else {
    console.log('false')
};

//8

if (int4 % 7 === 0 || int4 % 11 === 0 || int5 % 7 === 0 || int5 % 11 === 0) {
    console.log('true')
} else {
    console.log('false')
};

//9

if (int4 === int5) {
    console.log((int4+int5)*3)
} else {
    console.log(int4+int5)
};

//10

if (int5 > 19) {
    console.log((int5-19)*2)
} else {
    console.log(int5-19)
}

//11

const firstName = 'Daisy', age = '27';
if (age < 13) {
    console.log(`${firstName} is a child`)
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`)
} else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult`)
} else {
    console.log(`${firstName} is an adult`)
}
