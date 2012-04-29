
var keytyp = -1;
var keyid  = '';
var pubkey = '';

function getkey()
{
    var pu=new getPublicKey(document.getElementById('pubkeyBlock').value);
 if(pu.vers == -1) return;

    document.getElementById('vers').value=pu.vers;
    document.getElementById('pkUser').value=pu.user;
    document.getElementById('pKeyid').value=pu.keyid;

 pubkey = pu.pkey.replace(/\n/g,'');

    document.getElementById('pkey').value=pubkey;

    document.getElementById('pktype').value=pu.type;
}
