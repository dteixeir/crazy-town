// import { element, by, browser } from 'protractor';

module.exports = {
  loadWebpage: function (url, page_title) {
    // Action of loading a webpage. This will create an instance of the page and verify the page has loaded by checking the title of the page.
    //
    // The default action is to load the base page of the site under test. For this project's purposes that is the localhost instance of the Angular2 POC.
    // Tags: page_load
    // this.openABrowser("chrome");
    this.navigateToPage(String(url), String(page_title));
  },

  openABrowser: function (browser_name) {
    // Open the Google Chrome browser and make sure that there is only one browser open.

  },

  navigateToPage: function (page, title) {
    // Open the page for the POC, which should be a localhost address.
    browser.driver.get(page);

    expect(browser.getTitle()).toEqual(title);
  },

  tableExistsOnPage: function (css_class) {
    // When the POC homepage is loaded, the user table should exist on the page.
    browser.isElementPresent(by.css(css_class));
  },

  tableHeadersAreCorrect: function (user_column_header, org_column_header, active_column_header) {
    // When the table is displayed on the page, the headers for each column should be checked for being correct. This also doubles as a check to make sure that the headers exist on the page.
    var _headers = browser.element.all(by.css('th')).map(function (el) {
      return el.getText();
    });

    expect(_headers).toEqual([
      "",
      "users",
      "OrganizationId",
      "Active",
    ]);
  },

  tableContentsAreCorrect: function (user_name, first_name_last_name, org_id, active_status, row) {
    // The contents of the user table should be correct. Checks that the mail and book buttons exist for the user, 
    // as well as the correct user name, first / last name, organization id, and the active status.

    let list = element.all(by.tagName('tbody tr'));
    list.get(row).all(by.tagName('td')).then((cell) => {
      for (var i = 0; i < cell.length; i++) {
        if (i == 0) {
          cell[i].all(by.css('.fa')).getAttribute('class').then((data) => {
            expect(data[0]).toEqual('fa fa-book');
            expect(data[1]).toEqual('fa fa-envelope fa-1');
          });
        } else {
          cell[i].getText().then((data) => {
            switch (i) {
              case 1:
                expect(data).toEqual(first_name_last_name+'\r'+user_name);
                break;

              case 2:
                expect(data).toEqual(org_id);
                break;

              case 3:
                expect(data).toEqual(active_status);
                break;
            }
          });
        }
      }
    });
  }
};
