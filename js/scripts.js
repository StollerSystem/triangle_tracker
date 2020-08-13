// Business Logic







// Interface Logic 
window.onload = function() {
  //console.log('page is fully loaded'); // test
  function formSubmit(event) {
    console.log(side1);
    event.preventDefault();
  }

    let side1 = document.getElementById("side1").value;
    console.log(side1);
    document.getElementById("formOne").addEventListener('submit', formSubmit);
  }; 


  //document.formName.submit()