import { fetchVideo } from 'tiktok-scraper-ts';

describe('tiktok link tests', () => {
  const testLink = (url: string) =>
    it(`${url}`, async () => {
      const tiktokVideo = await fetchVideo(url);

      expect(tiktokVideo.downloadURL).not.toBeUndefined();
      console.log(tiktokVideo.downloadURL);
    });

  testLink('https://www.tiktok.com/@jr_designs_cars/video/7122203931609992491?_t=8UmAI9lzF2E&_r=1');
  testLink('https://www.tiktok.com/@.zorlokarma/video/7149367712999935274?is_copy_url=1&is_from_webapp=v1');
  testLink('https://www.tiktok.com/t/ZTRyBnyYX/');
  testLink('https://www.tiktok.com/t/ZTRyNc4nB/?k=1');
  testLink('https://www.tiktok.com/@ewm_bookclub/video/7007016106502163717');
  // testLink('https://vm.tiktok.com/ZMRQw55ME/');
});
