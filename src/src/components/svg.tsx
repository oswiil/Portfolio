/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
        {` `}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 42`,
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: `0 0 100 100`,
  },
  bitcoin: {
    shape: (
      <React.Fragment>
    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bitcoin</title><path d="M23.64,14.9A12,12,0,1,1,14.9.36,12,12,0,0,1,23.64,14.9Zm-6.35-4.61c.24-1.59-1-2.45-2.64-3l.54-2.15-1.32-.33-.52,2.11-1.07-.25.53-2.13-1.32-.33L11,6.34l-.84-.2L8.3,5.69,8,7.1s1,.23,1,.24a.7.7,0,0,1,.62.76L8,14a.5.5,0,0,1-.62.32s-1-.24-1-.24L5.8,15.61,7.51,16l.93.24L7.9,18.46l1.32.33.54-2.17,1.05.27-.51,2.16,1.32.33.55-2.19c2.24.43,3.93.26,4.64-1.78a2.31,2.31,0,0,0-1.22-3.19,2.09,2.09,0,0,0,1.68-1.93h0Zm-3,4.22c-.41,1.64-3.16.75-4,.53l.72-2.9C11.84,12.37,14.7,12.81,14.28,14.51Zm.41-4.24c-.37,1.49-2.66.74-3.41.55l.66-2.64c.74.18,3.13.52,2.75,2.08Z" transform="translate(0 0)"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 1122 1122`,
  },
  ethereum: {
    shape: (
      <React.Fragment>
    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.84 24"><title>ethereum</title><path d="M11.94,18,4.58,13.62,11.94,24l7.37-10.38L11.94,18Zm.12-18L4.69,12.22l7.37,4.36,7.36-4.35Z" transform="translate(-4.58)"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 1122 1122`,
  },
  santaclaus: {
    shape: (
      <React.Fragment>

      <path strokeWidth="10px" d="M176.5,242.5c-4.09,5.33-6.7,12.24-16,20-6.07,5.06-11.51,7.59-11,11,.48,3.2,5.95,5.45,10,6,6.6.9,10.74-2.54,12-1,1.46,1.79-4,6.45-6,14-1.07,4.11-.71,7.63,2,18,5.29,20.2,8.38,32,13,32,2.39,0,4.27-3.12,6-6,4.38-7.28,3.87-15,4-15s-2.39,12.59,0,24c4.77,22.81,28.67,38.08,33,35,2.29-1.63-1.83-7.75,1-19,1.09-4.35,3.41-10.21,5-10,2.65.36-1.13,17,3,29,12.7,37,104.87,43.43,111,28,1.44-3.63-2.49-6.92-1-15,1.59-8.65,7.59-13,12-18,15.4-17.58,11.55-44.12,13-44,1.73.14-3.84,36.89,3,39,5.83,1.8,23.26-20.76,24-46,.66-22.63-12.27-41.39-11-42s11.6,23.24,16,22c4.22-1.18,3.67-25.55-5-48-10.47-27.13-30.23-44.8-33-43-2.49,1.62,11.08,17.45,5,30-4.35,9-16.61,11.85-30,15a120.72,120.72,0,0,1-30,3c-23.66-.27-43.39-.5-62-13a75,75,0,0,1-23-25C194.24,226.45,182.3,235,176.5,242.5Z" transform="translate(-85.5 -104.79)"/><image width="100%" height="100%" transform="translate(146.5 95.21)" />
      <path strokeWidth="10px" d="M308,301c-1.4-1.64-8.58-10.11-5-17,3.2-6.17,12.44-6.09,14.5-6,1.18.05,11.8.67,14.5,8,2.14,5.81-2.24,11.66-4,14s-5.31,7.08-10.5,7C313,306.93,310,303.35,308,301Z" transform="translate(-85.5 -104.79)"/>
      <path strokeWidth="10px" d="M301.5,258.5c-12.91-.95-16.61,4.7-33,6-8.64.69-12.66-.48-14,2-1.88,3.49,3.4,10.78,9,15,12.22,9.22,30.56,7.29,43,1a45.14,45.14,0,0,0,9-6,36.36,36.36,0,0,0,15,9c2.37.71,16.1,4.86,27-3,8.38-6,13-17.69,10-21-2.28-2.49-6.66,2.24-17,2-11.34-.26-15.3-6.16-26-5a29.32,29.32,0,0,0-10,3A44.13,44.13,0,0,0,301.5,258.5Z" transform="translate(-85.5 -104.79)"/>
      <circle strokeWidth="10px" cx="197.5" cy="134.21" r="19.5"/>
      <circle strokeWidth="10px" cx="260.5" cy="134.21" r="16.5"/>
      <ellipse strokeWidth="10px" cx="37.5" cy="125.21" rx="33" ry="30"/>
      <path strokeWidth="10px" d="M140.5,222.5c4.77,1.35,11.12,2.32,15-1,5.82-5,2.74-16.74,2-22-3.73-26.35,27-60.7,57-76,37.78-19.29,85.67-14.14,115,11,14.76,12.65,32.12,36.62,25,50-7.54,14.17-33-1.41-75,10-35.2,9.57-84.61,38.79-112,55-4.16,2.46-14.76,8.82-24,5a18.29,18.29,0,0,1-3-32Z" transform="translate(-85.5 -104.79)"/>
      <path strokeWidth="10px" d="M366.5,208.5a54.64,54.64,0,0,0-12-39,235.07,235.07,0,0,0-189,40q.5,15,1,30a388.8,388.8,0,0,1,200-31Z" transform="translate(-85.5 -104.79)"/>
      <circle strokeWidth="10px" cx="200" cy="135.71" r="4.5"/>
      <circle strokeWidth="10px" cx="263" cy="134.71" r="4.5"/>
      </React.Fragment>
    ),
    viewBox:`0 0 1122 1122`,
  },

  wordpress: {
    shape: (
      <React.Fragment>
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>wordpress</title><path d="M21.47,6.82a10.8,10.8,0,0,1-4,14.51l3.3-9.53a10.3,10.3,0,0,0,.82-3.87,9.29,9.29,0,0,0-.07-1.11m-8,.11c.65,0,1.23-.11,1.23-.11a.45.45,0,0,0-.07-.9s-1.75.14-2.88.14-2.85-.15-2.85-.15a.45.45,0,0,0-.07.89s.54.06,1.12.09l1.68,4.6L9.28,18.57,5.35,6.9c.65,0,1.24-.1,1.24-.1a.45.45,0,0,0-.07-.9S4.78,6,3.65,6H3a10.92,10.92,0,0,1,9-4.81,10.77,10.77,0,0,1,7.29,2.83h-.15A1.86,1.86,0,0,0,17.33,6a5.08,5.08,0,0,0,1.06,2.53,5.72,5.72,0,0,1,.89,3,12.85,12.85,0,0,1-.82,3.48l-1.07,3.59L13.49,6.92ZM12,22.78A11,11,0,0,1,9,22.35l3.24-9.41L15.5,22l.08.15a10.85,10.85,0,0,1-3.58.61M1.21,12a10.73,10.73,0,0,1,.94-4.39l5.14,14.1A10.79,10.79,0,0,1,1.21,12M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 24 24`,
  },
  gatsby: {
    shape: (
      <React.Fragment>
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>gatsby</title><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,2.57a9.44,9.44,0,0,1,7.63,3.86L18.34,7.54A7.9,7.9,0,0,0,12,4.29,7.81,7.81,0,0,0,4.71,9.43l9.86,9.86a7.76,7.76,0,0,0,5-5.58H15.43V12h6a9.45,9.45,0,0,1-7.37,9.17L2.83,9.94A9.45,9.45,0,0,1,12,2.57Zm-9.43,9.6,9.34,9.26a9.75,9.75,0,0,1-6.6-2.74A9.3,9.3,0,0,1,2.57,12.17Z"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 24 24`,
  },

  unity: {
    shape: (
      <React.Fragment>
       <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>unity</title><path d="M24,9.53,21.37,0l-9.8,2.56L10.12,5.05,7.18,5,0,12l7.18,7,2.94,0,1.45,2.49L21.37,24,24,14.47,22.51,12ZM10.36,5.45l7.49-1.88-4.3,7.25H4.94Zm0,13.11L4.94,13.18h8.61l4.3,7.25-7.5-1.87Zm9.59.69L15.65,12,20,4.75,22,12,20,19.25Z"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 24 24`,
  },

  visualstudio: {
    shape: (
      <React.Fragment>
       <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23.88"><title>visualstudiocode</title><path d="M23.15,2.59,18.21.21A1.49,1.49,0,0,0,16.5.5L7,9.13,2.92,6a1,1,0,0,0-1.27.06L.33,7.26A1,1,0,0,0,.26,8.67l.07.07L3.9,12,.33,15.26a1,1,0,0,0-.07,1.41l.07.07,1.32,1.2A1,1,0,0,0,2.93,18l4.12-3.13,9.46,8.63a1.49,1.49,0,0,0,1.7.29l4.94-2.38A1.49,1.49,0,0,0,24,20.06V3.94A1.49,1.49,0,0,0,23.15,2.59ZM18,17.45,10.83,12,18,6.55Z" transform="translate(0 -0.06)"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 24 24`,
  },

  git: {
    shape: (
      <React.Fragment>
      <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>git</title><path d="M23.55,10.93,13.07.45a1.56,1.56,0,0,0-2.19,0L8.71,2.63l2.76,2.76A1.84,1.84,0,0,1,13.8,7.73l2.65,2.66a1.84,1.84,0,1,1-1.1,1L12.86,9v6.53a1.84,1.84,0,1,1-2.12.35,2,2,0,0,1,.6-.41V8.84a2.14,2.14,0,0,1-.6-.41,1.83,1.83,0,0,1-.39-2L7.64,3.7.45,10.88a1.56,1.56,0,0,0,0,2.19L10.93,23.55a1.56,1.56,0,0,0,2.19,0L23.55,13.12a1.56,1.56,0,0,0,0-2.19" transform="translate(0 0)"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 24 24`,
  },
  illustrator: {
    shape: (
      <React.Fragment>
      <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23.4"><title>adobeillustrator</title><path d="M10.53,10.73l-.29-.92c-.1-.31-.19-.6-.27-.89l-.22-.78h0a12.28,12.28,0,0,1-.34,1.29c-.15.48-.3,1-.46,1.48s-.29,1-.44,1.4H11c-.06-.21-.14-.46-.23-.72S10.62,11,10.53,10.73ZM19.75.3H4.25A4.25,4.25,0,0,0,0,4.55v14.9A4.25,4.25,0,0,0,4.25,23.7h15.5A4.25,4.25,0,0,0,24,19.45V4.55A4.25,4.25,0,0,0,19.75.3ZM14.7,16.83H12.61a.15.15,0,0,1-.16-.11l-.82-2.38H7.91l-.76,2.35a.18.18,0,0,1-.19.14H5.08c-.11,0-.14-.06-.11-.18L8.19,7.38c0-.1.06-.21.1-.33a3.49,3.49,0,0,0,.06-.65.1.1,0,0,1,.08-.11H11c.08,0,.12,0,.13.08l3.65,10.3C14.83,16.78,14.8,16.83,14.7,16.83Zm3.4-.15c0,.11,0,.16-.13.16H16a.14.14,0,0,1-.15-.16V9c0-.1,0-.14.13-.14h2c.09,0,.13.05.13.14Zm-.21-9A1.18,1.18,0,0,1,17,8a1.24,1.24,0,0,1-.89-.35,1.3,1.3,0,0,1-.34-.92,1.18,1.18,0,0,1,.36-.89A1.28,1.28,0,0,1,17,5.49a1.2,1.2,0,0,1,.91.35,1.26,1.26,0,0,1,.33.89A1.27,1.27,0,0,1,17.89,7.65Z" transform="translate(0 -0.3)"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 24 24`,
  },
  blender: {
    shape: (
      <React.Fragment>
      <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19.49"><title>blender</title><path d="M12.51,13.21a2.85,2.85,0,0,1,1-2,3.37,3.37,0,0,1,2.21-.79,3.43,3.43,0,0,1,2.21.79,2.76,2.76,0,0,1,.17,4.16,3.5,3.5,0,0,1-4.75,0,2.81,2.81,0,0,1-.87-2.16M7.35,14.83a6.2,6.2,0,0,0,.26,1.4A7.36,7.36,0,0,0,9.2,19,8.41,8.41,0,0,0,12,21a9.11,9.11,0,0,0,7.31,0,8.44,8.44,0,0,0,2.79-2,7.46,7.46,0,0,0,1.59-2.77,6.94,6.94,0,0,0,.25-3.07,7.13,7.13,0,0,0-1-2.78,7.51,7.51,0,0,0-1.85-2h0L13.57,2.55l0,0a1.68,1.68,0,0,0-1.86,0A.84.84,0,0,0,11.56,4h0L14.69,6.5H5.14A1.73,1.73,0,0,0,3.45,7.68c-.15.66.38,1.22,1.2,1.22H9.48L.86,15.51l0,0a1.69,1.69,0,0,0-.57,2.31,1.74,1.74,0,0,0,2.45,0L7.41,14s-.06.52-.06.83Zm12.09,1.74a5.43,5.43,0,0,1-7.59,0,4.55,4.55,0,0,1-1-1.62,4.33,4.33,0,0,1,.28-3.52,4.92,4.92,0,0,1,1.16-1.37,5.49,5.49,0,0,1,6.79,0,4.67,4.67,0,0,1,1.15,1.37,4.44,4.44,0,0,1,.53,1.7A4.32,4.32,0,0,1,20.48,15a4.55,4.55,0,0,1-1,1.62" transform="translate(0 -2.25)"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 24 24`,
  },
  java: {
    shape: (
      <React.Fragment>
    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.7 24"><title>java</title><path d="M8.85,18.56s-.92.53.65.71a13.58,13.58,0,0,0,5-.21,8.39,8.39,0,0,0,1.32.65c-4.7,2-10.63-.12-6.94-1.15m-.57-2.63s-1,.76.54.93a19.5,19.5,0,0,0,6.41-.31,2.76,2.76,0,0,0,1,.6c-5.68,1.66-12,.13-7.94-1.22m4.84-4.45A1.76,1.76,0,0,1,12.81,14s2.94-1.52,1.59-3.42-2.23-2.65,3-5.69c0,0-8.22,2.05-4.29,6.58m6.21,9s.68.56-.75,1c-2.71.83-11.28,1.07-13.67,0-.85-.37.75-.89,1.26-1A3.42,3.42,0,0,1,7,20.44c-1-.67-6.16,1.31-2.65,1.88,9.58,1.56,17.47-.7,15-1.82m-10-7.29s-4.36,1-1.54,1.41a33.16,33.16,0,0,0,5.77-.06c1.8-.15,3.62-.48,3.62-.48a7.16,7.16,0,0,0-1.1.59c-4.43,1.16-13,.62-10.52-.57a8.31,8.31,0,0,1,3.77-.89m7.83,4.37c4.5-2.34,2.42-4.59,1-4.28a2.77,2.77,0,0,0-.51.14.81.81,0,0,1,.38-.3c2.88-1,5.09,3-.92,4.56a.35.35,0,0,0,.09-.12M14.4,0S16.9,2.49,12,6.33c-3.9,3.08-.89,4.83,0,6.84C9.76,11.11,8.09,9.31,9.21,7.63,10.86,5.16,15.41,4,14.4,0M9.73,23.92c4.33.28,11-.15,11.12-2.19,0,0-.3.77-3.57,1.39a35.5,35.5,0,0,1-10.94.16s.55.46,3.39.64" transform="translate(-3.15)"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 24 24`,
  },

  android: {
    shape: (
      <React.Fragment>
    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.7 24"><title>android</title> <path d=" M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" transform="translate(-3.15)"/></svg>
      </React.Fragment>
    ),
    viewBox:`0 0 24 24`,
  },

  

}
	


type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross" | "bitcoin" | "santaclaus" | "wordpress" | "gatsby" | "unity" | "visualstudio" | "git" | "illustrator" | "ethereum" | "blender" | "java" | "android"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const SVG = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG