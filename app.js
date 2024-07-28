// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a,b){
    if(b===0){
        return 1;
    }
    var result= a;
    for(var i=1 ; i<b ; i++){
        result*=a
    }
    return result;
}

var a=+prompt("Enter base");
var b = +prompt("Enter Power");
document.write(power(a,b));

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

function leapYear(year){
    if(year%4===0){
        document.write(year + "Its a leap year")
    }
    else{
        document.write("Its not a leap year")
    }
}
var year=+prompt("Enter a year");
leapYear(year)



// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

function areaofTriangle(a,b,c){
    var s=(a+b+c)/2;
    area=s*(s-a)*(s-b)*(s-c);
    return area;
}

var a=+prompt("Enter value of a");
var b=+prompt("Enter value of b");
var c=+prompt("Enter value of c");

document.write(a,b,c);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


var sub1=+prompt("Enter marks of sub1");
var sub2=+prompt("Enter marks of sub2");
var sub3=+prompt("Enter marks of sub3");

function mainFunction(){
    function average(sub1,sub2,sub3){
        return (sub1,sub2,sub3)/3
    }
    function percentage(sub1,sub2,sub3){
        var totalmarks=300;
        var obtainedmarks=sub1+sub2+sub3;
        return (obtainedmarks/totalmarks)*100
    }

    var ave=average(sub1,sub2,sub3);
    var percent=percentage(sub1,sub2,sub3)
    alert("Average marsk:"+ ave);
    alert("Percenteage:" + percent.toFixed(2));
}
mainFunction()


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


function custom(string,letter){
    for(var i=0 ; i<string.length ; i++){
        if(string[i]===letter)
            return i;
    }

}
var str=prompt("Enter string")
var ltr=prompt("Enter letter")

alert(custom(str,ltr));

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowel(str){
    var vowel="aeiouAEIOU";
    var result="";

    var i=0;
    while(i<str.length){
        if(vowel.indexOf[i]===-1){
            result+=str[i]
        }
        i++
    }
    return result
}

function deleteVowel(str){
var vowel = "aeiouAEIOU"
var result = ""
var i =0;
while(i<str.length){
if(vowel.indexOf(str[i])===-1){
    result += str[i]
}
    i++
}
return result
}

alert(deleteVowel("Welcome bAck"))


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence


function countVowelsPairs(text){
 var count=0;
 var i=0;

 while(i<text.length-1){
    var char1=text[i].toLowerCase();
    var char2 = text[i+1].toLowerCase()
    var vowelPairs=[];

    switch(true){


        case(char1==="a" && (char2==="a" || char2==="e" || char2==="i" || char2==="o" || char2==="u")):
        case(char1==="e" && (char2==="a" || char2==="e" || char2==="i" || char2==="o" || char2==="u")):
        case(char1==="i" && (char2==="a" || char2==="e" || char2==="i" || char2==="o" || char2==="u")):
        case(char1==="o" && (char2==="a" || char2==="e" || char2==="i" || char2==="o" || char2==="u")):
        case(char1==="u" && (char2==="a" || char2==="e" || char2==="i" || char2==="o" || char2==="u")):

        count++
        vowelPairs.push(char1+char2);
      console.log(vowelPairs)
      break
    }
    i++;
 }

 return count;
}
alert (countVowelsPairs("Please read this application and give me gratuity"));

// // 8. The distance between two cities (in km.) is input through the
// // keyboard. Write four functions to convert and print this
// // distance in meters, feet, inches and centimeters.


var distance=+prompt("Enter distance of city1 to city2 in km");
meter(distance);
feet(distance);
inches(distance);
centimeters(distance);

function meter(dis){
    var meterDistance=dis*1000;
    document.write(meterDistance);
}

function feet(dis){
    var feetDistance=dis*3281;
    document.write(feetDistance);
}

function inches(dis){
    var inchesDistance=dis*39370;
    document.write(inchesDistance);

}

function centimeters(dis){
    var centimetersDistance=dis*100000;
    document.write(centimetersDistance);
}

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

var workingHours=+prompt("Enter working hours");
var OverTime , OverPay;
var overtimeHourPay=12;

if(workingHours > 40){
    OverTime=workingHours-40;
    OverPay=OverTime*overtimeHourPay;
    alert(OverPay);
}
else{
    alert("You need to work more");

}

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

function currencyNoteCalcultor(amount){
    var note100=Math.floor(amount/100);
    var remainingAmount=amount%100;

    var note50=Math.floor(remainingAmount/50);
    var remainingAmount=remainingAmount%50;

    var note10=Math.floor(remainingAmount/10);

    return[note100,note50,note10];
}

var am=+prompt("Enter your amount");
var result=currencyNoteCalcultor(am);
console.log("Note 100:" + result[0]);
console.log("Note 50:" + result[1]);
console.log("Note 10:" + result[2]);
