//Program to swap Two Numbers

// let a =10;
// let b =30;
// console.log("a: "+a);
// console.log("b: "+b);
// [a,b]=[b,a];
// console.log("a: "+a)
// console.log("b: "+b)



//Program to find Largest of Three numbers

/*let num = [100,32,900,1000,23,1,0]; 
let largestnum =0;
for(let i of num){
    if(i >= largestnum){
        largestnum = i;
    }
}
console.log(largestnum)*/


//Program to display even Numbers from 1 to 100
/*let evenNumbers =[]
for (let i=1; i<100; i++ ){
    if(i % 2 == 0){
        evenNumbers.push(i)     
    }
}
console.log("Even Numbers : " + evenNumbers)*/


//Program to check the string is palindrome or not
/*function palindrome(name){
    let n =[];
for(let i=0; i<name.length;i++){
    n.push(name[i])
}
let m = n.reverse()
let b=n.join('')
if(name==b){
    console.log(name + " is palindrome")
}
else{
    console.log(name+" is not a plaindrome")
}
return name
}
palindrome("dad")*/




//Program to print the elements of an array in reverse order

/*let n = [1,2,3,4,5,6,7,8,9,10];

let number = [];

for(let i of n.reverse()){
    number.push(i);
}
console.log(number)*/



//program to print the elements of an array present on even position

/*let num = [100,22,33,44,55,66,77,44,56,09];
let evenPosition = []
for(let i in num){
    if(i%2==0){
        evenPosition.push(num[i])
    }
}
console.log(evenPosition)*/

//program to print odd and even numbers from an array and find sum of all odd numbers and even numbers



 /*let num = [1,2,3,4,5,6,7,8,9,10];

let oddNumbers=[];
let evenNumbers=[];
let odd =[];
let n =0

for(let i of num){
 
    if(i % 2==0){
        evenNumbers.push(i)

    }
    else{
      
        oddNumbers.push(i)
        n+=i
        odd.push(n)
    }
}
console.log("odd :" +oddNumbers)
console.log("even :" +evenNumbers)
console.log(odd)*/

//program to find all primenumbers between 1 t0 100 and their sum



//Program to sort the element of an array in ascending order


/*let number = [100,56,10,7,1,9,2,32,44,54];

number.sort(function(a,b){return a-b});

console.log(number)*/



//Explain what a callback function is and provide a sample example


// A callback function passed an argument to another function.

/*function add(...a){
    var add=a[0]
    return add
}

function subtract(...a){
    let sub = a[0]-add(22);
    console.log(sub)
    return sub
}
subtract(100)*/

