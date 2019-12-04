var groceryItems = [];
var str = '<ul>';

$(document).ready(function () {
  $("#groceryInput").submit(function () {
    event.preventDefault();
    $("#groceryInput").hide();

    var grocery1 = document.getElementById('input1').value;
    var grocery2 = document.getElementById('input2').value;
    console.log(grocery1, grocery2);
    var groceryList = (grocery1, grocery2);
    groceryItems.push(groceryList);
    console.log(groceryItems);
    groceryItems.forEach(function(groceryItem) {
      str += '<li>' + groceryItem + '</li>';
    })

    str += '</ul>'
    document.getElementById("userList").innerHTML = str;

    return false;
  })


})