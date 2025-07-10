
export default {
  basePath: 'https://Alina-em.github.io/test-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
