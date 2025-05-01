class NewPatientWindow {
  
    get patientName() { return $('aria/Patient Name'); }
    get dateOfBirth() { return $('#DOB_input'); }
    get mobileNumber() { return $('#PatientMobile'); }
    get email() { return $('input#textbox_47'); }
    get symptoms() { return $('aria/Symptoms'); }
    get saveButton() { return $$('div.button-container button.e-primary')[1]; }
  
    async fillDetails({ name, dob, phone, email, symptoms }) {
      await this.patientName.setValue(name);
      await this.dateOfBirth.setValue(dob);
      await this.mobileNumber.setValue(phone);
      await this.email.setValue(email);
      await this.symptoms.setValue(symptoms);

    }
  
    async save() {
      await this.saveButton.click();
    }
  }
  
export default new NewPatientWindow();