const width = 600,
  height = 600,
  radius = Math.min(width, height) / 2;

const dataset = [
  { label: 'Abulia', value: 10 },
  { label: 'Betelgeuse', value: 20 },
  { label: 'Cantaloupe', value: 30 },
  { label: 'Dijkstra', value: 40 }
];

const color = d3.scaleOrdinal(d3.schemeCategory20);

const svg = d3.select('#app').append('svg')
  .attrs({ width, height });

const group = svg.append('g').attrs({ transform: `translate(${width / 2},${height / 2})` });

const arc = d3.arc().innerRadius(radius / 2).outerRadius(radius);

const pie = d3.pie().value(d => d.value).sort(null);

console.log(pie(dataset));
console.log(arc(pie(dataset)[0]));

const path = group
  .selectAll('path')
  .data(pie(dataset))
  .enter()
  .append('path')
  .attrs({
    d: arc,
    fill: (d) => color(d.data.label)
  });
