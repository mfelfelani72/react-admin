// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // متن (text)
    'text-blue-theme', 'hover:text-blue-theme',
    'text-orange-theme', 'hover:text-orange-theme',
    'text-purple-theme', 'hover:text-purple-theme',
    'text-green-theme', 'hover:text-green-theme',
    'text-red-theme', 'hover:text-red-theme',
    'text-yellow-theme', 'hover:text-yellow-theme',
    'text-turquoise-theme', 'hover:text-turquoise-theme',

    // پس‌زمینه (bg)
    'bg-blue-theme', 'hover:bg-blue-theme',
    'bg-orange-theme', 'hover:bg-orange-theme',
    'bg-purple-theme', 'hover:bg-purple-theme',
    'bg-green-theme', 'hover:bg-green-theme',
    'bg-red-theme', 'hover:bg-red-theme',
    'bg-yellow-theme', 'hover:bg-yellow-theme',
    'bg-turquoise-theme', 'hover:bg-turquoise-theme',

    // حاشیه (border)
    'border-blue-theme', 'hover:border-blue-theme',
    'border-orange-theme', 'hover:border-orange-theme',
    'border-purple-theme', 'hover:border-purple-theme',
    'border-green-theme', 'hover:border-green-theme',
    'border-red-theme', 'hover:border-red-theme',
    'border-yellow-theme', 'hover:border-yellow-theme',
    'border-turquoise-theme', 'hover:border-turquoise-theme',

    // focus
    'focus:ring-blue-theme',
    'focus:ring-orange-theme',
    'focus:ring-purple-theme',
    'focus:ring-green-theme',
    'focus:ring-red-theme',
    'focus:ring-yellow-theme',
    'focus:ring-turquoise-theme',

    // حالت تاریک (text)
    'dark:text-blue-theme', 'dark:hover:text-blue-theme',
    'dark:text-orange-theme', 'dark:hover:text-orange-theme',
    'dark:text-purple-theme', 'dark:hover:text-purple-theme',
    'dark:text-green-theme', 'dark:hover:text-green-theme',
    'dark:text-red-theme', 'dark:hover:text-red-theme',
    'dark:text-yellow-theme', 'dark:hover:text-yellow-theme',
    'dark:text-turquoise-theme', 'dark:hover:text-turquoise-theme',

    // حالت تاریک (bg)
    'dark:bg-blue-theme', 'dark:hover:bg-blue-theme',
    'dark:bg-orange-theme', 'dark:hover:bg-orange-theme',
    'dark:bg-purple-theme', 'dark:hover:bg-purple-theme',
    'dark:bg-green-theme', 'dark:hover:bg-green-theme',
    'dark:bg-red-theme', 'dark:hover:bg-red-theme',
    'dark:bg-yellow-theme', 'dark:hover:bg-yellow-theme',
    'dark:bg-turquoise-theme', 'dark:hover:bg-turquoise-theme',

    // حالت تاریک (border)
    'dark:border-blue-theme', 'dark:hover:border-blue-theme',
    'dark:border-orange-theme', 'dark:hover:border-orange-theme',
    'dark:border-purple-theme', 'dark:hover:border-purple-theme',
    'dark:border-green-theme', 'dark:hover:border-green-theme',
    'dark:border-red-theme', 'dark:hover:border-red-theme',
    'dark:border-yellow-theme', 'dark:hover:border-yellow-theme',
    'dark:border-turquoise-theme', 'dark:hover:border-turquoise-theme'
  ],
}