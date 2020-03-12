var MARGIN = 2;
var BORDER = 1;

var tileWidth;
var tileHeight;
var tiles = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, null]
];

var gapX = 3;
var gapY = 3;

function positionTiles() {
  for(var x = 0; x < 4; x++) {
    for(var y = 0; y < 4; y++) {
      var tile = tiles[y][x];

      tile.css({
        top: tile.data("y") * tileHeight,
        left: tile.data("x") * tileWidth
      });
    }
  }
}

function resize() {
  var margin = parseInt($("body").css("margin"));
  var windowWidth = $(window).width() - 2 * margin;
  var windowHeight = $(window).height() - 2 * margin;

  tileWidth = Math.floor(windowWidth / 4);
  tileHeight = Math.floor(windowHeight / 4);

  console.log(tileWidth, tileHeight);
  var fontSize = Math.min(tileWidth, tileHeight);
  var extra = 2 * (MARGIN + BORDER);

  $(".tile").width(tileWidth - extra)
  .height(tileHeight - extra)
  .css("fontSize", fontSize + "px");

  positionTiles();

}

function initTiles() {
  var board = $("#board");

  for(var y = 0; y < 4; y++) {
    for(var x = 0; x < 4; x++) {
      var value = y * 4 + x + 1;

      if(value < 16) {
        var tile = $('<div class="tile">' + value + '</div>');
        board.append(tile);
        tile.data("x", x).data("y", y);
        tiles[y][x] = tile;
        if(x % 2) {
          tile.css("backgroundColor", "Pink");
        } else {
          tile.css("backgroundColor", "LightGreen");
        }
      }
    }
  }
}

$(function(evt) {
    $(window).resize(resize);
    initTiles();
    resize();
  }
);
