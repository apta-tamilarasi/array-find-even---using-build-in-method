var arr1=[12, 13, 40, 33, 45, 22, 94];
var arr2=[];

	document.write("Given array is "+"[12, 13, 40, 33, 45, 22, 94]"+"<br><br>");
	document.write("Find even number"+"<br><br>");
	
for (let i=0; i<arr1.length; i++){
	if(arr1[i]%2==0){
		
		arr2.push(arr1[i]);
		document.write(arr1[i]+"<br>")
	}
	
}
console.log(arr2);