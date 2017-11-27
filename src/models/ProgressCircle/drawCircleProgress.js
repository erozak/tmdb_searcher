function draw(ctx, txt, rate, s, p, r, d, l, t) {
  const degreeStart = -Math.PI / 2;
  const hslSet = [
    { // Init - hsl(0, 38%, 51%)
      startDegree: 0,
      color: { h: 0, s: 38, l: 51 },
    },
    { // Warning - hsl(58,100%,51%)
      startDegree: 50 * d.unit,
      color: { h: 58, s: 100, l: 51 },
    },
    { // Fine - hsl(153, 99%, 41%)
      startDegree: 100 * d.unit,
      color: { h: 153, s: 99, l: 41 },
    },
  ];
  let hslSetIndex = 0;

  let degree = 0;
  let percent = 0;

  ctx.lineCap = 'round';
  const drawPerFps = setInterval(() => {
    degree += 1;
    ctx.clearRect(0, 0, s.width, s.height);
    percent = Math.ceil(degree / d.unit);

    txt.innerHTML = percent;

    // Outer Cycle
    ctx.beginPath();
    ctx.strokeStyle = l.defaultColor;
    ctx.lineWidth = l.outer;
    ctx.arc(
      p.x,
      p.y,
      r.x - (l.outer / 2),
      0,
      2 * Math.PI,
    );
    ctx.stroke();

    // Progress
    ctx.beginPath();

    if (hslSetIndex === 0 || (
      hslSetIndex < hslSet.length && degree >= hslSet[hslSetIndex].startDegree
    )) {
      hslSetIndex += 1;
    }
    let hslNow;
    if (hslSetIndex < hslSet.length) {
      const hslDiff = {
        h: hslSet[hslSetIndex].color.h - hslSet[hslSetIndex - 1].color.h,
        s: hslSet[hslSetIndex].color.s - hslSet[hslSetIndex - 1].color.s,
        l: hslSet[hslSetIndex].color.l - hslSet[hslSetIndex - 1].color.l,
      };
      const hslDegreeDiff = hslSet[hslSetIndex].startDegree - hslSet[hslSetIndex - 1].startDegree;
      const degreeDiff = degree - hslSet[hslSetIndex - 1].startDegree;

      hslNow = {
        h: Math.floor(hslSet[hslSetIndex - 1].color.h + ((hslDiff.h / hslDegreeDiff) * degreeDiff)),
        s: Math.floor(hslSet[hslSetIndex - 1].color.s + ((hslDiff.s / hslDegreeDiff) * degreeDiff)),
        l: Math.floor(hslSet[hslSetIndex - 1].color.l + ((hslDiff.l / hslDegreeDiff) * degreeDiff)),
      };
    } else {
      hslNow = hslSet[hslSet.length - 1].color;
    }
    ctx.strokeStyle = `hsl(${hslNow.h}, ${hslNow.s}%, ${hslNow.l}%)`;
    ctx.lineWidth = l.inner;
    ctx.arc(
      p.x,
      p.y,
      r.x - ((l.inner + l.diff) / 2),
      degreeStart,
      degreeStart + (2 * Math.PI * (degree / 360)),
    );
    ctx.stroke();

    if (degree >= d.taget || percent >= rate * 10) {
      txt.innerHTML = Math.floor(rate * 10);
      clearInterval(drawPerFps);
    }
  }, t);
}

export default function drawCircleProgress(
  canvasContext,
  percentText,
  { rate, width, height } = {
    rate: 0,
    width: 100,
    height: 100,
  },
) {
  if (!canvasContext) return false;

  const position = {
    x: width / 2,
    y: height / 2,
  };
  const radius = {
    x: width / 2,
    y: height / 2,
  };
  const lineBold = {
    outer: 12,
    inner: 8,
    defaultColor: '#131313', // '#081c24',
    get diff() {
      return this.outer - this.inner;
    },
  };
  const degree = {
    unit: 360 / 100,
    get target() {
      return rate * this.unit;
    },
  };
  const fpms = 2;

  // Draw
  draw(canvasContext, percentText, rate, { width, height }, position, radius, degree, lineBold, fpms);

  return canvasContext;
}
