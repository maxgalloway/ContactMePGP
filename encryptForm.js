/**
Copyright (C) 2012 Max Galloway-Carson maxvgc@gmail.com

This file is part of ContactMePGP.
    
ContactMePGP is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
function send(message, server, answer){
    var mesg = document.getElementById(message); // store dom element
    var ans = document.getElementById(answer); // store dom element
    var cryptoText = mesg.value;
    var challenge = ans.value;
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange=function()
    {
	if (xmlhttp.readyState==4){
	    switch(xmlhttp.status){

	    case 200:
		document.getElementById("response").innerHTML
		    ='message sent';
		mesg.value = '';
		ans.value = '';
		reloadCaptcha();
		break;

	    case 403:
		reloadCaptcha();
		document.getElementById("response").innerHTML
		    ='incorrect captcha';
		reloadCaptcha();
		ans.value = '';
		break;

	    default:
		document.getElementById("response").innerHTML
		    ='something went wrong, try again';
	    }
	}
    }
    
    xmlhttp.open("POST", server, true);
    xmlhttp.setRequestHeader("Content-type",
			     "application/x-www-form-urlencoded");
    xmlhttp.send('message='+encodeURIComponent(cryptoText)
		 +'&challenge='+encodeURIComponent(challenge));
    
}


function encrypt(text){
    var plain = document.getElementById(text).value+'\r\n';
    var cipher = doEncrypt(keyid, keytyp, pubkey, plain);
    document.getElementById(text).value = cipher;
}

function reloadCaptcha()
{
    document.getElementById('siimage').src = 
	'./secImg/securimage_show.php?sid=' + Math.random();
}
