const Application = PIXI.Application;

const app = new Application({
  width: 700,
  height: 700,
  antialias: true,
});

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const shooters = [];
const totalShooters = 40;

// for (let i = 0; i < totalShooters; i++) {
//   const shooter = PIXI.Sprite.from("../images/hero1_big.png");
//   shooter.x = Math.random() * app.screen.width;
//   shooter.y = Math.random() * app.screen.height;

//   shooter.direction = Math.random() * Math.PI * 2;
//   shooter.speed = 2 + Math.random() * 2;

//   shooters.push(shooter);
//   app.stage.addChild(shooter);
// }

// const shooterBoundsPadding = 100;
// const shooterBounds = new PIXI.Rectangle(
//   -shooterBoundsPadding,
//   -shooterBoundsPadding,
//   app.screen.width + shooterBoundsPadding * 2,
//   app.screen.height + shooterBoundsPadding * 2
// );

const loader = PIXI.Loader.shared;

loader.add("shooterTileset", "../images/hero1_big.png");

loader.load(setup);

function setup(loader, resources) {
  const shooterTexture = resources.shooterTileset.texture;
  shooterSprite.y = 300;
  app.stage.addChild(shooterSprite);
}

// app.ticker.add(() => {
//   for (let i = 0; i < shooters.length; i++) {
//     const shooter = shooters[i];
//     shooter.direction += shooter.turningSpeed * 0.01;
//     shooter.x += Math.sin(shooter.direction) * shooter.speed;
//     shooter.y += Math.cos(shooter.direction) * shooter.speed;
//     shooter.rotation = -shooter.direction - Math.PI / 2;

//     if (shooter.x < shooterBounds.x) {
//       shooter.x += shooterBounds.width;
//     } else if (shooter.x > shooterBounds.x + shooterBounds.width) {
//       shooter.x -= shooterBounds.width;
//     }

//     if (shooter.y < shooterBounds.y) {
//       shooter.y += shooterBounds.height;
//     } else if (shooter.y > shooterBounds.y + shooterBounds.height) {
//       shooter.y -= shooterBounds.height;
//     }
//   }
// });
