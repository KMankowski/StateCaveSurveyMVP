import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  // These files export non-components on purpose, which this rule flags:
  // shadcn components export style helpers, and pages export their loaders
  // and actions. Saving one of these files reloads the page in dev.
  {
    files: [
      'src/components/ui/**/*.{js,jsx}',
      'src/pages/**/*.{js,jsx}',
    ],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
])
