module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


// const cssnanoConfig = {
//   preset: ['default', { discardComments: { removeAll: true } }]
// };

// module.exports = ({ file, options }) => {
//   return {
//     parser: options.enabled.optimize ? 'postcss-safe-parser' : undefined,
//     plugins: {
//       autoprefixer: true,
//       cssnano: options.enabled.optimize ? cssnanoConfig : false,
//     },
//   };
// };
