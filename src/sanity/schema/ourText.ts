import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'ourText',
    title: 'Our Text',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
        }),
    ],
});
