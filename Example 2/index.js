/**
 * Data Loading and Binding
 * 
 * - can map data into DOM elements
 * 
 * In this example, we are creating a <p></p> for each data item
 * 
 * Some methods:
 * .data() --> it puts data into the waiting state for further processing
 * .enter() --> will take data items 1 by 1 and perform further operations on them
 */

//data array
let arr = [1, 2, 3, 4, 5];

d3.select('body')
.selectAll('p')
.data(arr)
.enter()
.append('p')
// Can also pass a function 
.text( x => x); // --> displays array values
