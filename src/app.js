let sayi1=10
sayi1="mercan"
let student={id:1,name:"mercan"}
//console.log(student)

function save(puan=90,student1) {
    console.log(student1.name+" : "+puan)
}
save(undefined,student);
let students =["mercan","zehra","meryem"]
console.log(students)

let students2=[student,{id:2,name:"meryem"},"Ankara",{city:"İstanbul"}]
console.log(students2)

//rest -gönderilen parametreyi array olarak tutar.

let showProducts = function (id,...products) {//array
    console.log(id)
    console.log(products[0])
    
}
console.log(typeof showProducts)//değişkenin en son aldığı değerin türünü okur.
showProducts(10,["Elma","Armut","Karpuz"])
//params
//varArgs

//spread--bir arrayi ayrıştırır.
let points =[1,2,3,4,50,60,14]
console.log(...points)
console.log(Math.max(...points))

console.log(..."ABC","D",..."EFG","H")

//Destructuring--arrayin değerini değişkene atmayı sağlar.
let populations= [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category ={id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])

//redux
let{id,name1}=category
console.log(id)
console.log(name1)
