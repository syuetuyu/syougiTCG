/**
 * 音声
 */
var Audio = {
  ctx: null,
  gain: null,

  audioElem: null
};

/**
 * 初期化
 */
Audio.init = function() {
  // Audio API
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  this.ctx = new AudioContext();

  // Gain
  this.gain = this.ctx.createGain();
  this.gain.connect(this.ctx.destination);
  this.gain.gain.value = 1;

  // Audio Element
  this.audioElem = document.createElement('audio');
};

/**
 * ON/OFF
 */
Audio.setEnable = function(enable) {
  this.gain.gain.value = enable
    ? 1
    : 0;
  this.audioElem.volume = enable
    ? 1
    : 0;
};

/**
 * 効果音の再生
 */
Audio.play = function(name, onEnded) {
  if (!name in Asset.sounds) {
    throw new Error('指定した効果音リソースが無い: ' + name);
  }

  var source = this.ctx.createBufferSource();

  source.buffer = Asset.sounds[name];
  source.connect(this.gain);

  if (onEnded && typeof onEnded == 'function') {
    source.onended = onEnded;
  }

  source.start(0);
};

/**
 * 音楽の再生
 */
Audio.playMusic = function(src, loop) {
  this.audioElem.src = src;
  if (loop == undefined) {
    this.audioElem.loop = false;
  } else {
    this.audioElem.loop = loop;
  }
  this.audioElem.play();
};

/**
 * 音楽の停止
 */
Audio.stopMusic = function() {
  this.audioElem.pause();
  this.audioElem.currentTime = 0;
};

/**
 * ページがフォーカスを失ったときに音楽を止める
 */
window.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    Audio.audioElem.pause();
  } else {
    Audio.audioElem.play();
  }
});
