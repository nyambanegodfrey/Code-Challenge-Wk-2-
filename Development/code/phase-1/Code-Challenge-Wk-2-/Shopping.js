$function(){
  let callback =function (event) {
    event.preventDefault();
    let input=$('input[type=text][name=item]')

    value=input.value(),

    need=($(event.target).attr('id')===addNeeded),

    item=$('<li><input type="checkbox" name="item">'+ value + '<a href="#"remove</a></li>'),
    
    list
  }
}