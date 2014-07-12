function LoadSB() {
    /*$("#myiframe").attr("src", ""); */
    //LoadFrame("http://192.168.0.53:8080");
  //  getHTML("http://www.iinet.net.au");
  //  $("#settings").css( "visibility", "hidden" );
  //  $("#landing").css( "visibility", "hidden" );
}
function LoadSAB() {
    $("#myiframe").attr("src", "http://sabnzbd.org/");
    $("#settings").css( "visibility", "hidden" );
    $("#landing").css( "visibility", "hidden" );
}
function LoadCP() {
    $("#myiframe").attr("src", "https://couchpota.to/");
    $("#settings").css( "visibility", "hidden" );
    $("#landing").css( "visibility", "hidden" );
}
function LoadXBMC() {
    $("#myiframe").attr("src", "http://xbmc.org/");
    $("#settings").css( "visibility", "hidden" );
    $("#landing").css( "visibility", "hidden" );
}
function LoadSettings() {
    $("#myiframe").attr("src", "");
    $("#landing").css( "visibility", "hidden" );
    $("#settings").css( "visibility", "visible" );
}

function LoadFrame(src) {
    $.post(src, "", function(data, status){
           UpdateFrame(data);
           });
}

function getHTML(exturl) {
    var url = "/proxy/getHTML?url=" + exturl;
    $.post(url,"", function(data,status){
           //alert(data);
           setmyiframe(data);
           });
}

function setmyiframe(data) {
    document.getElementById("myiframe").contentWindow.document.write(data);
}