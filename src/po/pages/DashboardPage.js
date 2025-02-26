class DashboardPage {
    
    get schedulePageLink() { return $('[routerLink="/calendar"]'); }
    get activityMessage() { return $('.activity-message'); }
    get dashboardPageLink(){ return $('[routerlink="/dashboard"]')};

  async open() {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  }

  async navigateToSchedulePage() {
    await this.schedulePageLink.click();
  }
  
  async verifyActivityMessage(expectedText) {
    await this.dashboardPageLink.click();
    await this.activityMessage.waitForDisplayed({ timeout: 10000 });
    await expect(this.activityMessage).toHaveText(expectedText);
  }
}

export default new DashboardPage();
