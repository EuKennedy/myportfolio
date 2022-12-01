new TypeIt(".animated", {
    waitUntilVisible: true,
    speed: 50,
  })
    .type("Sou Desenvolvedor Web Front-End, aspirante a FullStack.")
    .exec(async () => {
      
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve();
        }, 1000);
        
      });
    })
    .type(" HTML5")
    .pause(1200)
    .delete(5)
    .type(" CSS3.")
    .pause(1200)
    .delete(5)
    .type(" React.Js")
    .pause(1200)
    .delete(8)
    .type(" Node.Js")
    .pause(1200)
    .delete(7)
    .type(" E Php com MySQL.")
    .pause(1200)
    .delete(17)
    .pause(1200)
    .type(" E estou em busca do meu primeiro emprego formal.")
    .go();