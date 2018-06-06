$(document).ready(function () {
  $('#load_data').click(function () {
    $.ajax({
      url:"file.csv",
      dataType:"text",
      success:function (data) {
        var csvdata = data.split(/\r?\n|\r/);
        var table_data = '<table class="table-sm"><thead>';
        table_data += '<tr><th>Visit ID</th><th>Visit Date</th><th>Patient Last Name</th><th>Patient First Name</th><th>Initials</th><th>Gender</th><th>Date of Birth</th><th>Medical Aid Provider</th><th>Medical Aid Number</th><th>Index</th><th>Member LastName</th><th>Member Firstname</th><th>Relationship to Member</th><th>Reffering Doctor</th><th>Requested Procedure</th><th>Phone Number</th><th>email</th><th>Address</th><th>City</th></tr></thead>';

        for (var i=0; i<csvdata.length; i++){
          var cell_data = csvdata[i].split(",");
          table_data += "<tbody><tr>";
          for (var cell_count = 0; cell_count< cell_data.length; cell_count++) {
            {
              table_data += '<td>'+cell_data[cell_count]+'</td>';
            }
          }
        }
        table_data+='</tr></tbody></table>';
        $('#csv_table').html(table_data);
      }
    });
  });
});
