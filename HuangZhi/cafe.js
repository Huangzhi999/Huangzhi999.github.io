var total=0;
var total_amount=0;
window.onload=function(){
    var itemSelect = document.getElementById("order")
	document.getElementById("Bancheng1").onclick=function(){
	var options = document.createElement("option")
		options.appendChild(document.createTextNode("1.95--Espresso"));
		itemSelect.appendChild(options);	
		total=total+1.95;
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
           document.getElementById("clear_order").onclick=function(){
	document.getElementById("order").options.length = 0;
    document.getElementById("total").innerHTML="total:$"+total_amount.toFixed(0);
    }
    }
    document.getElementById("Bancheng2").onclick=function(){
	var options = document.createElement("option")
		options.appendChild(document.createTextNode("2.95--Latte"));
		itemSelect.appendChild(options);	
		total=total+1.95;
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
           document.getElementById("clear_order").onclick=function(){
	document.getElementById("order").options.length = 0;
    document.getElementById("total").innerHTML="total:$"+total_amount.toFixed(0);
    }
    }
    document.getElementById("Bancheng3").onclick=function(){
	var options = document.createElement("option")
		options.appendChild(document.createTextNode("3.45--Cappuccino"));
		itemSelect.appendChild(options);	
		total=total+1.95;
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
           document.getElementById("clear_order").onclick=function(){
	document.getElementById("order").options.length = 0;
    document.getElementById("total").innerHTML="total:$"+total_amount.toFixed(0);
    }
    }
    document.getElementById("Bancheng4").onclick=function(){
	var options = document.createElement("option")
		options.appendChild(document.createTextNode("1.75--Coffee"));
		itemSelect.appendChild(options);	
		total=total+1.95;
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
           document.getElementById("clear_order").onclick=function(){
	document.getElementById("order").options.length = 0;
    document.getElementById("total").innerHTML="total:$"+total_amount.toFixed(0);
    }
    }
    document.getElementById("Bancheng5").onclick=function(){
	var options = document.createElement("option")
		options.appendChild(document.createTextNode("1.95--Biscotti"));
		itemSelect.appendChild(options);	
		total=total+1.95;
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
           document.getElementById("clear_order").onclick=function(){
	document.getElementById("order").options.length = 0;
    document.getElementById("total").innerHTML="total:$"+total_amount.toFixed(0);
    }
    }
    document.getElementById("Bancheng6").onclick=function(){
	var options = document.createElement("option")
		options.appendChild(document.createTextNode("2.95--Scone"));
		itemSelect.appendChild(options);	
		total=total+1.95;
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
           document.getElementById("clear_order").onclick=function(){
	document.getElementById("order").options.length = 0;
    document.getElementById("total").innerHTML="total:$"+total_amount.toFixed(0);
    }
    }
    document.getElementById("place_order").onclick=function(){
    window.location.href="checkout.html";
}
}

