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
  'react-hook-form': {
    link: 'https://react-hook-form.com/',
    label: 'React Hook Form',
  },
  'zod': {
    link: 'https://zod.dev/',
    label: 'Zod'
  },
  'vue': {
    link: 'https://vuejs.org/',
    label: 'Vue.js'
  },
  'next': {
    link: 'https://nextjs.org/',
    label: 'Next.js'
  },
  'gatsby': {
    link: 'https://www.gatsbyjs.com/',
    label: 'Gatsby'
  },
  'astro': {
    link: 'https://astro.build/',
    label: 'Astro'
  },
  'vite': {
    link: 'https://vite.dev/',
    label: 'Vite'
  },
  'redux': {
    link: 'https://redux.js.org/',
    label: 'Redux Toolkit'
  },
  'zustand': {
    link: 'https://zustand.docs.pmnd.rs/',
    label: 'Zustand'
  },
  'contextApi': {
    link: 'https://react.dev/learn/passing-data-deeply-with-context',
    label: 'Context API'
  },
  'tanstack': {
    link: 'http://tanstack.com/',
    label: 'TanStack'
  },
  'react-query': {
    link: 'http://tanstack.com/',
    label: 'React Query'
  },
  'wp': {
    link: 'https://wordpress.org/',
    label: 'WordPress Development'
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
  'playwright': {
    link: 'https://playwright.dev/',
    label: 'Playwright'
  },
  'rtl': {
    link: 'https://testing-library.com/docs/react-testing-library/intro/',
    label: 'React Testing Library'
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
  'bootstrap': {
    link: 'https://getbootstrap.com/',
    label: 'Bootstrap'
  },
  'chakra': {
    link: 'https://chakra-ui.com/',
    label: 'Chakra UI'
  },
  'material-ui': {
    link: 'https://mui.com/',
    label: 'Material UI'
  },
  'shadcn': {
    link: 'https://ui.shadcn.com/',
    label: 'ShadCN UI'
  },
  'supabase': {
    link: 'https://supabase.com/',
    label: 'Supabase'
  },
  'laravel': {
    link: 'https://laravel.com/',
    label: 'Laravel'
  }
};

export type Skill = keyof typeof SkillMap
