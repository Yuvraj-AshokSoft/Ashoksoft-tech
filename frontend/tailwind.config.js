// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         dark: {
//           bg: '#f8f6f0',
//           card: '#ffffff',
//           border: '#d6d3cb',
//         },
//         brand: {
//           blue: '#bc9658',
//           cyan: '#d97706',
//           slate: '#475569',
//           gray: '#6b7280',
//           amber: '#d97706',
//         }
//       },
//       fontFamily: {
//         sans: ['Poppins', 'sans-serif'],
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       boxShadow: {
//         'brand-blue': '0 0 24px rgba(188, 150, 88, 0.18)',
//         'brand-cyan': '0 0 24px rgba(217, 119, 6, 0.16)',
//         'glow': '0 0 40px rgba(188, 150, 88, 0.12)',
//       }
//     },
//   },
//   plugins: [],
// }




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#f6f4fb',      // soft lavender background
          card: '#ffffff',
          border: '#e3ddf5',
        },
        brand: {
          blue: '#7c3aed',    // violet (primary)
          cyan: '#d946ef',    // fuchsia/magenta (secondary)
          slate: '#475569',
          gray: '#6b7280',
          amber: '#d946ef',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'brand-blue': '0 0 24px rgba(124, 58, 237, 0.18)',
        'brand-cyan': '0 0 24px rgba(217, 70, 239, 0.16)',
        'glow': '0 0 40px rgba(124, 58, 237, 0.14)',
      }
    },
  },
  plugins: [],
}
