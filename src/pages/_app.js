import customTheme from '../styles/theme';
import Head from 'next/head';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { AuthProvider } from '../context/AuthContext';
import { FetchProvider } from '../context/FetchContext';
import { MessageProvider } from '@/context/MessageContext';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }

          .success-icon {
            font-size: 8rem;
            margin: 0 auto;
            color: green;
            text-align: center;
          }
          .selected {
            background: #fafafa;
            color: #333;
            border-bottom: solid 6px #000;
          }
          select {
            outline: none;
            border: solid 1px #ccc !important;
            color: #999 !important;
            padding: 8px;
            border-radius: 4px;
            transition: all 0.5s ease-in-out;
            width: 100%;
          }
          input {
            outline: none !important;
            border: solid 1px #ccc !important;
            /* color: #fff; */
            padding: 8px;
            border-radius: 4px;
            transition: all 0.5s ease-in-out;
            width: 100%;
            background: none !important;
          }
          input:focus {
            border: solid 1px #333 !important;
            padding-left: 1rem;
            background: #fff !important;
            color: #333;
          }
          input::placeholder {
            font-size: 1rem;
          }

          .radio-toolbar {
            margin: 10px;
          }

          .radio-toolbar input[type='radio'] {
            opacity: 0;
            position: fixed;
            width: 0;
          }

          .radio-toolbar label {
            display: inline-block;
            background-color: #ddd;
            padding: 10px 20px;
            font-family: sans-serif, Arial;
            font-size: 16px;
            border: 2px solid #444;
            border-radius: 4px;
          }

          .radio-toolbar label:hover {
            background-color: #dfd;
          }

          .radio-toolbar input[type='radio']:checked + label {
            background-color: #bfb;
            border-color: #4c4;
          }

          body {
            background: #fafafa;
          }
          .container {
            width: 90%;
            margin: 1rem auto;
          }
          .justify {
            text-align: justify;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .resTable {
            overflow-x: auto;
            overflow-y: scroll;
            margin-bottom: 5rem;
          }

          table {
            border: 1px solid #ccc;
            border-collapse: collapse;
            margin: 0;
            padding: 0;
            width: 100%;
            background: #fff;
          }

          table caption {
            font-size: 1.5em;
            margin: 0.5em 0 0.75em;
          }

          table tr {
            border: 1px solid #ddd;
            padding: 0.35em;
          }

          table th,
          table td {
            text-align: left;
          }

          table thead {
            box-shadow: 10px 5px 4px rgba(0, 0, 0, 0.15);
          }

          table th {
            font-size: 0.85em;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 20px;
          }

          table td {
            font-size: 0.85em;
            text-transform: uppercase;
            padding: 20px;
          }

          table td:nth-of-type(2) {
            font-weight: 900;
          }
          table td:nth-of-type(8) {
            color: green;
          }
          table td:first-of-type {
            display: none;
          }
          table th:first-of-type {
            display: none;
          }

          .navMobileBtn {
            display: none;
          }

          @media screen and (max-width: 1200px) {
            .navMobileBtn {
              background: red;
              padding: 8px;
              text-transform: uppercase;
              display: block;
              color: #fff;
              border-radius: 6px;
              /* margin: 0 1rem; */
              font-size: 0.8rem;
            }
          }

          @media screen and (max-width: 700px) {
            .displaySm {
              display: none;
            }
          }

          @media screen and (max-width: 800px) {
            table {
              border: 0;
              padding: 20px;
              overflow-y: scroll;
            }

            table caption {
              font-size: 1.3em;
            }

            table thead {
              border: none;
              clip: rect(0 0 0 0);
              height: 1px;
              margin: -1px;
              overflow: scroll;
              font-weight: 900;
              padding: 0;
              width: 1px;
              white-space: nowrap;
            }

            table tr {
              border-bottom: 3px solid #ddd;
            }

            table th {
              font-weight: 900;
              color: #999;
              padding: 10px 20px;
              font-size: 0.8em;
            }

            table td {
              font-size: 0.8em;
              white-space: nowrap;
            }

            table td::before {
              content: attr(data-label);
              font-weight: bold;
              text-transform: uppercase;
            }

            table td:last-child {
              border-bottom: 0;
            }
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <FetchProvider>
        {/* //<MessageProvider> */}
          <ChakraProvider theme={customTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ChakraProvider>
        {/* //</MessageProvider> */}
      </FetchProvider>
    </AuthProvider>
  );
}

export default MyApp;
