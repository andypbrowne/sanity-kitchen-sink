export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604c0b1eb505172cd95b3c79',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f63bv5hs',
                  apiId: '65c61e70-bf7c-4c5f-860b-d1f5dbb81b4f'
                },
                {
                  buildHookId: '604c0b1e53456e33e284afdb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6bkkz7vv',
                  apiId: '31cfb4a5-815c-4cd8-9bb0-eddf2cd27da0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andypbrowne/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6bkkz7vv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
