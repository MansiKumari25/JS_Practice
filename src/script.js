function calcParam()
{
    var len=parseInt(document.getElementById("len").value);
    var wid=parseInt(document.getElementById("wid").value);
    var area=len*wid;
    var perimeter=2*(len+wid);
    console.log(area);
    console.log(perimeter);
    document.getElementById("area").innerHTML=area;
    document.getElementById("peri").innerHTML=perimeter;
}