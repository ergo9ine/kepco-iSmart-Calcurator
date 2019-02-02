var b=document.querySelector("frame").contentDocument,
	c=Number(b.querySelector("select[name=month]>[selected='']").value),
	e=0,g=0,h=0,k=0,l=[11,12,18,19,20,23],m=[10,13,14,15,16,17,21,22],n=[1,2,3,4,5,6,7,8,9,24],u=[11,12,14,15,16,17],v=[10,13,18,19,20,21,22,23],string="";
function w(f){
	var a=f;13<=a&&(a-=12);
	var d=Number(b.querySelector(".hori_table1:nth-child(4)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child("+(a+2)+")>td:nth-child(2)").innerHTML),
		p=Number(b.querySelector(".hori_table2:nth-child(5)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child("+(a+2)+")>td:nth-child(2)").innerHTML),
		q=Number(b.querySelector(".hori_table1:nth-child(4)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child("+(a+2)+")>td:nth-child(4)").innerHTML),
		r=Number(b.querySelector(".hori_table1:nth-child(4)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child("+(a+2)+")>td:nth-child(5)").innerHTML),
		t=Number(b.querySelector(".hori_table2:nth-child(5)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child("+(a+2)+")>td:nth-child(4)").innerHTML);
	a=Number(b.querySelector(".hori_table2:nth-child(5)>table:nth-child(1)>tbody:nth-child(1)>tr:nth-child("+(a+2)+")>td:nth-child(5)").innerHTML);
	12>=f?(e+=d,g+=q+r,k+=q+r,h+=d):13<=f&&(e+=p,g+=t+a,k+=t+a,h+=p)
}
function consolelog(a,Load,h,k){
	var M,L;
	if(11<=a||2>=a){M=`겨울철`}else if(3==a||4==a||5==a||9==a||10==a){M=`봄·가을철`}else{M=`여름철`}
	if(Load==1){L=`경부하`}else if(Load==2){L=`중간부하`}else{L=`최대부하`}
	string+=`${M} ${L} 유효전력 ${h.toFixed(2)}, 무효전력 ${k.toFixed(2)}\n`;
};
function err(){alert("Month Error.")}
(function(f){(function(a){
	if(11<=a||2>=a){h=k=0;for(var d of n)w(d);
	consolelog(a,1,h,k)}
	else if(3==a||4==a||5==a||9==a||10==a){h=k=0;for(d of n)w(d);
	consolelog(a,1,h,k)}
	else if(0==a||13<=a)err();else{h=k=0;for(d of n)w(d);
	consolelog(a,1,h,k)}
})(f);
(function(a){
	if(11<=a||2>=a){h=k=0;for(var d of m)w(d);
	consolelog(a,2,h,k)}
	else if(3==a||4==a||5==a||9==a||10==a){h=k=0;for(d of v)w(d);
	consolelog(a,2,h,k)}
	else if(0==a||13<=a)err();else{h=k=0;for(d of v)w(d);
	consolelog(a,2,h,k)}
})(f);
(function(a){
	if(11<=a||2>=a){h=k=0;for(var d of l)w(d);
	consolelog(a,3,h,k)}
	else if(3==a||4==a||5==a||9==a||10==a){h=k=0;for(d of u)w(d);
	consolelog(a,3,h,k)}
	else if(0==a||13<=a)err();else{h=k=0;for(d of u)w(d);
	consolelog(a,3,h,k)}
})(f)})(c);
string+=`총 유효전력 ${e.toFixed(2)}, 총 무효전력 ${g.toFixed(2)}`;
alert(string);
