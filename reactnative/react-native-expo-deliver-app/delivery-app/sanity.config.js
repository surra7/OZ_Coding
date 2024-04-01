import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  name: 'default',
  title: 'Delivery App',

  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
