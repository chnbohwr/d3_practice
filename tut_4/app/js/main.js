const width = 960,
  height = 136,
  cellSize = 17;

const color = d3
  .scaleLinear()
  .domain([-1, 0, 1])
  .range(['red', 'white', 'green']);

const svg = d3.select("#app")
  .selectAll("svg")
  .data(d3.range(1990, 2011))
  .enter().append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  // .attr('x', 10)
  // .attr('y', 40)
  .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

svg.append("text")
  .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
  .attr("font-family", "sans-serif")
  .attr("font-size", 10)
  .attr("text-anchor", "middle")
  .text(function (d) { return d; });

window.test = svg



