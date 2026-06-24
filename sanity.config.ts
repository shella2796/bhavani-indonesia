"use client";

import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {visionTool} from "@sanity/vision";
import {schemaTypes} from "@/sanity/schemaTypes";

export default defineConfig({
  name: "bhavani",
  title: "Bhavani Indonesia",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "peewnyge",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {types: schemaTypes},
});
