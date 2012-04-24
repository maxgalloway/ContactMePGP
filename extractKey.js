
var keytyp = -1;
var keyid  = '';
var pubkey = '';

function getkey()
{
 var pu=new getPublicKey(document.s.pubkey.value);
 if(pu.vers == -1) return;

 document.s.vers.value=pu.vers;
 document.s.user.value=pu.user;
 document.s.keyid.value=pu.keyid;

 pubkey = pu.pkey.replace(/\n/g,'');
 document.s.pkey.value=pubkey;
 document.s.pktype.value=pu.type;
}
