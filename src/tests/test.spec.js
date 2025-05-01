import { assert, expect, should } from 'chai';
import DashboardPage from '../po/pages/DashboardPage.js';
import SchedulePage from '../po/pages/SchedulePage.js';
import NewPatientWindow from '../po/components/NewPatientWindow.js';
import AddAppointmentWindow from '../po/components/AddAppointmentWindow.js';
import { patientData, appointmentData, EXPECTED_MESSAGE } from '../po/data/testData.js';

describe('Schedule Page Test Suite', () => {
  it('should open Dashboard page (Assert)', async () => {
    await DashboardPage.open();
    const title = await browser.getTitle();
    expect(title).to.equal('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('should go to Schedule Page (Should)', async () => {
    await DashboardPage.navigateToSchedulePage();
    (await SchedulePage.calendarCell.waitForDisplayed()).should.be.true;
  });

  it('should open New Appointment Window (Expect)', async () => {
    await SchedulePage.openNewAppointmentWindow();
    await NewPatientWindow.patientName.waitForDisplayed({ timeout: 5000 });
    expect(await NewPatientWindow.patientName.isDisplayed()).to.be.true;
  });

  it('should fill New Patient Window (Assert)', async () => {
    await NewPatientWindow.fillDetails(patientData);
    await NewPatientWindow.save();
    await NewPatientWindow.saveButton.waitForDisplayed({ timeout: 5000, reverse: true }); 
  });

  it('should fill Add Appointment Window (Expect)', async () => {
    await AddAppointmentWindow.fillDetails(appointmentData);
    await AddAppointmentWindow.save();
    await AddAppointmentWindow.saveButton.waitForDisplayed({ timeout: 5000, reverse: true }); 
    expect(await AddAppointmentWindow.saveButton.isDisplayed()).to.be.false;
  });

   it('should check if new appointment was added (Expect)', async () => {
    await DashboardPage.verifyActivityMessage(EXPECTED_MESSAGE);
    const activityText = await DashboardPage.activityMessage.getText(); 
    assert.equal(activityText, EXPECTED_MESSAGE, 'Activity message does not match');

  });
});
