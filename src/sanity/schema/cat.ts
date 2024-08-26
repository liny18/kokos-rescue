import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'cat',
    title: 'Cat',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().error('Name is required')
        }),
        defineField({
            name: 'age',
            title: 'Age',
            type: 'string',
            validation: Rule => Rule.required().error('Age is required')
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required().error('Description is required')
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required().error('Photo is required')
        }),
        defineField({
            name: 'instagramLink',
            title: 'Instagram Link',
            type: 'url',
            validation: Rule => Rule.required().error('Instagram Link is required')
        }),
    ],
});
