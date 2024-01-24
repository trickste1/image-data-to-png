// a kitten by ChatGPT
module.exports = (context) => {
  context.fillStyle = "orange"; // Head color
  context.beginPath();
  context.arc(100, 100, 50, 0, 2 * Math.PI); // Draw head
  context.fill();

  context.fillStyle = "white"; // Body color
  context.fillRect(75, 120, 50, 80); // Draw body

  context.fillStyle = "black"; // Eyes color
  context.beginPath();
  context.arc(85, 90, 5, 0, 2 * Math.PI); // Draw left eye
  context.fill();

  context.beginPath();
  context.arc(115, 90, 5, 0, 2 * Math.PI); // Draw right eye
  context.fill();

  context.fillStyle = "pink"; // Nose color
  context.beginPath();
  context.arc(100, 105, 3, 0, 2 * Math.PI); // Draw nose
  context.fill();

  context.strokeStyle = "black"; // Whisker color
  context.beginPath();
  context.moveTo(80, 110); // Draw left whiskers
  context.lineTo(60, 110);
  context.moveTo(80, 120);
  context.lineTo(60, 130);
  context.moveTo(80, 130);
  context.lineTo(60, 150);

  context.moveTo(120, 110); // Draw right whiskers
  context.lineTo(140, 110);
  context.moveTo(120, 120);
  context.lineTo(140, 130);
  context.moveTo(120, 130);
  context.lineTo(140, 150);

  context.stroke();
};
