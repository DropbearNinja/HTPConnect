window.GlobalSettings = {"settings": "1" };

$.ajax({
       type: 'GET',
       url: '/cgi-bin/readSettings.py',
       dataType: 'text',
       success: function(jsonData) {
            //alert(jsonData);
            var obj = JSON.parse(jsonData);
            //alert(obj['Key0']);
           window.GlobalSettings = obj;
       },
       error: function() {
            alert('Error loading settings.');
       }
       });
 $(document).ajaxStop(function () {
      //alert(GlobalSettings['MenuBgColour']);
                      ChangeColours();
                      
                      //document.getElementById("MenuBgColour").value = window.GlobalSettings['MenuBgColour'];
                      //document.getElementById("MenuTextColour").value = window.GlobalSettings['MenuTextColour'];
                      
                      });

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
    element2.name="HostName" +  rowCount;
    cell2.appendChild(element2);
    
    var element3 = document.createElement("input");
    element3.type = "text";
    element3.name="HostAddress" +  rowCount;
    cell3.appendChild(element3);
    
    cell4.innerHTML = "<a href='#' onclick='DeleteRow(\"Row"+ rowCount + "\")'><span class='oi' data-glyph='delete' title='Remove Row' aria-hidden='true' style='color:white;font-size:13px;'></span></a>";
}

function DeleteRow(rowID) {
    var table = document.getElementById("settingstable");
    var row = document.getElementById(rowID);
    
    table.deleteRow(row.rowIndex);
}


function ChangeColours() {
    //alert(window.GlobalSettings["MenuBgColour"]);
    $(".pushy").css("background", window.GlobalSettings['MenuBgColour']);
    $(".pushy a").css("color", window.GlobalSettings['MenuTextColour']);
}