'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var PADDING = 40;
var barHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var color;
    var colorPart = (Math.random());
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + PADDING + (BAR_WIDTH + BAR_GAP) * i, barHeight - (barHeight * times[i]) / maxTime + PADDING * 2 - GAP);
    ctx.fillText(players[i], CLOUD_X + PADDING + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - FONT_GAP);
    if (players[i] === 'Вы') {
      color = 'red';
    } else {
      color = 'hsla(237, 80%, 36%, '+ colorPart + ')';
    }
    ctx.fillStyle = color;
    ctx.fillRect(CLOUD_X + PADDING + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, (barHeight * times[i]) / maxTime * -1);
  }
};
