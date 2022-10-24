import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		border: 0 solid #e5e7eb;
  }

	/* ::selection {
    color: #fff;
    background: #151819;
	} */

  :root {
		// FONTS
    --font-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		--font-mono: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',

		// FONT WEIGHT
		--thin: 100;
		--extra-light: 200;
		--light: 300;
		--regular: 400;
		--medium: 500;
		--semi-bold: 600;
		--bold: 700;
		--extra-bold: 800;
		--black: 900;
    
		// LINE HEIGHT
		--line-height-0: 1.1;
		--line-height-1: 1.2;
		--line-height-2: 1.375;
		--line-height-3: 1.5;
		--line-height-4: 1.65;
		--line-height-5: 2;

		// LETTER SPACING
		--letter-spacing-0: -.05em;
		--letter-spacing-1: .025em;
		--letter-spacing-2: .050em;
		--letter-spacing-3: .075em;
		--letter-spacing-4: .150em;
		--letter-spacing-5: .500em;
		--letter-spacing-6: .750em;
		--letter-spacing-7: 1em;

		// COLORS
		--white: #ffffff;
		/* --black: #0b0d0d; */
		--black: #141414;
		--gray: #6a6a6a;
		--blue: #0A72EF;
		--pink: #DE1D8D;
		--red: #FF5B4F;
		--brand: var(--pink);
		--anchor: var(--blue);
		--alert: var(--red);
		--tag: var(--gray);
		--code: #eceef9;
		--clr-text: var(--black);
		--clr-bkg: #f4f4f4;

		// SPACING Default spacing scale https://tailwindcss.com/docs/customizing-spacing
		--0:	0px;	// 0px	
		--px	:1px;	// 1px	
		--0_5	:0.125rem;	// 2px	
		--1	:0.25rem;	// 4px	
		--1_5	:0.375rem;	// 6px	
		--2	:0.5rem;	// 8px	
		--2_5	:0.625rem;	// 10px	
		--3	:0.75rem;	// 12px	
		--3_5	:0.875rem;	// 14px	
		--4	:1rem;	// 16px	
		--5	:1.25rem;	// 20px	
		--6	:1.5rem;	// 24px	
		--7	:1.75rem;	// 28px	
		--8	:2rem;	// 32px	
		--9	:2.25rem;	// 36px	
		--10	:2.5rem;	// 40px	
		--11	:2.75rem;	// 44px	
		--12	:3rem;	// 48px	
		--14	:3.5rem;	// 56px	
		--16	:4rem;	// 64px	
		--20	:5rem;	// 80px	
		--24	:6rem;	// 96px	
		--28	:7rem;	// 112px	
		--32	:8rem;	// 128px	
		--36	:9rem;	// 144px	
		--40	:10rem;	// 160px	
		--44	:11rem;	// 176px	
		--48	:12rem;	// 192px	
		--52	:13rem;	// 208px	
		--56	:14rem;	// 224px	
		--60	:15rem;	// 240px	
		--64	:16rem;	// 256px	
		--72	:18rem;	// 288px	
		--80	:20rem;	// 320px	
		--96	:24rem;	// 384px

		// BORDER RADIUS
		--round: 50%;
		--pill: 9999px;
		--radius-default: .5rem;

		// TRANSITION	
		--transition-colors: color .2s ease-out;
    --transition-all: all .2s ease-out;
  }

	:where(html) {
		-webkit-text-size-adjust: none;
	}

	@supports not (min-block-size: 100dvb) {
		:where(html) {
			block-size: 100%;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		:where(html:focus-within) {
			scroll-behavior: smooth;
		}
	}

	:where(body) {
		font-family: var(--font-sans);
		line-height: 1.5;
		color: var(--clr-text);
		background-color: var(--clr-bkg);
		-webkit-font-smoothing: subpixel-antialiased;
		-moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
		text-rendering: geometricprecision;
		block-size: 100%;
		block-size: 100dvb;
	}

	:where(input, button, textarea, select) {
		font: inherit;
		color: inherit;
	}

	:where(button, label, select, summary, [role='button'], [role='option']) {
		cursor: pointer;
	}

	:where(a) {
		color: inherit; 
		transition: var(--transition-all);
		text-decoration-style: dotted;
		text-underline-offset: 0.2ex;

		:hover {
			text-decoration-style: dashed;
		}
	}

	:where(ul, ol) {
		list-style: none;
	}

	/* :where(img, svg, video, canvas, audio, iframe, embed, object) {
		display: block;
	} */

	/* :where(img, picture, svg) {
		max-inline-size: 100%;
		block-size: auto;
	} */

	:where(p, h1, h2, h3, h4, h5, h6) {
		overflow-wrap: break-word;
	}

	:where(h1, h2, h3) {
		line-height: calc(1em + 0.5rem);
	}

	:where(hr) {
		border: none;
		border-block-start: 1px solid;
		color: inherit;
		block-size: 0;
		overflow: visible;
	}

	:where(:focus-visible) {
		outline: 2px solid var(--anchor);
		outline-offset: 2px;
	}

	#root, #__next {
    isolation: isolate;
  }
  
`

export default GlobalStyle
