function fit(in0,from0,to0,fromFix0,toFix0){

var a1=from0;
var a2=to0;
var b1=1;
var b2=1;
var c1=fromFix0;
var c2=toFix0;
var den=(a2*b1-a1*b2);
var res=0;

if(den!=0){
	//a1x+b1y=c1
	//a2x+b2y=c2
	//cramer
	var x=(b1*c2-b2*c1)/den;
	var y=(a2*c1-a1*c2)/den;
	res=in0*x+y;

}else{

	console.log("error div 0");
}
return res;
}//fit(5, 1,100,1,100)

var str;
function graf( in0, scaleFrom, scaleTo ){

var toFit= (!isNaN(parseFloat(in0)) && isFinite(in0) ) ? in0 : in0.charCodeAt(0);
var inScaled=Math.round(fit(toFit, scaleFrom,scaleTo,1,8));
var baseChar='2580';
var strAdded=(String.fromCharCode(parseInt(baseChar,16)+inScaled));
//console.clear();
//console.log(strAdded);
return strAdded;




}

