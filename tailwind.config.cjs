const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:     '#0A0F1E',
          surface:  '#0F172A',
          card:     '#1E293B',
          border:   '#334155',
          muted:    '#475569',
          text:     '#CBD5E1',
          bright:   '#F1F5F9',
        },
        accent: {
          orange:   '#F97316',
          orangeHover: '#EA6C0A',
          glow:     'rgba(249,115,22,0.15)',
        },
        light: {
          bg:       '#F8FAFC',
          card:     '#FFFFFF',
          border:   '#E2E8F0',
          text:     '#1E293B',
          muted:    '#64748B',
        }
      },
      fontFamily: {
        heading: ['Sora', ...defaultTheme.fontFamily.sans],
        body:    ['Inter', ...defaultTheme.fontFamily.sans],
        mono:    ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        'display':  ['4.5rem',  { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h1':       ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2':       ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3':       ['1.5rem',  { lineHeight: '1.3',  fontWeight: '600' }],
        'label':    ['0.75rem', { lineHeight: '1',    letterSpacing: '0.1em',  fontWeight: '600' }],
      },
      boxShadow: {
        'glow-orange': '0 0 40px rgba(249, 115, 22, 0.25), 0 0 80px rgba(249, 115, 22, 0.1)',
        'glow-orange-lg': '0 0 50px rgba(249, 115, 22, 0.5)',
        'cta-orange': '0 0 30px rgba(249, 115, 22, 0.3)',
        'lift': '0 20px 60px rgba(0,0,0,0.4)',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.brand.text'),
            '--tw-prose-headings': theme('colors.brand.bright'),
            '--tw-prose-lead': theme('colors.brand.text'),
            '--tw-prose-links': theme('colors.accent.orange'),
            '--tw-prose-bold': theme('colors.brand.bright'),
            '--tw-prose-counters': theme('colors.brand.muted'),
            '--tw-prose-bullets': theme('colors.brand.border'),
            '--tw-prose-hr': theme('colors.brand.border'),
            '--tw-prose-quotes': theme('colors.brand.bright'),
            '--tw-prose-quote-borders': theme('colors.brand.border'),
            '--tw-prose-captions': theme('colors.brand.muted'),
            '--tw-prose-code': theme('colors.accent.orange'),
            '--tw-prose-pre-code': theme('colors.brand.text'),
            '--tw-prose-pre-bg': theme('colors.brand.navy'),
            '--tw-prose-invert-body': theme('colors.light.text'),
            '--tw-prose-invert-headings': theme('colors.light.text'),
            '--tw-prose-invert-lead': theme('colors.light.text'),
            '--tw-prose-invert-links': theme('colors.accent.orange'),
            '--tw-prose-invert-bold': theme('colors.light.text'),
            '--tw-prose-invert-counters': theme('colors.light.muted'),
            '--tw-prose-invert-bullets': theme('colors.light.border'),
            '--tw-prose-invert-hr': theme('colors.light.border'),
            '--tw-prose-invert-quotes': theme('colors.light.text'),
            '--tw-prose-invert-quote-borders': theme('colors.light.border'),
            '--tw-prose-invert-captions': theme('colors.light.muted'),
            '--tw-prose-invert-code': theme('colors.accent.orange'),
            '--tw-prose-invert-pre-code': theme('colors.brand.text'),
            '--tw-prose-invert-pre-bg': theme('colors.brand.card'),
            '--tw-prose-invert-th-borders': theme('colors.light.border'),
            '--tw-prose-invert-td-borders': theme('colors.light.border'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}