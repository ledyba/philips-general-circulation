function main(){
  window.onload=function(ev:Event){
    var earth = new Model.Earth();
    var time = 130*10;
    for(var k = 0;k<time;k++){
      earth.step();
    }
    earth.step();
    window.document.body.innerHTML = earth.q1avg.toString();
  };
};
