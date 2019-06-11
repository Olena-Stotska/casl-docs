module.exports = {
  title: "CASL",
  description: "Isomorphic authorization JavaScript library which restricts what resources a given user is allowed to access",
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Help CASL', link: 'https://vuejs.org/' },
      { text: 'Languages',
        items: [
          { text: 'English', link: '/language/english' },
          { text: 'Ukraine', link: '/language/ukraine' }
        ]
      },
    ],
    sidebar: {
      '/start/': [
        '', 
        'frontend',
        'backend'
      ]
    } 
    //[
    //   { title: 'Getting Started', children: ['/start/'] },
    //   { title: 'Documentation', children: ['/documentation'] },
    //   { title: 'Articles', children: ['/documentation'] },
    //   { title: 'API Docs', children: ['/documentation'] },
    //   { title: 'Complementary Packages', children: [ /* ... */ ] }
    // ]
  }
}