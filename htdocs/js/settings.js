var GlobalSettings;

function AddRow() {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("settingstable");
    var rowCount = table.rows.length - 1; // Table has additional row at bottom which shows the add button
    
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(rowCount);
    row.setAttribute("id", "Row"+rowCount);
    
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    // Add some text to the new cells:
    // cell1 is blank
    
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name="Key" +  rowCount;
    cell2.appendChild(element2);
    
    var element3 = document.createElement("input");
    element3.type = "text";
    element3.name="Value" +  rowCount;
    cell3.appendChild(element3);
    
    cell4.innerHTML = "<a href='#' onclick='DeleteRow(\"Row"+ rowCount + "\")'><span class='oi' data-glyph='delete' title='Remove Row' aria-hidden='true' style='color:white;font-size:13px;'></span></a>";
}

function DeleteRow(rowID) {
    var table = document.getElementById("settingstable");
    var row = document.getElementById(rowID);
    
    table.deleteRow(row.rowIndex);
}


function ChangeColours() {
    $(".navbar").css("background-color", getSettings('MenuBGColour'));
    $(".navbar-default").css("background-color", getSettings('MenuBGColour'));;
}

function setElement(elementid, data) {
    document.getElementById(elementid).value = data;
}

function getSettings(setID) {
    return GlobalSettings[setID];
}