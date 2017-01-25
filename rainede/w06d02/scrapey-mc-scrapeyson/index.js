rp = require('request-promise');
const cherio = require('cherio');
const url = 'http://london.startups-list.com/'
const Startup =
rp(url)
  .then(htmlString => {
    const $ = cheerio.load(htmlString);
    const startups = $('.startup');
    startups.each((i,startup) => data((startup) =>{

      const company ={
        name: $(startup).data('name');
        url: $(startup).data('href');
        url: $(startup).data('.main_link img').attr('src');

      }
      return $(startup).data('name');
        };

  })
