const shoppingList=["Dairy Milk", "Rice", "Chicken", "Pilau Masala", "Coconut"]

const container=document.getElementById('itemsContainer')
//iterate through the array and render the array as a list item

shoppingList.map((item)=>{
  // create a list item
  // add the item as a text content
  // add it to the DOM

  let myListItem=document.createElement('li')
  myListItem.innerHTML= item
  container.appendChild('myListItem')
  
})