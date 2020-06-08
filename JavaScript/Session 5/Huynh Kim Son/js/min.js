var arr =[];
var index = 0
var number = prompt("Enter the number of students :","");  
number = parseInt(number);
         // nếu number>=5 và khác kiểu số thì sẽ thực thi vòng lặp for rồi next tới vòng lặp for in ra kết quả trong mảng.
    if( !isNaN(number) && number >= 5 )  
        {   
            for(var i=1; i<=number; i++)
            {
                     a = prompt("Students "+ i +":","");
                     a = parseFloat(a)
                     arr[index] =a;
                     index++;
        
            }
            
        }

        //nếu nhập < 5 và khác kiểu số thì sẽ yêu cầu nhập lại rồi next tới vòng lặp for in ra kết quả trong mảng.  
    else
    {
            var number = prompt("Please enter 5 or more students :",""); 
            if(  !isNaN(number) && number >= 5 )
        {   
            for(var i=1; i <= number ; i++)
            {
                a = prompt("Students "+ i +":","");
                a = parseFloat(a)
                arr[index] =a;
                index++;

            }
            
        }
    
    }

       // vòng lặp for in ra kết quả trong mảng
    for( var i = 0; i < arr.length ; i++) 
         {
            document.write("Students "+ i + ":" + "&nbsp" + arr[i] + " <br> " + "<hr>")
        
         }

        // nếu điểm số gán trong a lớn hơn hoặc bằng 5 thì đếm số lượng và in ra.  
        var count = 0;
    for(var i = 0; i < arr.length; i++)
    {
            if( arr[i] >=5 )
            count++;
    
    }
    document.write("Number of students scoring 5 or more : " + count + "<br> " + "<hr>")
    
       //Tạo array 2 (mới) add 3 điểm (8.5,9.0,7.0) vào array 1 và sắp xếp điểm số tăng dần or giảm dần. 
        var arr1 = [8.5,9.0,7.0];
        var arrtong = arr.concat(arr1);
        arrtong.sort(function(a, b){return a - b});
        document.write("Tăng dần :" + arrtong +"<br>")