/**
 * Creating SVG elements
 * 
 * - to create a line, having a coordinates are needed for
 *      the starting and ending points of a line
 * - starting coordinate at (x1, y1)
 * - ending coordinates at (x2, y2)
 */

let svgWidth = 600,
    svgHeight = 500;

let svg = d3.select('svg')
             .attr('width', svgWidth)
             .attr('height', svgHeight)
             .attr('class', 'svg-container');


let line = svg.append('line')
              .attr('x1', 100)
              .attr('x2', 500)
              .attr('y1', 50)
              .attr('y2', 50)
              .attr('stroke', 'red')
              .attr('stroke-width', 5);

let rectangle = svg.append('rect')
                   // x and y coordinates
                   .attr('x', 100)
                   .attr('y', 100)
                   //width and height attributes
                   .attr('width', 200)
                   .attr('height', 100)
                   .attr('fill', 'blue');

let  circle = svg.append('circle')
                //  cx and cy coordinates
                 .attr('cx', 200)
                 .attr('cy', 300)
                // r is radius 
                 .attr('r', 80)
                 .attr('fill', 'yellow');