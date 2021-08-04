function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    document.getElementById('john1').innerHTML="Copied To Clipboard! ";
    setTimeout(function(){ document.getElementById('john1').innerHTML="khchiang@yahoo.ca"; }, 1500);
}