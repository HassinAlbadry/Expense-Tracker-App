function addExpense(){
  let  name=document.getElementById('name').value;
  let date=document.getElementById('date').value;
  let amount=document.getElementById('amount').value;


  
  let tr = document.createElement('tr');
  tr.id = 'notes';
  tr.innerHTML += '<td>'+name+'</td>'+'<td>'+date+'</td>'+'<td>'+amount+'</td>';
  nameResult.appendChild(tr);



  let del=document.createElement('span');
  del.id='delete';
  del.innerHTML="&times;";
  tr.appendChild(del);


del.addEventListener ("click", function() {
       	tr.style.display='none';
       	
	});


}

