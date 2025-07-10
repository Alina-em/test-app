
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Alina_em.github.io/test-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXQHBL5Q.js"
    ],
    "route": "/test-app"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L6JYNXEZ.js"
    ],
    "route": "/test-app/account"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24120, hash: '359741dd1b728a1d486b4e1267b7102a176475af98e6bc5fb6929529f289abac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17323, hash: 'f41cb06a51399076f60c637b41a3c6346bcc139f41503cdae4a76a5975d3533a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 59602, hash: 'd812fd8b853067c1345f8b6e615a45070628db0921521d71df5e9acb51fb2039', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'account/index.html': {size: 59708, hash: '07638cb8892e4f300fee346206083f2f618cbc79e5bb72a704c8b8ce5ab16cca', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'styles-SHXI5TM3.css': {size: 7781, hash: 'a80f+exCx6o', text: () => import('./assets-chunks/styles-SHXI5TM3_css.mjs').then(m => m.default)}
  },
};
