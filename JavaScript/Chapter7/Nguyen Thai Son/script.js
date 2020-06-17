var $ = function(id) {
    return document.getElementById(id);
}

var check = function () {
    var inputNum = $('random');
    inputNum = $('random').value;
    var arr = [];

    var delDiv = document.getElementsByClassName('opt col-lg-6 mt-2');
    if (delDiv.length > 0) {
        delDiv[0].firstChild.remove();
    }

    if (inputNum == "") {
        alert('Pls enter a value.');
    } else if (inputNum < 1) {
        alert('Value must be > 1');
    } else {
        var createDiv = document.createElement('div');
        for (let i=0; i < inputNum; i++) {
            var removeDiv = document
            
            arr[i] = Math.ceil(Math.random()*100);
            
            var createP = document.createElement('p');
            var createText = document.createTextNode('Số thứ ' + (i+1) + ' là: ' + arr[i]);
            createP.appendChild(createText);
            createDiv.appendChild(createP);
        }
        var max = Math.max(...arr);
        var min = Math.min(...arr);
        var createDivMinMax = document.createElement('div');
        var createPMax = document.createElement('p');
        var createPMin = document.createElement('p');
        var createTextMax = document.createTextNode('Số lớn nhất là: ' + max);
        var createTextMin = document.createTextNode('Số nhỏ nhất là: ' + min);
        createPMax.appendChild(createTextMax);
        createPMin.appendChild(createTextMin);
        createDiv.appendChild(createPMax);
        createDiv.appendChild(createPMin);
        $('outputDiv').appendChild(createDiv);
    }
}
$('checkBtn').onclick = check;