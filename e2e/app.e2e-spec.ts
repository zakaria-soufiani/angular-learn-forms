import { AngularLearnFormsPage } from './app.po';

describe('angular-learn-forms App', () => {
  let page: AngularLearnFormsPage;

  beforeEach(() => {
    page = new AngularLearnFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
