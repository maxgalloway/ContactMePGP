
var keyid = '8ea9a23752aedf4f';
var keytyp = 0;

var pubkey = 'CADfZp/jwAP5n1X5VH/qTt+d24D/oOLS03IfDODcZw7zO8FpoV9t62Pp7m/WkrTHHfL0PlyQygoYAebdnAbZnTUux/FXtnz4abXRBISUYQq0qNNtxe3FuAdImV3NFZQ+gakYSEaXX1iycGl4ZlWV7Tpz4x0A1VLEg3DyvbOfEyHPJcNa2z9Crl5s1FwgSsx1WcnZJ1pb30/L1/aktYsGV472VLonVutgOpG487EoxBXHsuiPDBepY5XH/1s2s1g3+oNDIupywts2Ny3FpSK5aqIy51ArhPhVxfB5qdcjTo1I3Oavpy5BH4v41B7zuDjem2NDekARHAMUW0T0fr09PogxABEBAAE';



function encrypt(text){
    return doEncrypt(keyid, keytyp, pubkey, text);
}

function send(cryptoText, server){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange=function()
    {
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
	    document.getElementById("response").innerHTML=xmlhttp.responseText;
	}
    }
    
    xmlhttp.open("POST", server, true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send('message='+encodeURIComponent(cryptoText));
    
}

function encryptAndSend(){
    var plain = document.t.text.value+'\r\n';
    var cipher = encrypt(plain);
    document.t.text.value = cipher;
    send(cipher, 'send.php');
    return;
}
