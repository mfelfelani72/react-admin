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
    'bg-blue-theme', 'hover:bg-blue-theme', 'checked:bg-blue-theme',
    'bg-orange-theme', 'hover:bg-orange-theme', 'checked:bg-orange-theme',
    'bg-purple-theme', 'hover:bg-purple-theme', 'checked:bg-purple-theme',
    'bg-green-theme', 'hover:bg-green-theme', 'checked:bg-green-theme',
    'bg-red-theme', 'hover:bg-red-theme', 'checked:bg-red-theme',
    'bg-yellow-theme', 'hover:bg-yellow-theme', 'checked:bg-yellow-theme',
    'bg-turquoise-theme', 'hover:bg-turquoise-theme', 'checked:bg-turquoise-theme',

    // حاشیه (border)
    'border-blue-theme', 'hover:border-blue-theme', 'checked:border-blue-theme',
    'border-orange-theme', 'hover:border-orange-theme', 'checked:border-orange-theme',
    'border-purple-theme', 'hover:border-purple-theme', 'checked:border-purple-theme',
    'border-green-theme', 'hover:border-green-theme', 'checked:border-green-theme',
    'border-red-theme', 'hover:border-red-theme', 'checked:border-red-theme',
    'border-yellow-theme', 'hover:border-yellow-theme', 'checked:border-yellow-theme',
    'border-turquoise-theme', 'hover:border-turquoise-theme', 'checked:border-turquoise-theme',

    // focus
    'focus:ring-blue-theme',
    'focus:ring-orange-theme',
    'focus:ring-purple-theme',
    'focus:ring-green-theme',
    'focus:ring-red-theme',
    'focus:ring-yellow-theme',
    'focus:ring-turquoise-theme',

    // حالت تاریک (text)
    'dark:text-blue-theme', 'dark:hover:text-blue-theme', 'dark:checked:text-blue-theme',
    'dark:text-orange-theme', 'dark:hover:text-orange-theme', 'dark:checked:text-orange-theme',
    'dark:text-purple-theme', 'dark:hover:text-purple-theme', 'dark:checked:text-purple-theme',
    'dark:text-green-theme', 'dark:hover:text-green-theme', 'dark:checked:text-green-theme',
    'dark:text-red-theme', 'dark:hover:text-red-theme', 'dark:checked:text-red-theme',
    'dark:text-yellow-theme', 'dark:hover:text-yellow-theme', 'dark:checked:text-yellow-theme',
    'dark:text-turquoise-theme', 'dark:hover:text-turquoise-theme', 'dark:checked:text-turquoise-theme',

    // حالت تاریک (bg)
    'dark:bg-blue-theme', 'dark:hover:bg-blue-theme', 'dark:checked:bg-blue-theme',
    'dark:bg-orange-theme', 'dark:hover:bg-orange-theme', 'dark:checked:bg-orange-theme',
    'dark:bg-purple-theme', 'dark:hover:bg-purple-theme', 'dark:checked:bg-purple-theme',
    'dark:bg-green-theme', 'dark:hover:bg-green-theme', 'dark:checked:bg-green-theme',
    'dark:bg-red-theme', 'dark:hover:bg-red-theme', 'dark:checked:bg-red-theme',
    'dark:bg-yellow-theme', 'dark:hover:bg-yellow-theme', 'dark:checked:bg-yellow-theme',
    'dark:bg-turquoise-theme', 'dark:hover:bg-turquoise-theme', 'dark:checked:bg-turquoise-theme',

    // حالت تاریک (border)
    'dark:border-blue-theme', 'dark:hover:border-blue-theme', 'dark:checked:border-blue-theme',
    'dark:border-orange-theme', 'dark:hover:border-orange-theme', 'dark:checked:border-orange-theme',
    'dark:border-purple-theme', 'dark:hover:border-purple-theme', 'dark:checked:border-purple-theme',
    'dark:border-green-theme', 'dark:hover:border-green-theme', 'dark:checked:border-green-theme',
    'dark:border-red-theme', 'dark:hover:border-red-theme', 'dark:checked:border-red-theme',
    'dark:border-yellow-theme', 'dark:hover:border-yellow-theme', 'dark:checked:border-yellow-theme',
    'dark:border-turquoise-theme', 'dark:hover:border-turquoise-theme', 'dark:checked:border-turquoise-theme'
  ],
}