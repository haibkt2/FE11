  // Nhập vào n học sinh và nhập điểm cho n học sinh
        var n,count = 0;
        var j = 0;
        var arr = [];
        n = prompt("Nhập vào số học sinh : ",5);

      //n là number và n > 0
      while (isNaN(n) || n < 0) { 
         n = prompt("Nhập vào số học sinh : ",5);
      }
         for (var i = 1; i<=n; i++) {
            arr[i] = prompt("Nhập điểm học sinh " +i +" : "); 
            arr[i] = parseFloat(arr[i]);

      
         while (isNaN(arr[i]) || arr[i]<0 || arr[i]>10) {  //Kiểm tra điểm hợp lệ
                alert("Điểm không hợp lệ vui lòng nhập điểm >0 và <10");
                arr[i] = prompt("Nhập điểm học sinh " +i +" : "); 
            }
        }
        

	
        //In ra danh sách điểm của học sinh
	   document.write("<h3>Danh sách điểm học sinh </h3>");
        for (var x in arr) {
                j++;
                document.write("Điểm học sinh "+j+ " : " +arr[x] +"<br>");
        }


        // Đếm số học sinh có điểm >=5 và in ra danh sách
        for (i = 0;i<=n;i++) {
            if (arr[i]>=5){
                count++;
        }
        }
        document.write("<h3>The number of students have score greater than or equal to 5 is : "+count +"</h3>");
        for (i = 0;i<=n;i++) {
            if (arr[i]>=5){
               document.write("Học sinh " +i+ " : " +arr[i] + "<br>")
        }
        }

       //Thêm (8.5,9.0,7.0) vào mảng và sắp xếp theo thứ tự giảm dần
      document.write("<h3>Add score to an array (8.5, 9.0, 7.0), then arrange the array in descending order and then print the result to a web page.</h3>");
      arr[n++] = 9.0;
      arr[n++] = 8.5;
      arr[n++] = 7.0;
      var temp;
         for(var i=0; i<(arr.length-1);i++){
            for(var j=i+1;j<arr.length;j++){
               if(arr[i]<arr[j]){
                  temp = arr[i];
                  arr[i]=arr[j];
                  arr[j]=temp;
               }
            }
         }
         for(x in arr){
            document.write(arr[x] + "</br>");
         }