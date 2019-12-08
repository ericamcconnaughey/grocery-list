var groceryItems = [];
var str = '<ul>';


$(document).ready(function () {
  $("#groceryForm").submit(function () {
    event.preventDefault();

    //hide form
    $("#groceryForm").hide();

    //access each input and put into an array   
        //MY WAY
    var grocery1 = document.getElementById('input1').value;
    var grocery2 = document.getElementById('input2').value;
    var grocery3 = document.getElementById('input3').value;
    var grocery4 = document.getElementById('input4').value;
    var grocery5 = document.getElementById('input5').value;
    var grocery6 = document.getElementById('input6').value;
    var grocery7 = document.getElementById('input7').value;
    var grocery8 = document.getElementById('input8').value;
    var grocery9 = document.getElementById('input9').value;
    var grocery10 = document.getElementById('input10').value;
    //console.log(grocery1, grocery2, grocery3, grocery4, grocery5, grocery6, grocery7, grocery8, grocery9, grocery10);
    groceryItems.push(grocery1);
    groceryItems.push(grocery2);
    groceryItems.push(grocery3);
    groceryItems.push(grocery4);
    groceryItems.push(grocery5);
    groceryItems.push(grocery6);
    groceryItems.push(grocery7);
    groceryItems.push(grocery8);
    groceryItems.push(grocery9);
    groceryItems.push(grocery10);
    //console.log(groceryItems);

          /*GRANT'S WAY
          var groceries = document.querySelectorAll('.grocery');
          var groceryItems = [];
          groceries.forEach(function (grocery) {
            groceryItems.push(grocery.value);
          })*/


    //alphabetize array items
    groceryItems.sort();
    //console.log(groceryItems);


    //toUpperCase array items
    const upperCaseGroceries = groceryItems.map(function(groceryItem) {
      return groceryItem.toUpperCase();
    })
    console.log(upperCaseGroceries);


  //display list
  $("#userList").show();
  upperCaseGroceries.forEach(function(groceryItem) {
    str += '<li>' + groceryItem + '</li>';
  })

  str += '</ul>'
  document.getElementById("userList").innerHTML = '<h3>My Grocery List</h3>' + str;
    

  })
})
