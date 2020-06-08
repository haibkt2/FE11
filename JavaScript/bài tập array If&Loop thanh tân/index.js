var student1 = prompt("student1", "");
var student2 = prompt("student2", "");
var student3 = prompt("student3", "");
var student4 = prompt("student4", "");
var student5 = prompt("student5", "");
student1 = parseFloat(student1);
student2 = parseFloat(student2);
student3 = parseFloat(student3);
student4 = parseFloat(student4);
student5 = parseFloat(student5);
var array_Student = [];
array_Student.push(student1);
array_Student.push(student2);
array_Student.push(student3);
array_Student.push(student4);
array_Student.push(student5);
var index = 0;
for (var i = 0; i < array_Student.length; i++) {
  document.write(array_Student[i] + "</br>");
  if (array_Student[i] >= 5) {
    index++;
  }
}
document.write("đếm số hs trên 5 là" + index + "</br>");
arr2 = [8.5, 9.0, 7.0];
var array_Student = array_Student.concat(arr2);
console.log(array_Student);
var tg;
for (var i = 0; i < array_Student.length - 1; i++) {
  for (var j = i + 1; j < array_Student.length; j++) {
    if (array_Student[i] > array_Student[j]) {
      tg = array_Student[i];
      array_Student[i] = array_Student[j];
       array_Student[j]=tg;
    }
  }
}
for (var i = 0; i < array_Student.length; i++) {
  document.write(  array_Student[i]+";");
}
