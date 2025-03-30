export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://www.zozinailbar.co.uk', 'https://zozinailbar.co.uk', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
