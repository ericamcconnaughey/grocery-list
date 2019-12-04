var groceryItems = [];
var str = '<ul>';

$(document).ready(function () {
  $("#groceryInput").submit(function () {
    event.preventDefault();
    $("#groceryInput").hide();

    var groceryList = document.getElementsByClassName('item').value;
    groceryItems.push(groceryList);
    console.log(groceryItems);
    groceryItems.forEach(function (groceryItem) {
      str += '<li>' + groceryItem + '</li>';
    })

    str += '</ul>'
    document.getElementById("userList").innerHTML = str;

    return false;
  })


})