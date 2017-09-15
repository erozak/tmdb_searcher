window.onload = function() {
  var progressWrap = document.querySelector('.circle-progress');
  var can = progressWrap.querySelector('.canvas');
  var spanPercent = progressWrap.querySelector('.percent-number');
  var c = can.getContext('2d');

  var posX = can.width / 2;
  var posY = can.height / 2;
  var radius = can.width / 2;
  var outerCircleLineWidth = 12;
  var innerCircleLineWidth = 8;
  var cicleLineWidthDiff = (outerCircleLineWidth - innerCircleLineWidth) / 2;
  var fps = 400 / 200;
  var percent = 0;
  var onePercent = 360 / 100;
  var result = onePercent * 100;

  c.lineCap = 'round';
  arcMove();

  function arcMove() {
    var degrees = 0;
    var dangerDegree = 50 * onePercent;
    var successDegree = 80 * onePercent;
    var initHsl = [0, 38, 51]; // hsl(0, 38%, 51%)
    var dangerHsl = [58, 100, 51]; // hsl(58, 100%, 51%)
    var successHsl = [153, 99, 41]; // hsl(153, 99%, 41%)
    var hslDiffDanger = [
      (dangerHsl[0] - initHsl[0]) / dangerDegree,
      (dangerHsl[1] - initHsl[1]) / dangerDegree,
      (dangerHsl[2] - initHsl[2]) / dangerDegree
    ];
    var hslDiffSuccess = [
      (successHsl[0] - dangerHsl[0]) / dangerDegree,
      (successHsl[1] - dangerHsl[1]) / dangerDegree,
      (successHsl[2] - dangerHsl[2]) / dangerDegree
    ];
    var hslNow = [0, 38, 51];
    var acrInterval = setInterval(function() {
      degrees += 1;
      c.clearRect(0, 0, can.width, can.height);
      percent = degrees / onePercent;

      spanPercent.innerHTML = percent.toFixed();

      c.beginPath();
      c.strokeStyle = '#081c24';
      c.lineWidth = outerCircleLineWidth;
      c.arc(posX, posY, radius - outerCircleLineWidth / 2, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
      c.stroke();

      c.beginPath();
      if ( degrees < dangerDegree ) {
        hslNow = [
          hslNow[0] + hslDiffDanger[0],
          hslNow[1] + hslDiffDanger[1],
          hslNow[2] + hslDiffDanger[2]
        ];
      } else if ( degrees < successDegree ) {
        var degreeDiff = 0;
        degreeDiff = degrees - dangerDegree;
        hslNow = [
          hslNow[0] + hslDiffDanger[0],
          hslNow[1] + hslDiffDanger[1],
          hslNow[2] + hslDiffDanger[2]
        ];
      } else hslNow = successHsl;

      c.strokeStyle = 'hsl(' + hslNow[0] + ',' + hslNow[1] + '%,' + hslNow[2] + '%)';
      c.lineWidth = innerCircleLineWidth;
      c.arc(posX, posY, radius - innerCircleLineWidth / 2 - cicleLineWidthDiff, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degrees));
      c.stroke();

      if (degrees >= result) clearInterval(acrInterval);
    }, fps);

  }
}
