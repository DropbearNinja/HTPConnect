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
    var table = document.getElementById("MenuItemsTable");
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
    var element1 = document.createElement("input");
    element1.type = "text";
    element1.name="MenuText" +  rowCount;
	element1.placeholder = "Name";
    cell1.appendChild(element1);
	
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name="HostAddress" +  rowCount;
	element2.placeholder = "Address";
    cell2.appendChild(element2);
    
    var element3 = document.createElement("input");
    element3.type = "text";
    element3.name="WebRoot" +  rowCount;
	element3.placeholder = "Webroot";
    cell3.appendChild(element3);
    
    cell4.innerHTML = "<a href='#' onclick='DeleteRow(\"Row"+ rowCount + "\")'><span class='oi' data-glyph='delete' title='Remove Row' aria-hidden='true' style='color:white;font-size:13px;'></span></a>";
}

function DeleteRow(rowID) {
    var table = document.getElementById("MenuItemsTable");
    var row = document.getElementById(rowID);
    
    table.deleteRow(row.rowIndex);
}


function ChangeColours() {
    //alert(window.GlobalSettings["MenuBgColour"]);
    $(".pushy").css("background", window.GlobalSettings['MenuBgColour']);
    $(".pushy a").css("color", window.GlobalSettings['MenuTextColour']);
	$(".pushy a").mouseenter(function() {
		$(this).css("background", window.GlobalSettings['MenuHoverColour']);
		}).mouseleave(function() {
		$(this).css("background", window.GlobalSettings['MenuBgColour']);
	});
	
	
	
	$(".menu-btn").css("background", window.GlobalSettings['MenuBgColour']);
    $(".menu-btn").css("color", window.GlobalSettings['MenuTextColour']);
	$(".menu-btn").mouseenter(function() {
		$(this).css("background", window.GlobalSettings['MenuHoverColour']);
		}).mouseleave(function() {
		$(this).css("background", window.GlobalSettings['MenuBgColour']);
	});
	
	$("#settings").css("color", window.GlobalSettings['PageText']);
	$("body").css("background-color", window.GlobalSettings['PageBackground']);
}

function ShowMenuItemsSettings() {
	$("#menuitems").css("display","inline");
	$("#colours").css("display","none");
	$("#acknowledgements").css("display","none");
}

function ShowColourSettings() {
	$("#menuitems").css("display","none");
	$("#colours").css("display","inline");
	$("#acknowledgements").css("display","none");
}

function ShowAcknowledgements() {
	$("#menuitems").css("display","none");
	$("#colours").css("display","none");
	$("#acknowledgements").css("display","inline");
}