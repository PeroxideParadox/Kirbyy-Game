import { k } from "./kaboomctx";


//game logic 
// ./ implicitly specifies the public folder as vite bundler is used here , appends the path
async function gamesetup() {
    k.loadSprite("assets", "./kirby-like.png", {
        sliceX: 9, //As there are 9 sprites in the x-axis
        sliceY: 10,
        anims: {
          kirbIdle: 0, //defining the sprite at index 0 of the image that is been used 
          kirbInhaling: 1,
          kirbFull: 2,
          kirbInhaleEffect: { from: 3, to: 8, speed: 15, loop: true },
          shootingStar: 9,
          flame: { from: 36, to: 37, speed: 4, loop: true },
          guyIdle: 18,
          guyWalk: { from: 18, to: 19, speed: 4, loop: true },
          bird: { from: 27, to: 28, speed: 4, loop: true },
        },
    });
    k.loadSprite("level-1","./level-1.png");

    k.scene("level-1", ()=>{
        k.setGravity(2100);
        k.add([
            k.rect(k.width(),k.height()),
            k.color(1, 0.75, 0.8),
            //k.color(k.Color.fromHex("#FFC0CB")),
            k.fixed(),
        ]);
    });

    k.go("level-1")
}
gamesetup