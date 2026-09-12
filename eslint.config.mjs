import coreWebVitals from 'eslint-config-next/core-web-vitals'
import next from 'eslint-config-next'

const config = [
  ...coreWebVitals,
  ...next,
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts'],
  },
]

export default config
