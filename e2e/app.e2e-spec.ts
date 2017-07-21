import { EIMAPage } from './app.po';

describe('eima App', () => {
  let page: EIMAPage;

  beforeEach(() => {
    page = new EIMAPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
