import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.24;
        font-family: 'Pretendard', sans-serif;
    }
    html, body, #__next {
        height: 100%;
    }
    #__next {
        @media (max-width: 1080px) {
            overflow-y: auto;
        }
    }
    body{
        background-color: #ffffff;
        font-family: 'Pretendard', sans-serif;
        font-weight: 400;
        overflow: hidden;
    }
    a, a:hover, a:active {
        color: inherit;
        text-decoration: none;
        outline: none;
    }
    body input, body button, body pre {
        background-color: transparent;
        font-family: 'Pretendard', sans-serif;
        font-weight: 400;
        border: none;
        outline: none;
    }
    body, th, td, input, select, textarea, button {
        line-height: 1.5;
        color: #444;
        font-size: 12px;
    }
    textarea{
        font-family: 'Pretendard', sans-serif;
        border: none;
        outline: none;
        font-size: 12px;
        line-height: 1.5;
        color: #444;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    strong {
        font-weight: bold;
    }
    .hidden_scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
        }
    }
    .rbc-overlay {
        display: none !important;
    }

    ::-webkit-scrollbar {
      width: 14px;
      background-color: #f3f3f3;
    }
    ::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      border: 3px solid transparent;
      border-radius: 10px;
      background-color: #c1c1c1;
    }
    ::-webkit-scrollbar-track{

    }
`

export default GlobalStyle
