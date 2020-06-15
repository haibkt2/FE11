var $ = function(id) {
    return document.getElementById(id);
}

var check = function () {
    var inputNum = $('random');
    inputNum = $('random').value;
    
    for (let i=1; i <= inputNum; i++) {
        var randomResult = Math.ceil(Math.random()*100);
        var createDiv = document.createElement('div');
        var createP = document.createElement('p');
        var createText = document.createTextNode('Số thứ ' + i + ' là: ' + randomResult);
        createP.appendChild(createText);
        createDiv.appendChild(createP);
        $('outputDiv').appendChild(createDiv);
    }
}
$('checkBtn').onclick = check;