window.addEventListener("contextmenu", (e) => e.preventDefault());

function gameLoop() {
  shooter.update();
  health.update();
  enemies.update();

  enemies.forEach((e) => {
    e.update();
  });
}

const Application = PIXI.Application;
const app = new Application({
  width: 700,
  height: 700,
  antialias: true,
});

let enemies = [];
let pressed = {};
let shooter;
let health;
let score;

app.renderer.view.style.position = "absolute";
document.body.appendChild(app.view);
setInterval(gameLoop, 1000 / 60);

class Hero {
  constructor(velocity, tileset, resources) {
    this.velocity = velocity;
    this.tileset = tileset;
    this.resourcs = resources;
  }

  setup(tileset, resources) {
    const heroes = [];
    for (let i = 1; i < 9; i++) {
      const heroTexture = PIXI.Texture.from(`${resources}1${i}.png`);
      heroes.push(heroTexture);

      const hero = new PIXI.AnimatedSprite(heroes);
      hero.anchor.set(0.5);
      app.stage.addChild(hero);
    }
  }
}

// =================== INITIAL CLASS-LESS CODE ==================

// const Application = PIXI.Application;

// const app = new Application({
//   width: 700,
//   height: 700,
//   antialias: true,
// });
// window.addEventListener("contextmenu", (e) => e.preventDefault());
// app.renderer.view.style.position = "absolute";

// document.body.appendChild(app.view);

// const enemiesOne = [];
// const totalEnemiesOne = 8;

// const loader = PIXI.Loader.shared;

// loader
//   .add("enemiesOneTileset", "../images/enemy1.json")
//   .add("shooterTileset", "../images/shooter.json");

// loader.load(setup).load(setupShooter);

// function setup(enemiesOneTileset, resources) {
//   const enemyOneTextures = [];
//   for (let i = 0; i < totalEnemiesOne; i++) {
//     for (let i = 1; i < 9; i++) {
//       const enemyOneTexture = PIXI.Texture.from(`enemy1${i}.png`);
//       enemyOneTextures.push(enemyOneTexture);
//     }

//     const enemyOne = new PIXI.AnimatedSprite(enemyOneTextures);
//     enemyOne.anchor.set(0.5);
//     enemyOne.x = Math.random() * app.screen.width;
//     enemyOne.y = 700;
//     enemiesOne.push(enemyOne);
//     app.stage.addChild(enemyOne);
//     enemyOne.play();
//     enemyOne.animationSpeed = 0.15;
//   }
// }

// app.ticker.add((delta) => loop(delta));

// function loop(delta) {
//   for (let enemyOne of enemiesOne) {
//     enemyOne.y -= 1;
//     enemyOne.x += 1;
//   }
// }

// // ADDING THE SHOOTER

// function setupShooter(shooterTileset, resources) {
//   const shooterTextures = [];
//   for (let i = 1; i < 9; i++) {
//     const shooterTexture = PIXI.Texture.from(`shooter1${i}.png`);
//     shooterTextures.push(shooterTexture);
//   }

//   const shooter = new PIXI.AnimatedSprite(shooterTextures);
//   shooter.anchor.set(0.5);
//   shooter.x = app.view.width / 2;
//   shooter.y = 670;
//   app.stage.addChild(shooter);

//   app.stage.interactive = true;
//   app.stage.on("pointermove", movePlayer);

//   function movePlayer(e) {
//     console.log(e);
//     let pos = e.data.global;
//   }

//   app.view.addEventListener("mousedown", moveShooter);

//   function moveShooter(e) {
//     app.ticker.add((alfa) => moveShooterOnCanvas(alfa));

//     if (e.buttons === 2) {
//       if (shooter.x > e.clientX && shooter.y > e.clientY) {
//         function moveShooterOnCanvas(alfa) {
//           shooter.x -= 1;
//           shooter.y -= 1;
//         }
//       } else if (shooter.x > e.clientX && shooter.y < e.clientY) {
//         function moveShooterOnCanvas(alfa) {
//           shooter.x -= 1;
//           shooter.y += 1;
//         }
//       } else if (shooter.x < e.clientX && shooter.y < e.clientY) {
//         function moveShooterOnCanvas(alfa) {
//           shooter.x += 1;
//           shooter.y += 1;
//         }
//       } else if (shooter.x < e.clientX && shooter.y > e.clientY) {
//         function moveShooterOnCanvas(alfa) {
//           shooter.x += 1;
//           shooter.y -= 1;
//         }
//       }
//     }
//     console.log(e);
//   }
// }

// =============== NOT WORKING CODE ======================

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

// shooter.play();
//   shooter.animationSpeed = 0.15;

// app.ticker.add(() => {
//   for (let i = 0; i < enemiesOne.length; i++) {
//     const enemyOne = enemiesOne[i];
//     enemyOne.direction += enemiesOne.turningSpeed * 0.01;
//     enemyOne.x += Math.sin(enemyOne.direction) * enemyOne.speed;
//     enemyOne.y += Math.cos(enemyOne.direction) * enemyOne.speed;
// shooter.rotation = -shooter.direction - Math.PI / 2;

//   if (shooter.x < shooterBounds.x) {
//     shooter.x += shooterBounds.width;
//   } else if (shooter.x > shooterBounds.x + shooterBounds.width) {
//     shooter.x -= shooterBounds.width;
//   }

//   if (shooter.y < shooterBounds.y) {
//     shooter.y += shooterBounds.height;
//   } else if (shooter.y > shooterBounds.y + shooterBounds.height) {
//     shooter.y -= shooterBounds.height;
//   }
//   }
// });

/// MAKING THE TROOPER WALK

// function setup(shooterSet, resources) {
//   for (let i = 1; i < 9; i++) {
//     const shooterTexture = PIXI.Texture.from(`enemy1${i}.png`);
//     shooterTextures.push(shooterTexture);
//   }

//   const shooter = new PIXI.AnimatedSprite(shooterTextures);
//   shooter.position.set(200, 200);
//   app.stage.addChild(shooter);
//   shooter.play();
//   shooter.animationSpeed = 0.15;
// }
