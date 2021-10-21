class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}
let customer =new Customer(1,"12345");
 //prototyping
 customer.name="mercan ulu"//instance prototyping
 console.log(customer.name)

Customer.birSey="Bir şey"//class prototyping
console.log(Customer.birSey)
console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
constructor(firstName,id,customerNumber){
super(id,customerNumber)
this.firstName=firstName
}}

class CorporateCustomer extends Customer{
constructor(companyName,id,customerNumber){
super(id,customerNumber)
this.companyName=companyName
}}

