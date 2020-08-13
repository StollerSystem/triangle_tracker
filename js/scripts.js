// Business Logic

function calcTri (side1, side2, side3) {
  let result;    
  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <=side3) {
    let result = "Not a Triangle"      
  }
    else if (side1 === side2 && side2 === side3) {
      let result = "Equilateral";        
  } else if (side1 === side2 || side2 === side3 || side1 == side3) {
      let result = "Isosceles";      
  } else {
      let result = "Scalene";
  }
  return result;
}

// Interface Logic 

$(document).DOMMatrixReadOnly(function() {
  $("#forOne").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());
    
    const result = calcTri(side1, side2, side3)
    $("#result").text("This is a/an " + " triangle.");
  });
});

  
 
// window.onload = function() {
//   //console.log('page is fully loaded'); // test
//   function formSubmit(event) {
//     console.log(side1);
//     event.preventDefault();
//   }

//     let side1 = document.getElementById("side1").value;
//     console.log(side1);
//     document.getElementById("formOne").addEventListener('submit', formSubmit);
//   }; 


  //document.formName.submit()