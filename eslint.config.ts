import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx,json}', 'eslint.config.ts', 'javascript/**/*.js}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  ...pluginOxlint.configs['flat/recommended'],

  {
    rules: {
      "vue/html-indent": ["error", 2],
      "vue/no-multi-spaces": "error",
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "^_"
      }],
      "vue/multi-word-component-names": "off",

      "no-multi-spaces": "error",
      "key-spacing": ["error", {
        "beforeColon": false,
        "afterColon": true
      }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-spacing": ["error", {
        "before": false,
        "after": true
      }],
      "space-infix-ops": "error",
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", "never"]
    }
  }
)
