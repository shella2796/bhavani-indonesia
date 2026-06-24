import {defineField, defineType} from "sanity";

export const program = defineType({
  name: "program",
  title: "Programs",
  type: "document",
  fields: [
    defineField({name: "title", title: "Program name", type: "string", validation: (r) => r.required()}),
    defineField({name: "shortDescription", title: "Short description", type: "text", rows: 3}),
    defineField({name: "description", title: "Full description", type: "array", of: [{type: "block"}]}),
    defineField({name: "date", title: "Date", type: "date"}),
    defineField({name: "image", title: "Program image", type: "image", options: {hotspot: true}}),
    defineField({name: "isFeatured", title: "Feature on homepage", type: "boolean", initialValue: false}),
    defineField({name: "order", title: "Display order", type: "number", initialValue: 0}),
  ],
});
