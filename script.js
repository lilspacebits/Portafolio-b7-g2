//alert("hola mundo"); 

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('Mariana Ruz')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Animadora')
  .pauseFor(500)
  .deleteAll()
  .typeString('Programadora')
  .pauseFor(1000)
  .start();