/**
 * - can manipulate a DOM elements
 *  - update its styles, values, or bind data with them
 * 
 * Some methods:
 * select() --> returns the first selection of DOM element
 * selectAll() --> returns all the DOM elements matching the criteria
 */

//only the first h2 changes its color
d3.select('h2').style('color', 'red');

//all paragraphs' changed its colour
d3.selectAll('p').style('color', 'pink'); 


/**
 * - can chain methods
 * 
 * Some methods:
 * .attr() --> can apply different attributes to the selected elements
 * .text() --> can update text
 * .append() --> can append DOM element
 */

d3.select('h3')
.style('color', 'blue')
.attr('class', 'heading')
.text('Updating heading 3')
.append('p')
.style('font-size', '12pt')
.text('appending paragraph under h3 tag');