      var n = prompt("Input n: ");
      while(isNaN(n)||n<0){
         n = prompt("Input n: ");
      }
      document.write("<h3>Enter student's score to the array and then print the array elements to a web page.</h3>")
      var arr = [];
      var count = 0;
      for(i=0; i<parseInt(n); i++){
         var scorse = prompt("Input scorse: ");
      while(isNaN(scorse)||(scorse<0 || scorse>10)){
         scorse = prompt("Input scorse: ");
      }
      arr[i] = parseFloat(scorse);
      document.write("Scorse " + (i + 1) + ": " + arr[i]+ "<br>");
      if(arr[i]>=5) count++;
      }
      document.write("<hr>");
      
      document.write("<h3>Counts the number of students have score greater than or equal to 5 and then print result to a web page.</h3> " + count + "<hr>");

      document.write("<h3>Add score to an array (8.5, 9.0, 7.0), then arrange the array in descending order and then print the result to a web page.</h3>");
      arr[n++] =8.5;
      arr[n++] =9;
      arr[n++] =7;
      arr.sort(function(a, b){return b - a});
      for(i=0;i<arr.length;i++){
         document.write(arr[i] + "</br>");
      }
      document.write("<hr>");