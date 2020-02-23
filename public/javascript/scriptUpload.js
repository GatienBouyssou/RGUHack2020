$(document).ready(function () {
  let $_toggleRowBtn;
  let $_sampleBtn;

  let $_container = $('.player');
  let $_containerWidth  = $_container.width();


  const nbrOfRows = 4;
  const nbrOfColumn = 4;

  let arrayOfAudio = [];

  createMatrix(nbrOfRows,nbrOfColumn);

  function createMatrix(rows, columns) {

    let sampleSize  = $_containerWidth*0.7 / columns;

    for(let i = 0; i < rows; i++) {

      $('<div class="rowDrum" id="row-' + i + '"></div>').appendTo('.containerDrum');

      for(let k = 0; k < columns; k++) {

        $("<label for='myFile'><div class='column sample' data-row='" + i + "' data-column='" + k + "' style='height:" + (sampleSize - 8) + "px;width:" + sampleSize + "px'></label></div><input type='file' id='myFile' name='myFile'>").appendTo('#row-' + i);

      }

    }

    $_toggleRowBtn = $('.enable-disable-row');
    $_sampleBtn = $('#myFile');

  }

  $('#myFile').change(function(){
        var file_data = $('#myFile').prop('files')[0];
        var form_data = new FormData();
        form_data.append('file', file_data);
        $.ajax({
            url: "/uploadSong",
            type: "POST",
            data: form_data,
            contentType: false,
            cache: false,
            processData:false,
            success: function(data){
                console.log(data);
            }
        });
    });

});
