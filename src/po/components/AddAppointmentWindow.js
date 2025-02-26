import { appointmentData } from "../data/testData";

class AddAppointmentWindow {
 
    get patientName() { return $('#PatientName'); }
    get title() { return $('input#Name.e-subject'); }
    get location() { return $('input#Location.e-location'); }
    get symptoms() { return $('aria/Symptom'); }
    get saveButton() { return $('div#_dialog_wrapper div.e-footer-content button.e-primary'); }
  
    async fillDetails({ patientName, title, location, symptoms }) {
      await this.patientName.setValue(patientName);
      await this.title.setValue(title);
      await this.location.setValue(location);
      await this.symptoms.setValue(symptoms);
    }
  
    async save() {
      await this.saveButton.click();
    }
  }
  
export default new AddAppointmentWindow();