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

    const team = await graphql(`
      {
        allSanityTeam(filter: {slug: {current: {ne: null}}}) {
          edges {
            node {
              firstname
              email
              jobtitle
              lastname
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

    const teamMember = team.data.allSanityTeam.edges || []
    teamMember.forEach((edge, index) => {
      const path = `/team/${edge.node.slug.current}`
  
      createPage({
        path,
        component: require.resolve('./src/templates/team-member.js'),
        context: {slug: edge.node.slug.current},
      })
    })
  }

  // exports.createPages = async ({graphql, actions}) => {
  //   const {createPage} = actions
  
    
  
  //   if (result.errors) {
  //     throw result.errors
  //   }
  

  // }