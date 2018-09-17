/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var amt=0;
    for (var i1=0; i1<preferences.length; i1++) {
      for(var i2=0; i2<preferences.length; i2++) {
        for(var i3=0; i3<preferences.length; i3++) {
          if (i1!=i2 && i2!=i3 && i3!=i1){ 
          if ((i1+1==preferences[i2])&&(i2+1==preferences[i3])&&(i3+1==preferences[i1])) {
         amt=amt+1;
          }  
        }
      }  
    }
  }
  return (amt/3);
}
