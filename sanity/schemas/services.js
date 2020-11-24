export default {
    // Computer Name
    name: 'services',
    // Visible Title
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'service',
            title: 'Service',
            description: 'Name of the Service provided',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'service',
                maxLength: 100, 
            }
        },
        {
            title: 'Description',
            name: 'description',
            description: 'Description of the Service that is offered',
            type: 'text'
          }
    ],

};