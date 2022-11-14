function raiz(){
    var n = parseInt(document.getElementById("a").value);
    var r=Math.sqrt(12);
    var ff=0;
    for (i=0;i<n;i++) {
        ff=ff+ (((-1/3)**i)/(2*i+1));
    }
    var ffff=ff*r
    document.getElementById("raiz").innerHTML=(ffff)
}
