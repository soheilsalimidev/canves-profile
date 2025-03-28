export default defineAppConfig({
  global: {
    meetingLink: 'https://t.me/soheilsalimidev',
    available: true,
  },
  profile: {
    name: 'Soheil Salimi',
    job: 'Freelancer and Full stack developer',
    email: 'soheilsalimidev@gmail.com',
    phone: '',
    picture: 'https://avatars.githubusercontent.com/u/33542037?v=4',
  },
  socials: {
    github: 'https://github.com/soheilsalimidev',
    spotify: 'https://open.spotify.com/user/cc5f6slcaneq7c4qg4593ppnq?si=03ad22d36bf44a98',
    telegram: 'https://t.me/soheilsalimidev',
  },
  seo: {
    title: 'Canvas a Nuxt portfolio template',
    description: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by HugoRCD',
    url: 'https://soheilsalimidev.ir',
  },
  ui: {
    colors: {
      primary: 'purple',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
