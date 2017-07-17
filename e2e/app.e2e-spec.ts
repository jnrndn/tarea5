import { TourofHeroesPage } from './app.po';

describe('tourof-heroes App', () => {
  let page: TourofHeroesPage;

  beforeEach(() => {
    page = new TourofHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
