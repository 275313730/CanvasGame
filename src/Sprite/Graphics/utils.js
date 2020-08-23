import Game from '../../Game/index.js'

export default function (sprite) {
  /**
   * 获取精灵数据
   */
  function getSpriteData() {
    return {
      relX: sprite.relX * Game.scale,
      relY: sprite.relY * Game.scale,
      offsetLeft: sprite.offsetLeft * Game.scale,
      offsetTop: sprite.offsetTop * Game.scale,
      width: sprite.width * sprite.scale * Game.scale,
      height: sprite.height * sprite.scale * Game.scale,
      drawWidth: sprite.drawWidth,
      drawHeight: sprite.drawHeight,
      scale: sprite.scale * Game.scale,
      flip: sprite.flip
    };
  }
  /**
   * 设置尺寸
   * @param {number} width 宽度
   * @param {number} height 高度
   * @param {boolean} sameSize 是否与图片相同尺寸
   */
  function setSize(width, height, sameSize) {
    // 设置单位绘制尺寸
    sprite.drawWidth = width;
    sprite.drawHeight = height;

    if (sameSize) {
      sprite.width = width;
      sprite.height = height;
    }
  }

  return { getSpriteData, setSize }
}


