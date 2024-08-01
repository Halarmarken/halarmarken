import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {},
  plugins: [require("flowbite/plugin")],
};

export default config;
