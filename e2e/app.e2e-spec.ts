import { CrazyTownPage } from './app.po';

describe('crazy-town App', function() {
  let page: CrazyTownPage;

  beforeEach(() => {
    page = new CrazyTownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Crazy-Town!');
  });
});
