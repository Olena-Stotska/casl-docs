module.exports = {
  title: "CASL",
  description: "test description",
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
    sidebar: [
      { title: 'Getting Started', children: [ '/' ] },
      { title: 'Documentation', children: [ 'documentation' ] },
      { title: 'Articles', children: [ /* ... */ ] },
      { title: 'API Docs', children: [ /* ... */ ] },
      { title: 'Complementary Packages', children: [ /* ... */ ] }
    ]
  }
}