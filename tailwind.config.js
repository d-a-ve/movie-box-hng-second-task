module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "479px" },
      xs: { max: "319px" },
    },
    extend: {
      colors: {
        secondary: {
          100: "#f2d0d8",
          200: "#e5a0b1",
          300: "#d8718a",
          400: "#cb4163",
          500: "#be123c",
          600: "#980e30",
          700: "#720b24",
          800: "#4c0718",
          900: "#26040c",
        },
        backdrop: "rgba(243, 244, 246, 0.50)",
      },
    },
    fontSize: {
      "fs--2": "clamp(0.69rem, calc(0.68rem + 0.06vw), 0.72rem)",
      "fs--1": "clamp(0.83rem, calc(0.80rem + 0.15vw), 0.90rem)",
      "fs-0": "clamp(1.00rem, calc(0.94rem + 0.28vw), 1.13rem)",
      "fs-1": "clamp(1.20rem, calc(1.11rem + 0.47vw), 1.41rem)",
      "fs-2": "clamp(1.44rem, calc(1.30rem + 0.72vw), 1.76rem)",
      "fs-3": "clamp(1.73rem, calc(1.51rem + 1.07vw), 2.20rem)",
      "fs-4": "clamp(2.07rem, calc(1.77rem + 1.53vw), 2.75rem)",
      "fs-5": "clamp(2.49rem, calc(2.06rem + 2.15vw), 3.43rem)",
    },
  },
  plugins: [],
};
