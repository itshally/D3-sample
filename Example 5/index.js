/**
 * Axes
 *  - are made of lines, ticks and text
 * 
 * Some methods:
 * d3.axisTop() --> for x-axis
 * d3.axisRight()
 * d3.axisBottom()
 * d3.axisLeft() --> for y-axis
 */

let arr = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let svgWidth = 550,
    svgHeight = 300;

let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

let xScale = d3.scaleLinear()
               .domain([0, d3.max(arr)])
               .range([0, svgWidth]);

let yScale = d3.scaleLinear()
               .domain([0, d3.max(arr)])
               .range([0, svgHeight]);

let x_axis = d3.axisBottom().scale(xScale);

let y_axis = d3.axisLeft().scale(yScale);

svg.append('g')
   .attr('transform', 'translate(50, 10)')
   .call(y_axis);

let xAxisTranslate = svgHeight - 20;

svg.append('g')
   .attr('transform', 'translate(50, ' + xAxisTranslate + ')')
   .call(x_axis);


// <g> element is used to 'group' SVG element