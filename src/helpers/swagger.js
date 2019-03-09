/**
 * This file is used to specify the instruction being used in the swagger UI frontend
 * To access that, just go to localhost:8000/docs ..Feel free to tweak the port
 */
module.exports = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Pluto Financial Group',
      description: 'Helping You Manage Your Digitized Assets',
      version: '1.0.1'
    },
    tags: [
      {
        name: 'tag1',
        description: "for endpoints that has to do with  'tag1'"
      },
      { name: 'tag1', description: "for endpoints that has to do with  'tag2'" }
    ],
    externalDocs: {
      url: 'https://plutofinancial.www',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
};
