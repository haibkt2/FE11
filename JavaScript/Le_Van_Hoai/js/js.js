//User prompt function declared scores of n elements, each element is the average grade of each student (default n = 5).
var enterPrompt = prompt("Vui lòng nhập số học sinh", 5);

//Write a JavaScript to enter student's score to the array and then print the array elements to a web page.
var arr=[];
for (var i =0; i<=enterPrompt; i++){
    arr[i]= prompt("Nhập điểm học sinh " + i);
    document.write("Điểm học sinh "+i +": "+arr[i]+"<br>"); 
}

//Write a JavaScript that counts the number of students have score greater than or equal to 5 and then print result to a web page.
var count=0;
for (var j=0; j<arr.length; j++){
    if(arr[j]>=5){
        document.write("Học sinh có điểm >=5: "+ arr[j] +"<br>");
        count++;
    }
}
document.write("Số học sinh có điểm >=5: "+ count+"<br>");

//add score to an array (8.5, 9.0, 7.0), then arrange the array in descending order and then print the result to a web page.
arr=arr.concat([8.5,9.0,7.0]);
arr.sort(function(a, b){return b - a});
document.write("Sắp xếp điểm giảm dần: "+arr);