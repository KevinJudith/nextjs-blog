import Head from 'next/head';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="container" id='wrapper'>
      <Head>
        <title>Bootstrap</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
      </Head>
      <body class="is-preload">
        <div id="wrapper">
          <div id="bg"></div>
          <div id="overlay"></div>
          <div id="main">
            <nav className="navbar navbar-expand-sm fixed-top" style={{ padding: '10px' }}>
              <Link href="/">
                <a href="/" style={{ borderBottom: 'none', color: 'white', margin: '10px', fontSize:'1.25em' }}>
                  <FontAwesomeIcon icon="house" style={{ cursor: 'pointer' }}></FontAwesomeIcon>
                </a>
              </Link>
              <Link href="/about">
                <a href="/about" style={{ borderBottom: 'none', color: 'white', margin: '10px', fontSize:'1.25em' }}>
                  <FontAwesomeIcon icon="user" style={{ cursor: 'pointer' }}></FontAwesomeIcon>
                </a>
              </Link>
              {/* <Link href="/harmoniks">
                <a href="/about" style={{ borderBottom: 'none', color: 'white', marginRight:'20px'  }}>Harmoniks</a>
              </Link> */}
            </nav>
            <header id="header">
              <h1>Kevin Smekens</h1>
              <p>Product &nbsp;&bull;&nbsp; Engineering &nbsp;&bull;&nbsp; Harmonic Trading</p>
              <div style={{ margin: '20px' }}>
                <Link href="https://www.linkedin.com/in/kevinsmekens" passHref={true} rel='noopener noreferrer' target={"_blank"}>
                  <a target="_blank" rel="noopener noreferrer" style={{ borderBottom: 'none' }}>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} style={{ cursor: 'pointer', margin: 10, border: 'solid', borderWidth: '1', borderRadius: '100%', width: '2.5em', height: '2.5em', padding: 20 }} />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/smekenskevin" passHref={true}>
                  <a target="_blank" rel="noopener noreferrer" style={{ borderBottom: 'none' }}>
                    <FontAwesomeIcon icon={["fab", "facebook"]} style={{ cursor: 'pointer', margin: 10, border: 'solid', borderWidth: '1', borderRadius: '100%', width: '2.5em', height: '2.5em', padding: 20 }} />
                  </a>
                </Link>
                <Link href="https://www.github.com/kevinjudith" passHref={true}>
                  <a target="_blank" rel="noopener noreferrer" style={{ borderBottom: 'none' }}>
                    <FontAwesomeIcon icon={["fab", "github"]} style={{ cursor: 'pointer', margin: 10, border: 'solid', borderWidth: '1', borderRadius: '100%', width: '2.5em', height: '2.5em', padding: 20 }} />
                  </a>
                </Link>
                <Link href="https://www.tradingview.com/u/suntrading" passHref={true}>
                  <a target="_blank" rel="noopener noreferrer" style={{ borderBottom: 'none' }}>
                    <FontAwesomeIcon icon="chart-simple" style={{ cursor: 'pointer', margin: 10, border: 'solid', borderWidth: '1', borderRadius: '100%', width: '2.5em', height: '2.5em', padding: 20 }} />
                  </a>
                </Link>
                <Link href="mailto:kjsmekens@gmail.com" passHref={true}>
                  <FontAwesomeIcon icon="envelope" style={{ cursor: 'pointer', margin: 10, border: 'solid', borderWidth: '1', borderRadius: '100%', width: '2.5em', height: '2.5em', padding: 20 }} />
                </Link>
              </div>
            </header>
            <footer id="footer">
              {/* <span class="copyright">
                Made in <FontAwesomeIcon icon="heart-circle-bolt" style={{ color: 'orange' }} /> Singapore.
              </span>
              <span class="copyright"> Powered by Vercel</span>
              <a class="copyright" href="https://vercel.com/" target="_blank" rel="noopener noreferrer" style={{ borderBottom: 'none', color: 'black', fontWeight: 'bold' }}>
                Vercel
              </a> */}
            </footer>
          </div>
        </div>
      </body>

      <style jsx>{`
      .iconStyle {
        cursor:'pointer';
        margin: 10;
        border:'solid';
        borderWidth:1;
        borderRadius:'100%';
        width:'2.5em';
        height:'2.5em';
        padding:10;
      }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,900");
@import url("fontawesome-all.min.css");

/*
	Aerial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

html, body, div, span, applet, object,
iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
pre, a, abbr, acronym, address, big, cite,
code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b,
u, i, center, dl, dt, dd, ol, ul, li, fieldset,
form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside,
canvas, details, embed, figure, figcaption,
footer, header, hgroup, menu, nav, output, ruby,
section, summary, time, mark, audio, video {
	margin: 0;
	padding: 20;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	-webkit-text-size-adjust: none;
}

mark {
	background-color: transparent;
	color: inherit;
}

input::-moz-focus-inner {
	border: 0;
	padding: 0;
}

input, select, textarea {
	-moz-appearance: none;
	-webkit-appearance: none;
	-ms-appearance: none;
	appearance: none;
}

/* Basic */

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		background: #fff;
		overflow: hidden;
	}

		body.is-preload *, body.is-preload *:before, body.is-preload *:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
		}

	body, input, select, textarea {
		color: #fff;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 15pt;
		font-weight: 300 !important;
		letter-spacing: -0.025em;
		line-height: 1.75em;
	}

	a {
		-moz-transition: border-color 0.2s ease-in-out;
		-webkit-transition: border-color 0.2s ease-in-out;
		-ms-transition: border-color 0.2s ease-in-out;
		transition: border-color 0.2s ease-in-out;
		border-bottom: dotted 1px;
		color: inherit;
		outline: 0;
		text-decoration: none;
	}

		a:hover {
			border-color: transparent;
		}

/* Icon */

	.icon {
		text-decoration: none;
		position: relative;
	}

		.icon:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			display: inline-block;
			font-style: normal;
			font-variant: normal;
			text-rendering: auto;
			line-height: 1;
			text-transform: none !important;
			font-family: 'Font Awesome 5 Free';
			font-weight: 400;
		}

		.icon > .label {
			display: none;
		}

		.icon.solid:before {
			font-weight: 900;
		}

		.icon.brands:before {
			font-family: 'Font Awesome 5 Brands';
		}

/* Wrapper */

	@-moz-keyframes wrapper {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes wrapper {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes wrapper {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes wrapper {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	#wrapper {
		-moz-animation: wrapper 3s forwards;
		-webkit-animation: wrapper 3s forwards;
		-ms-animation: wrapper 3s forwards;
		animation: wrapper 3s forwards;
		height: 100%;
		left: 0;
		opacity: 0;
		position: fixed;
		top: 0;
		width: 100%;
	}

/* BG */

	#bg {
		-moz-animation: bg 60s linear infinite;
		-webkit-animation: bg 60s linear infinite;
		-ms-animation: bg 60s linear infinite;
		animation: bg 60s linear infinite;
		-moz-backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		backface-visibility: hidden;
		-moz-transform: translate3d(0,0,0);
		-webkit-transform: translate3d(0,0,0);
		-ms-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	/* Set your background with this */

		background: #348cb2 url("../images/bg.jpg") bottom left;
		background-repeat: repeat-x;
		height: 100%;
		left: 0;
		opacity: 1;
		position: fixed;
		top: 0;
	}

	@-moz-keyframes bg {
		0% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
		}

		100% {
			-moz-transform: translate3d(-2250px,0,0);
			-webkit-transform: translate3d(-2250px,0,0);
			-ms-transform: translate3d(-2250px,0,0);
			transform: translate3d(-2250px,0,0);
		}
	}

	@-webkit-keyframes bg {
		0% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
		}

		100% {
			-moz-transform: translate3d(-2250px,0,0);
			-webkit-transform: translate3d(-2250px,0,0);
			-ms-transform: translate3d(-2250px,0,0);
			transform: translate3d(-2250px,0,0);
		}
	}

	@-ms-keyframes bg {
		0% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
		}

		100% {
			-moz-transform: translate3d(-2250px,0,0);
			-webkit-transform: translate3d(-2250px,0,0);
			-ms-transform: translate3d(-2250px,0,0);
			transform: translate3d(-2250px,0,0);
		}
	}

	@keyframes bg {
		0% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
		}

		100% {
			-moz-transform: translate3d(-2250px,0,0);
			-webkit-transform: translate3d(-2250px,0,0);
			-ms-transform: translate3d(-2250px,0,0);
			transform: translate3d(-2250px,0,0);
		}
	}

	#bg {
		background-size: 2250px auto;
		width: 6750px;
	}

/* Overlay */

	@-moz-keyframes overlay {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes overlay {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes overlay {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes overlay {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	#overlay {
		-moz-animation: overlay 1.5s 1.5s forwards;
		-webkit-animation: overlay 1.5s 1.5s forwards;
		-ms-animation: overlay 1.5s 1.5s forwards;
		animation: overlay 1.5s 1.5s forwards;
		background-attachment: fixed, fixed;
		background-image: url("../images/overlay-pattern.png"), url("../images/overlay.svg");
		background-position: top left, center center;
		background-repeat: repeat, no-repeat;
		background-size: auto, cover;
		height: 100%;
		left: 0;
		opacity: 0;
		position: fixed;
		top: 0;
		width: 100%;
	}

/* Main */

	#main {
		height: 100%;
		left: 0;
		position: fixed;
		text-align: center;
		top: 0;
		width: 100%;
	}

		#main:before {
			content: '';
			display: inline-block;
			height: 100%;
			margin-right: 0;
			vertical-align: middle;
			width: 1px;
		}

/* Header */

	@-moz-keyframes header {
		0% {
			-moz-transform: translate3d(0,1em,0);
			-webkit-transform: translate3d(0,1em,0);
			-ms-transform: translate3d(0,1em,0);
			transform: translate3d(0,1em,0);
			opacity: 0;
		}

		100% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
			opacity: 1;
		}
	}

	@-webkit-keyframes header {
		0% {
			-moz-transform: translate3d(0,1em,0);
			-webkit-transform: translate3d(0,1em,0);
			-ms-transform: translate3d(0,1em,0);
			transform: translate3d(0,1em,0);
			opacity: 0;
		}

		100% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
			opacity: 1;
		}
	}

	@-ms-keyframes header {
		0% {
			-moz-transform: translate3d(0,1em,0);
			-webkit-transform: translate3d(0,1em,0);
			-ms-transform: translate3d(0,1em,0);
			transform: translate3d(0,1em,0);
			opacity: 0;
		}

		100% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
			opacity: 1;
		}
	}

	@keyframes header {
		0% {
			-moz-transform: translate3d(0,1em,0);
			-webkit-transform: translate3d(0,1em,0);
			-ms-transform: translate3d(0,1em,0);
			transform: translate3d(0,1em,0);
			opacity: 0;
		}

		100% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
			opacity: 1;
		}
	}

	@-moz-keyframes nav-icons {
		0% {
			-moz-transform: translate3d(0,1em,0);
			-webkit-transform: translate3d(0,1em,0);
			-ms-transform: translate3d(0,1em,0);
			transform: translate3d(0,1em,0);
			opacity: 0;
		}

		100% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
			opacity: 1;
		}
	}

	@-webkit-keyframes nav-icons {
		0% {
			-moz-transform: translate3d(0,1em,0);
			-webkit-transform: translate3d(0,1em,0);
			-ms-transform: translate3d(0,1em,0);
			transform: translate3d(0,1em,0);
			opacity: 0;
		}

		100% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
			opacity: 1;
		}
	}

	@-ms-keyframes nav-icons {
		0% {
			-moz-transform: translate3d(0,1em,0);
			-webkit-transform: translate3d(0,1em,0);
			-ms-transform: translate3d(0,1em,0);
			transform: translate3d(0,1em,0);
			opacity: 0;
		}

		100% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
			opacity: 1;
		}
	}

	@keyframes nav-icons {
		0% {
			-moz-transform: translate3d(0,1em,0);
			-webkit-transform: translate3d(0,1em,0);
			-ms-transform: translate3d(0,1em,0);
			transform: translate3d(0,1em,0);
			opacity: 0;
		}

		100% {
			-moz-transform: translate3d(0,0,0);
			-webkit-transform: translate3d(0,0,0);
			-ms-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
			opacity: 1;
		}
	}

	#header {
		-moz-animation: header 1s 1.25s forwards;
		-webkit-animation: header 1s 1.25s forwards;
		-ms-animation: header 1s 1.25s forwards;
		animation: header 1s 1.25s forwards;
		-moz-backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		backface-visibility: hidden;
		-moz-transform: translate3d(0,0,0);
		-webkit-transform: translate3d(0,0,0);
		-ms-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
		cursor: default;
		display: inline-block;
		opacity: 0;
		position: relative;
		text-align: center;
		top: -1em;
		vertical-align: middle;
		width: 90%;
	}

		#header h1 {
			font-size: 3em;
			font-weight: 900;
			letter-spacing: -0.035em;
			line-height: 1em;
		}

		#header p {
			font-size: 1.25em;
			margin: 0.75em 0 0.25em 0;
      font-weight: 500;
      opacity: 0.8;
		}

		#header nav {
			margin: 1.5em 0 0 0;
		}

			#header nav li {
				-moz-animation: nav-icons 0.5s ease-in-out forwards;
				-webkit-animation: nav-icons 0.5s ease-in-out forwards;
				-ms-animation: nav-icons 0.5s ease-in-out forwards;
				animation: nav-icons 0.5s ease-in-out forwards;
				-moz-backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
				-ms-backface-visibility: hidden;
				backface-visibility: hidden;
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
				display: inline-block;
				height: 5.35em;
				line-height: 5.885em;
				opacity: 0;
				position: relative;
				top: 0;
				width: 5.35em;
			}

			#header nav a {
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				-webkit-touch-callout: none;
				border: 0;
				display: inline-block;
			}

				#header nav a:before {
					-moz-transition: all 0.2s ease-in-out;
					-webkit-transition: all 0.2s ease-in-out;
					-ms-transition: all 0.2s ease-in-out;
					transition: all 0.2s ease-in-out;
					border-radius: 100%;
					border: solid 1px #fff;
					display: block;
					font-size: 1.75em;
					height: 2.5em;
					line-height: 2.5em;
					position: relative;
					text-align: center;
					top: 0;
					width: 2.5em;
				}

				#header nav a:hover {
					font-size: 1.1em;
				}

					#header nav a:hover:before {
						background-color: rgba(255, 255, 255, 0.175);
						color: #fff;
					}

				#header nav a:active {
					font-size: 0.95em;
					background: none;
				}

					#header nav a:active:before {
						background-color: rgba(255, 255, 255, 0.35);
						color: #fff;
					}

				#header nav a span {
					display: none;
				}

/* Footer */

	#footer {
		background-image: -moz-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.5) 75%);
		background-image: -webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.5) 75%);
		background-image: -ms-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.5) 75%);
		background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.5) 75%);
		bottom: 0;
		cursor: default;
		height: 6em;
		left: 0;
		line-height: 8em;
		position: absolute;
		text-align: center;
		width: 100%;
	}

/* Wide */

	@media screen and (max-width: 1680px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 13pt;
			}

		/* BG */

			@-moz-keyframes bg {
				0% {
					-moz-transform: translate3d(0,0,0);
					-webkit-transform: translate3d(0,0,0);
					-ms-transform: translate3d(0,0,0);
					transform: translate3d(0,0,0);
				}

				100% {
					-moz-transform: translate3d(-1500px,0,0);
					-webkit-transform: translate3d(-1500px,0,0);
					-ms-transform: translate3d(-1500px,0,0);
					transform: translate3d(-1500px,0,0);
				}

	}

		@-webkit-keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-1500px,0,0);
				-webkit-transform: translate3d(-1500px,0,0);
				-ms-transform: translate3d(-1500px,0,0);
				transform: translate3d(-1500px,0,0);
			}
			}

		@-ms-keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-1500px,0,0);
				-webkit-transform: translate3d(-1500px,0,0);
				-ms-transform: translate3d(-1500px,0,0);
				transform: translate3d(-1500px,0,0);
			}
		}

		@keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-1500px,0,0);
				-webkit-transform: translate3d(-1500px,0,0);
				-ms-transform: translate3d(-1500px,0,0);
				transform: translate3d(-1500px,0,0);
			}
		}

		#bg {
			background-size: 1500px auto;
			width: 4500px;
		} }

/* Normal */

	@media screen and (max-width: 1280px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 12pt;
			}

		/* BG */

			@-moz-keyframes bg {
				0% {
					-moz-transform: translate3d(0,0,0);
					-webkit-transform: translate3d(0,0,0);
					-ms-transform: translate3d(0,0,0);
					transform: translate3d(0,0,0);
				}

				100% {
					-moz-transform: translate3d(-750px,0,0);
					-webkit-transform: translate3d(-750px,0,0);
					-ms-transform: translate3d(-750px,0,0);
					transform: translate3d(-750px,0,0);
				}

	}

		@-webkit-keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-750px,0,0);
				-webkit-transform: translate3d(-750px,0,0);
				-ms-transform: translate3d(-750px,0,0);
				transform: translate3d(-750px,0,0);
			}
			}

		@-ms-keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-750px,0,0);
				-webkit-transform: translate3d(-750px,0,0);
				-ms-transform: translate3d(-750px,0,0);
				transform: translate3d(-750px,0,0);
			}
		}

		@keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-750px,0,0);
				-webkit-transform: translate3d(-750px,0,0);
				-ms-transform: translate3d(-750px,0,0);
				transform: translate3d(-750px,0,0);
			}
		}

		#bg {
			background-size: 750px auto;
			width: 2250px;
		} }

/* Mobile */

	@media screen and (max-width: 736px) {

		/* Basic */

			body {
				min-width: 320px;
			}

			body, input, select, textarea {
				font-size: 11pt;
			}

		/* BG */

			@-moz-keyframes bg {
				0% {
					-moz-transform: translate3d(0,0,0);
					-webkit-transform: translate3d(0,0,0);
					-ms-transform: translate3d(0,0,0);
					transform: translate3d(0,0,0);
				}

				100% {
					-moz-transform: translate3d(-300px,0,0);
					-webkit-transform: translate3d(-300px,0,0);
					-ms-transform: translate3d(-300px,0,0);
					transform: translate3d(-300px,0,0);
				}

	}

		@-webkit-keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-300px,0,0);
				-webkit-transform: translate3d(-300px,0,0);
				-ms-transform: translate3d(-300px,0,0);
				transform: translate3d(-300px,0,0);
			}
			}

		@-ms-keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-300px,0,0);
				-webkit-transform: translate3d(-300px,0,0);
				-ms-transform: translate3d(-300px,0,0);
				transform: translate3d(-300px,0,0);
			}
		}

		@keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-300px,0,0);
				-webkit-transform: translate3d(-300px,0,0);
				-ms-transform: translate3d(-300px,0,0);
				transform: translate3d(-300px,0,0);
			}
		}

		#bg {
			background-size: 300px auto;
			width: 900px;
		}

	/* Header */

		#header h1 {
			font-size: 2.5em;
		}

		#header p {
			font-size: 1em;
		}

		#header nav {
			font-size: 1em;
		}

			#header nav a:hover {
				font-size: 1em;
			}

			#header nav a:active {
				font-size: 1em;
			} }

/* Mobile (Portrait) */

	@media screen and (max-width: 480px) {

		/* BG */

			@-moz-keyframes bg {
				0% {
					-moz-transform: translate3d(0,0,0);
					-webkit-transform: translate3d(0,0,0);
					-ms-transform: translate3d(0,0,0);
					transform: translate3d(0,0,0);
				}

				100% {
					-moz-transform: translate3d(-412.5px,0,0);
					-webkit-transform: translate3d(-412.5px,0,0);
					-ms-transform: translate3d(-412.5px,0,0);
					transform: translate3d(-412.5px,0,0);
				}

	}

		@-webkit-keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-412.5px,0,0);
				-webkit-transform: translate3d(-412.5px,0,0);
				-ms-transform: translate3d(-412.5px,0,0);
				transform: translate3d(-412.5px,0,0);
			}
			}

		@-ms-keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-412.5px,0,0);
				-webkit-transform: translate3d(-412.5px,0,0);
				-ms-transform: translate3d(-412.5px,0,0);
				transform: translate3d(-412.5px,0,0);
			}
		}

		@keyframes bg {
			0% {
				-moz-transform: translate3d(0,0,0);
				-webkit-transform: translate3d(0,0,0);
				-ms-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			100% {
				-moz-transform: translate3d(-412.5px,0,0);
				-webkit-transform: translate3d(-412.5px,0,0);
				-ms-transform: translate3d(-412.5px,0,0);
				transform: translate3d(-412.5px,0,0);
			}
		}

		#bg {
			background-size: 412.5px auto;
			width: 1237.5px;
		}

	/* Header */

		#header nav {
			padding: 0 1em;
		} }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>

  )
}
