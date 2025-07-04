let searchDept=(str)=>{

    let xhttp=new XMLHttpRequest();

    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            let  jsonObj=JSON.parse(this.responseText);

            let tableBody=document.getElementById("tblbody");
            tableBody.innerHTML="";

            jsonObj.forEach((Element,index)=>{
                let row=document.createElement("tr");
                let col=document.createElement("td");

                col.innerHTML=(index+1);

                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML=Element.deptname;

                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML="<a href='/deldept?did="+Element.deptid+"'> DELETE </a>";
                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML="<a href='/upddate?dn="+Element.deptname+"&did="+Element.deptid+">UPDATE</a> " ;
                row.appendChild(col);

                tableBody.appendChild(row);

            });
        }
    }
    xhttp.open("get","/searchDeptByName?dn="+str,true);
    xhttp.send();

}

let checkEmailExistance=(str)=>{
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
         document.getElementById("labelmsg").innerHTML=this.responseText;
        document.getElementById("uemail").focus();


        }
        else{
            document.getElementById("labelmsg").innerHTML="";

        }
    };
    xhttp.open("get","/searchEmail?e="+str,true);
    xhttp.send();

}

let getEmployeeByDept=()=>{
     let deptId=document.getElementById("deptid").value;
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
        {
            if(this.readyState==4 && this.status==200)
            {
                console.log(this.responseText);
                let jsonArr=JSON.parse(this.responseText);
                document.getElementById("tblBody").innerHTML="";
                let tableBody=document.getElementById("tblBody");

               let str="";
               for(let i=0;i<jsonArr.length;i++)
               {
                str=str+"<tr>";
                str=str+"<td>"+jsonArr[i].name+"</td>";
                str=str+"<td>"+jsonArr[i].email+"</td>";
                str=str+"<td>"+jsonArr[i].contact+"</td>";
                str=str+"<td><img src='images/"+jsonArr[i].photo+"' width='100px' height='100px' alt='no imge found'/></td>";
                str=str+"<td>"+jsonArr[i].deptname+"</td>";
          
               }
               tableBody.innerHTML=str;

            }
        };
    xhttp.open("get","/getEmpByDeptId?deptId="+deptId,true);
    xhttp.send();

}