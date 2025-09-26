interface SkillValue {
  link: string;
  label: string
}

export const SkillMap: Record<string, SkillValue> = {
  'js': {
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    label: 'JavaScript'
  },
  'ts': {
    link: 'https://www.typescriptlang.org/',
    label: 'TypeScript'
  },
  'react': {
    link: 'https://react.dev/',
    label: 'React.js',
  },
  'react-native': {
    link: 'https://reactnative.dev/',
    label: 'React Native',
  },
  'vue': {
    link: 'https://vuejs.org/',
    label: 'Vue.js'
  },
  'svelte': {
    link: 'https://svelte.dev/',
    label: 'Svelte'
  },
  'next': {
    link: 'https://nextjs.org/',
    label: 'Next.js'
  },
  'gatsby': {
    link: 'https://www.gatsbyjs.com/',
    label: 'Gatsby'
  },
  'vite': {
    link: 'https://vite.dev/',
    label: 'Vite'
  },
  'redux': {
    link: 'https://redux.js.org/',
    label: 'Redux'
  },
  'contextApi': {
    link: 'https://react.dev/learn/passing-data-deeply-with-context',
    label: 'Context API'
  },
  'tanstack': {
    link: 'http://tanstack.com/',
    label: 'TanStack'
  },
  'wp': {
    link: 'https://wordpress.org/',
    label: 'WordPress'
  },
  'jquery': {
    link: 'https://jquery.com/',
    label: 'jQuery'
  },
  'ajax': {
    link: 'https://en.wikipedia.org/wiki/Ajax_(programming)',
    label: 'AJAX'
  },
  'webpack': {
    link: 'https://webpack.js.org/',
    label: 'Webpack'
  },
  'rwd': {
    link: 'https://en.wikipedia.org/wiki/Responsive_web_design',
    label: 'Responsive Web Design'
  },
  'es6': {
    link: 'https://github.com/lukehoban/es6features',
    label: 'EcmaScript 6'
  },
  'inertia': {
    link: 'https://inertiajs.com/',
    label: 'Intertia.js'
  },
  'html5': {
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    label: 'HTML5'
  },
  'css3': {
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    label: 'CSS3'
  },
  'jest': {
    link: 'https://jestjs.io/',
    label: 'Jest'
  },
  'cypress': {
    link: 'https://www.cypress.io/',
    label: 'Cypress'
  },
  'sass': {
    link: 'https://sass-lang.com/',
    label: 'SASS'
  },
  'less': {
    link: 'https://lesscss.org/',
    label: 'LESS'
  },
  'tailwind': {
    link: 'https://tailwindcss.com/',
    label: 'TailwindCSS'
  },
  'laravel': {
    link: 'https://laravel.com/',
    label: 'Laravel'
  }
};

export type Skill = keyof typeof SkillMap
