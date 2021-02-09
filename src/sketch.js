
let values = [];
let i = 0;
let j = 0;
let Play = 1;
let Reset = 1;
let AlgoName = ""
var QuickSortList=[[]]


function sketch(p) {
    let rotation = 0;

    p.setup = function () {
        p.createCanvas(400, 400);
        p.background(255)
        initialize();
    };



    p.draw = function () {
      p.background(220);
      
      bubbleSort();
      simulateSorting();
      console.log(AlgoName)
    };

    function SetPlay(i){
      Play = i
    }
    function SetReset(i) {
      Reset = i
    }

    
    function initialize(){
      i = 0;
      j = 0;
      SetPlay(0);
      values = [];
      var QuickSortList=[[]]
      for(let i = 0;i<p.width/8;i++){
        values.push(p.random(p.height));
        QuickSortList[0].push(p.random(p.height));
      }
    }

    function simulateSorting(){
      for(let i = 0;i<values.length;i++){
        p.stroke(100, 143, 143);
        p.fill(50);
        p.rect(i*8 , p.height, 8, -values[i],20);
       }
    }
    
    
    
    
    function bubbleSort() {
      for(let k = 0;k<8;k++){
        if(i<values.length){
          let temp = values[j];
          if(values[j] > values[j+1]){
            values[j] = values[j+1];
            values[j+1] = temp;
          }
          j++;
          
          if(j>=values.length-i-1){
            j = 0;
            i++;
          }
        }
      }
    }


    function test()
    {
      console.log("Test");
    }
};


export function SetAlgorithm(algoName) {
  console.log("hello")
  AlgoName = algoName
}



export default sketch;
