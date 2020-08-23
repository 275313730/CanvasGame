"use strict"
import asset from "./Asset/index.js";
import { listenInputEvent, autoResizeCanvas, isMobile, initStyle } from './utils.js'
import event from "../Common/Event.js";

const Game = {};

// 初始化游戏
Game.init = function (options) {
  initStyle();
  // 画布
  this.canvas = document.createElement('canvas');
  document.body.appendChild(this.canvas);

  // 画布上下文
  this.context = this.canvas.getContext("2d");

  // 初始化宽度和高度
  if (!options.width || !options.height) throw Error("Width and height is needed");
  let maxWidth = document.body.clientWidth;
  let maxHeight = document.body.clientHeight;
  let defaultRatio = maxWidth / maxHeight;
  this.width = this.viewWidth = options.width;
  this.height = this.viewHeight = options.height;
  this.ratio = this.width / this.height;
  if (this.ratio > defaultRatio) {
    this.viewWidth = Math.round(maxWidth);
    this.viewHeight = Math.round(maxWidth / this.ratio);
  } else if (this.ratio < defaultRatio) {
    this.viewHeight = Math.round(maxHeight);
    this.viewWidth = Math.round(maxHeight * this.ratio);
  }
  
  // 设置canvas宽高
  this.canvas.setAttribute("width", this.viewWidth);
  this.canvas.setAttribute("height", this.viewHeight);

  // canvas黑色背景
  this.canvas.style.backgroundColor = "black";

  // 缩放(影响精灵绘制尺寸)
  this.scale = this.viewHeight / this.height;

  // 键盘状态
  this.key = null;

  // 用户事件
  this.inputEvents = {};

  // 动画间隔帧(每隔n帧绘制下一个关键帧)
  this.animationInterval = options.animationInterval || 16;

  // 测试模式
  this.test = options.test || false;

  // 是否移动端
  this.isMobile = isMobile();

  // 资源路径
  this.asset.setPath(options.path);

  autoResizeCanvas(this);
  listenInputEvent(this);

  // 禁用右键菜单
  if (!this.test) {
    window.oncontextmenu = function () {
      return false;
    }
  }
}

Game.mix = function (Class, func) {
  if (!Class["mixins"]) {
    Class["mixins"] = [];
  }
  Class["mixins"].push(func);
}

Game.asset = asset(Game);

Game.event = event(Game);

Game.stage = null;

export default Game