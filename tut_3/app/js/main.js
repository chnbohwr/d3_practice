const svg = d3.select("svg"),
  width = svg.attr("width"),
  height = svg.attr("height");

const data = Array.from(Array(50)).map(() => ({
  id: random(10),
  value: Math.floor(Math.random() * 10000)
}));

const colorScale = d3.scaleOrdinal(d3.schemeCategory20c);

const root = d3
  .hierarchy({ children: data })
  .sum(d => d.value)
  .each((d) => { d.id = d.data.id });

// const root = { children: data };

const normalizeData = d3.pack().size([width, height]).padding(1.5)(root).leaves();

// console.log(normalizeData);

const node = svg.selectAll(".node")
  .data(normalizeData)
  .enter().append("g")
  .attr('class', 'node')
  .attr('transform', d => `translate(${d.x}, ${d.y})`);

node
  .append('circle')
  .attr('id', d => d.id)
  .attr('r', d => d.r)
  .style('fill', d => colorScale(d.id));

node
  .append('text')
  .selectAll('tspan')
  .data(d => [d.id])
  .enter()
  .append('tspan')
  .text(d => d)
  .attr('x', 0)
  .attr('y', 0);

node
  .append('title')
  .text(d => `value: ${d.value}`);
