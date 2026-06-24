import {defineField, defineType} from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Website Settings",
  type: "document",
  fields: [
    defineField({name: "organizationName", title: "Organization name", type: "string", initialValue: "Bhavani Indonesia"}),
    defineField({name: "tagline", title: "Tagline", type: "string"}),
    defineField({name: "description", title: "About Bhavani", type: "text", rows: 5}),
    defineField({name: "heroTitle", title: "Homepage headline", type: "string"}),
    defineField({name: "heroText", title: "Homepage introduction", type: "text", rows: 3}),
    defineField({name: "vision", title: "Vision", type: "text", rows: 4}),
    defineField({name: "mission", title: "Mission", type: "array", of: [{type: "string"}]}),
    defineField({name: "email", title: "Email", type: "string"}),
    defineField({name: "instagram", title: "Instagram username", type: "string", initialValue: "bhavani.id"}),
  ],
});
