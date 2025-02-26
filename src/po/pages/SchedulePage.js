class SchedulePage {
    
    get calendarCell() { return $('[aria-label*="Wednesday, August 5, 2020 at 9:00:00 AM"]'); }
    get addPatientButton() { return $('span.e-btn-icon.e-icons.e-add-icon');}
  
    async openNewAppointmentWindow() {
      await this.calendarCell.doubleClick();
      await this.addPatientButton.click();
    }
  }
  
export default new SchedulePage();