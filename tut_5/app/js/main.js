const width = 960,
  height = 136,
  cellSize = 17,
  rangeStart = 2015,
  rangeEnd = 2018;

const color = d3
  .scaleLinear()
  .domain([-1, 0, 1])
  .range(['red', 'white', 'green']);

const fakeData = d3.timeDays(new Date(rangeStart, 0, 1), new Date(rangeEnd, 0, 1))
  .reduce((acc, val) => { acc[val] = Math.random(); return acc; }, {});

const formatPrice = d3.format('.2%');


const svg = d3
  .select('#app')
  .selectAll('svg')
  .data(d3.range(2015, 2018))
  .enter()
  .append('svg')
  .attrs({ width, height })

const rectgroup = svg
  .append('g')
  .attr("fill", "white")
  .attr("stroke", "#ccc")
  .selectAll("rect")
  .data(d => d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)))
  .enter()
  .append('rect')
  .attrs({
    'stroke-width': 2,
    width: cellSize,
    height: cellSize,
    x: d => d3.timeWeek.count(d3.timeYear(d), d) * cellSize,
    y: d => d.getDay() * cellSize
  })

rectgroup
  .append('title')
  .text(d => `${d.toLocaleDateString()}: ${formatPrice(fakeData[d])}`);

rectgroup.attr('fill', d => color(fakeData[d]))


window.test = rectgroup;



