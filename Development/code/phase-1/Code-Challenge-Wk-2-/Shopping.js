const Shopping List= ["Dairy Milk", "Rice", "Chicken", "Pilau Masala", "Coconut"]

//iterate through the array and render the array as a list item

Shopping List.map((item))=>{
  // create a list item
  // add the item as a text content
  // add it to the DOM

  let myListItem=document.createElement('li')
  myListItem.innerHTML =item

  let container=document.getElementById('itemsContainer')

  container.appendChild(myListItem)

}