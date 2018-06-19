<?php
//Patient Info
$pateLastName = $_POST['pateLastName'];
$pateFirstName = $_POST['pateFirstName'];
$pateIntial = $_POST['pateIntial'];
$gender = $_POST['gender'];
$dob = $_POST['dob'];
//Medical Aid information
$mAProvider = $_POST['mAProvider'];
$MAOther = $_POST['MAOther'];
$memNumber = $_POST['memNumber'];
$suffixNumber = $_POST['suffixNumber'];
$memLastName = $_POST['memLastName'];
$memFirstName = $_POST['memFirstName'];
$r2Member = $_POST['r2Member'];
//Visit Informaton
$refDoctor = $_POST['refDoctor'];
$reqExam = $_POST['reqExam'];
//Contact Informaton
$mobNum = $_POST['mobNum'];
$email = $_POST['email'];
$inputAddress = $_POST['inputAddress'];
$inputAddress2 = $_POST['inputAddress2'];
$inputCity = $_POST['inputCity'];
//gen fields
$visDate = date("d")."/".date("m")."/".date("Y");
$visID = "DRMC"."/".mt_rand(0,10000000);

//Clean up data
if ($mAProvider == "OTHER"){
  $mAProvider = $MAOther;
}

//Compile data entry
$data =$visID.",".$visDate.",".$pateLastName.",".$pateFirstName.",".$pateIntial.",".$gender.",".$dob
      .",".$mAProvider.",".$memNumber.",".$suffixNumber.",".$memLastName.",".$memFirstName
      .",".$r2Member.",".$refDoctor.",".$reqExam.",".$mobNum.",".$email.",".$inputAddress.",".$inputCity;

$file="file.csv";

file_put_contents($file, $data . PHP_EOL, FILE_APPEND);

?>
<html>
<head>
  <title>DRMC Patient Log</title>
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">
  <!--Libraries-->
  <link rel="stylesheet" href="_lib/bootstrap-4/css/bootstrap.css">
</head>
<body>
  <div class="container-fluid">
    <div class="row">
      <header class="col-md-12">
        <h1>DRMC Patient Registation</h1>
        <div class="buttonDiv">
          <a href="index.html">
            <button id="back_button" type="button" class="btn btn-success">Back</button>
          </a>
          <a href="csv_get.html">
            <button type="button" class="btn btn-success">Access Data</button>
          </a>
        </div>
      </header>
    </div>
    <div class="row">
      <section class="col-md-12">
        <p>Patient: <?php echo $pateFirstName?> <?php echo $pateLastName?> has been added to our records with Visit ID: <?php echo $visID?></p>
      </section>
      <footer class="col-md-12">
        <p>Designed by Dumezweni Ndlovu</p>
      </footer>
    </div>
  </div>
</body>
</html>
