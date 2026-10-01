/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
   let startcities=paths.map((item)=>item[0])
   return paths.find((item)=>!startcities.includes(item[1]))[1]

};