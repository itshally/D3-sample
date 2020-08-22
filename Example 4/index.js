/**
 * Scales
 *  - are functions which will transform data by either increasing
 *    or decreasing their values for better visualization
 * 
 * Some methods:
 * d3.scaleLinear() --> function
 * .domain() --> takes array as an argument
 *      - this array contains 2 elements
 *      - '0' and the max number in the data set
 * .max() --> gets the highest number
 * .range() --> keeps the scale values inside the range of the SVG container
 *      - it also takes an array offering the first element is '0'
 *        and the second element is the height of the SVG container
 */

//data array
let arr = [1, 2, 3, 4, 5];

let svgWidth = 500, 
    svgHeight = 300, 
    barPadding = 5;

let barWidth = (svgWidth/arr.length);

let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .style('background-color', 'pink');

let yScale = d3.scaleLinear()
               .domain([0, d3.max(arr)])
               .range([0, svgHeight]);

let barChart = svg.selectAll('rect')
                  .data(arr)
                  .enter()
                  .append('rect')
                  .attr('class', 'bar')
                  .attr('y', d => svgHeight - yScale(d))
                  .attr('height', d => yScale(d))
                  .attr('width', barWidth - barPadding)
                  .attr('transform', (d, i) => {
                      let translate = [barWidth * i, 0];
                      return `translate(${translate})`
                  });

// let text = svg.selectAll('text')
//               .data(arr)
//               .enter()
//               .append('text')
//               .text( x => x)
//               .attr('y', (d, i) => svgHeight - d - 10)
//               .attr('x', (d, i) => (barWidth * i) + 10)
//               .attr('fill', 'white')