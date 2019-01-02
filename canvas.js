var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);

//Circles

for (var i = 0; i < 200; i++) {
  var x = Math.random()*window.innerWidth;
  var y = Math.random()*window.innerHeight;
  var color;
  var colorPicker = Math.floor(Math.random() * 7);
  switch (colorPicker) {
    case 0:
      color = 'black';
      break;
    case 1:
      color = 'red';
      break;
    case 2:
      color = 'orange';
      break;
    case 3:
      color = 'yellow';
      break;
    case 4:
      color = 'green';
      break;
    case 5:
      color = 'blue';
      break;
    case 6:
      color = 'indigo';
      break;
    case 7:
      color = 'violet';
      break;
    default:
      color = 'gray';
      break;
  }
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = color;
  c.stroke();
  console.log(color);
}
