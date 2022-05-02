//exercise 1.

let array =[2, 54, 85, 96];
array.push ('javascript, python');
array.unshift ('html, css')
console.log(array)

let result=array.length
console.log(result)

array.pop()
array.shift()
console.log(array)


//exercise2.

let array2 =['ფორთოხალი', 'ბანანი', 'მსხალი'];
let result2= array2.length;
console.log(result2);

array2.push('ვაშლი', 'ანანასი');
array2.unshift('საზამთრო');
let result3=array2.length
console.log(result3);

array2.splice(2, 0, 'მანგო');
console.log(array2);

array2.pop()
array2.shift()
console.log(array2);

console.log(array2.length);


//exercise3.

let array3 = [12, 25, 3, 6, 8, 14, 7, 23];
let array4 = array3.map(x => x / 3);
console.log(array4);

//exercise4.

let array5 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let array6 = array5.filter(x => typeof(x) == 'number');
console.log(array6);

//exercise5. 

let languages = ['html', 'css', 'javascript', 'python', 'php'].filter(x => x.length > 3);
console.log(languages);

//exercise6.

let array7= ['academy', 'of', 'digital', 'industries'].reduce(function(accumulator,currentValue){
    return accumulator+' '+currentValue;
},
''
)
console.log(array7);

//exercise7.

let array8 = [12, 'google', 32, null, 'yahoo', 25];
let array9=array8.map(function(x){
    if (typeof (x)==='number'){
        return x*x
    }
    if (typeof (x)==='string'){
        return x.toUpperCase();
    } else {
        return x
    }
    });
    console.log(array9);

//exercise8.
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let array10 = words.filter(x=>x.includes('m') || x.includes('M'));
console.log(words);