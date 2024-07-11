const shoppingList=["Milk", "Honey", "Bread", "Butter", "Sugar", "Coffee", "Juice"]
//iterate over the array and render each items as a list
const container=document.getElementById("itemsContainer")
shoppingList.map((item)=>{
//create a list item
//add item as a text content
//add it to the DOM
const myListItem=document.createElement("li")
myListItem.innerHTML=item
container.appendChild(myListItem)
})