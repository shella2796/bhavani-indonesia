import {defineField, defineType} from "sanity";

export const program = defineType({
  name: "program",
  title: "Programs",
  type: "document",
  fields: [
    defineField({name: "title", title: "Program name", type: "string", validation: (r) => r.required()}),
    defineField({name: "slug", title: "Slug", type: "slug", options: {source: "title"}}),
    defineField({
      name: "pillar",
      title: "Program pillar",
      type: "string",
      options: {
        list: [
          "Pemberdayaan Individu",
          "Kolaborasi & Jejaring",
          "Advokasi Berbasis Data",
        ],
      },
    }),
    defineField({name: "shortDescription", title: "Short description", type: "text", rows: 3}),
    defineField({name: "description", title: "Full description", type: "array", of: [{type: "block"}]}),
    defineField({name: "date", title: "Date", type: "date"}),
    defineField({name: "image", title: "Program image", type: "image", options: {hotspot: true}}),
    defineField({name: "isFeatured", title: "Feature on homepage", type: "boolean", initialValue: false}),
    defineField({name: "highlights", title: "Program highlights", type: "array", of: [{type: "string"}]}),
    defineField({name: "order", title: "Display order", type: "number", initialValue: 0}),
  ],
});
