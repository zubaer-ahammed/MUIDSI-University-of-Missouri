svgString().then(logo => {
  d3.select('#svg').html(logo);
  run();
});

function run() {
  let leftSource = d3.select('.left-source');
  let midSource = d3.select('.mid-source');
  let rightSource = d3.select('.right-source');

  let staticBubbles = d3.selectAll('.static-circles');

  let level = 5;

  setInterval(() => {
    if (level) {
      // Slow bubbling
      animateBubble(...addBubble(leftSource), 'left');
      animateBubble(...addBubble(midSource), 'mid');
      animateBubble(...addBubble(rightSource), 'right');
    } else {
      // Fast bubbling
      animateBubble(...addBubble(leftSource), 'left');
      animateBubble(...addBubble(midSource), 'mid');
      animateBubble(...addBubble(rightSource), 'right');
      animateBubble(...addBubble(leftSource), 'left');
      animateBubble(...addBubble(leftSource), 'left');
      animateBubble(...addBubble(midSource), 'mid');
      animateBubble(...addBubble(rightSource), 'right');
      animateBubble(...addBubble(midSource), 'mid');
      animateBubble(...addBubble(rightSource), 'right');
    }
  }, 1000);

  staticBubbles
    .transition()
    .duration(18000)
    .attr('transform', `translate(0, -100)`)
    .style('opacity', 0);

  d3.select('svg')
    .on('mouseover', () => {
      level = 0;
    })
    .on('mouseout', () => {
      for (let i = 0; i <= 5; ++i) {
        setTimeout(() => {
          level = i;
        }, i * 500);
      }
    });

  function addBubble(source) {
    let radius = getRandomRadius();
    let xShift = shiftRandom(radius);
    return [
      source
        .append('circle')
        .classed('bubble', true)
        .attr('r', radius)
        .attr('transform', `translate(${xShift}, 0)`),
      xShift,
    ];
  }

  function getRandomRadius() {
    return randomFloatInRange(0.5, 2);
  }

  function shiftRandom(radius) {
    let a = randomFloatInRange(-5, 5);
    if (Math.abs(a) + radius > 5) {
      if (a < 0) a = a + radius;
      else a = a - radius;
    }
    return a;
  }

  function animateBubble(bubble, xShift, position) {
    let points = getPoints(xShift, position);
    let path = getPath(points);
    bubble
      .transition()
      .duration(sToMs(getRandomTime()))
      .attrTween('transform', translateAlongPath(path.node()))
      .remove();
    path.remove();
  }

  function getPath(points) {
    return d3
      .select('svg')
      .append('path')
      .attr('class', `random-path `)
      .datum(points)
      .attr(
        'd',
        d3
          .line()
          .x(d => d[0])
          .y(d => d[1])
          .curve(d3.curveMonotoneX),
      );
  }

  function getRandomTime() {
    switch (level) {
      case 5:
        return randomFloatInRange(17, 19);
      case 4:
        return randomFloatInRange(15, 17);
      case 3:
        return randomFloatInRange(13, 15);
      case 2:
        return randomFloatInRange(11, 13);
      case 1:
        return randomFloatInRange(9, 11);
      case 0:
      default:
        return randomFloatInRange(7, 9);
    }
  }

  function sToMs(s) {
    return s * 1000;
  }

  function translateAlongPath(path) {
    let l = path.getTotalLength();
    return function(d, i, a) {
      return function(t) {
        let p = path.getPointAtLength(t * l);
        return `translate(${p.x}, ${p.y})`;
      };
    };
  }

  function getPoints(xShift, position = 'mid') {
    let points = [[xShift, 0], [xShift, -20]];

    if (position === 'left') {
      xShift = xShift + 13;
      points.push([xShift - 11, -22]);
      points.push([xShift - 6, -28]);
      points.push([xShift - 5, -30]);
      points.push([12, -35]);
      points.push([12, -50]);
      points.push([xShift, -90]);
    } else if (position === 'right') {
      xShift = xShift - 13;
      points.push([xShift + 11, -25]);
      points.push([xShift + 6, -30]);
      points.push([-12, -36]);
      points.push([-12, -50]);
      points.push([xShift, -90]);
    } else {
      points.push([xShift / 2, -50]);
      points.push([xShift / 2, -90]);
    }

    return points;
  }

  function randomFloatInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomIntInRange(min, max) {
    return Math.ceil(randomFloatInRange(min, max));
  }
}

async function svgString() {
  return await d3.text('/assets/images/logos/animated_logo_template.svg');
}
