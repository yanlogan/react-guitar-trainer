import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended,         // React rules (flat)
      react.configs.flat['jsx-runtime'],      // для React 17+ JSX transform
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // если тег в несколько строк и props > 1 — первый prop с новой строки
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'], // :contentReference[oaicite:2]{index=2}
      // когда тег многострочный — по одному prop на строку
      'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }], // :contentReference[oaicite:3]{index=3}
      // аккуратно ставим закрывающую скобку
      'react/jsx-closing-bracket-location': ['error', 'tag-aligned'], // :contentReference[oaicite:4]{index=4}
    },
  },
])
