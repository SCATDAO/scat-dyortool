<template>
  <div class="css-main-flex-wrap">
    <header class="css-work-project-her" :class="{ active: workspace }">
      <router-link to="/main" style="display: flex; align-items: baseline">
        <svg
          id="logo-blue"
          width="120px"
          height="24px"
          version="1.1"
          viewBox="0 0 120 24"
          fill="#070a0e"
        >
          <g transform="matrix(.10159 0 0 .10159 -5.4495 -4.4501)">
            <g>
              <path
                class="st2"
                d="m120.1 266.5h-62.5v-139.7h62.5c9.7 0 18.8 1.8 27.4 5.5 8.5 3.7 16 8.6 22.3 14.9 6.4 6.3 11.4 13.7 15 22.2 3.7 8.5 5.5 17.6 5.5 27.2s-1.8 18.7-5.5 27.2-8.7 15.9-15 22.2c-6.4 6.3-13.8 11.3-22.3 14.9-8.6 3.8-17.7 5.6-27.4 5.6zm-4.4-105.7h-21.4v71.6h21.4c5 0 9.7-0.9 14.1-2.8s8.2-4.4 11.4-7.7c3.2-3.2 5.8-7 7.6-11.4 1.9-4.4 2.8-9 2.8-14 0-4.9-0.9-9.6-2.8-14s-4.4-8.2-7.6-11.4-7.1-5.8-11.4-7.7c-4.3-1.6-9-2.6-14.1-2.6z"
              />
              <path
                class="st2"
                d="m271.8 218.4v48.1h-39.8v-48.1l-48.8-91.4h43.9l24.8 48.6 24.7-48.6h43.9z"
              />
              <path
                class="st2"
                d="m387.7 270.8c-10.3 0-20-1.9-29-5.8-9-3.8-16.9-9.1-23.6-15.8s-12-14.5-15.9-23.5-5.9-18.6-5.9-28.8 1.9-19.8 5.9-28.8c3.9-9 9.2-16.8 15.9-23.5s14.6-11.9 23.6-15.8 18.7-5.8 29-5.8c10.2 0 19.8 2 28.9 5.8 9.1 3.9 16.9 9.2 23.7 15.8 6.7 6.7 12 14.5 15.9 23.5s5.9 18.6 5.9 28.8-2 19.8-5.9 28.8-9.2 16.8-15.9 23.5-14.6 11.9-23.7 15.8c-9 3.9-18.7 5.8-28.9 5.8zm0-112.1c-5.3 0-10.2 1.1-14.7 3.2s-8.4 4.9-11.6 8.4-5.8 7.5-7.7 12.1-2.8 9.5-2.8 14.7c0 5 0.9 9.9 2.8 14.6s4.4 8.8 7.7 12.2c3.2 3.5 7.1 6.3 11.6 8.4s9.4 3.2 14.7 3.2 10.2-1 14.7-3.2c4.5-2.1 8.4-4.9 11.6-8.4s5.8-7.6 7.7-12.2c1.9-4.7 2.8-9.5 2.8-14.6 0-5.2-0.9-10-2.8-14.7-1.9-4.6-4.4-8.7-7.7-12.1-3.2-3.5-7.1-6.3-11.6-8.4-4.5-2.2-9.4-3.2-14.7-3.2z"
              />
              <path
                class="st2"
                d="m566.1 266.5-24.3-43.2h-23.6l0.2 43.2h-38.5v-139.7h70c3.4 0 6.8 0.6 10.3 1.9s6.8 2.9 10.1 5c3.2 2.1 6.2 4.5 9 7.1s5.1 5.3 7 8.1c2.4 3.5 4.2 7.5 5.5 12.2 1.3 4.6 1.9 9 1.9 13.2 0 7-1.6 13.4-4.9 19.4-3.2 6-7.7 11-13.5 15.1l32.8 57.6h-42zm-27.2-108.5h-21.8v30h21.8c2.2 0 4.2-0.4 6.1-1.2s3.6-1.8 5-3.2 2.6-3 3.4-4.7c0.8-1.8 1.3-3.8 1.3-5.9s-0.4-4.1-1.3-5.9c-0.8-1.8-2-3.4-3.4-4.7-1.4-1.4-3.1-2.4-5-3.2s-3.9-1.2-6.1-1.2z"
              />
              <path
                class="st2"
                d="m796.3 161.4h-38.3v105.1h-38v-105.1h-38.3l-2.5-2.5v-32h119.7v32z"
              />
              <path
                class="st2"
                d="m1120.5 266.5v-139.7h38.7v105.1h73.4v34.6z"
              />
              <path
                class="st3"
                d="m917.6 127.4c-8.8-4.4-17.9-7-27.3-7.8s-18.9 0.2-28.3 3.1c-5.4 1.6-10.6 3.9-15.5 6.8l-57.7-68.8c-3.7-4.4-10.2-5-14.6-1.3l-4.2 3.6c-4.4 3.7-5 10.2-1.3 14.6l57.8 68.9c-0.7 0.8-1.3 1.6-2 2.5-8 9.6-12.2 24.8-12.2 24.8-1.2 4.4-2.1 8.8-2.5 13.4-0.9 9.4 0.1 18.8 2.9 28.2s7.5 18 14 25.8c6.6 7.8 14.2 13.9 23 18.3s17.9 7 27.3 7.8 18.8-0.2 28.2-3.1c9.4-2.8 18-7.6 25.9-14.2 7.8-6.6 14-14.2 18.4-23 4.5-8.8 7.1-17.9 8-27.3s-0.1-18.8-2.9-28.2-7.5-18-14-25.8c-6.6-7.8-14.2-13.9-23-18.3zm14 50.9c1.9 6.4 2.6 12.9 2 19.2s-2.4 12.6-5.5 18.6c-3 5.8-7.2 11.1-12.5 15.5-5.4 4.5-11.2 7.7-17.4 9.6-6.4 1.9-12.9 2.7-19.2 2.1-6.3-0.5-12.6-2.3-18.5-5.3-5.8-2.9-11-7-15.4-12.3-4.4-5.2-7.6-11.1-9.4-17.2-1.9-6.4-2.6-12.9-2-19.2 0.6-6.4 2.4-12.7 5.4-18.8 2.9-5.8 7.1-11 12.4-15.5 5.3-4.4 11.1-7.6 17.4-9.5 6.5-2 13-2.7 19.4-2.1 6.3 0.5 12.6 2.3 18.6 5.3 5.8 2.9 10.9 7 15.3 12.3 4.4 5.4 7.6 11.2 9.4 17.3z"
              />
              <path
                class="st4"
                d="m884.1 143.1c6.9 0 13.4 1.3 19.4 3.9 6.2 2.7 11.7 6.3 16.3 10.8 4.5 4.5 8.1 9.9 10.8 16 2.6 5.9 3.9 12.4 3.9 19.3s-1.3 13.3-3.9 19.3c-2.7 6.1-6.3 11.5-10.8 16s-9.9 8.1-16.1 10.7c-6 2.6-12.6 3.9-19.5 3.9-7 0-13.6-1.3-19.6-3.8-6.2-2.6-11.6-6.2-16.1-10.7s-8.1-9.9-10.8-16c-2.6-5.9-3.9-12.4-3.9-19.3 0-6.8 1.3-13.3 3.9-19.3 2.7-6.1 6.3-11.5 10.8-16 4.6-4.5 10-8.2 16.2-10.9 5.9-2.6 12.4-3.9 19.4-3.9m0-12c-8.6 0-16.8 1.6-24.2 4.9-7.6 3.3-14.3 7.8-19.9 13.3-5.6 5.6-10.1 12.2-13.4 19.7-3.2 7.4-4.9 15.5-4.9 24s1.6 16.6 4.9 24c3.3 7.6 7.8 14.2 13.4 19.7 5.6 5.6 12.3 10 19.8 13.2s15.6 4.8 24.3 4.8c8.5 0 16.7-1.6 24.2-4.8 7.6-3.2 14.3-7.7 19.9-13.2 5.6-5.6 10.1-12.2 13.4-19.7 3.2-7.4 4.9-15.5 4.9-24s-1.6-16.6-4.9-24c-3.3-7.6-7.8-14.2-13.4-19.7-5.6-5.6-12.3-10.1-20-13.3-7.5-3.3-15.6-4.9-24.1-4.9z"
              />
              <g>
                <path
                  class="st5"
                  d="m882.5 183.8c-0.1-2.5-2-4.6-4.6-4.6-2.4 0-4.7 2.1-4.6 4.6s2 4.6 4.6 4.6c2.5-0.1 4.8-2.2 4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m894.4 183.8c-0.1-2.5-2-4.6-4.6-4.6-2.4 0-4.7 2.1-4.6 4.6s2 4.6 4.6 4.6c2.5-0.1 4.8-2.2 4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m900 194c-0.1-2.5-2-4.6-4.6-4.6-2.4 0-4.7 2.1-4.6 4.6s2 4.6 4.6 4.6c2.5-0.1 4.7-2.1 4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m894.3 204.2c-0.1-2.5-2-4.6-4.6-4.6-2.4 0-4.7 2.1-4.6 4.6s2 4.6 4.6 4.6c2.4 0 4.7-2.1 4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m882.4 204c-0.1-2.5-2-4.6-4.6-4.6-2.4 0-4.7 2.1-4.6 4.6s2 4.6 4.6 4.6c2.4 0 4.7-2.1 4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m876.8 194.2c-0.1-2.5-2-4.6-4.6-4.6-2.4 0-4.7 2.1-4.6 4.6s2 4.6 4.6 4.6c2.4-0.1 4.7-2.2 4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m901.2 181c-3.8 0-3.8 5.9 0 5.9s3.8-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m883.9 170.8c-3.8 0-3.8 5.9 0 5.9 3.8-0.1 3.8-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m866.5 181c-3.8 0-3.8 5.9 0 5.9 3.7 0 3.7-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m866.5 201.1c-3.8 0-3.8 5.9 0 5.9 3.7 0 3.7-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m883.9 211.1c-3.8 0-3.8 5.9 0 5.9s3.8-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m901.2 201.3c-3.8 0-3.8 5.9 0 5.9 3.8-0.1 3.8-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m896.8 169.2c-2.9 0-2.9 4.6 0 4.6s2.9-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m870.9 169.4c-2.9 0-2.9 4.6 0 4.6s3-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m857.9 191.7c-2.9 0-2.9 4.6 0 4.6s2.9-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m870.7 214.2c-2.9 0-2.9 4.6 0 4.6 3 0 3-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m909.8 191.7c-2.9 0-2.9 4.6 0 4.6s2.9-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m911.5 176c-2.5 0-2.5 3.9 0 3.9s2.5-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m883.9 224c-2.5 0-2.5 3.9 0 3.9s2.6-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m896.6 214.2c-2.9 0-2.9 4.6 0 4.6s2.9-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m883.9 160c-2.5 0-2.5 3.9 0 3.9 2.5 0.1 2.6-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m856 175.9c-2.5 0-2.5 3.9 0 3.9 2.6 0 2.6-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m856.2 208c-2.5 0-2.5 3.9 0 3.9s2.5-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m911.5 208.2c-2.5 0-2.5 3.9 0 3.9s2.5-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m919.1 192.6c-1.8 0-1.8 2.8 0 2.8s1.8-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m901.2 162.1c-1.8 0-1.8 2.8 0 2.8s1.9-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m866.3 162.3c-1.8 0-1.8 2.8 0 2.8s1.8-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m848.8 192.6c-1.8 0-1.8 2.8 0 2.8s1.8-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m866.3 222.9c-1.8 0-1.8 2.8 0 2.8s1.8-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m901.2 222.7c-1.8 0-1.8 2.8 0 2.8s1.9-2.8 0-2.8z"
                />
              </g>
              <path
                class="st3"
                d="m979.4 145.7c-6.6 7.8-11.2 16.4-14 25.8s-3.8 18.8-2.9 28.2 3.5 18.5 8 27.3 10.6 16.4 18.4 23c7.9 6.6 16.5 11.4 25.9 14.2s18.8 3.9 28.2 3.1 18.5-3.4 27.3-7.8 16.4-10.5 23-18.3 11.2-16.4 14-25.8 3.8-18.8 2.9-28.2c-0.4-4.5-1.3-9-2.5-13.4 0 0-4.2-15.2-12.2-24.8-0.6-0.8-1.3-1.7-2-2.5l57.8-68.9c3.7-4.4 3.1-10.9-1.3-14.6l-4.2-3.6c-4.4-3.7-10.9-3.1-14.6 1.3l-57.7 68.8c-4.9-2.9-10.1-5.1-15.5-6.8-9.4-2.8-18.9-3.9-28.3-3.1s-18.5 3.4-27.3 7.8-16.4 10.5-23 18.3zm18.4 15.4c4.4-5.3 9.6-9.4 15.3-12.3 6-3 12.2-4.8 18.6-5.3s12.9 0.2 19.4 2.1c6.3 1.9 12.1 5.1 17.4 9.5 5.3 4.5 9.5 9.7 12.4 15.5 3 6.1 4.9 12.4 5.4 18.8 0.6 6.3-0.1 12.8-2 19.2-1.9 6.2-5 12-9.4 17.2s-9.6 9.4-15.4 12.3c-6 3-12.2 4.8-18.5 5.3-6.4 0.5-12.8-0.2-19.2-2.1-6.2-1.9-12.1-5.1-17.4-9.6-5.3-4.4-9.5-9.7-12.5-15.5-3.1-6-4.9-12.2-5.5-18.6-0.6-6.3 0.1-12.8 2-19.2 1.8-6.2 5-12 9.4-17.3z"
              />
              <path
                class="st6"
                d="m1035.9 143.1c7 0 13.5 1.3 19.4 3.9 6.2 2.7 11.7 6.3 16.2 10.9 4.5 4.5 8.1 9.8 10.8 16 2.6 5.9 3.9 12.4 3.9 19.3 0 6.8-1.3 13.3-3.9 19.3-2.7 6.1-6.3 11.5-10.8 16s-9.9 8.1-16.1 10.7c-6 2.5-12.5 3.8-19.6 3.8-6.9 0-13.5-1.3-19.5-3.9-6.2-2.6-11.6-6.2-16.1-10.7s-8.1-9.9-10.8-16c-2.6-5.9-3.9-12.4-3.9-19.3s1.3-13.3 3.9-19.3c2.7-6.1 6.3-11.5 10.8-16s10-8.2 16.3-10.8c6-2.6 12.5-3.9 19.4-3.9m0-12c-8.5 0-16.6 1.6-24.1 4.9-7.6 3.3-14.4 7.8-20 13.3-5.6 5.6-10.1 12.2-13.4 19.7-3.2 7.4-4.9 15.5-4.9 24s1.6 16.6 4.9 24c3.3 7.6 7.8 14.2 13.4 19.7s12.3 10 19.9 13.2c7.5 3.2 15.7 4.8 24.2 4.8 8.6 0 16.8-1.6 24.3-4.8 7.6-3.2 14.2-7.7 19.8-13.2 5.6-5.6 10.1-12.2 13.4-19.7 3.2-7.4 4.9-15.5 4.9-24s-1.6-16.6-4.9-24c-3.3-7.5-7.8-14.2-13.4-19.7-5.6-5.6-12.3-10.1-19.9-13.3-7.4-3.3-15.6-4.9-24.2-4.9z"
              />
              <g>
                <path
                  class="st5"
                  d="m1037.4 183.8c0.1-2.5 2-4.6 4.6-4.6 2.4 0 4.7 2.1 4.6 4.6s-2 4.6-4.6 4.6c-2.4-0.1-4.7-2.2-4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m1025.5 183.8c0.1-2.5 2-4.6 4.6-4.6 2.4 0 4.7 2.1 4.6 4.6s-2 4.6-4.6 4.6c-2.4-0.1-4.7-2.2-4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m1020 194c0.1-2.5 2-4.6 4.6-4.6 2.4 0 4.7 2.1 4.6 4.6s-2 4.6-4.6 4.6c-2.5-0.1-4.7-2.1-4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m1025.7 204.2c0.1-2.5 2-4.6 4.6-4.6 2.4 0 4.7 2.1 4.6 4.6s-2 4.6-4.6 4.6c-2.4 0-4.7-2.1-4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m1037.6 204c0.1-2.5 2-4.6 4.6-4.6 2.4 0 4.7 2.1 4.6 4.6s-2 4.6-4.6 4.6c-2.4 0-4.7-2.1-4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m1043.2 194.2c0.1-2.5 2-4.6 4.6-4.6 2.4 0 4.7 2.1 4.6 4.6s-2 4.6-4.6 4.6c-2.4-0.1-4.7-2.2-4.6-4.6z"
                />
                <path
                  class="st5"
                  d="m1018.8 181c3.8 0 3.8 5.9 0 5.9s-3.8-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m1036 170.8c3.8 0 3.8 5.9 0 5.9-3.7-0.1-3.7-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m1053.5 181c3.8 0 3.8 5.9 0 5.9-3.7 0-3.7-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m1053.5 201.1c3.8 0 3.8 5.9 0 5.9-3.7 0-3.7-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m1036 211.1c3.8 0 3.8 5.9 0 5.9-3.7 0-3.7-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m1018.8 201.3c3.8 0 3.8 5.9 0 5.9-3.8-0.1-3.8-5.9 0-5.9z"
                />
                <path
                  class="st5"
                  d="m1023.2 169.2c2.9 0 2.9 4.6 0 4.6s-2.9-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m1049.1 169.4c2.9 0 2.9 4.6 0 4.6-3 0-3-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m1062.1 191.7c2.9 0 2.9 4.6 0 4.6s-3-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m1049.3 214.2c2.9 0 2.9 4.6 0 4.6-3 0-3-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m1010.2 191.7c2.9 0 2.9 4.6 0 4.6s-2.9-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m1008.5 176c2.5 0 2.5 3.9 0 3.9s-2.5-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m1036 224c2.5 0 2.5 3.9 0 3.9s-2.5-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m1023.4 214.2c2.9 0 2.9 4.6 0 4.6s-2.9-4.6 0-4.6z"
                />
                <path
                  class="st5"
                  d="m1036 160c2.5 0 2.5 3.9 0 3.9-2.5 0.1-2.5-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m1063.9 175.9c2.5 0 2.5 3.9 0 3.9s-2.5-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m1063.8 208c2.5 0 2.5 3.9 0 3.9-2.6 0-2.6-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m1008.5 208.2c2.5 0 2.5 3.9 0 3.9s-2.5-3.9 0-3.9z"
                />
                <path
                  class="st5"
                  d="m1000.9 192.6c1.8 0 1.8 2.8 0 2.8s-1.8-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m1018.8 162.1c1.8 0 1.8 2.8 0 2.8-1.9 0-1.9-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m1053.7 162.3c1.8 0 1.8 2.8 0 2.8s-1.8-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m1071.2 192.6c1.8 0 1.8 2.8 0 2.8s-1.8-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m1053.7 222.9c1.8 0 1.8 2.8 0 2.8s-1.8-2.8 0-2.8z"
                />
                <path
                  class="st5"
                  d="m1018.8 222.7c1.8 0 1.8 2.8 0 2.8-1.9 0-1.9-2.8 0-2.8z"
                />
              </g>
            </g>
          </g>
        </svg>
      </router-link>

      <div class="css-work-tool-haw">
        <div class="css-identicon-wrp">
          <div class="css-identicon" id="identicon">
            <img :src="avatarSeed" alt="" />
          </div>
        </div>
        <span class="css-identicon-wrx">{{ newAudit.an }}</span>
      </div>
    </header>
    <div class="css-work-tool-wrap">
      <div class="css-work-project-wpr">
        <div class="css-work-project-wrap" :class="{ active: workspace }">
          <div class="css-work-project-title" @click="workspace = !workspace">
            <b>Audit progress</b>
          </div>
          <div class="css-work-project-arw">
            <div class="css-work-project-ari">
              <div class="css-work-project-awp">
                <img :src="newAudit.pl" alt="" />
              </div>
            </div>
          </div>
          <div class="css-work-project-legend">
            <div class="css-work-project-name">
              <b>{{ newAudit.pn }}</b>
            </div>
            <div class="css-work-project-tag" style="text-transform: lowercase">
              <span>{{ newAudit.pw }}</span>
            </div>
            <div class="css-work-project-tag">
              <span>{{ newAudit.pc }}</span>
            </div>
          </div>
          <div
            class="css-work-project-sbe"
            @click="isRetrayed[0] = !isRetrayed[0]"
          >
            <svg
              class="css-work-project-dar"
              :class="{ active: !isRetrayed[0] }"
              isRetrayed
              viewBox="0 0 1024 1024"
              data-v-365b8594=""
            >
              <path
                fill="currentColor"
                d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
              ></path>
            </svg>

            <b>Development Team</b>
            <span
              >{{ knowWorkProgress("developmentTeam") }} /
              {{ workProgramCategory["developmentTeam"].length }}
            </span>
          </div>
          <ul class="css-work-project-ul" :class="{ active: isRetrayed[0] }">
            <li
              v-for="category in workProgramCategory['developmentTeam']"
              :key="category"
              class="css-work-project-uli"
              :class="{
                active: progressWorkData.includes(category.id),
              }"
              @click="clickCurrentQuestion(category.id) & (showSummary = false)"
            >
              {{ category.name }}
            </li>
          </ul>
          <div
            class="css-work-project-sbe"
            @click="isRetrayed[1] = !isRetrayed[1]"
          >
            <svg
              class="css-work-project-dar"
              :class="{ active: !isRetrayed[1] }"
              isRetrayed
              viewBox="0 0 1024 1024"
              data-v-365b8594=""
            >
              <path
                fill="currentColor"
                d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
              ></path>
            </svg>
            <b>Tokenomics</b>
            <span
              >{{ knowWorkProgress("tokenomics") }} /
              {{ workProgramCategory["tokenomics"].length }}</span
            >
          </div>
          <ul class="css-work-project-ul" :class="{ active: isRetrayed[1] }">
            <li
              v-for="category in workProgramCategory['tokenomics']"
              :key="category"
              class="css-work-project-uli"
              :class="{
                active: progressWorkData.includes(category.id),
              }"
              @click="clickCurrentQuestion(category.id) & (showSummary = false)"
            >
              {{ category.name }}
            </li>
          </ul>
          <div
            class="css-work-project-sbe"
            @click="isRetrayed[2] = !isRetrayed[2]"
          >
            <svg
              class="css-work-project-dar"
              :class="{ active: !isRetrayed[2] }"
              isRetrayed
              viewBox="0 0 1024 1024"
              data-v-365b8594=""
            >
              <path
                fill="currentColor"
                d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
              ></path>
            </svg>
            <b>Community</b>
            <span
              >{{ knowWorkProgress("community") }} /
              {{ workProgramCategory["community"].length }}</span
            >
          </div>
          <ul class="css-work-project-ul" :class="{ active: isRetrayed[2] }">
            <li
              v-for="category in workProgramCategory['community']"
              :key="category"
              class="css-work-project-uli"
              :class="{
                active: progressWorkData.includes(category.id),
              }"
              @click="clickCurrentQuestion(category.id) & (showSummary = false)"
            >
              {{ category.name }}
            </li>
          </ul>
          <div
            class="css-work-project-sbe"
            @click="isRetrayed[3] = !isRetrayed[3]"
          >
            <svg
              class="css-work-project-dar"
              :class="{ active: !isRetrayed[3] }"
              isRetrayed
              viewBox="0 0 1024 1024"
              data-v-365b8594=""
            >
              <path
                fill="currentColor"
                d="M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
              ></path>
            </svg>
            <b>ICO Trading Metrics</b>
            <span
              >{{ knowWorkProgress("metrics") }} /
              {{ workProgramCategory["metrics"].length }}</span
            >
          </div>
          <ul class="css-work-project-ul" :class="{ active: isRetrayed[3] }">
            <li
              v-for="category in workProgramCategory['metrics']"
              :key="category"
              class="css-work-project-uli"
              :class="{
                active: progressWorkData.includes(category.id),
              }"
              @click="clickCurrentQuestion(category.id) & (showSummary = false)"
            >
              {{ category.name }}
            </li>
          </ul>

          <div class="css-work-project-scc"></div>
        </div>
      </div>
      <div
        class="css-work-quest-wrap"
        :class="{ active: showSummary || visualHelper.purpose }"
      >
        <template v-if="visualHelper.purpose">
          <div
            class="css-work-quest-fpl"
            @click="visualHelper.purpose = !visualHelper.purpose"
          >
            <div class="css-work-quest-fps">
              <div class="css-work-quest-fph">
                <div>
                  <span> Why This Matters?</span>
                  <svg
                    id="SVGRoot"
                    width="16px"
                    height="16px"
                    version="1.1"
                    viewBox="0 0 16 16"
                  >
                    <g
                      id="Stockholm-icons-/-General-/-Shield-protected"
                      transform="matrix(.65766 0 0 .65766 .082673 .13227)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <rect id="bound" width="24" height="24" />
                      <path
                        d="m3.4259 2.7346 8.3765-1.5706c0.26738-0.050133 0.54175-0.050133 0.80912 0l8.3765 1.5706v10.189c0 3.2209-1.6592 6.2145-4.3905 7.9216l-3.8088 2.3805c-0.35593 0.22246-0.80756 0.22246-1.1635 0l-3.8088-2.3805c-2.7313-1.7071-4.3905-4.7007-4.3905-7.9216z"
                        fill="#0069f5"
                        opacity=".3"
                        stroke-width="1.0976"
                      />
                      <path
                        id="Combined-Shape"
                        d="m14.951 10.418c0.6062 0 1.0976 0.49143 1.0976 1.0976v3.2929c0 0.6062-0.49143 1.0976-1.0976 1.0976h-5.4882c-0.6062 0-1.0976-0.49143-1.0976-1.0976v-3.2929c0-0.60621 0.49143-1.0976 1.0976-1.0976v-0.54882c0-1.5155 1.2286-2.7441 2.7441-2.7441 1.5155 0 2.7441 1.2286 2.7441 2.7441zm-2.7441-2.1953c-0.90931 0-1.6464 0.73714-1.6464 1.6464v0.54882h3.2929v-0.54882c0-0.90931-0.73714-1.6464-1.6464-1.6464z"
                        fill="#0069f5"
                        stroke-width="1.0976"
                      />
                    </g>
                  </svg>
                </div>
                <button>
                  <svg
                    id="SVGRoot"
                    width="16px"
                    height="16px"
                    version="1.1"
                    viewBox="0 0 16 16"
                  >
                    <g
                      id="Stockholm-icons-/-Navigation-/-Close"
                      transform="translate(-4.016 -3.7816)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Group"
                        transform="rotate(-45 14.828 5.1716)"
                        fill="#727384"
                      >
                        <rect y="7" width="16" height="2" rx="1" />
                        <rect
                          id="Rectangle-185-Copy"
                          transform="rotate(90,8,8)"
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <div class="css-work-quest-fpx">
                <span
                  class="css-work-quest-fpz"
                  v-for="item in splitPurpose()"
                  :key="item"
                >
                  {{ item }}
                </span>
                <div class="css-work-quest-fxp">
                  <div>SCATDAO</div>
                  <span>www.scatdao.com</span>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="showSummary">
          <div class="css-work-quest-fpl">
            <div class="css-work-quest-fyy">
              <div class="css-work-quest-fph">
                <div>
                  <span>Summary</span>
                  <svg
                    id="SVGRoot"
                    width="16px"
                    height="16px"
                    version="1.1"
                    viewBox="0 0 16 16"
                  >
                    <g
                      id="Stockholm-icons-/-General-/-Shield-protected"
                      transform="matrix(.65766 0 0 .65766 .082673 .13227)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <rect id="bound" width="24" height="24" />
                      <g
                        id="Stockholm-icons-/-General-/-Shield-check"
                        transform="matrix(1.1027 0 0 1.1027 -.96743 -1.7585)"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect width="24" height="24" />
                        <path
                          d="m4 4 7.6314-1.4309c0.2436-0.045674 0.49356-0.045674 0.73715 0l7.6314 1.4309v9.283c0 2.9344-1.5117 5.6618-4 7.217l-3.47 2.1688c-0.32427 0.20267-0.73573 0.20267-1.06 0l-3.47-2.1688c-2.4883-1.5552-4-4.2826-4-7.217z"
                          fill="#0069f5"
                          opacity=".3"
                        />
                        <path
                          id="check-path"
                          d="m11.175 14.75c-0.23958 0-0.47917-0.09583-0.67083-0.2875l-1.9167-1.9167c-0.38333-0.38333-0.38333-0.95833 0-1.3417 0.38333-0.38333 1.0062-0.38333 1.3417 0l1.2458 1.2458 3.1625-3.1625c0.38333-0.38333 0.95833-0.38333 1.3417 0s0.38333 0.95833 0 1.3417l-3.8333 3.8333c-0.19167 0.19167-0.43125 0.2875-0.67083 0.2875z"
                          fill="#0069f5"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <button @click="showSummary = !showSummary">
                  <svg
                    id="SVGRoot"
                    width="16px"
                    height="16px"
                    version="1.1"
                    viewBox="0 0 16 16"
                  >
                    <g
                      id="Stockholm-icons-/-Navigation-/-Close"
                      transform="translate(-4.016 -3.7816)"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Group"
                        transform="rotate(-45 14.828 5.1716)"
                        fill="#727384"
                      >
                        <rect y="7" width="16" height="2" rx="1" />
                        <rect
                          id="Rectangle-185-Copy"
                          transform="rotate(90,8,8)"
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>

              <div class="css-work-quest-fpx">
                <div class="css-work-quest-fyx">
                  <span class="css-work-quest-fzz"
                    >List of remaining questions</span
                  >
                  <span>{{ remainingQuestion().length }}</span>
                </div>
                <div
                  class="css-work-quest-fpb"
                  v-for="element in remainingQuestion()"
                  :key="element"
                  @click="
                    clickCurrentQuestion(element.id) &
                      (showSummary = !showSummary)
                  "
                >
                  <span> {{ element.a }} </span> <span> {{ element.b }} </span>
                  <span> {{ element.c }} </span>
                  <span
                    ><svg
                      id="SVGRoot"
                      width="16px"
                      height="16px"
                      version="1.1"
                      viewBox="0 0 16 16"
                    >
                      <g
                        id="Stockholm-icons-/-Communication-/-Reply-all"
                        transform="matrix(.65974 0 0 .65974 .18642 .10193)"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect width="24" height="24" />
                        <path
                          id="Shape"
                          d="m21.022 18.094c0-0.82031 0.17578-4.0576-2.3779-6.626-1.7188-1.7285-4.291-2.0283-7.3672-2.165v-4.3069c0-0.41421-0.33579-0.75-0.75-0.75-0.18631 0-0.36595 0.069345-0.50394 0.19453l-7.1401 6.4777c-0.30678 0.27832-0.32985 0.75263-0.051533 1.0594 0.014608 0.0161 0.029909 0.03156 0.045861 0.04633l7.1401 6.6125c0.30391 0.28145 0.77843 0.26324 1.0599-0.04066 0.1284-0.13864 0.19973-0.32064 0.19973-0.50961v-4.2832c1.9531 0.05371 3.3444 0.17795 4.6084 0.58008 1.82 0.57902 3.2266 2.2218 4.2196 4.9283l-1.6e-5 6e-6c0.10836 0.29534 0.38952 0.49166 0.70412 0.49166h0.21786c0-0.49316-0.0049-1.2744-0.0049-1.709z"
                          fill="#86898d"
                          fill-rule="nonzero"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <template v-if="remainingQuestion().length === 0">
                  <div class="css-work-quest-fcc">
                    <svg
                      id="SVGRoot"
                      width="100px"
                      height="100px"
                      version="1.1"
                      viewBox="0 0 100 100"
                    >
                      <g
                        id="Stockholm-icons-/-General-/-Shield-check"
                        transform="matrix(4.1297 0 0 4.1297 .51783 .61266)"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect id="bound" width="24" height="24" />
                        <path
                          d="m4 4 7.6314-1.4309c0.2436-0.045674 0.49356-0.045674 0.73715 0l7.6314 1.4309v9.283c0 2.9344-1.5117 5.6618-4 7.217l-3.47 2.1688c-0.32427 0.20267-0.73573 0.20267-1.06 0l-3.47-2.1688c-2.4883-1.5552-4-4.2826-4-7.217z"
                          fill="#0069f5"
                          opacity=".1"
                        />
                        <path
                          id="check-path"
                          d="m11.175 14.75c-0.23958 0-0.47917-0.09583-0.67083-0.2875l-1.9167-1.9167c-0.38333-0.38333-0.38333-0.95833 0-1.3417 0.38333-0.38333 1.0062-0.38333 1.3417 0l1.2458 1.2458 3.1625-3.1625c0.38333-0.38333 0.95833-0.38333 1.3417 0s0.38333 0.95833 0 1.3417l-3.8333 3.8333c-0.19167 0.19167-0.43125 0.2875-0.67083 0.2875z"
                          fill="#0069f5"
                        />
                      </g>
                    </svg>
                    <div class="css-work-quest-fsc">
                      <span>All questions completed!</span>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="css-work-quest-xsc">
              <template v-if="remainingQuestion().length !== 0">
                <div class="css-work-quest-xcq">
                  <span>Please complete the remaining questions.</span>
                </div>
              </template>

              <template v-if="remainingQuestion().length === 0">
                <div class="css-work-quest-bfw">
                  <template v-if="errReportGen">
                    <div class="css-work-quest-xcq">
                      <span>This report has already been generated</span>
                    </div>
                  </template>
                  <template v-if="!isReportCreated">
                    <button
                      class="css-work-quest-xkx"
                      id="create-report"
                      @click="createNewReport()"
                    >
                      Create Report
                    </button></template
                  >
                  <template v-if="isReportCreated">
                    <button class="css-work-quest-xkx" id="css-blue-button">
                      <a
                        :href="reportLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Go to Report</a
                      >
                    </button>
                  </template>
                </div>
              </template>
            </div>
          </div>
        </template>
        <div class="css-work-quest-top">
          <div
            class="css-work-quest-back"
            v-for="item in currentQuestion"
            :key="item"
            :class="{ active: item.answer != null }"
            @click="backToWorksteps()"
          >
            <div>
              <svg
                viewBox="0 0 1024 1024"
                data-v-066465b6=""
                width="24"
                style="transform: rotate(180deg)"
              >
                <path
                  fill="var(--complementary-color-blue)"
                  d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
                ></path>
              </svg>
            </div>
            <span>Back to Worksteps</span>
          </div>
          <div
            class="css-work-quest-id"
            v-for="item in currentQuestion"
            :key="item"
          >
            #{{ item.tag }}
          </div>
        </div>

        <div class="css-work-quest-page">
          <div>
            <span
              class="css-work-quest-pag"
              v-for="item in currentQuestion"
              :key="item"
              >{{ item.id }}</span
            ><span class="css-work-quest-div">/</span>{{ numberQuestion[1] }}
          </div>
        </div>

        <div
          class="css-work-quest-legend"
          v-for="item in currentQuestion"
          :key="item"
        >
          {{ item.question }}
        </div>
        <div
          class="css-work-quest-answer"
          v-for="item in currentQuestion"
          :key="item"
        >
          <template v-if="item.answer != null">
            <div class="css-work-quest-suggest">Select an option</div>
          </template>
          <template v-if="item.answer === null">
            <div class="css-work-quest-note">
              <b>Worksteps:</b>
              <div v-for="step in item.worksteps" :key="step">
                {{ step }}
              </div>
            </div>
          </template>
          <template v-if="item.answer != null">
            <div class="css-work-quest-note">
              <b>Last step:</b>
              <div>Select an option according to the information collected</div>
            </div>
          </template>
          <template v-if="item.answer === null">
            <div class="css-work-quest-panel">
              <button
                class="css-work-quest-panel-b"
                @click="visualHelper.purpose = !visualHelper.purpose"
              >
                <svg
                  id="SVGRoot"
                  width="16px"
                  height="16px"
                  version="1.1"
                  viewBox="0 0 16 16"
                >
                  <g
                    id="Stockholm-icons-/-General-/-Clipboard"
                    transform="matrix(.66381 0 0 .66381 -.021402 .031252)"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <rect width="24" height="24" />
                    <g fill="#0069f5">
                      <path
                        d="m8 3v0.5c0 0.82843 0.67157 1.5 1.5 1.5h5c0.82843 0 1.5-0.67157 1.5-1.5v-0.5h2c1.1046 0 2 0.89543 2 2v16c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2v-16c0-1.1046 0.89543-2 2-2z"
                        opacity=".3"
                      />
                      <path
                        d="m11 2c0-0.55228 0.44772-1 1-1s1 0.44772 1 1h1.5c0.27614 0 0.5 0.22386 0.5 0.5v1c0 0.27614-0.22386 0.5-0.5 0.5h-5c-0.27614 0-0.5-0.22386-0.5-0.5v-1c0-0.27614 0.22386-0.5 0.5-0.5z"
                      />
                      <rect
                        x="7"
                        y="10"
                        width="5"
                        height="2"
                        rx="1"
                        opacity=".3"
                      />
                      <rect
                        id="Rectangle-152-Copy"
                        x="7"
                        y="14"
                        width="9"
                        height="2"
                        rx="1"
                        opacity=".3"
                      />
                    </g>
                  </g>
                </svg>
              </button>

              <button
                class="css-work-quest-panel-b"
                id="css-work-quest-panel-bl"
                @click="nextGlassButton()"
              >
                <svg
                  id="SVGRoot"
                  width="18px"
                  height="18px"
                  version="1.1"
                  viewBox="0 0 16 16"
                >
                  <g transform="matrix(.033329 0 0 .033329 -.67907 -.47141)">
                    <path
                      d="m193.69 281.29v0.61225c-3.9514 3.6214-6.4904 8.9988-9.3937 13.469-6.3349 9.7518-12.571 19.569-18.802 29.388-19.461 30.667-38.761 61.51-58.745 91.837-7.8557 11.922-15.456 24.044-23.068 36.123-3.0857 4.8961-8.4123 10.646-9.1837 16.531-1.6396 12.496 17.411 23.13 27.356 26.058 3.9318 1.1578 9.2768 1.7002 12.833-0.77387 3.908-2.7196 6.3735-8.4624 8.8555-12.427 5.512-8.8041 11.077-17.589 16.695-26.327 21.696-33.747 43.188-67.645 64.505-101.63 6.5498-10.443 13.303-20.762 19.821-31.225 3.1764-5.1 7.4076-10.302 9.5363-15.918 35.249 13.671 73.6 16.071 109.59 3.2498 74.411-26.507 116.95-110.12 93.27-185.7-5.8751-18.756-14.964-36.071-27.27-51.429-13.476-16.819-30.906-30.149-50.082-39.879-56.39-28.612-130.64-16.379-174.43 29.48-46.21 48.392-56.042 122.3-22.88 180.6 7.8172 13.744 18.33 28.763 31.397 37.959m88.163-221.45c11.736-1.6723 25.305-0.21992 36.735 2.5869 24.813 6.0932 46.799 20.059 62.156 40.699 29.667 39.871 28.22 100.72-5.7771 137.76-7.7988 8.4949-16.675 16.599-26.991 21.992-12.171 6.3612-24.798 11.596-38.571 13.408-23.125 3.0428-47.991-0.41022-68.571-11.713-55.751-30.618-73.431-104.46-38.368-157.16 7.5826-11.396 17.79-21.884 29.184-29.541 15.14-10.175 32.297-15.478 50.204-18.03m9.8774 39.632c-4.6653 2.6155-0.26082 9.2535 4.1137 6.6974 4.2649-2.4918 0.17875-9.1041-4.1137-6.6974m-33.143 3.6576c-3.6772 0.0539-3.5162 5.5206 0 5.7845 3.8137 0.28592 3.6845-5.8378 0-5.7845m69.814-0.0545c-3.8761 0.34959-3.1629 6.281 0.57674 5.888 3.7678-0.39613 3.3031-6.2388-0.57674-5.888m-61.24 13.937c-5.9407 1.0555-4.7652 10.421 1.2214 9.5247 6.1402-0.91899 4.7638-10.588-1.2214-9.5247m52.041 0.0251c-6.4218 0.68265-5.1049 10.536 1.219 9.502 5.8365-0.95327 4.6775-10.129-1.219-9.502m-25.716 3.6337c-7.4547 0.41571-6.9025 11.883 0.61163 11.363 7.2031-0.49898 6.5412-11.761-0.61163-11.363m-56.873 10.638c-4.4082 2.4178-0.90859 9.259 3.54 7.1063 4.7768-2.3112 1.1988-9.7059-3.54-7.1063m110.23 0c-4.2882 2.4692-0.23019 9.6882 4.1045 6.7929 4.0941-2.7355 0.21857-9.2829-4.1045-6.7929m-66.213 5.1894c-13.139 1.9286-9.4592 21.379 3.6735 19.143 11.719-1.9947 8.1135-20.873-3.6735-19.143m23.878 0c-13.135 1.8435-10.18 21.234 3.0612 19.15 11.794-1.8557 8.5665-20.782-3.0612-19.15m-46.528 4.3586c-7.2172 1.1755-5.4912 12.31 1.8337 11.106 7.29-1.1982 5.3688-12.28-1.8337-11.106m69.794 0c-7.3794 1.1559-5.67 12.362 1.8336 11.106 7.1064-1.1896 5.1429-12.199-1.8336-11.106m-60.612 16.544c-11.772 3.5676-6.2915 21.88 5.5096 18.617 12.487-3.4518 6.8455-22.362-5.5096-18.617m47.142-0.0557c-11.959 3.1414-6.3802 22.133 5.5102 18.673 12.313-3.5829 6.8596-21.923-5.5102-18.673m-74.658 5.1863c-5.1019 2.7643-1.088 11.118 4.2226 8.4349 5.8231-2.9412 1.3806-11.472-4.2226-8.4349m103.47-4.6e-4c-5.1036 2.7833-1.0182 11.064 4.2226 8.4355 5.8158-2.9174 1.4517-11.531-4.2226-8.4355m-120 1.1896c-3.5553 0.79469-2.3467 6.2467 1.1584 5.7839 3.7427-0.49347 2.4398-6.5884-1.1584-5.7839m139.62-0.0735c-3.6765 1.1388-1.9157 6.8449 1.7082 5.7778 3.6766-1.0824 1.977-6.919-1.7082-5.7778m-83.33 13.887c-12.326 2.9761-7.208 21.862 4.898 18.939 12.32-2.9749 7.3672-21.901-4.898-18.939m23.265 0.071c-11.916 3.5951-6.5835 22.339 5.5102 18.705 12.16-3.6539 6.5865-22.355-5.5102-18.705m-45.909 3.731c-6.9196 2.6914-2.6669 13.439 4.2649 10.723 6.7837-2.6578 2.6479-13.411-4.2649-10.723m69.796 2e-3c-6.9166 2.6308-2.6939 13.502 4.2502 10.558 6.6257-2.8096 2.4018-13.088-4.2502-10.558m-89.928 13.645c-4.3029 2.4122-1.0059 9.3368 3.5253 7.1082 4.7584-2.34 1.1792-9.7457-3.5253-7.1082m110.21 0c-4.3041 2.4784-0.20999 9.5608 4.1045 6.7776 4.1437-2.6737 0.20387-9.2584-4.1045-6.7776m-55.184 6.5578c-6.8994 2.6835-2.6915 13.503 4.2502 10.559 6.671-2.8292 2.5365-13.199-4.2502-10.559m-25.697 5.512c-5.7336 2.2512-2.1594 11.151 3.6196 8.8824 5.7337-2.2512 2.1594-11.151-3.6196-8.8824m51.437 0.17326c-5.3455 2.8757-1.1608 11.268 4.2166 8.4416 5.583-2.9345 1.26-11.388-4.2166-8.4416m-59.39 17.107c-3.5553 0.7947-2.3467 6.2468 1.1584 5.7839 3.7427-0.49408 2.4398-6.5884-1.1584-5.7839m69.827-0.0735c-3.6686 1.1363-1.939 6.8222 1.7082 5.6927 3.6686-1.1363 1.939-6.8223-1.7082-5.6927m-36.105 2.5598c-4.2318 2.381-0.92449 9.2155 3.5553 7.1064 4.8392-2.2782 1.1204-9.7378-3.5553-7.1064z"
                      fill="#3063ef"
                    />
                    <g fill="#3063ee">
                      <path
                        d="m291.73 226.82c-4.2318 2.381-0.92449 9.2155 3.5553 7.1064 4.8392-2.2782 1.1204-9.7378-3.5553-7.1064z"
                      />
                      <path
                        d="m327.84 224.26c-3.6686 1.1363-1.939 6.8222 1.7082 5.6927 3.6686-1.1363 1.939-6.8223-1.7082-5.6927"
                      />
                      <path
                        d="m258.01 224.33c-3.5553 0.7947-2.3467 6.2468 1.1584 5.7839 3.7427-0.49408 2.4398-6.5884-1.1584-5.7839"
                      />
                      <path
                        d="m317.4 207.22c-5.3455 2.8757-1.1608 11.268 4.2166 8.4416 5.583-2.9345 1.26-11.388-4.2166-8.4416"
                      />
                      <path
                        d="m265.97 207.05c-5.7336 2.2512-2.1594 11.151 3.6196 8.8824 5.7337-2.2512 2.1594-11.151-3.6196-8.8824"
                      />
                      <path
                        d="m291.66 201.54c-6.8994 2.6835-2.6915 13.503 4.2502 10.559 6.671-2.8292 2.5365-13.199-4.2502-10.559"
                      />
                      <path
                        d="m346.85 194.98c-4.3041 2.4784-0.20999 9.5608 4.1045 6.7776 4.1437-2.6737 0.20387-9.2584-4.1045-6.7776"
                      />
                      <path
                        d="m236.63 194.98c-4.3029 2.4122-1.0059 9.3368 3.5253 7.1082 4.7584-2.34 1.1792-9.7457-3.5253-7.1082"
                      />
                      <path
                        d="m326.56 181.34c-6.9166 2.6308-2.6939 13.502 4.2502 10.558 6.6257-2.8096 2.4018-13.088-4.2502-10.558"
                      />
                      <path
                        d="m256.76 181.33c-6.9196 2.6914-2.6669 13.439 4.2649 10.723 6.7837-2.6578 2.6479-13.411-4.2649-10.723"
                      />
                      <path
                        d="m302.67 177.6c-11.916 3.5951-6.5835 22.339 5.5102 18.705 12.16-3.6539 6.5865-22.355-5.5102-18.705"
                      />
                      <path
                        d="m279.41 177.53c-12.326 2.9761-7.208 21.862 4.898 18.939 12.32-2.9749 7.3672-21.901-4.898-18.939"
                      />
                      <path
                        d="m362.74 163.65c-3.6765 1.1388-1.9157 6.8449 1.7082 5.7778 3.6766-1.0824 1.977-6.919-1.7082-5.7778"
                      />
                      <path
                        d="m223.11 163.72c-3.5553 0.79469-2.3467 6.2467 1.1584 5.7839 3.7427-0.49347 2.4398-6.5884-1.1584-5.7839"
                      />
                      <path
                        d="m343.12 162.53c-5.1036 2.7833-1.0182 11.064 4.2226 8.4355 5.8158-2.9174 1.4517-11.531-4.2226-8.4355"
                      />
                      <path
                        d="m239.65 162.53c-5.1019 2.7643-1.088 11.118 4.2226 8.4349 5.8231-2.9412 1.3806-11.472-4.2226-8.4349"
                      />
                      <path
                        d="m314.31 157.34c-11.959 3.1414-6.3802 22.133 5.5102 18.673 12.313-3.5829 6.8596-21.923-5.5102-18.673"
                      />
                      <path
                        d="m267.16 157.4c-11.772 3.5676-6.2915 21.88 5.5096 18.617 12.487-3.4518 6.8455-22.362-5.5096-18.617"
                      />
                      <path
                        d="m327.78 140.86c-7.3794 1.1559-5.67 12.362 1.8336 11.106 7.1064-1.1896 5.1429-12.199-1.8336-11.106"
                      />
                      <path
                        d="m257.98 140.86c-7.2172 1.1755-5.4912 12.31 1.8337 11.106 7.29-1.1982 5.3688-12.28-1.8337-11.106"
                      />
                      <path
                        d="m304.51 136.5c-13.135 1.8435-10.18 21.234 3.0612 19.15 11.794-1.8557 8.5665-20.782-3.0612-19.15"
                      />
                      <path
                        d="m280.63 136.5c-13.139 1.9286-9.4592 21.379 3.6735 19.143 11.719-1.9947 8.1135-20.873-3.6735-19.143"
                      />
                      <path
                        d="m346.85 131.31c-4.2882 2.4692-0.23019 9.6882 4.1045 6.7929 4.0941-2.7355 0.21857-9.2829-4.1045-6.7929"
                      />
                      <path
                        d="m236.62 131.31c-4.4082 2.4178-0.90859 9.259 3.54 7.1063 4.7768-2.3112 1.1988-9.7059-3.54-7.1063"
                      />
                      <path
                        d="m293.49 120.67c-7.4547 0.41571-6.9025 11.883 0.61163 11.363 7.2031-0.49898 6.5412-11.761-0.61163-11.363"
                      />
                      <path
                        d="m319.21 117.04c-6.4218 0.68265-5.1049 10.536 1.219 9.502 5.8365-0.95327 4.6775-10.129-1.219-9.502"
                      />
                      <path
                        d="m267.17 117.01c-5.9407 1.0555-4.7652 10.421 1.2214 9.5247 6.1402-0.91899 4.7638-10.588-1.2214-9.5247"
                      />
                      <path
                        d="m328.41 103.07c-3.8761 0.34959-3.1629 6.281 0.57674 5.888 3.7678-0.39613 3.3031-6.2388-0.57674-5.888"
                      />
                      <path
                        d="m258.59 103.13c-3.6772 0.0539-3.5162 5.5206 0 5.7845 3.8137 0.28592 3.6845-5.8378 0-5.7845"
                      />
                      <path
                        d="m291.73 99.47c-4.6653 2.6155-0.26082 9.2535 4.1137 6.6974 4.2649-2.4918 0.17875-9.1041-4.1137-6.6974"
                      />
                    </g>
                  </g>
                </svg>

                <span class="dot"></span>
              </button>
              <template v-if="!visualHelper.evaluate">
                <div class="css-work-quest-got">
                  <div class="box box--left"></div>
                  <div
                    class="css-work-quest-gtt"
                    @click="visualHelper.evaluate = !visualHelper.evaluate"
                  >
                    <svg
                      class="icon"
                      width="16"
                      height="16"
                      viewBox="0 0 1024 1024"
                      data-v-042ca774=""
                    >
                      <path
                        fill="currentColor"
                        d="M512 64a448 448 0 110 896.064A448 448 0 01512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 01-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 017.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
                      ></path>
                    </svg>
                    <span>Click to evaluate each question.</span>
                  </div>
                </div>
              </template>
            </div>
          </template>
          <template v-if="item.answer === null">
            <div class="css-work-quest-pta">
              <textarea
                class="css-work-quest-tex"
                v-model="currentQuestion[0].textarea"
              ></textarea>
              <template v-if="item.id === 9">
                <div class="css-work-quest-thl">
                  <div
                    class="css-work-quest-ths"
                    v-for="element in item.input"
                    :key="element"
                    :class="{
                      active: knowInputDelete(element.id),
                    }"
                  >
                    <input
                      v-model="currentQuestion[0].input[element.id].name"
                      class="css-work-quest-tss"
                      type="text"
                      placeholder="E.g. Development team"
                    />
                    <input
                      v-model="currentQuestion[0].input[element.id].per"
                      class="css-work-quest-tss"
                      style="width: 50%"
                      type="text"
                      placeholder="%"
                    />

                    <template v-if="!tokenPhases[element.id]">
                      <button
                        class="css-work-quest-bta"
                        @click="createNewInput(element.id)"
                      >
                        <svg
                          id="SVGRoot"
                          width="8px"
                          height="8px"
                          version="1.1"
                          viewBox="0 0 8 8"
                        >
                          <g
                            id="Stockholm-icons-/-Navigation-/-Plus"
                            transform="matrix(.49767 0 0 .49767 -1.9907 -1.9639)"
                            fill="#727384"
                            fill-rule="evenodd"
                          >
                            <rect x="4" y="11" width="16" height="2" rx="1" />
                            <rect
                              id="Rectangle-185-Copy"
                              transform="rotate(90,12,12)"
                              x="4"
                              y="11"
                              width="16"
                              height="2"
                              rx="1"
                            />
                          </g>
                        </svg>
                      </button>
                    </template>

                    <template v-if="tokenPhases[element.id]">
                      <button
                        class="css-work-quest-bta"
                        @click="removeAddedInput(element.id)"
                      >
                        <svg
                          id="SVGRoot"
                          width="8px"
                          height="8px"
                          version="1.1"
                          viewBox="0 0 8 8"
                        >
                          <g
                            id="Stockholm-icons-/-Navigation-/-Plus"
                            transform="matrix(.49767 0 0 .49767 -1.9907 -1.9639)"
                            fill="#727384"
                            fill-rule="evenodd"
                          >
                            <rect x="4" y="11" width="16" height="2" rx="1" />
                          </g>
                        </svg>
                      </button>
                    </template>
                  </div>
                </div>
              </template>

              <template v-if="item.id === 16">
                <div class="css-work-quest-thl">
                  <div class="css-work-quest-txs">
                    <input
                      v-model="currentQuestion[0].input"
                      class="css-work-quest-tss"
                      type="text"
                      placeholder="Nº Followers"
                    />
                  </div>
                </div>
              </template>

              <template v-if="item.id === 18">
                <div class="css-work-quest-thl">
                  <div class="css-work-quest-txs">
                    <input
                      v-model="currentQuestion[0].input"
                      class="css-work-quest-tss"
                      type="text"
                      placeholder="Nº Followers"
                    />
                  </div>
                </div>
              </template>

              <template v-if="item.id === 20">
                <div class="css-work-quest-thl">
                  <div class="css-work-quest-txs">
                    <input
                      v-model="currentQuestion[0].input"
                      class="css-work-quest-tss"
                      type="text"
                      placeholder="Nº Members"
                    />
                  </div>
                </div>
              </template>

              <template v-if="item.id === 22">
                <div class="css-work-quest-thl">
                  <div class="css-work-quest-txs">
                    <input
                      v-model="currentQuestion[0].input"
                      class="css-work-quest-tss"
                      type="text"
                      placeholder="Nº Members"
                    />
                  </div>
                </div>
              </template>
            </div>
          </template>

          <template v-for="option in item.options" :key="option">
            <div
              class="css-work-quest-answer-item"
              :class="{ active: item.answer === option.id }"
              v-if="item.answer != null"
            >
              <label
                class="control control--checkbox"
                @click="changeAnswerQuestion(option.id)"
              >
                <div class="css-work-quest-item-label">{{ option.name }}</div>
              </label>
            </div>
          </template>
        </div>

        <div class="css-work-quest-bpf">
          <div class="css-work-quest-nav">
            <div
              class="css-work-quest-arrow"
              id="left-arrow"
              @click="numberQuestion[0] > 0 ? backAnswerQuestion() : false"
            >
              <svg
                id="SVGRoot"
                width="24px"
                height="24px"
                version="1.1"
                viewBox="0 0 24 24"
              >
                <g fill="#001737" stroke-width="1.0666">
                  <rect
                    id="Rectangle"
                    transform="matrix(0,-1,-1,0,0,0)"
                    x="-13.15"
                    y="-20.188"
                    width="2.1334"
                    height="9.6"
                    rx="1.0666"
                  />
                  <path
                    d="m12.409 17.73c0.41656 0.41656 0.41656 1.092 0 1.5085-0.41656 0.41656-1.092 0.41656-1.5085 0l-6.4-6.4c-0.40382-0.40382-0.41795-1.0541-0.03206-1.475l5.8667-6.4c0.39808-0.43426 1.0729-0.4636 1.5071-0.065525 0.43426 0.39807 0.4636 1.0728 0.06552 1.5071l-5.1766 5.6472z"
                  />
                </g>
              </svg>
              <span>Back</span>
            </div>
            <template v-if="currentQuestion[0].id < questionList.length">
              <div
                class="css-work-quest-arrow"
                id="right-arrow"
                @click="
                  numberQuestion[0] < numberQuestion[1] - 1
                    ? nextAnswerQuestion()
                    : false
                "
              >
                <span>Next</span>
                <svg
                  id="SVGRoot"
                  width="24px"
                  height="24px"
                  version="1.1"
                  viewBox="0 0 24 24"
                >
                  <g fill="#fff" stroke-width="1.0666">
                    <rect
                      id="Rectangle"
                      transform="rotate(-90)"
                      x="-13.15"
                      y="4.188"
                      width="2.1334"
                      height="9.6"
                      rx="1.0666"
                    />
                    <path
                      d="m11.967 17.73c-0.41656 0.41656-0.41656 1.092 0 1.5085 0.41656 0.41656 1.092 0.41656 1.5085 0l6.4-6.4c0.40382-0.40382 0.41795-1.0541 0.03206-1.475l-5.8667-6.4c-0.39808-0.43426-1.0729-0.4636-1.5071-0.065525-0.43426 0.39807-0.4636 1.0728-0.06552 1.5071l5.1766 5.6472z"
                    />
                  </g>
                </svg>
              </div>
            </template>
            <template v-if="currentQuestion[0].id === questionList.length">
              <div
                class="css-work-quest-arrow"
                id="right-arrow"
                @click="summaryLayout()"
              >
                <span>Next</span>
                <svg
                  id="SVGRoot"
                  width="24px"
                  height="24px"
                  version="1.1"
                  viewBox="0 0 24 24"
                >
                  <g fill="#fff" stroke-width="1.0666">
                    <rect
                      id="Rectangle"
                      transform="rotate(-90)"
                      x="-13.15"
                      y="4.188"
                      width="2.1334"
                      height="9.6"
                      rx="1.0666"
                      opacity=".3"
                    />
                    <path
                      d="m11.967 17.73c-0.41656 0.41656-0.41656 1.092 0 1.5085 0.41656 0.41656 1.092 0.41656 1.5085 0l6.4-6.4c0.40382-0.40382 0.41795-1.0541 0.03206-1.475l-5.8667-6.4c-0.39808-0.43426-1.0729-0.4636-1.5071-0.065525-0.43426 0.39807-0.4636 1.0728-0.06552 1.5071l5.1766 5.6472z"
                    />
                  </g>
                </svg>
              </div>
            </template>
          </div>
        </div>
        <div class="css-work-quest-nac"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BestialEncoder } from "bestial-encoder";

export default {
  data() {
    return {
      newAudit: {
        an: "DyorUser",
        pn: "Name",
        pw: "Category",
        pc: "www.example.com",
        pl: "",
      },
      errReportGen: false,
      avatarSeed: "",
      numberQuestion: [0, 0],
      questionList: [
        {
          id: 1,
          tag: "DT1-1",
          category: "Development Team",
          name: "Read Whitepaper",
          question: "Did you read the whitepaper?",
          worksteps: ["A. Read the whitepaper (usually found on website)."],

          options: [
            { id: 1, name: "Yes", value: 0.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "There are not points awarded for this section that will affect the scoring. But we wanted to include this as your first point of research on your journey to properly evaluating a project because it is important and it will aide you in answering many of the subsequent questions. You have likely been told to read the whitepaper several times on social media or by friends and there is good reason. The whitepaper is meant to contain all the information you need to understand the project. It can give background, a breakdown how  it functions, information on the tokenomics, and anything else the writers decided to include in it. \n But as important and beneficial as this step can be, I have always gotten the impression that very few people actually do it. I have also gotten the impression that many people who tell you to read the whitepaper do not seem to have done it themselves. Now you might be thinking, a lot of this stuff is beyond my understanding so why even bother? Well first of all, you might be surprised. There are some extremely technical papers out there, but there are also a lot of easy to understand ones as well. Or it may be a situation where pieces of it are confusing but large chunks of it are within your wheelhouse. That's OK friend.\n Try and read it anyways. Google is your friend and if there is something you do not understand you can always read up on it our create a post on Reddit to learn more. And I promise you that while you may start out having difficulties, the more you do and the more you stick with it, the better you will become. This is how learning works and being lousy at something is usually the first step to being great at something. So bite the bullet, give it a shot, and I think you will be surprised at how much you are actually able to absorb. Good luck.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 2,
          tag: "DT2-2",
          category: "Development Team",
          name: "Anonymous Team",
          question: "Is the development team anonymous?",
          worksteps: [
            "A. Review project website to check if team is listed.",
            "B. List each member listed in box below.",
          ],

          options: [
            { id: 1, name: "Yes", value: 0.0 },
            { id: 2, name: "No", value: 4.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Practically all exit scams and rug pulls are performed by anonymous teams. Why do you suppose that is? I think that the simplest answer is that if you are going to commit a crime, it is infinitely easier to get away with it if nobody knows who you are. The exact same reason that bank robbers choose to wear a mask. If you commit fraud and steal millions from investors, the police will hunt you down and you will face consequences for your actions. At the very least, you will be labeled a charlatan and will not be able to easily do the same thing in the future. If you commit fraud and steal millions of investors while remaining completely anonymous, you will never really face any consequences for your actions and will be able to continue doing it again and again.\n Now, does this mean that any dev team that chooses to remain anonymous is 100% going to commit fraud and steal? Of course not. There are lots of brilliant, hard working, and trustworthy developers out there that might prefer to be anonymous, and that is their right. But the good teams who choose to remain anonymous are normalizing the practice which leaves the door wide open for the bad teams to steal over and over again. We as a community should not be willing to invest in or use any dApp where the dev team has chosen to be anonymous, as this potential for fraud will always be present. We have no way to sort the trustworthy teams from the untrustworthy and are left in a situation where we are essentially just hoping that people do the right thing.\n If a dev team wants us to trust them enough to use and invest in their products, they must give us a reason to trust them. Revealing themselves is a loud and clear message to the investing community that they will do right by us and if they do not, they will suffer the consequences. The good teams who choose to remain anonymous are normalizing the practice which leaves the door wide open for the bad teams to steal over and over again. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 3,
          tag: "DT3-3",
          category: "Development Team",
          name: "Identity Verification",
          question:
            "Can you verify that each member of the Development team is a real person?",
          worksteps: [
            "A. List each person obtained in project website in box below.",
            "B. If links to LinkedIn Github, or other websites are provided, click through each link and review the information to determine if it looks genuine. Genuine profiles would likely have a long history, several contacts, current information, recommended skills,  etc",
            "C. If no links are provided, you will need to manually search. Begin with Google for general information. Check Linkedin, Facebook, Instagram, Github, and twitter to see if you can locate a profile that matches each person.",
            "D. If you have reason to doubt the profiles you have found were authentic, use google image serch for each profile picture that was provided. Instructions for using Google search can be found here (https://support.google.com/websearch/answer/1325808?hl=en&co=GENIE.Platform%3DDesktop). Ensure image is not a stock photo and can be traced to a matching social media platform. ",
            "E. For any profiles found using workstep C, perform the review from Workstep B.",
            "F. If you discover the team info is fake, go back to TD1-1 and change the answer to Yes.",
            "G. Save links to supporting information in this workstep to support your review.",
          ],

          options: [
            { id: 1, name: "Yes", value: 2.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Simply verifying that there are people listed on the project website is insufficient. It is not unheard of for a team to list fake people on the website to give the appearance they have all revealed their identities when they have not. Because of this, you must do a little work verifying that each person listed is real. Ideally there will be links included with each name and photo in the teams section that direct you to each persons LinkedIn account, Github, Medium, or any other socials that are used to corroborate identity and professional credentials. Many teams will provide these freely because they want to make it easy for you to verify them. If links are not provided, that is frustrating but not necessarily a red flag. Go through the worksteps that are listed here to try to find various social media accounts to confirm their identity and credentials. \n Even if you do find a LinkedIn account or social media account, that doesn't guarantee that the information is legitimate. Any good scammer would have gone through the trouble of creating a fake identity for each person they listed in the website. You will need to use some of your past experience and common sense to review what is available and determine if it is legitimate. You have likely seems hundreds of LinkedIn profiles or Twitter/IG accounts and can spot things that look funny. Hardly any contacts. A ton of contacts but barely and activity. There are all kinds of things that can appear unusual and are too many to list here, but you will need to review the information and determine if you think it appears legitimate. And typically finding several sources online that can be compared and cross referenced to each other provides additional assurance that the person is real (e.g. has LinkedIn profile with several connections and people who have attested to a certain skill the person has, has a Facebook or IG account with similar pictures that appears legitimate, has a few articles written about them from various third party publications that you are familiar with). \n If you do determine that there are people listed in the website but they appear to be fake people, that is going to be a huge red flag. Honesty and reputation are extremely important and a team that is willing to mislead on this would likely be willing to mislead in other areas as well. It is possible that there are reasonable explanations or it is a rare instance where a person has no online presence, but anyone should proceed extremely cautiously if they are having trouble verifying the teams identities. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 4,
          tag: "DT4-4",
          category: "Development Team",
          name: "Prior Experience",
          question:
            "Does the Dev team have the proper experience to execute this project? ",
          worksteps: [
            "A. Review linkedIn profiles found in Question 2 for background and credentials of team",
            "B. For each position, check if education and work experience is relevant to role in project. If they have Education, work experience, or Code repositories to demonstrate their experience in their field, that is adequate for this question.",
            "C. List each team member in the box below along with a description of their experience and assessment if it is relevant.",
          ],

          options: [
            { id: 1, name: "Yes", value: 0.5 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Prior experience is extremely valuable in assessing if something is going to be successful going forward. As they say, the best way to predict the future is to study the past. So having a team that has a successful history with blockchain or previous start ups suggests that they will have success with the project you are currently researching. Blockchain is also a very new and fast paced industry, so having a team with experience navigating it makes it more likely that they will be successful. Now does this mean that just because someone was successful in the past it is a guarantee they will always be successful? Of course not. Each project needs to be assessed on its own mertis independent of the last, but having that prior experience to leverage will usually provide an edge and increase the chances of its success. \n It is also important to research prior experience becuase of anything negative that might turn up. Just like prior positive exerience being a good indicator that the current project will be successful, prior negative experience is just as good an indicator that you might want to avoid. Was someone on the team invovled in some type of fraud or illegal behavior in the past? Have they relseased a prdocut that is getting large amounts of complaints from thier users or investors? This is all information that you can use to assess if the current project they are working on will have a similar outcome. Just remember that the past helps us assess the future, but it doesnt gaurantee anything, positive or negative. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 5,
          tag: "DT5-5",
          category: "Development Team",
          name: "Audit",
          question:
            "Has the project successfully completed an audit by a reputable service provider?",
          worksteps: [
            "A. Scroll through the project website to see if they have a section on their audit status and if they have a link to the audit report.",
            "B. If it is not mentioned on the website, google the project name and the word audit. If it is popular, there are likely areticles written about it that will pop up.",
            "C. If nothing is found in the first two steps, try scrolling through their twitter feed, as it will usually be announced there.",
            "D. If nothing is found still, ask a direct question on their twitter, telegram, or discord and someone will be able to point you towards it.",
            "E. If the audit was found, list the name of the auditor and the date of completion in the box below. If the audit report is available include a link to it as well.",
            "F. If you are unfamilar with the auditor, Google them and see what results turn up to determine if they are reputable  (If there are complaints about them. If there are other projects you are familiar with audited by them. Etc.)",
          ],
          options: [
            { id: 1, name: "Yes", value: 1.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "A third party audit by a reputable independent service provider is a crucial step in establishing trust with potential investors and users. It is important to have people who are not affiliated with the project review the code who can attest that it is free from any bugs, exploits, or vulnerabilities. Just think about this rationally for a second, how much would you trust the dev team if they say they have looked everything over and it is safe to use? You can see how there is a conflict of interest here because the dev team could be the ones who have programmed the application to do something malicious, so taking their word for it is probably not a great idea.\n There are also instances where the dev team has not done anything wrong intentionally, but they still could have programmed in things that could harm investors accidently. By having a fresh set of eyes reviewing their work, you have a good chance at finding things that the original team may have overlooked.  It is also important that you assess the people who are performing the audits. Reputation is important and the firms that do a good job will have built a solid reputation for themselves. If it is one you have never heard of or cannot find any information about online, you would usually have less faith in that audit work. \n Now does this mean that if it has an audit it is 100% safe to use? Unfortunately no. Read any audit report and there will be plenty of disclaimers about how any audit only provides limited assurance and they themselves will not guarantee the safety of the application. So while not 100%, it is still a good sign that the dev team cares about their product and wants to make sure its safe to use, and professionals have reviewed it and hopefully caught anything major. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 6,
          tag: "DT6-6",
          category: "Development Team",
          name: "Plagarism",
          question: "Was there any plagiarism in the whitepaper?",
          worksteps: [
            "A. Upload a copy of the whitepaper to Grammerly using this link ( https://www.grammarly.com/plagiarism-checker ).",
            "B. Include a copy of the results into the box below.",
          ],

          options: [
            { id: 1, name: "Yes", value: 0.0 },
            { id: 2, name: "No", value: 1.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "As mentioned in #2, honesty and reputation are extremely important and a team that is willing to mislead or cheat in one area would likely be willing to mislead and cheat in other areas as well. Stealing someone's ideas and passing them off as your own is very similar to stealing money or assets. So people who have demonstrated they are willing to steal ideas are better off avoided as they might be willing to steal your money/crypto as well. \n Now does this mean that people should not be leveraging other ideas or knowledge? Of course not, that is one of the things that makes open source blockchain and tech in general so special. Everyone can learn from one another and build off each other which ultimately speeds. But blindly copying someone else's whitepaper does not really fall under this category. If a team ends up copying large sections of another teams whitepaper without citing their source or giving credit, it is usually a bad sign and something you would want to consider while evaluating the project. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 7,
          tag: "DT7-7",
          category: "Development Team",
          name: "Spelling Errors",
          question:
            "Are there grammer, spelling, and punctuation errors in the Whitepaper or webpage?",
          worksteps: [
            "A. Copy text from whitepaper and website and paste into Grammerly using this link (https://www.grammarly.com/plagiarism-checker).",
            "B. Grammarly is free, but if you do not wish to download it, perform manual review for grammar, spelling, and punctuation errors.",
            "C. Include a summary of the results into the box below.",
            "D. In general a few small errors are OK. If there are large numbers of grammer spelling and punctuation errors, then answer this question No.",
          ],

          options: [
            { id: 1, name: "Yes", value: 0.0 },
            { id: 2, name: "No", value: 1.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Most serious teams that are truly building something significant take a lot of pride in what they do. They like to make sure that everything is presented as the best version of itself and take the time and effort to review things multiple times with multiple people. As a result of this effort, there usually arent too many errors to be found. This is contrasted against teams that have hastilly put something together as fast as possible to exit scam or rug pull before quickly moving on to the next one. \n If a team has no real intention of brining this product to market or sticking around long enough to see it through, they usually arent spending all the time and energy to ensure everything is perfect. So if you are seeing a whitepaper that is full of spelling, grammar, and punctuation errors, that can be an indication that this team has not taken anything very seriously and may have bad intentions. Of course this is not a guarantee and its possible for an amazing project to have plenty of flaws in the whitepaper or a malicious project to have a flawless whitepaper. It is just one of the many things we look at when assessing a project on the whole. ",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 8,
          tag: "DT8-8",
          category: "Development Team",
          name: "Whitepaper Length",
          question: "What is the length of the Whitepaper?",
          worksteps: [
            "A. Open Whitepaper. Count number of pages.",
            "B. Note number of pages in box below and any thoughts or observations you may have.",
          ],
          options: [
            { id: 1, name: "1 to 5 pages", value: 0.0 },
            { id: 2, name: "6 to 15 pages", value: 0.2 },
            { id: 3, name: ">15 Pages", value: 0.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This point should be taken with a large grain of salt and will also be subjective to the type of project. A next generation lending application with lots of features and specs should obviously be a longer whitepaper than whatever your favorite new dog coin is (if it even has a whitepaper). At the end of the day, quality over quantity is what is important and simply printing out a hundred pages of garbage is not very impressive or useful. But this is one of many data points that you can use to assess how serious or legitimate the project appears. Having a few pages of fluff is a warning sign that this might not be a very serious project, which increases the chances of an exit scam or rug pull. Having many pages that comprehensively explains all aspects of the project is a good sign that it is a serious project and the team is actually busy at work building something useful.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 9,
          tag: "TK1-9",
          category: "Tokenomics",
          name: "Insider Allocation",
          question:
            "What portion of the tokens are held by the Development team or early investors?",
          worksteps: [
            "A. Review whitepaper and website for token allocation information",
            "B. Provide a breakdown of what percent belongs to each major group in the box below as follows:",
            "C. In the first box on the left type the category name (e.g. Development Team, Advisors, Treasury, etc).",
            "D. In the next box type in the percentage as an integer without a percentage sign (e.g. 10, 15, 80).",
            "E. Click the plus sign on the right to add as many rows as you need until all the data is captured.",
          ],

          options: [
            { id: 1, name: "0% to 15%", value: 3.0 },
            { id: 2, name: "16% to 25%", value: 2.0 },
            { id: 3, name: ">25%", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          input: [
            {
              id: 0,
              name: "",
              per: "",
            },
          ],
          purpose:
            "Having huge portions of the token supply held by a small number of insiders is usually undesirable due to the selling pressure it can put on the token which can harm you as an investor. Team members or venture capitalists who got in extremely early and were able to acquire tokens for 1/1000 of the price you are able to acquire them for are going to want to sell at some point and lock in their gains. In order to sell these tokens, they will need sufficient liquidity from other people who are buying the token. Many projects can have large market caps, but if there is not a large amount of liquidity, any purchase or sale of the token can cause large fluctuations in price. In instances where teams and insiders want to exit their positions and cash out, this can cause the price to crash on the smaller investors who purchased the tokens at higher prices. \n Having large portions of tokens held by the team and insiders is also undesirable due to the centralized control that it means for the project. Decentralization is an important concept in blockchain and there are many different layers and aspects of decentralization to consider. One of those aspects is having this control over a large amount of supply held by a small number of people. Many project have governance features where 1 token = 1 vote and holders can propose changes, vote on those changes, and essentially control the project going forward. If you have large numbers of tokens concentrated in a few hands, they will essentially be able to control the project going forward, which is the antithesis of what most crypto projects are hoping to achieve.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 10,
          tag: "TK2-10",
          category: "Tokenomics",
          name: "Community Allocation",
          question:
            "What portion of tokens will be available to the general public either through sale or rewards ?",
          worksteps: [
            "A. With the tokenomics information collected in the previous question (TK1), indicate what percentage is allocated to the general public through sale or rewards.",
            "B. Provide the information in the box below",
          ],
          options: [
            { id: 1, name: "0% to 49%", value: 0.0 },
            { id: 2, name: "50% to 75%", value: 0.5 },
            { id: 3, name: ">75%", value: 1.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Go back and re-read step #8, as it's essentially the same explanation, or I guess the mirror image of it. Just like having large numbers of tokens held by a few insiders can be bad, having a large number of tokens spread out across a large number of people is good. Explanations of sell pressure and decentralization both apply.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 11,
          tag: "TK3-11",
          category: "Tokenomics",
          name: "Vesting",
          question:
            "For tokens reserved for development team and early investors, is there a vesting schedule?",
          worksteps: [
            "A. Vesting means that all tokens are not immediately available. Instead they are held for a predetermined period of time.",
            "B. Review white paper, most likely in the tokenomics section, to see if development team or early investor tokens are immediately available to them or are held for a specified time.",
            "C. If there is a vesting schedule, outline it in the box below.",
          ],
          options: [
            { id: 1, name: "Yes", value: 1.5 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Lets start by describing what vesting is. According to Investopedia 'Being fully vested means a person has rights to the full amount of some benefit, most commonly employee benefits such as stock options, profit sharing, or retirement benefits. Benefits that must be fully vested benefits often accrue to employees each year, but they only become the employee's property according to a vesting schedule.Vesting may occur on a gradual schedule, such as 25 percent per year, or on a 'cliff' schedule where 100 percent of benefits vest at a set time, such as four years after the award date. Fully vested may be compared with partially vested. \n To give an example in the crpyrto world, the dev team might have 20% of all tokens reserved for themselves. As already discussed in #8, this can create a large amount of selling pressure if all the tokens were unlocked at once. It also can create concerns that there might be more work that needs to be done but now that the teams tokens are all unlocked, they could just take the money and run. To alleviate these concerns, a team can implement a vesting schedule so that not all of these tokens are available immediately. It can be vested over 4 years and 1/4 of the tokens are unlocked each year. It can be vested over 2 years where all the tokens are available at once at the end of the two years. Or anything that the team decides they want to do. By having a vesting schedule in place that makes sense, it is a clear signal to investors that tokens will not be massively dumped on them and that the team is in it for the long haul.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 12,
          tag: "TK4-12",
          category: "Tokenomics",
          name: "Locked Policy",
          question:
            "Is the token minting policy locked so that no changes can be made?",
          worksteps: [
            "A. Obtain the policy ID from project website. You may have to look around, but most minted tokens will list the policy on the website so you know you are getting the right token.",
            "B. Copy policy into pool.pm",
            "C. Under policy, ensure there is a lock symbol which signifies that policy is locked and cannot be changed (closed lock icon signifies locked policy).",
            "D. Copy in policy ID and note if policy is locked in box below.",
          ],
          options: [
            { id: 1, name: "Yes", value: 1.5 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Ask an Bitcoin Maxi why they love Bitcoin so much and there is a good chance one of their respnoses will be 'fixed and unchanging monetary policy'. They are not wrong about this being a good feature, as it ensures that everyone know the rules and can plan accordingly. You know how many tokens exist and know if more can be created. Most people wouldn't be too thrilled if the makers of the token they just purchased decided to mint trillions more which dilute the value of the ones they currently hold. You can make sure this is not possible if the policy is locked and can no longer be changed. If that is the case, then whatever the rules are when the tokens were minted will always apply and you do not run the risk of this being altered later down the line. \n It is also worth noting that each policy ID is unique to that token. It is possible to have 100 different tokens all with the same name, ticket symbol, and icon image. Some scammers might try to trick you by listing a copied token for sale on a DEX which appears to be the same (same name and ticket). But no matter what, the policy ID cannot be copied. It is a good practice to check the policy ID which is usually listed on the website and ensure you are purchasing the correct tokens.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 13,
          tag: "TK5-13",
          category: "Tokenomics",
          name: "Use Case",
          question:
            "Do you clearly understand the use case after reading the whitepaper and reviewing website info?",
          worksteps: [
            "A. Read the whitepaper and review website info. There is usually a section in both that discusses token use case/utility.",
            "B. After reviewing, do you uderstand the purpose of this project and its token? Is it a governance token that is used to make chages to the protocol. Is it a utility token that pays for transaction fees? Does it have some sort of functionality?",
            "C. Summarize the use case in the box below.",
          ],
          options: [
            { id: 1, name: "Yes", value: 2.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "In the end, the projects that will truly last and thrive are the ones with real utility (usefulness). Something that fills a real world need, solves a problem, does something better than anyone else, etc. Projects that do not can definetly go up a lot in value as we have seen time and time again, but most of the time thier shot term success is driven by hype which can be fleeting and can go as quickly as it comes. So for many, identifying a project with a solid use case is a good step in the research proccess in determining if it is something you should risk your hard earned money on. Even the most technical projects should be able to explain what they are doing in a way that the average person can understand, so if you read the whitepaper and you still have no idea what the use case of the token or project is, chances are it doesnt really have one.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 14,
          tag: "TK6-14",
          category: "Tokenomics",
          name: "ISO Fee",
          question:
            "If the project utilizes an Initial Stake Offering, what is the percentage they charge?",
          worksteps: [
            "A. Review the project website, twitter page, discord, or twitter. ISO information and ticker should be listed somewhere.",
            "B. Look up ticker and check the costs listed for the stake pool.",
            "C. Some projects allow several SPOs to assist with this and they all may charge different fees. In that case try and determine what the majority of pools are using.",
            "D. Summarize results in box below.",
          ],

          options: [
            { id: 1, name: "0% to 3%", value: 0.5 },
            { id: 2, name: ">3%", value: 0.0 },
            { id: 3, name: "N/A", value: 0.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is another one of the more subjective points and shoud be taken with a grain of salt. Overall, if a pool is transparent about the fee structure they are charging and not misleading anybody, that is not a problem and each investor can decide for themselves if they want to proceed. So this is not really to punish the projects that decide to keep a larger percentage of the staking rewards for themselves, but more to reward the projects that try to make it as fair as possible. Many peopole in the crypto community care about fairness, and projects that conduct an ISO in a manner that helps smaller pools and doesnt gouge supporters are generally looked upon favorable and generate some positive attitudes towards it. \n So for that reason, we give a small number of bonus points to the projects which are extremely fair during thier ISO.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 15,
          tag: "TK7-15",
          category: "Tokenomics",
          name: "Originality",
          question:
            "Is the project an already existing business model or the first of its kind?",
          worksteps: [
            "A. Read the whitepaper.",
            "B. Identify the type primary function of the project. This would be things such as a DEX, lending dApp. NFT minter, etc.",
            "C. If you are unfamilar with the function of the project, review BuiltonCardano.com and check if there is already a category created.",
            "D. If it is an existing model,  please describe what the competition is like for this business model and list a few of the major competitors with market cap below.",
          ],
          options: [
            { id: 1, name: "Existing", value: 0.0 },
            { id: 2, name: "New", value: 0.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This point has a few things to be considered. On the one hand, if a project is the first of its kind, it has a first mover advantage and has a better shot at cornering its market due to the fact that it’s the only game in town. As we have seen with Uniswap, Aave, Chainlink, and all the other projects that were the first of its kind, they usually have pretty good staying power and are typically one of if not the most popular project in its niche. \n On the other hand, being completely new can have negatives as its not really an established market, people might not fully understand what they are trying to do, the market might just not be ready for it yet, etc. Those are a lot of uncertainties that can make investing in a totally brand new product a bit risky. But in general, if you have read the whiteppaer and understand its use case, and beieve that it is fulfulling a reall need, there is a good chance that the positives outweigh the negatives when it comes to investing in something brand new.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 16,
          tag: "CT1-16",
          category: "Community",
          name: "Twitter",
          question: "How many followers does the project have on Twitter?",
          worksteps: [
            "A. Check the project website to see if it includes a link to its twitter profile.",
            "B. If it does not, open twitter and type the project name.",
            "C. Review results to ensure you are looking at the correct account.",
            "D. Note the number of followers in the box below.",
          ],

          options: [
            { id: 1, name: "<1000", value: 0.0 },
            { id: 2, name: "1000 to 5000", value: 0.5 },
            { id: 3, name: "5001 to 10,000", value: 1.0 },
            { id: 4, name: ">10K", value: 1.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesn't just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoption than ones with a couple hundred. Not to mention the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invaluable information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 17,
          tag: "CT2-17",
          category: "Community",
          name: "Real Followers",
          question:
            "For the twitter account, does it appear to have actual followers or bots/paid followers?",
          worksteps: [
            "A. Review 10 or more tweets from the project and note the number of likes, comments, and retweets it has.",
            "B. Compare the total number of followers to the average number of likes or comments they receive on posts.",
            "C. If on average the nuber of likes is less than .5% of the followers, this suggests that the followers are not real. This is not a hard rule so will need to exercise judgement.",
            "D. Write a summary of your findings in the box below.",
          ],

          options: [
            { id: 1, name: "Bots", value: 0.0 },
            { id: 2, name: "Real", value: 2.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "As discussed in the last point, community is important to a projects success. But simply looking at the number of followers is insufficient. This is because there are a LOT of projects out there that have recognized how important a community is to a project, and simply buy thousands of followers to give the appearance that they have a large organic community behind them. Now can a project buy followers and still end up being a good investment? Of course they can. But we have already covered honesty and integrity in the other points, and that still applies here. Most legitamite projets will gain a following organically because they are high quality and people can recognize that. Low quality projects that dont have much to offer will usually be the culprits in purchasing followers, which are typically the types of investments you would want to avoid. \n So doing a little extra leg work in reviewing the posts to see how much actual engagement they get will be a good indicator if the followers are real or not. Someone with 50K followers who gets 5 to 10 likes is probably purchainsg them. Someone who has no other people commenting or posting to thier page probably doenst have many real followers. And unfortunately, the really crafty projects who are on top of everything will also buy likes for thier posts to avoid being discovered. But those will typically be soething you can spot by looking through the people who engaged and seeing how many connections or followers they have. If they are all super low, its a good chance they are paid bots.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 18,
          tag: "CT3-18",
          category: "Community",
          name: "Reddit",
          question: "How many subscribers does the project have on Reddit?",
          worksteps: [
            "A. Check the project website to see if it includes a link to its Subreddit.",
            "B. If it does not, open Reddit and type the project name.",
            "C. Review results to determine if it is associated with the project or not.",
            "D. Note the number of followers in the box below.",
          ],

          options: [
            { id: 1, name: "<1000", value: 0.0 },
            { id: 2, name: "1000 to 10000", value: 0.5 },
            { id: 3, name: ">10K", value: 1.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesn't just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoption than ones with a couple hundred. Not to mention the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invaluable information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 19,
          tag: "CT4-19",
          category: "Community",
          name: "Subreddit Activity",
          question:
            "For the subreddit, does it appear to have an active environment?",
          worksteps: [
            "A. Review the subreddit several times over several days at different times. Note the nuber of people online vs the number of members. .1%  or more of members online at any given time is sufficient activity.",
            "B. Review the last 10 posts. If they are all recent (within the last 2 days) and by different accounts, this also suggests sufficient activity.",
            "C. Note the number of members below",
          ],

          options: [
            { id: 1, name: "Yes", value: 1.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is a very similar concept to the one on Twitter I am copying it here again for your convenience.  As discussed in the last point, community is important to the success of a project. But simply looking at the number of subscribers is insufficient. This is because there are a LOT of projects out there that have recognized how important a community is to a project, and simply buy thousands of subscribers to give the appearance that they have a large organic community behind them. \n Now can a project buy subscribers and still end up being a good investment? Of course they can. But we have already covered honesty and integrity in the other points, and that still applies here. Most legitimate projects will gain a following organically because they are high quality and people can recognize that. Low-quality projects that don't have much to offer will usually be the culprits in purchasing subscribers, which are typically the types of investments you would want to avoid. So doing a little extra leg work in reviewing the posts to see how much actual engagement they get will be a good indicator if the subscribers are real or not. Someone with 50K subscribers who gets 5 to 10 upvotes is probably purchasing them. Someone who has no other people commenting or posting to their page probably doesn't have many real subscribers. And if you only see the same person making posts, that is usually not a good sign. Ideally, you want to look for a wide range of people posting and engaging on posts.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 20,
          tag: "CT5-20",
          category: "Community",
          name: "Telegram",
          question: "How many subscribers does the project have on Telegram?",
          worksteps: [
            "A. Check the project website to see if it includes a link to its Telegram",
            "B. If it does not, open Telegram and type the project name.",
            "C. Review results to determine if it is associated with the project or not.",
            "D. Note the number of members in the box below.",
          ],

          options: [
            { id: 1, name: "<1000", value: 0.0 },
            { id: 2, name: "1000 to 10000", value: 0.5 },
            { id: 3, name: ">10K", value: 1.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesnt just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoptoin than ones with a couple hundred. Not to mantion the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invalubale information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 21,
          tag: "CT6-21",
          category: "Community",
          name: "Telegram Activity",
          question: "Does their Telegram appear to have an active environment?",
          worksteps: [
            "A. Scan the recent activity. If there are several comments  by different accounts each day, this also suggests sufficient activity.",
            "B. If it is a Telegram that only allows for messages from the Dev team, answer this question with Yes.",
            "C. Comment on activity in box below.",
          ],

          options: [
            { id: 1, name: "Yes", value: 1.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is the exact same concept we have been discussing in this section, so I'm not going to go into too much detail. But essentially, if there are a lot of people subscribed to a Telegram channel but there is nobody talking in it, that is not a good sign. It means either they have purchased those subscribers, or they are real but do not care about the project at all to engage on it. Either way, it is a bad sign and something that you should consider.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 22,
          tag: "CT7-22",
          category: "Community",
          name: "Discord",
          question: "How many members does the project have on discord?",
          worksteps: [
            "A. Check the project website to see if it includes an invite link to its Discord.",
            "B. If it does not, you will need to find an invite link to access the discord server. Check the projects twitter page for this.",
            "C. Note the number of members in the box below.",
          ],

          options: [
            { id: 1, name: "<1000", value: 0.0 },
            { id: 2, name: "1000 to 10K", value: 0.5 },
            { id: 3, name: "10K+", value: 1.5 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesnt just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoptoin than ones with a couple hundred. Not to mantion the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invalubale information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 23,
          tag: "CT8-23",
          category: "Community",
          name: "Discord Activity",
          question: "Does their Discord appear to have an active environment?",
          worksteps: [
            "A. Note the number of members compared to the number of people online. A large percentage of members online suggests an active environment.",
            "B. Scan the recent activity. If there are several comments  by different accounts each day, this also suggests an active environment.",
            "C. Comment on activity in box below.",
          ],

          options: [
            { id: 1, name: "Yes", value: 1.0 },
            { id: 2, name: "No", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesn't just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoption than ones with a couple hundred. Not to mention the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invaluable information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 24,
          tag: "MT1-24",
          category: "Metrics",
          name: "Fair Launch",
          question:
            "If project has the token had its initial offering yet (ISO, IDO, ICO, etc.), was it a fair token launch?",
          worksteps: [
            "NOTE. This section only applies for projects which have had their initial offering and are actively traded. If it has not, skip this section by clicking next until it reaches the end.",
            "A. Fair launch would describe everyone having equal access to the token and no premine for specific individuals. Instances where certain countries are excluded for legal reasons would not apply.",
            "B. Google the project initial offering and read news articles and comments regarding how the launch was conducted and perceived.",
            "C. Summarize results in box below.",
          ],
          options: [
            { id: 1, name: "Yes", value: 2.0 },
            { id: 2, name: "No", value: 0.0 },
            { id: 404, name: "Doesn't apply", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "We already touched on this a bit in the ISO percentage section when discussing projects that attempt to be as fair as possible in different aspects, and the launch is no different. So just like the ISO percentage, this is not really to punish the projects that do not have a fair launch, but more to reward the projects that try to make it as fair as possible. Many people in the crypto community care about fairness, and projects that conduct a fair launch  are generally looked upon favorable and generate some positive attitudes towards it. \n We also talked about tokens being concentrated in early investors/backers can create massive sell pressure at some point when they finally decide to sell. Well projects that had a fair launch have minimized the possibility of these VC/early investors and instead have tokens in the hands of the general community. So for those reasons, we give bonus points to the projects which are extremely fair during their launch.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 25,
          tag: "MT2-25",
          category: "Metrics",
          name: "Market cap",
          question: "What is the current market cap of the project?",
          worksteps: [
            "A. Utilize CoinGecko.com to obtain market cap. Cross reference against CoinMarketcap.com to nensure they match.",
            "B. If they do not match, review several sources as use what the majority of sources are reporting.",
            "C. Smaller market cap projects are typically riskier than larger market cap projects. However, smaller market cap projects also have the potential for greater returns, especially if its an established business model where competitors have significantly larger market caps. Both factors should be considered by potential investors to meet their specific goals.",
            "D. Note the market cap in the box below.",
          ],

          options: [
            { id: 1, name: "<50 Million", value: 0.0 },
            { id: 2, name: "50 to 100 Million", value: 0.5 },
            { id: 3, name: "100 Million +", value: 1.0 },
            { id: 404, name: "Doesn't apply", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "This is another one of those double edged swords that can go in either direction. The smaller a projects market cap, the more room it has to grow. Getting in early on a project when the market cap is at 1 Million means you have the potential for those massive 1000X gains simply due to the fact that the project starts off so small. Similarly, it would be a bit silly to be getting into Bitcoin at a 1 Trillion dollar market cap and be expecting it to 1000X into a quadrillion dollar market cap and be worth more than there are dollars in existence. So when you are researching new projects, paying attention to the market cap can give you an idea of how much room it has to grow. \n Now the other side of the coin is that extremely small market caps are going to be much riskier investments than the larger and more established ones. Going back to our example, the 1 million market cap project has a lot of room to grow, but there is a good chance that your investment can fall to zero and be worth nothing. While Bitcoin isn't going to have its massive gains anymore, the chances of it dropping to zero are much lower (although it is still possible). Different investors will have different goals, but that is the general thought process when looking at a projects market cap. For the purposes of this assessment, we gave more points to the higher market cap because we are more focused on not losing money than we are in gaining money. But when doing your own personal assessments, it would be ok if you care more about the larger gain potential and lean towards a smaller market cap preference.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 26,
          tag: "MT3-26",
          category: "Metrics",
          name: "Volume",
          question: "What is the daily trading volume of the Token ?",
          worksteps: [
            "A. Utilize CoinGecko.com to obtain daily trading volume. Check 3 different days and use the average volume from those 3 days.",
            "B. Note the market cap in the box below.",
          ],
          options: [
            { id: 1, name: "<1 Million", value: 0.0 },
            { id: 2, name: "1 to 5 Million", value: 0.5 },
            { id: 3, name: "5 Million +", value: 1.0 },
            { id: 4, name: "N/A", value: 1.0 },
            { id: 404, name: "Doesn't apply", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "Instead of writing my own take, I have copied this information from learncrypto.com as I think it explains it pretty well (https://learncrypto.com/knowledge-base/how-to-trade-crypto/understanding-crypto-trading-volume) Volume is important because it has such a significant impact on price from both an absolute and relative perspective. The total volume traded for a given cryptocurrency has a direct relationship with how volatile it is. Remember, price represents the balance of opinions between buyers and sellers. \n If an equal amount (in terms of volume) is being bought and sold then price will be stable, but stability suggests that people opinion about the price are well informed; this is known as market efficiency. \n Mature markets with significant volume and good price discovery have less volatility. Cryptocurrency is inherently volatile because it is immature and its adoption path is uncertain. Market participants are an unusual mix of recreational investors (holders), miners, speculators and institutional investors each with varying opinions and motivations, with those opinions subject to significant outside influences. \n So when looking at trading a given cryptocurrency, the total volume traded will immediately tell you how volatile it is likely to be. The change in volume over time will also give you a sense of interest in the project. \n  It may seem a bit obvious but in order to trade a particular cryptocurrency it has to be listed on an exchange. Exchanges choose which coins to trade, and being listed on the bigger exchanges can make a huge difference to volume. \n If, for example, you have an opinion about an obscure cryptocurrency and want to buy it at a specific price. The absence of volume is going to make that really hard - there won’t  be enough buyers and sellers, so the difference between the available Offers (buyers) and Bids (sellers) - known as the Spread - will be wide. \n The wider the spread, the less efficient a market and therefore the more volatile. Websites like Coinmarketcap provide historical volume data.",
          files: [],
          images: [],
          video: [],
        },
        {
          id: 27,
          tag: "MT4-27",
          category: "Metrics",
          name: "CEX",
          question: "Is the token listed on large  centralized exchanges?",
          worksteps: [
            "A. Utilize CoinGecko.com and type in the token ticker symbol.",
            "B. Scroll to the bottom of the page where it lists the top exchanges by volume.",
            "C. Review the exchanges listed. Large centralized exchanges would be Coinbase, KuCoin, Kraken, Binance, FTX, Huobi, Gate.io.",
            "D. Note the exchanges in the box.",
          ],
          options: [
            { id: 1, name: "Yes", value: 1.0 },
            { id: 2, name: "No", value: 0.0 },
            { id: 404, name: "Doesn't apply", value: 0.0 },
          ],
          answer: null,
          textarea: "",
          purpose:
            "We talked about volume in the last point. Well, where do you think most of the volume is coming from in crypto markets? I'd like to tell you it is from decentralized exchanges, but that is just not the case. Perhaps someday it will be, but for now, the tokens and coins listed on centralized exchanges have access to the most liquidity and volume of all the tokens. For this reason, checking if a token is listed on centralized exchanges or not is always worth the effort. If you have found one that is only listed on a decentralized exchange this can be a good thing as the price might get some upward movement if and when it ever gets listed on one. But this is also something that you should take caution of.  \n The shadiest projects out there that are trying to scam you will usually be found exclusively on decentralized exchanges, as they will not meet the more strict criteria to get listed on the centralized ones. Please note that this does not mean listed only on a DEX = shady, that is NOT what we are saying. Many great projects are only found on DEXs/ We are saying that Grimace cion or ElonDogeInuRocket with zero utility meant for quick pump and dumps will likely never make it on a centralized exchange. So to summarize, being only on a DEX can have some upside if it is a solid project, but you should definitely exercise caution as it can be riskier as well. Tokens that have been listed on the big centralized exchanges such as Coinbase, Kraken, Binance, etc. will have access to more liquidity, be more well-vetted, and oftentimes have less risk than a project that only lives on a DEX.",
          files: [],
          images: [],
          video: [],
        },
      ],
      tokenPhases: [0],
      inputDelete: [],
      workspace: false,
      workProgramCategory: {
        developmentTeam: [],
        tokenomics: [],
        community: [],
        metrics: [],
      },
      progressWorkData: [],
      isRetrayed: [0, 1, 1, 1],
      currentQuestion: [],
      answeredQuestion: [],
      checkedOption: "",
      visualHelper: {
        purpose: false,
        evaluate: false,
        example: false,
      },
      isReportCreated: false,
      reportLink: "",
      beforeEncodeProcess: [],
      queryInput: [],
      isFinished: true,
      showSummary: false,
      result: "",
      error: "",
    };
  },
  created() {
    this.numberQuestion[1] = this.questionList.length;
    this.answeredQuestion = this.questionList;
    this.changeCurrentQuestion();
    this.chargeListQuestion();
    this.sendMeAtribute();
    this.createNewIdenticon();
  },
  watch: {
    showSummary() {
      this.isReportCreated = false;
    },
  },
  methods: {
    summaryLayout() {
      this.showSummary = !this.showSummary;
    },
    remainingQuestion() {
      let remaining = [];
      for (const element of this.answeredQuestion) {
        if (element.answer === null) {
          remaining.push({
            id: element.id,
            a: element.tag,
            b: element.name,
            c: element.category,
          });
        }
      }
      if (remaining.length === 0) {
        return [];
      } else {
        return remaining;
      }
    },
    splitPurpose() {
      return this.currentQuestion[0].purpose.split(/\r?\n/);
    },
    async nextGlassButton() {
      this.currentQuestion[0].answer = 0;
    },
    createNewIdenticon() {
      const hashCode = function (s) {
        return s.split("").reduce(function (a, b) {
          a = (a << 5) - a + b.charCodeAt(0);
          return a & a;
        }, 0);
      };
      const base = this.newAudit.an + this.newAudit.an.length;

      this.avatarSeed = `https://avatars.dicebear.com/api/identicon/${hashCode(
        base
      )}.svg`;
    },
    sendMeAtribute() {
      this.newAudit = this.$store.getters.sendMeAtribute;
    },
    changeCurrentQuestion() {
      this.currentQuestion.push(this.questionList[this.numberQuestion[0]]);
    },
    changeAnswerQuestion(answer) {
      this.currentQuestion[0].answer = answer;
    },
    cleanCurrentQuestion() {
      this.currentQuestion = [];
    },
    async nextAnswerQuestion() {
      if (this.currentQuestion[0].answer === 404) {
        this.answeredQuestion[24].answer = 404;
        this.answeredQuestion[25].answer = 404;
        this.answeredQuestion[26].answer = 404;
      }
      this.checkCorrectQuestion();
      this.answeredQuestion[this.numberQuestion[0]] =
        this.currentQuestion.pop();
      this.numberQuestion[0] += 1;
      this.changeCurrentQuestion();
    },
    backAnswerQuestion() {
      this.cleanCurrentQuestion();
      this.numberQuestion[0] -= 1;
      this.currentQuestion.push(this.answeredQuestion[this.numberQuestion[0]]);
    },
    clickCurrentQuestion(num) {
      let number = num - 1;
      for (const n in this.answeredQuestion) {
        if (n.id === number) {
          this.cleanCurrentQuestion();
          this.currentQuestion.push(this.answeredQuestion[number]);
          this.numberQuestion[0] = this.currentQuestion[0].id - 1;
        }
        if (n.id != number) {
          this.cleanCurrentQuestion();
          this.currentQuestion.push(this.questionList[number]);
          this.numberQuestion[0] = this.currentQuestion[0].id - 1;
        }
      }
    },
    createNewReport() {
      if (this.answeredQuestion[23].answer === 404) {
        this.answeredQuestion[24].answer = 404;
        this.answeredQuestion[25].answer = 404;
        this.answeredQuestion[26].answer = 404;
      }
      if (this.answeredQuestion[24].answer === 404) {
        this.answeredQuestion[23].answer = 404;
        this.answeredQuestion[25].answer = 404;
        this.answeredQuestion[26].answer = 404;
      }
      if (this.answeredQuestion[25].answer === 404) {
        this.answeredQuestion[23].answer = 404;
        this.answeredQuestion[24].answer = 404;
        this.answeredQuestion[26].answer = 404;
      }
      if (this.answeredQuestion[26].answer === 404) {
        this.answeredQuestion[23].answer = 404;
        this.answeredQuestion[24].answer = 404;
        this.answeredQuestion[25].answer = 404;
      }
      this.checkCorrectQuestion();
      this.progressWorkData.push(this.currentQuestion[0].id);
      this.answeredQuestion[this.numberQuestion[0]] = this.currentQuestion[0];
      this.updateDataState();
    },
    createNewInput(element) {
      this.tokenPhases[element] = !this.tokenPhases[element];
      this.tokenPhases.push(0);
      this.currentQuestion[0].input.push({
        id: element + 1,
        name: "",
        per: "",
      });
    },
    knowInputDelete(element) {
      return this.inputDelete.includes(element);
    },
    removeAddedInput(element) {
      this.inputDelete.push(element);
      this.currentQuestion[0].input[element] = {
        id: element,
        name: "",
        per: "",
      };
    },
    async updateDataState() {
      this.$store.commit("newQuestData", this.answeredQuestion);
      await this.pushNewReport();
    },
    async pushNewReport() {
      this.beforeEncodeProcess = [];
      this.errReportGen = false;
      this.reportLink = "";

      this.beforeEncodeProcess.push(this.$store.getters.sendMeAtribute);
      this.answeredQuestion.forEach((e) =>
        this.beforeEncodeProcess.push({
          id: e.id,
          an: e.answer,
          ta: e.textarea,
          ed: e.input,
        })
      );

      const bestialEncoder = new BestialEncoder();
      const resultEncoder = bestialEncoder.encodeByValue(
        JSON.stringify(this.beforeEncodeProcess)
      );
      try {
        const params = {
          hex: `${resultEncoder}`,
        };
        await axios({
          method: "post",
          url: "http://104.248.123.67:8083/v1/sendReport",
          data: params,
          headers: { "content-type": "application/json" },
        })
          .then((response) => {
            this.isReportCreated = !this.isReportCreated;
            this.reportLink = `http://104.248.123.67:8081/report/${response.data.report_id}`;
          })
          .catch((error) => {
            this.errReportGen = !this.errReportGen;
            console.log("404", error);
          });
      } catch (error) {
        console.log(error);
      }
    },
    checkCorrectQuestion() {
      return this.currentQuestion[0].answer
        ? this.progressWorkData.push(this.currentQuestion[0].id)
        : false;
    },
    knowCompleteness() {
      let isComplete = false;
      let checkAnswers = [];
      this.answeredQuestion.forEach((e) => checkAnswers.push(e.answer));
      if (checkAnswers.includes(null)) {
        isComplete = false;
      }
      if (!checkAnswers.includes(null)) {
        isComplete = true;
      }
      return isComplete;
    },

    removeItemFromArr(array, item) {
      let e = array.indexOf(item);

      if (e !== -1) {
        array.splice(e, 1);
      }
    },
    backToWorksteps() {
      this.currentQuestion[0].answer = null;
      this.removeItemFromArr(this.progressWorkData, this.currentQuestion[0].id);
    },
    knowWorkProgress(step) {
      let acc = 0;
      this.workProgramCategory[step].forEach((s) => {
        this.progressWorkData.includes(s.id) ? (acc += 1) : false;
      });
      return acc;
    },
    chargeListQuestion() {
      for (const element of this.questionList) {
        switch (element.category) {
          case "Development Team":
            this.workProgramCategory["developmentTeam"].push({
              id: element.id,
              name: element.name,
            });
            break;
          case "Tokenomics":
            this.workProgramCategory["tokenomics"].push({
              id: element.id,
              name: element.name,
            });
            break;
          case "Community":
            this.workProgramCategory["community"].push({
              id: element.id,
              name: element.name,
            });
            break;
          case "Metrics":
            this.workProgramCategory["metrics"].push({
              id: element.id,
              name: element.name,
            });
            break;

          default:
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
#css-work-quest-panel-bl {
  display: flex;
  align-items: flex-start;
  background: initial;
}

#css-work-quest-panel-bl:hover {
  background: initial;
}

#right-arrow {
  background: linear-gradient(
    22.58deg,
    rgba(0, 80, 220, 1) 0%,
    rgba(0, 105, 245, 1) 100%
  );
}

#right-arrow span {
  color: #ffffff;
  font-weight: bold;
  margin-right: 50px;
}

#left-arrow span {
  color: var(--text-color-primary);
  font-weight: bold;
  margin-left: 50px;
}

.dot {
  background: var(--complementary-color-blue);
  height: 6px;
  width: 6px;
  margin-left: 5px;
  border-radius: 50%;
  display: inline-block;
  animation-name: pulse;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  transition: ease 0.3s;
}

#logo-blue {
  fill: var(--complementary-color-blue);
  margin-bottom: 5px;
}

@keyframes pulse {
  0% {
    box-shadow: 0px 0px 1px 0px var(--color-soft-blue);
  }
  100% {
    box-shadow: 0px 0px 1px 5px var(--color-soft-blue);
  }
}

.css-identicon-wrp {
  border: 1px solid var(--border-primary);
  padding: 10px;
  border-radius: 50%;
  background: var(--base-color-white-primary);
}

.css-identicon {
  width: 20px;
  height: 20px;
}

.css-work-quest-tex {
  width: 100%;
  border: none;
  height: 300px;
  font-size: var(--text-size-primary);
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  caret-color: var(--text-color-primary);
  color: var(--text-color-secondary);
  resize: none;
  font-family: "Nunito", sans-serif;
  font-weight: lighter;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid transparent;
}

.css-work-quest-xcq {
  border: 1px dashed var(--complementary-color-blue);
  border-radius: 8px;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--complementary-color-blue);
}
.css-work-project-awp {
  display: flex;
  justify-content: center;
}

.css-work-quest-bfw {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
}
.css-work-project-awp img {
  width: 80px;
  height: 80px;
}
.css-work-quest-fcc {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
}
.css-work-quest-fsc {
  color: var(--text-color-primary);
  font-weight: 600;
  margin-top: 1rem;
}

.css-work-quest-pta {
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding: 10px 1rem;
  border-top: none;
  height: 300px;
  min-height: 300px;
  position: relative;
  overflow-y: auto;
  background: var(--base-color-white-primary);
  display: flex;
  flex-direction: column;
}

.css-work-quest-txs {
  display: flex;
  padding: 0 1rem;
  margin: 1rem 20%;
  align-items: center;
  border-radius: 4px;
}
.css-work-quest-thl {
  width: 100%;
  height: 100%;
  background: var(--base-color-white-primary);
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow-y: auto;
  padding: 1 2rem;
  box-sizing: border-box;
}

.css-work-quest-xsc {
  width: 1000px;
  height: 100px;
  border-radius: 8px;
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 200px;
  background: var(--base-color-white-primary);
  padding: 0 2rem;
  box-sizing: border-box;
}

.css-work-quest-xkx {
  background: var(--color-soft-blue);
  border: none;
  cursor: pointer;
  letter-spacing: 0.3px;
  outline: none;
  margin-left: 1rem;
  font-weight: 700;
  white-space: nowrap;
  border-radius: 8px;
  color: var(--complementary-color-blue);
}

#create-report {
  padding: 10px 14px;
}

#css-blue-button {
  background: var(--complementary-color-blue);
}

.css-work-quest-xkx a {
  text-decoration: none;
  color: #fff;
  padding: 10px 14px;
  display: flex;
}

.css-work-quest-fpb {
  border: 1px solid var(--border-primary);
  color: var(--text-color-primary);
  padding: 1rem;
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  display: flex;
  font-size: var(--text-size-secondary);
  margin-top: 1rem;
}

.css-work-quest-fpb span {
  width: 200px;
  text-align: center;
}

.css-work-quest-bta {
  padding: 0 1rem;
  background: transparent;
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  height: 40px;
  cursor: pointer;
  opacity: 0.9;
  margin: 0 1rem;
}

.css-work-quest-ths.active {
  display: none;
}

.css-work-quest-tss {
  border: 1px solid var(--border-primary);
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 4px;
  padding: 0 1rem;
  margin: 0 1rem;
  color: var(--text-color-secondary);
}

.css-work-quest-tss::placeholder {
  color: var(--text-color-secondary);
}

.css-work-quest-fyx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  background: var(--base-color-white-secondary);
  border-radius: 8px;
  color: var(--complementary-color-blue);
  border: 1px solid var(--complementary-color-blue);
}

.css-work-quest-fxx {
  color: var(--text-color-primary);
  font-size: var(--text-size-third);
  font-weight: 600;
}

.css-work-quest-fzz {
}

.css-work-quest-ths {
  display: flex;
  padding: 0 1rem;
  margin: 1rem 20%;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
}

.css-work-quest-wrap {
  width: 100%;
  height: 100vh;
  caret-color: transparent;
  padding-bottom: 10%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
}

.css-work-quest-wrap.active {
  overflow: unset;
}

.css-work-quest-fpl {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 11;
  display: flex;
  position: absolute;
  cursor: pointer;
  justify-content: center;
  animation-name: faded;
  animation-duration: 1s;
  transition: ease 0.3s;
}

.css-work-quest-fph {
  height: 4rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  color: var(--text-color-primary);
  font-weight: bold;
  justify-content: space-between;
}

.css-work-quest-fph button {
  cursor: pointer;
}

.css-work-quest-fph div {
  display: flex;
  align-items: center;
}

.css-work-quest-fph svg {
  margin-left: 5px;
}

.css-work-quest-fph button {
  background: transparent;
  border: none;
}

.css-work-quest-fpx {
  border-top: 1px solid var(--border-primary);
  padding: 0 2rem;
  word-break: break-word;
  white-space: pre-line;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
}

.css-work-quest-fpz {
  margin-top: 1rem;
}

.css-work-quest-fxp {
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
}

.css-work-quest-fxp span {
  font-size: var(--text-size-secondary);
}

.css-work-quest-fps,
.css-work-quest-fyy {
  width: 1000px;
  height: fit-content;
  position: absolute;
  z-index: 1;
  padding-bottom: 3rem;
  margin-top: 3rem;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  border-radius: 8px;
  background: var(--base-color-white-primary);
}

.css-work-quest-fyy {
  height: 600px;
}

@keyframes faded {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.css-work-quest-nac {
  height: 100px;
}

.css-work-quest-top {
  padding: 0 15%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.css-work-quest-back {
  display: flex;
  width: 200px;
  align-items: center;
  opacity: 0;
  caret-color: none;
  border: none;
  color: transparent;
  cursor: default;
}

.css-work-quest-gtt {
  color: var(--complementary-color-blue);
  font-weight: 500;
  display: flex;
  align-items: center;
  font-size: var(--text-size-secondary);
}

.css-work-quest-gtt svg {
  min-width: 16px;
  max-width: 16px;
}

.css-work-quest-gtt span {
  margin-left: 0.5rem;
}

.css-work-tool-haw {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 2px 14px;
}

.css-work-tool-haw span {
  margin-left: 10px;

  text-transform: lowercase;
  color: var(--text-color-primary);
}

.css-work-quest-got {
  width: 200px;
  padding: 0.5rem;
  box-sizing: border-box;
  z-index: 10;
  right: -222px;
  position: absolute;
  background: #deecfd;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px var(--border-primary);
}

.css-work-project-wrap {
  width: 331px;
  max-width: 331px;
  min-width: 331px;
  caret-color: transparent;
  color: #ffffff;
  line-height: 1.9;
  height: 100vh;
  background: linear-gradient(
    22.58deg,
    rgba(0, 80, 220, 1) 0%,
    rgba(0, 105, 245, 1) 100%
  );
  overflow-y: auto;
}

.css-work-quest-got::before {
  content: "";
  position: absolute;
  transition: all 0s ease-in;
}

.css-work-quest-panel {
  background: var(--base-color-white-primary);
  height: 3rem;
  padding: 0 1rem;
  border-radius: 4px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-top: 1rem;
  display: flex;
  border: 1px solid var(--border-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.css-work-quest-panel-b {
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: var(--color-soft-blue);
}

.css-work-quest-back.active {
  opacity: 1;
  cursor: pointer;
  color: var(--complementary-color-blue);
}

.css-work-quest-back div {
  width: 40px;
  height: 40px;
  background: var(--color-soft-blue);
  border-radius: 4px;
  display: flex;
  justify-content: center;
}

.css-work-quest-back span {
  font-weight: bold;
  margin-left: 1rem;
}

.css-work-quest-header {
  width: auto;
  height: 50vh;
}

.css-work-quest-page {
  justify-content: center;
  display: flex;
  margin-top: 1rem;
  font-weight: bold;
}

.css-work-quest-evaluate {
  background: var(--complementary-color-blue) !important;
  border: none;
  border-radius: 4px;
  padding: 10px 14px;
  height: 40px;
  color: white;
  cursor: pointer;
  margin-left: auto !important;
  margin-right: 1rem !important;
}

.css-work-project-her {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  border: 1px solid var(--border-primary);
}

.css-work-quest-legend {
  font-weight: bold;
  padding: 0 20%;
  line-height: 2rem;
  text-align: center;
  color: var(--text-color-primary);
  font-size: var(--text-size-title);
  margin-top: 2rem;
}

.css-work-quest-pag {
  color: var(--complementary-color-blue);
}

.css-work-quest-div {
  margin: 0 0.5rem;
}

.css-work-quest-answer {
  padding: 0 15%;
}

.css-work-quest-answer-item {
  background: #ffffff;
  height: 72px;
  min-height: 72px;
  max-height: 72px;
  border-radius: 4px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 1px 1px 20px var(--border-primary);
  border: 1px solid transparent;
}

.css-work-quest-answer-item.active {
  background: var(--color-soft-blue);
  border: 1px solid rgba(48, 99, 238, 0.5);
}

.css-work-quest-item-label {
  color: var(--text-color-primary);
  font-weight: bold;
}

.control {
  position: relative;
  display: block;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.control--checkbox:after {
  top: 8px;
  left: 14px;
  width: 8px;
  height: 16px;
  transform: rotate(45deg);
  border: solid #fff;
  border-width: 0 2px 2px 0;
}

.css-work-quest-suggest {
  text-align: center;
  line-height: 4rem;
}

.css-work-quest-note {
  padding: 1rem;
  margin-top: 3rem;
  background: var(--color-soft-blue);
  border-radius: 4px;
  color: var(--complementary-color-blue);
  display: block;
  line-height: 1.75;
  overflow-y: auto;
  cursor: url;
}

.css-work-quest-note span {
  cursor: pointer;
}

.css-work-quest-id {
  padding: 5px;
  background: var(--color-soft-blue);
  border-radius: 4px;
  color: var(--complementary-color-blue);
}

.css-work-quest-bpf {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 20%;
}

.css-work-quest-nav {
  display: flex;
  width: 600px;
  justify-content: space-around;
}

.css-work-quest-arrow {
  display: flex;
  padding: 1rem;
  background: white;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  box-shadow: 1px 1px 20px var(--border-primary);
}

.css-work-project-title {
  padding: 0 2rem;
  margin-top: 1rem;
  font-size: var(--text-size-title);
  opacity: 0;
}

.css-work-project-ul.active {
  height: 0;
  overflow: hidden;
}

.css-work-project-dar {
  margin-right: 5px;
  width: 0.6rem;
  height: 0.6rem;
}

.css-work-project-dar.active {
  transform: rotate(90deg);
}

.css-work-project-sbe {
  padding: 0 2rem;
  margin-top: 1rem;
  display: flex;
  cursor: pointer;
  align-items: center;
}

.css-work-project-sbe span {
  margin-left: 30px;
  margin-left: auto;
}

.css-work-project-arw {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.css-work-project-ari {
  height: 100px;
  width: 100px;
  background: var(--base-color-white-primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-blue);
}

.css-work-project-upl {
  opacity: 0.5;
  margin-top: 10px;
  width: 40px;
  height: 40px;
  border: 1.1px dashed var(--complementary-color-blue);
  border-radius: 4px;
}

.css-work-project-upl:hover {
  opacity: 0.7;
}

.css-work-project-upli {
  width: 200px;
  height: 80px;
  z-index: 15;
  cursor: pointer;
  position: relative;
  left: 5px;
  left: -80px;
  top: -60px;
  opacity: 0;
}

.css-work-project-legend {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.css-work-project-scc {
  height: 130px;
}
.css-work-project-name {
  text-align: center;
  text-transform: capitalize;
}

.css-work-project-ul {
  cursor: pointer;
  list-style: none;
}

.css-work-project-uli {
  padding-left: 3.5rem;
  border-left: 4px solid rgba(255, 255, 255, 0);
  transition: 0.1s;
}

.css-work-project-uli:focus {
  background: transparent;
  font-weight: bold;
}

.css-work-project-uli:hover {
  font-weight: bold;
  border-left: 4px solid rgba(255, 255, 255, 0.3);
  animation-name: xtrans;
  animation-duration: 1s;
}

@keyframes xtrans {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.css-work-project-uli.active::before {
  list-style-type: none;
  color: #00f569;
  display: inline-block;
  content: url("data:image/svg+xml,%3Csvg id='SVGRoot' width='16px' height='16px' version='1.1' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m12.43 6.0664c0.27037-0.31809 0.74741-0.35677 1.0655-0.086392 0.31809 0.27037 0.35677 0.74741 0.08639 1.0655l-6.4251 7.5589c-0.27462 0.32308-0.76122 0.35711-1.0781 0.07541l-3.4015-3.0236c-0.31202-0.27735-0.34012-0.75513-0.062777-1.0672 0.27735-0.31202 0.75513-0.34012 1.0672-0.06277l2.8239 2.5101z' fill='%2300f569' stroke-width='.7559'/%3E%3C/svg%3E ");
  width: 1.5em;
  margin-left: -1em;
}

.css-work-project-avatar-des {
  display: block;
  text-align: center;
}

.css-work-project-project {
  display: flex;
  color: var(--base-color-black-primary);
}

.css-work-project-tag {
  display: flex;
  justify-content: center;
  text-transform: capitalize;
}

.css-work-tool-wrap {
  display: flex;
}

@media (max-width: 600px) {
  .css-work-quest-back span {
    opacity: 0;
  }

  #logo-blue {
    fill: #fff;
  }

  .css-work-project-wpr {
    display: none;
  }

  .css-work-tool-wrap {
    background: var(--complementary-color-blue);
  }

  .css-identicon-wrx {
    display: none;
  }

  .css-work-project-her {
    background: var(--complementary-color-blue);
    border: none;
  }

  .css-work-quest-wrap {
    margin-left: 0;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    overflow: unset;
    background: var(--base-color-white-primary);
  }

  .css-main-flex-wrap {
    overflow-y: auto;
  }

  .css-work-quest-gtt span {
    white-space: nowrap;
  }

  .css-work-quest-tss {
    margin-top: 0.5rem;
    width: 100%;
  }

  .css-work-quest-thl {
    width: 100%;
  }

  .css-work-quest-got {
    right: 0;
    top: 50px;
  }

  .css-work-project-wrapper {
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    z-index: 40;
  }

  .css-work-project-wrap {
    width: 280px;
    min-width: 280px;
    z-index: 20;
    padding-top: 0px;
    position: fixed;
    background: var(--base-color-white-primary);
    color: var(--text-color-primary);
  }

  .css-work-quest-answer {
    padding: 0 10%;
  }
}
</style>