exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
  
    const result = await graphql(`
      {
        allSanityServices(filter: {slug: {current: {ne: null}}}) {
          edges {
            node {
              service
              description
              id
              slug {
                current
              }
            }
          }
        }
      }
    `)
  
    if (result.errors) {
      throw result.errors
    }
  
    const services = result.data.allSanityServices.edges || []
    services.forEach((edge, index) => {
      const path = `/services/${edge.node.slug.current}`
  
      createPage({
        path,
        component: require.resolve('./src/templates/service.js'),
        context: {slug: edge.node.slug.current},
      })
    })
  }