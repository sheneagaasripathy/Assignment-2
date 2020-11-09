function allLetter(inputtxt)
      {
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      alert('Your name have accepted : you can try another');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
    }




    <!-- <button type="button" onclick="add(enter.value)" name="Add" id="add" target="_top">Add</button>
    <p id="entere"></p> -->



    // function ShowNameAdd(valu){
    //   var letters = /^[A-Za-z]+$/;
    //   if(valu[0].match(letters)){
    //     document.getElementById('printtrue').style.color = 'green';
    //     document.getElementById('printtrue').innerHTML = valu + " has been added";
    //   }
    //   else {
    //     document.getElementById('printtrue').style.color = 'red';
    //     document.getElementById('printtrue').innerHTML = "Invalid TV Show Name";
    //   }
    // }
