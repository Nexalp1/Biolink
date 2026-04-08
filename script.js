document.addEventListener('mousemove', function(e) {
  var glow = document.getElementById('mouseGlow');
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});
