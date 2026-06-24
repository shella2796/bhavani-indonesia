import {defineArrayMember, defineField, defineType} from "sanity";

export const article = defineType({
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    defineField({name: "title", title: "Title", type: "string", validation: (r) => r.required()}),
    defineField({name: "slug", title: "Slug", type: "slug", options: {source: "title"}, validation: (r) => r.required()}),
    defineField({name: "category", title: "Category", type: "string"}),
    defineField({name: "excerpt", title: "Short summary", type: "text", rows: 3, validation: (r) => r.max(220)}),
    defineField({name: "publishedAt", title: "Publication date", type: "datetime", initialValue: () => new Date().toISOString()}),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: {hotspot: true},
      fields: [defineField({name: "alt", title: "Alternative text", type: "string"})],
    }),
    defineField({
      name: "body",
      title: "Article content",
      type: "array",
      of: [
        defineArrayMember({type: "block"}),
        defineArrayMember({
          type: "image",
          options: {hotspot: true},
          fields: [defineField({name: "alt", title: "Alternative text", type: "string"})],
        }),
      ],
    }),
  ],
});
