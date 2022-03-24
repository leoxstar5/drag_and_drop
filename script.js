
const el = document.getElementById('drag');

el.addEventListener('mousedown', (event) => {
  el.style.position = 'absolute';
  el.style.zIndex = 1000;

  document.body.appendChild(el);

  const moveAt = (pageX, pageY) => {
    el.style.left = pageX - el.offsetWidth / 2 + 'px';
    el.style.top = pageY - el.offsetHeight / 2 + 'px';
  }

  moveAt(event.pageX, event.pageY);

  const onMouseMove = (event) => {
    moveAt(event.pageX, event.pageY);
  };

  document.addEventListener('mousemove', onMouseMove);

  el.onmouseup = () => {
    document.removeEventListener('mousemove', onMouseMove);
    el.onmouseup = null;
  }

})
