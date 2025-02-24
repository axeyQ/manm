import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from '@next/eslint-plugin-next';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  {
    plugins: {
      next: nextPlugin
    },
    rules: {
      'next/no-html-link-for-pages': 'error',
      'next/no-img-element': 'error'
    }
  }
];

export default eslintConfig;
