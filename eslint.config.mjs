import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import {defineConfig} from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {js},
    extends: ['js/recommended'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'lines-between-class-members': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ['**/*.test.{js,mjs,cjs}'],
    plugins: {vitest},
    rules: {
      ...vitest.configs.recommended.rules,
      // supertest의 request(...).expect(...) 체이닝도 assertion으로 인식하도록 확장
      'vitest/expect-expect': ['error', {assertFunctionNames: ['expect', '**.expect']}]
    }
  },
  eslintConfigPrettier
]);
