
var keyid = '8ea9a23752aedf4f';
var keytyp = 0;

var pubkey = 'CADfZp/jwAP5n1X5VH/qTt+d24D/oOLS03IfDODcZw7zO8FpoV9t62Pp7m/WkrTHHfL0PlyQygoYAebdnAbZnTUux/FXtnz4abXRBISUYQq0qNNtxe3FuAdImV3NFZQ+gakYSEaXX1iycGl4ZlWV7Tpz4x0A1VLEg3DyvbOfEyHPJcNa2z9Crl5s1FwgSsx1WcnZJ1pb30/L1/aktYsGV472VLonVutgOpG487EoxBXHsuiPDBepY5XH/1s2s1g3+oNDIupywts2Ny3FpSK5aqIy51ArhPhVxfB5qdcjTo1I3Oavpy5BH4v41B7zuDjem2NDekARHAMUW0T0fr09PogxABEBAAE';



function encrypt(){
var text = document.t.text.value+'\r\n';
document.t.text.value=doEncrypt(keyid, keytyp, pubkey, text);
}
