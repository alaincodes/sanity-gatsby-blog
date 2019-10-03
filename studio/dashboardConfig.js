export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d95c5c0a901e28bd09c6f67',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-m9p7nk54',
                  apiId: '27660113-bf8f-48d2-90d3-05254a417b52'
                },
                {
                  buildHookId: '5d95c5c01b9eee70e44188f4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pofk6nfg',
                  apiId: 'b47efe0c-7931-4cb7-9785-a4cd50a61c98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alaincodes/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pofk6nfg.netlify.com', category: 'apps'}
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
