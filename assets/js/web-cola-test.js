import * as d3 from 'd3';
import * as cola from 'webcola';

console.log('d3 : ', d3);
console.log('cola : ', cola);
console.log('webcola basic conf');

(function () {

    let svgWidth = 1200, svgHeight = 600;

    let d3cola = cola.d3adaptor()
        .jaccardLinkLengths(175)
        .avoidOverlaps(true)
        .handleDisconnected(false)
        .size([svgWidth, svgHeight]);

    let svg = d3.select("#web-cola-test")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    console.log('d3 svg', svg);
})();
