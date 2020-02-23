$(document).ready(function () {
  let $_toggleRowBtn;
  let $_sampleBtn;

  let $_container = $('.player');
  let $_containerWidth  = $_container.width();


  const C4 = new Audio("../sounds/C4.mp3");


  const nbrOfRows = 4;
  const nbrOfColumn = 4;

  let arrayOfAudio = [];

  createMatrix(nbrOfRows,nbrOfColumn);

  function createMatrix(rows, columns) {

    let sampleSize  = $_containerWidth*0.7 / columns;

    for(let i = 0; i < rows; i++) {

      $('<div class="row" id="row-' + i + '"></div>').appendTo('.container');

      /*
              $('<button class="enable-disable-row" id="toggle-row-' + i + '"></button>').prependTo('#row-' + i);
      */

      for(let k = 0; k < columns; k++) {

        $('<div class="column sample" data-row="' + i + '" data-column="' + k + '" style="height:' + (sampleSize - 8) + 'px;width:' + sampleSize + 'px"></div>').appendTo('#row-' + i);

      }

    }

    $_toggleRowBtn = $('.enable-disable-row');
    $_sampleBtn = $('.sample');

  }

  $_sampleBtn.on("click", (e) => {
    let $this = $(e.currentTarget);
    $this.toggleClass("active");
    playSound(C4);
    setTimeout(() => $this.toggleClass("active"), 200);
  });

});

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};
