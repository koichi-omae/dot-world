/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'account-pattern': "url('/public/img/account.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
