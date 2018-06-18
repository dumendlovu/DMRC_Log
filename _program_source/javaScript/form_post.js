function validateForm() {
    var pLN = document.forms["patientForm"]["pateLastName"].value;
    var pFN = document.forms["patientForm"]["pateFirstName"].value;
    var gnder = document.forms["patientForm"]['gender'].value;
    var dob = document.forms["patientForm"]['dob'].value;
    var mAidProvider = document.forms["patientForm"]['mAProvider'].value;
    var mAidNumber = document.forms["patientForm"]['memNumber'].value;
    var suffixNumber = document.forms["patientForm"]['suffixNumber'].value;
    var memLastName = document.forms["patientForm"]['memLastName'].value;
    var memFirstName = document.forms["patientForm"]['memFirstName'].value;
    var r2Member = document.forms["patientForm"]['r2Member'].value;
    var refDoctor = document.forms["patientForm"]['refDoctor'].value;
    var reqExam = document.forms["patientForm"]['reqExam'].value;

    var correctionMSG ="";

    if (pLN == "")  correctionMSG += "Patient's Last Name must be filled out.\n";
    if (pFN == "")  correctionMSG += "Patient's First Name must be filled out.\n";
    if (gnder == "") correctionMSG += "A gender must be selected out.\n";
    if (dob == "") correctionMSG += "Date of Birth must be entered.\n";
    if (mAidProvider == "--select--") correctionMSG += "Please select a Medical Aid Provider.\n";
    if (mAidNumber == "") correctionMSG += "Patient's Medical Aid Number must be entered.\n";
    if (suffixNumber == "") correctionMSG += "Patient's Suffix Number must be recorded.\n";
    if (memLastName == "") correctionMSG += "Medical Member's Last Name must be filled out.\n";
    if (memFirstName == "") correctionMSG += "Medical Member's First Name must be filled out.\n";
    if (r2Member == "--select--") correctionMSG += "Please select the Patient's Relation to the Medical Aid Member.\n";
    if (refDoctor == "") correctionMSG += "The Referring Doctor must be entered.\n";
    if (reqExam == "--select--") correctionMSG += "Please select the Requested Procedure.\n";

    if (correctionMSG == ""){
      return true;
    }
    else{
      alert(correctionMSG);
      return false;
    }
}
