var $ = function(id) {
    return document.getElementById(id);
}

var check = function () {
    var inputNum = $('random');
    inputNum = $('random').value;
    
    if (inputNum == "") {
        alert('Pls enter a value.');
    } else if (inputNum < 1) {
        alert('Value must be > 1');
    } else {
        for (let i=1; i <= inputNum; i++) {
            var randomResult = Math.ceil(Math.random()*100);
            var createDiv = document.createElement('div');
            var createP = document.createElement('p');
            var createText = document.createTextNode('Số thứ ' + i + ' là: ' + randomResult);
            createP.appendChild(createText);
            createDiv.appendChild(createP);
            $('outputDiv').appendChild(createDiv);

            var arr = [];
            arr[i] = randomResult;
            var max = Math.max(arr);
            var min = Math.min(arr);
            var createDivMinMax = document.createElement('div');
            var createPMax = document.createElement('p');
            var createPMin = document.createElement('p');
            var createTextMax = document.createTextNode('Số lớn nhất là: ')
        }
    }

    /*for (let i=1; i <= inputNum; i++) {
        var randomResult = Math.ceil(Math.random()*100);
        var createDiv = document.createElement('div');
        var createP = document.createElement('p');
        var createText = document.createTextNode('Số thứ ' + i + ' là: ' + randomResult);
        createP.appendChild(createText);
        createDiv.appendChild(createP);
        $('outputDiv').appendChild(createDiv);
    }*/
}
$('checkBtn').onclick = check;