import DashboardPage from '../po/pages/DashboardPage.js';
import SchedulePage from '../po/pages/SchedulePage.js';
import NewPatientWindow from '../po/components/NewPatientWindow.js';
import AddAppointmentWindow from '../po/components/AddAppointmentWindow.js';
import {patientData, appointmentData, EXPECTED_MESSAGE} from '../po/data/testData.js';

describe('Schedule Page Test Suite', () => {

    it('should open Dashboard page', async () => {
        await DashboardPage.open();
    });
  
    it('should go to Schedule Page', async () => {
        await DashboardPage.navigateToSchedulePage();
    });
  
    it('should open New Appointment Window', async () => {
        await SchedulePage.openNewAppointmentWindow();
    });
  
    it('should fill New Patient Window', async () => {
        await NewPatientWindow.fillDetails(patientData);
        await NewPatientWindow.save();
    });
  
    it('should fill Add Appointment Window', async () => {
        await AddAppointmentWindow.fillDetails(appointmentData);
        await AddAppointmentWindow.save();
    });

    it('should check if new appointment added', async () => {
        await DashboardPage.verifyActivityMessage(EXPECTED_MESSAGE);
    });
});
 