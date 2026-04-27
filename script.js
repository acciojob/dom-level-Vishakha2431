//your JS code here. If required.
let curr=document.getElementById("level")
let count =0;
while(curr){
	count++;

	curr=curr.parentElement
}

alert(`The level of the element is: ${count}`)