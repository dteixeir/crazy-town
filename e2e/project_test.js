var actionwords = require('./actionwords')

describe('Angular2 POC', function () {
  beforeEach(function () {
  });

  describe('Angular poc webpage loads', function () {
    function angularPocWebpageLoads (page_address, browser, page_title, table_class) {
      // Given open a browser "<browser>"
      // this.actionwords.openABrowser(String(browser));
      // When navigate to page "<page_address>" "<page_title>"
      actionwords.navigateToPage(String(page_address), String(page_title));
      // Then table exists on page "<table_class>"
      actionwords.tableExistsOnPage(String(table_class));
    }

    it('Browser and page info (uid:840ba4b0-c335-4b76-8318-16d2ab31a0ba)', function () {
      angularPocWebpageLoads.apply(this, ['localhost:4200', 'chrome', 'POC', 'table table-striped']);
    });
  });


  describe('Correct headers display on table', function () {
    function correctHeadersDisplayOnTable (user_column_header, org_column_header, active_column_header, table_class) {
      // When table exists on page "<table_class>"
      actionwords.tableExistsOnPage(String(table_class));
      // Then table headers are correct "<user_column_header>" "<org_column_header>" "<active_column_header>"
      actionwords.tableHeadersAreCorrect(String(user_column_header), String(org_column_header), String(active_column_header));
    }

    it('Page and table info (uid:4bea42bb-f4be-43b5-8364-d13457179416)', function () {
      correctHeadersDisplayOnTable.apply(this, ['users', 'OrganizationId', 'Active', 'table table-striped']);
    });
  });


  describe('Table contents loads expected data', function () {
    function tableContentsLoadsExpectedData (user_number, user_name, first_name_last_name, org_id, active_status) {
      // When table exists on page "table table-striped"
      actionwords.tableExistsOnPage("table table-striped");
      // Then table contents are correct "<user_name>" "<first_name_last_name>" "<org_id>" "<active_status>" "<user_number>"
      actionwords.tableContentsAreCorrect(String(user_name), String(first_name_last_name), String(org_id), String(active_status), String(user_number));
    }

    it('First user information (uid:3013fa9a-c7a7-46c2-bb2a-3107b3e3543e)', function () {
      tableContentsLoadsExpectedData.apply(this, [0, 'Mabbott', 'Abbott, Mary (/Benbhs - Enterprise, Hd: 07/01/04)', 8, 'Inactive']);
    });

    it('Second user information (uid:1d016ad2-a71c-4957-a783-1aa189720926)', function () {
      tableContentsLoadsExpectedData.apply(this, [1, 'Aabbott111', 'Abbott, Abe', 8, 'Active']);
    });

    it('Third user information (uid:3ae316a4-f240-4d67-89db-51f8ea1a7460)', function () {
      tableContentsLoadsExpectedData.apply(this, [2, 'Asdf1234', 'Abbott, Abraham', 8, 'Active']);
    });

    it('Fourth user information (uid:0ca57bd8-b602-485d-9ff4-f937f8c854ae)', function () {
      tableContentsLoadsExpectedData.apply(this, [3, 'Abdulkadir11191', 'Abdulkadir, Barbara', 8, 'Active']);
    });

    it('Fifth user information (uid:8acf98dc-43bb-43dd-9bc7-201b17e6a2f0)', function () {
      tableContentsLoadsExpectedData.apply(this, [4, 'Abughazhaleh10768', 'Abughazhaleh, Nicole', 8, 'Inactive']);
    });
  });
});
