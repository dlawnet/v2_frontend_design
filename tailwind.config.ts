import type {Config} from "tailwindcss";

import tailwindcss_animate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  container: {
		  center: true,
		  padding: "2rem",
		  screens: {
			  "2xl": "1400px",
		  },
	  },
  	extend: {
		  colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
			},
			card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
			},

			"color-secondary": "#ECBC55",
			"color-neutral": "#2B2A31",
			"color-technical": "#535474",
			"color-info": "#0094FF",
			"color-success": "#41C97C",
			"color-warning": "#E5AF0C",
			"color-danger": "#C92B2B",
			"color-primary-dark": "#E37599",
			"color-secondary-dark": "#F2CB78",
			"color-neutral-dark": "#E0DEEA",
			"color-technical-dark": "#7E7F96",
			"color-info-colour": "#6BB4ED",
			"color-success-color": "#6CE4A0",
			"color-danger-dark": "#DA5353",
			"color-warning-dark": "#F0C544",
		},
		backgroundImage: {
			heroImg: "url('/images/Rectangle.png')",
			member1: "url('/images/member1.svg')",
			member2: "url('/images/member2.svg')",
			member3: "url('/images/member3.svg')",
			member4: "url('/images/member4.svg')",
			member5: "url('/images/member5.svg')",
			member6: "url('/images/member6.svg')",
			"color-primary-gradient":
				"linear-gradient(126.24deg, rgba(255, 107, 0, 0.97) 1.36%, rgba(254, 140, 0, 0.8) 100%)",
			"color-secondary-gradient":
				"background: linear-gradient(87.13deg, #E37599 -7.57%, #F2CB78 109.89%)",
		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
			"accordion-down": {
				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
		fontFamily: {
			inter: ["Inter"],
			poppins: ["Poppins"],
			manrope: ["Manrope"],
			space_grotesk: ["Space Grotesk"],
		},
  	}
  },
  plugins: [tailwindcss_animate],
};
export default config;
