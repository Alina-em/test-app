
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Alina-em.github.io/test-app/',
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
    'index.csr.html': {size: 24120, hash: '36689ce4db6e6e0b2781d6b8317cd4e29bc50ce71cde0120c89d311e9a7ebca0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17323, hash: '1acb8a4a53ccd34eb26f89e49257f46bb095f018d386121b585cde22f8582112', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 59602, hash: 'dac0d732879e26530646a7060c511443d90d014230b474a45a0d20b429df40f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'account/index.html': {size: 59702, hash: '53f4413232bd6d7594f3394b2aadebf94420f433cd9c25efcb5f3e6fccd52d7f', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'styles-SHXI5TM3.css': {size: 7781, hash: 'a80f+exCx6o', text: () => import('./assets-chunks/styles-SHXI5TM3_css.mjs').then(m => m.default)}
  },
};
