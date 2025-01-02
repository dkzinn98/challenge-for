let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    {name: "Deryk", number: "(61) 98166-3662"},
    {name: "Lucas", number: "(43) 98621-1628"},
    {name: "Davi", number: "(94) 99652-2638"},
    {name: "Deivin", number: "(81) 98232-2832"},
    {name: "Derio", number: "(64) 99679-8762"},
    {name: "Delio", number: "(22) 98155-4672"},
]

// Desta forma abaixo eu estou puxando com conceito FOR

function search(){
    for (let i = 0; i < contacts.length; i++) {
        
        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()){
            p.innerHTML = `Contact found, Name:${contacts[i].name}, Phone:${contacts[i].number}`
            break
        } else {
        p.innerHTML = "I couldn't find this contact, please try again."
    }

}}

/* Desta forma abaixo eu estou puxando com conceito FOR OF 

function search(){
    for(const contact of contacts){
        
        if (input.value.toLowerCase() === contact.name.toLowerCase()){
            p.innerHTML = `Contact found, Name:${contact.name}, Phone:${contact.number}`
            break
        } else {
        p.innerHTML = "I couldn't find this contact, please try again."
    }

}}

*/

