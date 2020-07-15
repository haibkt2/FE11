var widthOfBox = 630;
var widthOfItem = 70;
var numOfRounds = (widthOfBox + widthOfItem) / (2 * widthOfItem);
var k = widthOfBox / widthOfItem;

for (let i = 0; i < numOfRounds; i++) {
  $('.item')
  .animate({ 'left': (k - i - 1) * widthOfItem, 'backgroundColor': 'red' }, 700)
  .animate({ 'top': (k - i - 1) * widthOfItem, 'backgroundColor': 'yellow' }, 700)
  .animate({ 'left': i * widthOfItem, 'backgroundColor': 'green' }, 700)
  .animate({ 'top': (i + 1) * widthOfItem, 'backgroundColor': 'purple' }, 700);
}


