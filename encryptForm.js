
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
