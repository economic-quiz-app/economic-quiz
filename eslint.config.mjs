import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import {defineConfig, globalIgnores} from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  // 빌드 결과물은 우리가 작성한 코드가 아니므로 검사 대상에서 제외
  globalIgnores(['**/dist/**']),

  // 모든 소스에 공통으로 적용되는 규칙
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {js},
    extends: ['js/recommended'],
    languageOptions: {sourceType: 'module'},
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

  // Node 환경 — 백엔드와 설정 파일들
  // 전역을 환경별로 나눠야 백엔드에서 window를 써도 no-undef로 잡힌다
  {
    files: ['backend/**/*.js', '*.{js,mjs}', 'frontend/*.{js,mjs}'],
    languageOptions: {globals: globals.node}
  },

  // 브라우저 환경 — 프론트엔드 소스
  // ecmaFeatures.jsx가 없으면 기본 파서가 JSX 문법을 파싱하지 못한다
  {
    files: ['frontend/src/**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {ecmaFeatures: {jsx: true}}
    },
    plugins: {'react-hooks': reactHooks},
    rules: reactHooks.configs['recommended-latest'].rules
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

  // 포맷 관련 규칙을 끄므로 반드시 마지막에 위치해야 한다
  eslintConfigPrettier
]);
