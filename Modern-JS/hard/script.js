function changeColor(className) {
  var body = document.querySelector('html');

  while(body.classList.length > 0) {
      console.log('removing class ' + body.classList.item(0))
      body.classList.remove(body.classList.item(0));
  }
  body.classList.add(className);
};