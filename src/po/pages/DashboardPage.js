class DashboardPage {
    
  get schedulePageLink() { return $('[routerLink="/calendar"]'); }
  get activityMessage() { return $('.activity-message'); }
  get dashboardPageLink() { return $('[routerlink="/dashboard"]'); }

  async open() {
      await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
      const title = await browser.getTitle();
      expect(title).to.equal('Appointment Planner - Syncfusion Angular Components Showcase App'); 
  }

  async navigateToSchedulePage() {
      await this.schedulePageLink.click();
  }

  async verifyActivityMessage(expectedText) {
      await this.dashboardPageLink.click();
      await this.activityMessage.waitForDisplayed({ timeout: 10000 });
      const actualText = await this.activityMessage.getText();
      expect(actualText).to.equal(expectedText);
  }
}

export default new DashboardPage();
