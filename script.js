function btn(){
    var str=document.getElementById("string").value;
    a=str.startsWith("https://drive.google.com/file/d/");
    b=str.startsWith("https://drive.google.com/open?id=");
    if(a){
    var bt=str.replace("file/d/", "uc?id=");
    var bo=bt.replace("/view?usp=sharing", "&export=download");
    document.getElementById('ans').innerHTML="<p style='color:red'>INITIAL LINK IS</p>"+"<p style='color:indigo'>"+str+
    "</p><br/><br/>"+"<p style='color:red'>CONVERTED TO THIS NEW LINK BELOW....</p>";
    a=document.getElementById('ans2').innerHTML="<br/><br/><p style='color:black'>"+bo+"</p>";
    document.getElementById("ans2").value=bo}else if(b){



        var bt=str.replace("open", "uc");
    var bo=bt+"&export=download";
    document.getElementById('ans').innerHTML="<p style='color:red'>INITIAL LINK IS</p>"+"<p style='color:pink'>"+str+
    "</p><br/><br/>"+"<p style='color:red'>CONVERTED TO THIS NEW LINK BELOW....</p>";
    a=document.getElementById('ans2').innerHTML="<br/><br/><p style='color:black'>"+bo+"</p>";
    document.getElementById("ans2").value=bo
    }else{alert("The link is not Google drive link! Try again with another link."); return false;}
}
function myFunction(){
    var copyText=document.getElementById("ans2");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}