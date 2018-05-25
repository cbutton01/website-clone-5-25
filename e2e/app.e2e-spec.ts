import { WebsiteClonePage } from './app.po';

describe('website-clone App', function() {
  let page: WebsiteClonePage;

  beforeEach(() => {
    page = new WebsiteClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
