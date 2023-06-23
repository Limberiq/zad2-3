function displayArray(){
    var myArray = [1, 2, 3, 4, 5,6];
  
    document.getElementById('result').innerHTML = "Длина массива: " + myArray.length;
  
    var elements = document.querySelectorAll('.hover-element');
    for (var i=0; i<elements.length; i++) {
      elements[i].addEventListener('mouseover', function(){
        document.getElementById('result').innerHTML = "Длина массива: " + myArray.length;
      });
    }
  }