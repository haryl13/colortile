



function randomclr (){
    var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var clr = ["red" ,"red","blue","blue","red" ,"red","blue","blue","green","green","yellow","yellow","green","green","yellow","yellow","orange","orange","white","purple","purple","orange","orange","purple","purple"] 
   
 jumnum =[];
 jumclr=[];
 i= num.length;
 j=0;
  
 while(i--){
    
 j = Math.floor(Math.random()* (i+1) );
 
 jumnum.push(num[j]);
 num.splice(j,1);
 }
 console.log(jumnum);

  for (k=0 ; k < 25 ;k++){
      i= jumnum[k] - 1 ;
      
      jumclr.push(clr[i]);
  }
 return jumclr ; 
}
 
//assigning random colors to the  css elements
var x = randomclr(); 
//var  a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25;
//console.log(randomclr());
var y = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14","a15","a16","a17","a18","a19","a20","a21","a22","a23","a24","a25"];
 var z= ["b1","b2","b3","b4","b5","b6","b7","b8","b9"]; // console.log(y);
   //y[0] =x[0];
  // document.getElementById('a3').style.backgroundColor= "blue";
   for(i=0;i<25;i++){
document.getElementById(y[i]).style.backgroundColor = x[i];
   }

x.splice(x.indexOf("white"),1);
console.log(x);
   //random clr for 3x3grid
   for(i=0;i<9;i++){
    document.getElementById(z[i]).style.backgroundColor = x[23-i];
       }
    