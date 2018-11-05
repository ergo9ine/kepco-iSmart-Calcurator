var frame=document.querySelector("frame").contentDocument;
var Now=Number(document.querySelector("frame").contentDocument.querySelector("select[name=month]>[selected='']").value)
var All=0,HighA=0,MiddleA=0,LowA=0,HighV=0,MiddleV=0,LowV=0,Kvar=0,all=0,kvar=0;
var WinterH=[11,12,18,19,20,23];
var WinterM=[10,13,14,15,16,17,21,22];
var WFSL=[1,2,3,4,5,6,7,8,9,24];
var FSH=[11,12,14,15,16,17];
var FSM=[10,13,18,19,20,21,22,23];
function Loop(i){
	var k=i;
	if(k>=13){k=k-12}
	var vst1=Number(frame.querySelector(`.hori_table1:nth-child(4)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child(${k+2})>td:nth-child(2)`).innerHTML);
	var vst2=Number(frame.querySelector(`.hori_table2:nth-child(5)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child(${k+2})>td:nth-child(2)`).innerHTML);
	var kvar1=Number(frame.querySelector(`.hori_table1:nth-child(4)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child(${k+2})>td:nth-child(4)`).innerHTML);
	var kvar2=Number(frame.querySelector(`.hori_table1:nth-child(4)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child(${k+2})>td:nth-child(5)`).innerHTML);
	var kvar3=Number(frame.querySelector(`.hori_table2:nth-child(5)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child(${k+2})>td:nth-child(4)`).innerHTML);
	var kvar4=Number(frame.querySelector(`.hori_table2:nth-child(5)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child(${k+2})>td:nth-child(5)`).innerHTML);
	if(i<=12){All+=vst1,Kvar+=kvar1+kvar2,kvar+=kvar1+kvar2,all+=vst1}
	else if(i>=13){All+=vst2,Kvar+=kvar3+kvar4,kvar+=kvar3+kvar4,all+=vst2}
}
function Month(NowMonth){
	function Low(M){
		if(M>=11||M<=2){
			kvar=0,all=0;
			for(var i of WFSL){Loop(i)}
			console.log(`겨울철 경부하 유효전력 ${all}, 무효전력 ${kvar}`)
		}else if(M==3||M==4||M==5||M==9||M==10){
			kvar=0,all=0;
			for(var i of WFSL){Loop(i)}
			console.log(`봄·가을철 경부하 유효전력 ${all}, 무효전력 ${kvar}`)
		}else if(M==0||M>=13){console.log("Month Error.")}
		else{
			kvar=0,all=0;
			for(var i of WFSL){Loop(i)}
			console.log(`여름철 경부하 유효전력 ${all}, 무효전력 ${kvar}`)
		}
	};
	function Middle(M){
		if(M>=11||M<=2){
			kvar=0,all=0;
			for(var i of WinterM){Loop(i)}
			console.log(`겨울철 중간부하 유효전력 ${all}, 무효전력 ${kvar}`)
		}else if(M==3||M==4||M==5||M==9||M==10){
			kvar=0,all=0;
			for(var i of FSM){Loop(i)}
			console.log(`봄·가을철 중간부하 유효전력 ${all}, 무효전력 ${kvar}`)
		}else if(M==0||M>=13){console.log("Month Error.")}
		else{
			kvar=0,all=0;
			for(var i of FSM){Loop(i)}
			console.log(`여름철 중간부하 유효전력 ${all}, 무효전력 ${kvar}`)
		}
	};
	function High(M){
		if(M>=11||M<=2){
			kvar=0,all=0;
			for(var i of WinterH){Loop(i)}
			console.log(`겨울철 최대부하 유효전력 ${all}, 무효전력 ${kvar}`)
		}else if(M==3||M==4||M==5||M==9||M==10){
			kvar=0,all=0;
			for(var i of FSH){Loop(i)}
			console.log(`봄·가을철 최대부하 유효전력 ${all}, 무효전력 ${kvar}`)
		}else if(M==0||M>=13){console.log("Month Error.")}
		else{
			kvar=0,all=0;
			for(var i of FSH){Loop(i)}
			console.log(`여름철 최대부하 유효전력 ${all}, 무효전력 ${kvar}`)
		}
	};
	Low(NowMonth),Middle(NowMonth),High(NowMonth);
};
console.clear();
Month(Now);
console.log(`총유효 전력 ${All.toString().slice(0,7)}, 총무효 전력 ${Kvar.toString().slice(0,6)}`)
