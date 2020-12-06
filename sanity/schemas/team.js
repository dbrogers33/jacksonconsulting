import { AiOutlineTeam } from 'react-icons/ai'

export default {
    // Computer Name
    name: 'team',
    // Visible Title
    title: 'Team',
    type: 'document',
    icon: AiOutlineTeam,
    fields: [
        {
            name: 'firstname',
            title: 'First Name',
            type: 'string',
        },
        {
            name: 'lastname',
            title: 'Last Name',
            type: 'string',
        },
        {
            name: 'jobtitle',
            title: 'Job Title',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'firstname',
                maxLength: 100, 
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            title: 'Bio',
            name: 'bio',
            type: 'blockContent'
          }
    ],

};