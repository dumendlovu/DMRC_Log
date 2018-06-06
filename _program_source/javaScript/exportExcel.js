$(document).ready(function() {
  $('#export_excel').click(function(){
    $('#csv_table').table2excel({
      exclude: ".noExl",
      name: "patient-log",
      filename: "patient-log.xls"
    });
  });
});
