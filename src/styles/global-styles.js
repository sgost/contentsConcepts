import { createGlobalStyle } from 'styled-components';
// Abstracts
import * as palette from './variables';

export const GlobalStyle = createGlobalStyle`
  @-ms-viewport {
  width: device-width;
  }
  html {
  box-sizing: border-box;
  font-size: 13pt;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  overflow-y: auto;
  }

  body {
  -ms-overflow-style: scrollbar;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  background-color: ${palette.APP_BACKGROUND_COLOR} !important;
  }

  html, body, #root {
  width: 100%;
  height: 100%;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }

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
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
  }

  ol, ul {
  list-style: none;
  }

  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
  content: none;
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
  body, input, select, textarea, button {
  font-family: ${palette.FONT_FAMILY};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.65;
  }
  section {
  position: relative;
  }
  a {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  }
  strong {
  font-weight: 600;
  }

  h1,h2,h3,h4,h5,h6 {
  line-height: 1.25;
  }

  h1 {
  font-size: 36px;
  }

  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 39px;
    color: ${palette.PRIMARY_TXT_COLOR};
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 20px;
  }

  img {
    width: 100%;
  }

  p {
  font-family: ${palette.CONTENT_FONT_FAMILY};
  font-size: 16px;
  line-height: 1.5;
  }
  
  .ant-message-notice {
    text-align: right;
  }

  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.70) !important;
  }
  .ant-modal-mask, .ant-modal-wrap {
    left: 65px !important;
  }
  .ant-modal {
    width: initial !important;
    max-width: 500px;
    top: 90px !important;
  }
  .ant-modal-content {
    border-radius: 0px !important;
  }
  .ant-modal-body {
    padding: 0px !important;
  }
  .ant-select {
    width: 100% !important;
    max-width: 300px !important;
  }
  .ant-select-selection {
    min-height: 38px !important;
    display: flex !important;
    align-items: center !important;
    &:focus {
      border-color: #4255B9 !important;
      box-shadow: none !important;
    }
    &:hover {
      border-color: #4255B9 !important;
    }
  }
  .ant-select-dropdown-menu-item {
    padding: 7px 14px !important;
  }
  .tags-selection {
    max-width: 100% !important;
  }
  .ant-tooltip {
    line-height: 1 !important;
  }
  .ant-tooltip-inner {
    min-height: 20px !important;
    font-size: 12px;
    font-weight: 600;
  }
  .ant-dropdown-menu-item {
    &:hover {
      background-color: #3b4ada14 !important;
    }
  }
  .ant-modal-header {
    background: initial !important;
    border-bottom: initial !important;
    .modal-title {
      font-size: 24px;
      color: #5860AF;;
      position: relative;
      padding-bottom: 12px;
      text-transform: capitalize;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        max-width: 75px;
        height: 4px;
        border-radius: 2px;
        background-color: #CAC8F6;
        bottom: 0px;
        left: 5px;
      }
    }
  }
  .ant-modal-footer {
    padding: 16px 24px !important;
    border: initial !important;
  }
  .ant-btn {
    border-radius: 8px;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: ${palette.PRIMARY_TXT_COLOR};
    padding: 12px 24px;
    height: 46px;
    border: 1px solid ${palette.COLOR_DENIM};
    &.active, &:hover, &:focus {
      color: ${palette.PRIMARY_TXT_COLOR} !important;
      border-color: ${palette.COLOR_DENIM} !important;
    }
  }
  .ant-btn-primary {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    height: 38px;
    padding: 8px 28px;
    background-color: ${palette.BUTTON_PRIMARY} !important;
    border-color: ${palette.BUTTON_PRIMARY} !important;
    color: ${palette.WHITE_COLOR} !important;
    &.active, &:hover, &:focus {
      color: ${palette.WHITE_COLOR} !important;
      border-color: ${palette.BUTTON_PRIMARY} !important;
    }
  }
  .ant-input {
    height: 36px !important;
    &:focus, &:hover {
      border: 1px solid #5860AF !important;
      box-shadow: initial !important;
    }
  }
  .ant-modal-confirm-body-wrapper {
    padding: 25px;
  }

  .ant-notification {
    position: sticky;
    right: 0;
    top: 0 !important;
    bottom: auto;
    left: 0;
    width: 100%;
    margin-right: 0;
    max-width: 100%;
  }
  .ant-notification-notice {
    background: linear-gradient(178.57deg, #8D58D4 0%, #578DC3 100%);
    padding: 10px 35px;
    margin-bottom: 0;
  }
  .ant-notification-notice-close {
    top: 12px;
    right: 35px;
    color: ${palette.WHITE_COLOR};
    &:hover {
      color: ${palette.WHITE_COLOR};
    }
  }
  .ant-notification-notice-message {
    display: block;
    margin-bottom: 0;
    padding-right: 40px !important;
  }
`;
