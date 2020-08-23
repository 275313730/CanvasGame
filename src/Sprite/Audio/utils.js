export default function (sprite) {
  /**
   * 获取单位和镜头的距离
   * @returns 距离
   */
  function getDistance() {
    const relX = sprite.relX;
    const relY = sprite.relY;
    return Math.sqrt(relX ** 2 + relY ** 2);
  }

  /**
   * 设置音量
   * @param {AudioNode} audio 
   * @param {number} range 
   * @param {number} defalutVolume 
   * @param {number} distance 
   */
  function setVolume(audio, range, defalutVolume) {
    const distance = getDistance()
    if (!range) return;
    if (distance >= range) {
      audio.volume = 0;
    } else {
      audio.volume = defalutVolume * ((range - distance) / range);
    }
  }

  return { setVolume };
}
