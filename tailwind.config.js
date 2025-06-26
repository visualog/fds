/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			gray: {
  				'50': '#1F2937' /* reversed gray */,
  				'100': '#374151',
  				'200': '#4B5563',
  				'300': '#6B7280',
  				'400': '#9CA3AF',
  				'500': '#D1D5DB',
  				'600': '#E5E7EB',
  				'700': '#F3F4F6',
  				'800': '#F9F9FA',
  				'900': '#FFFFFF'
  			},
  			blue: {
  				'50': '#1E3A8A',
  				'100': '#1E40AF',
  				'200': '#1D4ED8',
  				'300': '#2563EB',
  				'400': '#3B82F6',
  				'500': '#60A5FA',
  				'600': '#93C5FD',
  				'700': '#BFDBFE',
  				'800': '#DBEAFE',
  				'900': '#EFF6FF'
  			},
  			green: {
  				'50': '#064E3B',
  				'100': '#065F46',
  				'200': '#047857',
  				'300': '#059669',
  				'400': '#10B981',
  				'500': '#34D399',
  				'600': '#6EE7B7',
  				'700': '#A7F3D0',
  				'800': '#D1FAE5',
  				'900': '#ECFDF5'
  			},
  			red: {
  				'50': '#7F1D1D',
  				'100': '#991B1B',
  				'200': '#B91C1C',
  				'300': '#DC2626',
  				'400': '#EF4444',
  				'500': '#F87171',
  				'600': '#FCA5A5',
  				'700': '#FECACA',
  				'800': '#FEE2E2',
  				'900': '#FEF2F2'
  			},
  			yellow: {
  				'50': '#78350F',
  				'100': '#92400E',
  				'200': '#B45309',
  				'300': '#D97706',
  				'400': '#F59E0B',
  				'500': '#FBBF24',
  				'600': '#FCD34D',
  				'700': '#FDE68A',
  				'800': '#FEF3C7',
  				'900': '#FFFBEB'
  			},
  			purple: {
  				'50': '#4C1D95',
  				'100': '#5B21B6',
  				'200': '#6D28D9',
  				'300': '#7C3AED',
  				'400': '#8B5CF6',
  				'500': '#A78BFA',
  				'600': '#C4B5FD',
  				'700': '#DDD6FE',
  				'800': '#EDE9FE',
  				'900': '#F5F3FF'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontSize: {
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1rem'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.25rem'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.5rem'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '2rem'
  				}
  			],
  			'3xl': [
  				'1.875rem',
  				{
  					lineHeight: '2.25rem'
  				}
  			],
  			'4xl': [
  				'2.25rem',
  				{
  					lineHeight: '2.5rem'
  				}
  			],
  			'5xl': [
  				'3rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '1'
  				}
  			]
  		},
  		spacing: {
  			'0': '0px',
  			'1': '0.25rem',
  			'2': '0.5rem',
  			'3': '0.75rem',
  			'4': '1rem',
  			'5': '1.25rem',
  			'6': '1.5rem',
  			'8': '2rem',
  			'10': '2.5rem',
  			'12': '3rem',
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'32': '8rem',
  			'40': '10rem',
  			'48': '12rem',
  			'56': '14rem',
  			'64': '16rem'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}