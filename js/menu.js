function LoadSB() {
    $("#myiframe").attr("src", "http://192.168.1.3:8081");
    $("#settings").css( "visibility", "hidden" );
    $("#landing").css( "visibility", "hidden" );
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

