function LoadSB() {
    $("#settings").css( "visibility", "hidden" );
    $("#landing").css( "visibility", "hidden" );
    $("#myiframe").attr("src", "/sickbeard");
}

function LoadSAB() {
    $("#myiframe").attr("src", "/sabnzbd");
    $("#settings").css( "visibility", "hidden" );
    $("#landing").css( "visibility", "hidden" );
}

function LoadCP() {
    $("#myiframe").attr("src", "/couchpotato");
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
