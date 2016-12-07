function Mathcode(){
		var arr=new Array();
		var str="";
			for(i=0;i<4;i++){
				var num1=parseInt(Math.random()*10);
				var num2=parseInt(Math.random()*10);
				
				var strNum1=parseInt(Math.random()*26)+65;
				var str1=String.fromCharCode(strNum1);
				
				var strNum2=parseInt(Math.random()*26)+97;
				var str2=String.fromCharCode(strNum2);
				
				var n=parseInt(Math.random()*3);
				console.log(n);
				if(n==0){
					var NewStr=str.concat(num1);
					str=NewStr;
				}else if(n==1){
					var NewStr=str.concat(str1);
					str=NewStr;
				}else if(n==2){
					var NewStr=str.concat(str2);
					str=NewStr;
				}	
			}
				return NewStr;
		
}