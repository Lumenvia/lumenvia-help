import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Lumenvia Documentation',
  description: 'Complete guide to using Lumenvia for teachers and students',
  
  // Clean URLs (remove .html)
  cleanUrls: true,
  
  // Base URL for GitHub Pages (will be /lumenvia-help/)
  base: '/lumenvia-help/',
  
  // Ignore dead links during development
  ignoreDeadLinks: true,
  
  // Theme configuration
  themeConfig: {
    // Site logo
    logo: '/logo.svg',
    
    // Navigation
    nav: [
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'For Teachers', link: '/teachers/' },
      { text: 'For Students', link: '/students/' },
      { text: 'Setup & Admin', link: '/setup/' },
      { text: 'Troubleshooting', link: '/troubleshooting/' }
    ],

    // Sidebar navigation
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Welcome to Lumenvia', link: '/getting-started/' },
            { text: 'First Login', link: '/getting-started/first-login' },
            { text: 'Account Setup', link: '/getting-started/account-setup' },
            { text: 'Navigation Overview', link: '/getting-started/navigation' }
          ]
        }
      ],
      
      '/teachers/': [
        {
          text: 'Teacher Guides',
          items: [
            { text: 'Teacher Overview', link: '/teachers/' },
            { text: 'Creating Classes', link: '/teachers/creating-classes' },
            { text: 'Managing Students', link: '/teachers/managing-students' },
            { text: 'Uploading Materials', link: '/teachers/uploading-materials' },
            { text: 'Creating Quizzes', link: '/teachers/creating-quizzes' },
            { text: 'Grading & Feedback', link: '/teachers/grading' },
            { text: 'Analytics & Reports', link: '/teachers/analytics' },
            { text: 'Class Management', link: '/teachers/class-management' }
          ]
        }
      ],
      
      '/students/': [
        {
          text: 'Student Guides',
          items: [
            { text: 'Student Overview', link: '/students/' },
            { text: 'Joining Classes', link: '/students/joining-classes' },
            { text: 'Accessing Materials', link: '/students/accessing-materials' },
            { text: 'Taking Quizzes', link: '/students/taking-quizzes' },
            { text: 'Viewing Grades', link: '/students/viewing-grades' },
            { text: 'Tracking Progress', link: '/students/tracking-progress' },
            { text: 'Using AI Tutor', link: '/students/ai-tutor' }
          ]
        }
      ],
      
      '/setup/': [
        {
          text: 'Setup & Administration',
          items: [
            { text: 'Setup Overview', link: '/setup/' },
            { text: 'Email Integration', link: '/setup/email-integration' },
            { text: 'User Management', link: '/setup/user-management' },
            { text: 'System Configuration', link: '/setup/system-config' }
          ]
        }
      ],
      
      '/troubleshooting/': [
        {
          text: 'Help & Support',
          items: [
            { text: 'Common Issues', link: '/troubleshooting/' },
            { text: 'FAQ', link: '/troubleshooting/faq' },
            { text: 'Browser Support', link: '/troubleshooting/browser-support' },
            { text: 'Contact Support', link: '/troubleshooting/contact-support' }
          ]
        }
      ]
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lumenvia/lumenvia-help' },
      { icon: { svg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' }, link: 'https://lumenvia.app', ariaLabel: 'Visit Lumenvia App' }
    ],

    // Footer
    footer: {
      message: 'Built with ❤️ for educators',
      copyright: 'Copyright © 2024-2025 Lumenvia'
    },

    // Search
    search: {
      provider: 'local'
    },

    // Edit this page - now points to the help repository
    editLink: {
      pattern: 'https://github.com/Lumenvia/lumenvia-help/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  },

  // Head tags
  head: [
    ['link', { rel: 'icon', href: '/lumenvia-help/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'og:title', content: 'Lumenvia Documentation' }],
    ['meta', { name: 'og:description', content: 'Complete guide to using Lumenvia AI-powered teaching platform' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:url', content: 'https://lumenvia.github.io/lumenvia-help/' }]
  ]
})