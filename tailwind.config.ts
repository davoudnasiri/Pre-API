import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      api.addComponents({
        ".btn-primary": {
          backgroundColor: "#777",
          padding: "0.25rem 0.75rem",
          border: "1px solid #4B5563", // gray-600 color
          borderRadius: "0.375rem", // rounded-md
          transition: "all 0.2s",
          "&:hover": {
            backgroundColor: "#666",
          },
        },
      });
    },
  ],
} satisfies Config;
