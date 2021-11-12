function isEven(value)
{
    if (value%2 == 0)
        return true;
    else
        return false;
}

function drawline(acol)
{
  for(var k=1; k<=arow; k++)
  {
    var arg1 = Math.random() * 10000;
    var id = "id"+k+"_"+acol;
    var arg2 = document.getElementById(id);
    arg2.textContent=arg1;
  }
}


function atable()
{
arow=document.getElementById('arow').value;
acol=document.getElementById('acol').value;
atime=document.getElementById('atime').value*1000;
document.write('<table id="table" border="solid 2px;" style="font-size:20px;"><thead><tr style="background-color: #FFFF00;">');
for(var j=1; j<=arow; j++)
{
 document.write("<th><label style='color:red;'>"+j+"</label></th>");
}
document.write('</tr></thead>');
for(var i =1; i<=acol; i++)
{
	document.write("<tr>");
   
	for(var k=1; k<=arow; k++)
		{
           
  		if (isEven(i))
     		   document.write("<td style='background-color: #00FFFF;width:100px;'><div id='id"+k+"_"+i+"'>&nbsp;</div></td>");	
     		else
     		   document.write("<td style='background-color: #FF00FF;width:100px;'><div id='id"+k+"_"+i+"'>&nbsp;</div></td>");	
		}
	document.write("</tr>"); 
}

document.write("</table>");
document.write('<input type=hidden id=arow value="'+arow+'">');
document.write('<input type=hidden id=acol value="'+acol+'">');
document.write('<input type=hidden id=atime value="'+atime+'">');
document.write('<input type=submit value="Старт" style="font-size:7pt" onclick="return setTimeout(atable2,atime)">');

return 0;
}

function atable2()
{
arow=document.getElementById('arow').value;
acol=document.getElementById('acol').value;
atime=document.getElementById('atime').value + 1000;
for(var i =1; i<=acol; i++)
    {
       
        drawline(i);

    }
}
