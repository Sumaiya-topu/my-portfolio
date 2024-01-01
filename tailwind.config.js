const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    color:{
      gray: "#1c1c1c",
      lightGray:"#888499"
    }
  },
  plugins: [require("daisyui")],
});
