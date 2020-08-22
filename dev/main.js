import { Game, Stage, Sprite } from "../src/index.js";

Game.init({ test: true, width: 1920, height: 1080 });
Game.asset.load({
  type: "image",
  group: "bg",
  name: "sky",
  url: "sky.png"
})
new Stage({
  created() {
    new Sprite({
      config: {
        id: "test",
        scale: 7.06
      },
      created() {
        this.graphics.image("bg", "sky", true)
        this.input.watch("mousedown", mouse => {
          console.log(mouse.x, mouse.y)
        })
      }
    })
  }
})