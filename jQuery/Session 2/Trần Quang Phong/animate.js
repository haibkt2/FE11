var coordinates = [
  { 'top': '0', 'left': '400px' },
  { 'top': '400px', 'left': '400px' },
  { 'top': '400px', 'left': '0' },
  { 'top': '100px', 'left': '0' },
  { 'top': '100px', 'left': '300px' },
  { 'top': '300px', 'left': '300px' },
  { 'top': '300px', 'left': '100px' },
  { 'top': '200px', 'left': '100px' },
  { 'top': '200px', 'left': '200px' },
];

for (let i in coordinates) {
  $('.item').animate(coordinates[i], 1000);
}

