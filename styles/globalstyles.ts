import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

		// COLORS
		--white: #ffffff;
		--black: #0b0d0d;
		--gray: #6a6a6a;
		--blue: #0A72EF;
		--pink: #DE1D8D;
		--red: #FF5B4F;
		--brand: var(--pink);
		--anchor: var(--blue);
		--alert: var(--red);
		--tag: var(--gray);
		--code: #eceef9;
		--text-color: var(--black);

		// SPACE
		--01: .25rem;
		--02: .5rem;
		--03: 1rem;
		--04: 1.25rem;
		--05: 1.5rem;
		--06: 1.75rem;
		--07: 2rem;
		--08: 3rem;
		--09: 4rem;
		--010: 5rem;
		--011: 7.5rem;
		--012: 10rem;
		--013: 15rem;
		--014: 20rem;
		--015: 30rem;
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
		color: var(--text-color);
		-webkit-font-smoothing: antialiased;
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
		text-underline-offset: 0.2ex;
	}

	:where(ul, ol) {
		list-style: none;
	}

	:where(img, svg, video, canvas, audio, iframe, embed, object) {
		display: block;
	}

	:where(img, picture, svg) {
		max-inline-size: 100%;
		block-size: auto;
	}

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
		outline: 2px solid var(--focus-color, Highlight);
		outline-offset: 2px;
	}
  
`;

export default GlobalStyle;
