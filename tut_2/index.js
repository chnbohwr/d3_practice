var w = 600;
var h = 250;
var dataset = Array.from(Array(20)).map(() => [
  5 + Math.floor(Math.random() * 480),
  5 + Math.floor(Math.random() * 230)
])

console.log(dataset); //檢查看看有沒有怪怪的

var svg = d3.select('.demo').append('svg');
svg.attr({ 'width': w, 'height': h });
svg.selectAll('circle').data(dataset).enter() //記得喔 data(dataset).enter() 把資料放入
  .append('circle')
  .attr({
    'cx': function (d) { return d[0] + 10 }, //定義圓心的x，在第一個值
    'cy': function (d) { return d[1] + 10 }, //定義圓心的y，在第二個值
    'r': function (d) { return Math.sqrt(h - d[1]) }, //圓心的半徑，第二個值開平方
    'fill': function (d) { return d3.hsl(d[0] % 360, .6, .6); }
    //介紹一個顏色的function hsl，可以將顏色算出後轉成色碼
    //格式 (360色相, 1彩度, 1明度)
  });