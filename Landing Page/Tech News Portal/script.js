const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeRedditCodingNews() {
  try {
    const response = await axios.get('https://www.reddit.com/t/programming/');
    const html = response.data;
    const $ = cheerio.load(html);

    const newsList = [];

    $('.Post').each((index, element) => {
      const title = $(element).find('.SQnoC3ObvgnGjWt90zD9Z').text().trim();
      const url = $(element).find('.SQnoC3ObvgnGjWt90zD9Z').attr('href');
      const comments = $(element).find('.FHCV02u6Cp2zYL0fhQPsO').text().trim();

      newsList.push({ title, url, comments });
    });

    return newsList;
  } catch (error) {
    console.error('Error scraping Reddit coding news:', error);
    return [];
  }
}

scrapeRedditCodingNews().then(news => {
  console.log(news); // Do whatever you want with the scraped coding news data
});
