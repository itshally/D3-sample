/**
 * Creating a basic Bar Chart &
 * Creating labels
 */

//data array
let arr = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let svgWidth = 500, 
    svgHeight = 300, 
    barPadding = 5;

let barWidth = (svgWidth/arr.length);

let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .style('background-color', 'pink');

let barChart = svg.selectAll('rect')
                  .data(arr)
                  .enter()
                  .append('rect')
                  .attr('class', 'bar')
                  .attr('y', d => svgHeight - d)
                  .attr('height', d => d)
                  .attr('width', barWidth - barPadding)
                  .attr('transform', (d, i) => {
                      let translate = [barWidth * i, 0];
                      return `translate(${translate})`
                  });

let text = svg.selectAll('text')
              .data(arr)
              .enter()
              .append('text')
              .text( x => x)
              .attr('y', (d, i) => svgHeight - d - 10)
              .attr('x', (d, i) => (barWidth * i) + 10)
              .attr('fill', 'white')