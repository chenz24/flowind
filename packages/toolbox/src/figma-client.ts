import { resolve } from 'path';
import dotenv from 'dotenv';

import Figma from './figma';

dotenv.config({ path: resolve(process.cwd(), '.env') });

const accessToken = process.env.FIGMA_TOKEN || '';

if (!accessToken) {
  throw new Error('FIGMA_TOKEN is not defined');
}

export const client = new Figma({
  accessToken,
  maxRetries: 3,
});
