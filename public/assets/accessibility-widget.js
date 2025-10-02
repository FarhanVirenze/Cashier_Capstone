/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/accessibility.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/accessibility.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./disleksia.ttf */ "./src/disleksia.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./cursor.cur */ "./src/cursor.cur"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Disleksia';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

/* =======================================
   === SKALA & AKSESIBILITAS GLOBAL ===
======================================= */
/* === Global Font Scale Base === */
html[class*="font-scale-"],
body[class*="font-scale-"],
.content-wrapper[class*="font-scale-"] {
  font-size: 100% !important;
}

/* === Font Scale on content-wrapper === */
.content-wrapper.font-scale-50  { font-size: 50% !important; }
.content-wrapper.font-scale-60  { font-size: 60% !important; }
.content-wrapper.font-scale-70  { font-size: 70% !important; }
.content-wrapper.font-scale-80  { font-size: 80% !important; }
.content-wrapper.font-scale-90  { font-size: 90% !important; }
.content-wrapper.font-scale-100 { font-size: 100% !important; }
.content-wrapper.font-scale-110 { font-size: 110% !important; }
.content-wrapper.font-scale-120 { font-size: 120% !important; }
.content-wrapper.font-scale-130 { font-size: 130% !important; }
.content-wrapper.font-scale-140 { font-size: 140% !important; }
.content-wrapper.font-scale-150 { font-size: 150% !important; }
.content-wrapper.font-scale-160 { font-size: 160% !important; }
.content-wrapper.font-scale-170 { font-size: 170% !important; }
.content-wrapper.font-scale-180 { font-size: 180% !important; }
.content-wrapper.font-scale-190 { font-size: 190% !important; }
.content-wrapper.font-scale-200 { font-size: 200% !important; }

/* Tailwind Font Scaling inside .content-wrapper */

:root {
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
}

@media screen {
  /* Skala 50% sampai 200% */
  .content-wrapper.font-scale-50  .text-sm  { font-size: calc(var(--text-sm) * 0.5) !important; }
  .content-wrapper.font-scale-50  .text-base{ font-size: calc(var(--text-base) * 0.5) !important; }
  .content-wrapper.font-scale-50  .text-lg  { font-size: calc(var(--text-lg) * 0.5) !important; }
  .content-wrapper.font-scale-50  .text-xl  { font-size: calc(var(--text-xl) * 0.5) !important; }
  .content-wrapper.font-scale-50  .text-2xl { font-size: calc(var(--text-2xl) * 0.5) !important; }

  .content-wrapper.font-scale-60  .text-sm  { font-size: calc(var(--text-sm) * 0.6) !important; }
  .content-wrapper.font-scale-60  .text-base{ font-size: calc(var(--text-base) * 0.6) !important; }
  .content-wrapper.font-scale-60  .text-lg  { font-size: calc(var(--text-lg) * 0.6) !important; }
  .content-wrapper.font-scale-60  .text-xl  { font-size: calc(var(--text-xl) * 0.6) !important; }
  .content-wrapper.font-scale-60  .text-2xl { font-size: calc(var(--text-2xl) * 0.6) !important; }

  .content-wrapper.font-scale-70  .text-sm  { font-size: calc(var(--text-sm) * 0.7) !important; }
  .content-wrapper.font-scale-70  .text-base{ font-size: calc(var(--text-base) * 0.7) !important; }
  .content-wrapper.font-scale-70  .text-lg  { font-size: calc(var(--text-lg) * 0.7) !important; }
  .content-wrapper.font-scale-70  .text-xl  { font-size: calc(var(--text-xl) * 0.7) !important; }
  .content-wrapper.font-scale-70  .text-2xl { font-size: calc(var(--text-2xl) * 0.7) !important; }

  .content-wrapper.font-scale-80  .text-sm  { font-size: calc(var(--text-sm) * 0.8) !important; }
  .content-wrapper.font-scale-80  .text-base{ font-size: calc(var(--text-base) * 0.8) !important; }
  .content-wrapper.font-scale-80  .text-lg  { font-size: calc(var(--text-lg) * 0.8) !important; }
  .content-wrapper.font-scale-80  .text-xl  { font-size: calc(var(--text-xl) * 0.8) !important; }
  .content-wrapper.font-scale-80  .text-2xl { font-size: calc(var(--text-2xl) * 0.8) !important; }

  .content-wrapper.font-scale-90  .text-sm  { font-size: calc(var(--text-sm) * 0.9) !important; }
  .content-wrapper.font-scale-90  .text-base{ font-size: calc(var(--text-base) * 0.9) !important; }
  .content-wrapper.font-scale-90  .text-lg  { font-size: calc(var(--text-lg) * 0.9) !important; }
  .content-wrapper.font-scale-90  .text-xl  { font-size: calc(var(--text-xl) * 0.9) !important; }
  .content-wrapper.font-scale-90  .text-2xl { font-size: calc(var(--text-2xl) * 0.9) !important; }

  .content-wrapper.font-scale-100 .text-sm  { font-size: calc(var(--text-sm) * 1.0) !important; }
  .content-wrapper.font-scale-100 .text-base{ font-size: calc(var(--text-base) * 1.0) !important; }
  .content-wrapper.font-scale-100 .text-lg  { font-size: calc(var(--text-lg) * 1.0) !important; }
  .content-wrapper.font-scale-100 .text-xl  { font-size: calc(var(--text-xl) * 1.0) !important; }
  .content-wrapper.font-scale-100 .text-2xl { font-size: calc(var(--text-2xl) * 1.0) !important; }

  .content-wrapper.font-scale-110 .text-sm  { font-size: calc(var(--text-sm) * 1.1) !important; }
  .content-wrapper.font-scale-110 .text-base{ font-size: calc(var(--text-base) * 1.1) !important; }
  .content-wrapper.font-scale-110 .text-lg  { font-size: calc(var(--text-lg) * 1.1) !important; }
  .content-wrapper.font-scale-110 .text-xl  { font-size: calc(var(--text-xl) * 1.1) !important; }
  .content-wrapper.font-scale-110 .text-2xl { font-size: calc(var(--text-2xl) * 1.1) !important; }

  .content-wrapper.font-scale-120 .text-sm  { font-size: calc(var(--text-sm) * 1.2) !important; }
  .content-wrapper.font-scale-120 .text-base{ font-size: calc(var(--text-base) * 1.2) !important; }
  .content-wrapper.font-scale-120 .text-lg  { font-size: calc(var(--text-lg) * 1.2) !important; }
  .content-wrapper.font-scale-120 .text-xl  { font-size: calc(var(--text-xl) * 1.2) !important; }
  .content-wrapper.font-scale-120 .text-2xl { font-size: calc(var(--text-2xl) * 1.2) !important; }

  .content-wrapper.font-scale-130 .text-sm  { font-size: calc(var(--text-sm) * 1.3) !important; }
  .content-wrapper.font-scale-130 .text-base{ font-size: calc(var(--text-base) * 1.3) !important; }
  .content-wrapper.font-scale-130 .text-lg  { font-size: calc(var(--text-lg) * 1.3) !important; }
  .content-wrapper.font-scale-130 .text-xl  { font-size: calc(var(--text-xl) * 1.3) !important; }
  .content-wrapper.font-scale-130 .text-2xl { font-size: calc(var(--text-2xl) * 1.3) !important; }

  .content-wrapper.font-scale-140 .text-sm  { font-size: calc(var(--text-sm) * 1.4) !important; }
  .content-wrapper.font-scale-140 .text-base{ font-size: calc(var(--text-base) * 1.4) !important; }
  .content-wrapper.font-scale-140 .text-lg  { font-size: calc(var(--text-lg) * 1.4) !important; }
  .content-wrapper.font-scale-140 .text-xl  { font-size: calc(var(--text-xl) * 1.4) !important; }
  .content-wrapper.font-scale-140 .text-2xl { font-size: calc(var(--text-2xl) * 1.4) !important; }

  .content-wrapper.font-scale-150 .text-sm  { font-size: calc(var(--text-sm) * 1.5) !important; }
  .content-wrapper.font-scale-150 .text-base{ font-size: calc(var(--text-base) * 1.5) !important; }
  .content-wrapper.font-scale-150 .text-lg  { font-size: calc(var(--text-lg) * 1.5) !important; }
  .content-wrapper.font-scale-150 .text-xl  { font-size: calc(var(--text-xl) * 1.5) !important; }
  .content-wrapper.font-scale-150 .text-2xl { font-size: calc(var(--text-2xl) * 1.5) !important; }

  .content-wrapper.font-scale-160 .text-sm  { font-size: calc(var(--text-sm) * 1.6) !important; }
  .content-wrapper.font-scale-160 .text-base{ font-size: calc(var(--text-base) * 1.6) !important; }
  .content-wrapper.font-scale-160 .text-lg  { font-size: calc(var(--text-lg) * 1.6) !important; }
  .content-wrapper.font-scale-160 .text-xl  { font-size: calc(var(--text-xl) * 1.6) !important; }
  .content-wrapper.font-scale-160 .text-2xl { font-size: calc(var(--text-2xl) * 1.6) !important; }

  .content-wrapper.font-scale-170 .text-sm  { font-size: calc(var(--text-sm) * 1.7) !important; }
  .content-wrapper.font-scale-170 .text-base{ font-size: calc(var(--text-base) * 1.7) !important; }
  .content-wrapper.font-scale-170 .text-lg  { font-size: calc(var(--text-lg) * 1.7) !important; }
  .content-wrapper.font-scale-170 .text-xl  { font-size: calc(var(--text-xl) * 1.7) !important; }
  .content-wrapper.font-scale-170 .text-2xl { font-size: calc(var(--text-2xl) * 1.7) !important; }

  .content-wrapper.font-scale-180 .text-sm  { font-size: calc(var(--text-sm) * 1.8) !important; }
  .content-wrapper.font-scale-180 .text-base{ font-size: calc(var(--text-base) * 1.8) !important; }
  .content-wrapper.font-scale-180 .text-lg  { font-size: calc(var(--text-lg) * 1.8) !important; }
  .content-wrapper.font-scale-180 .text-xl  { font-size: calc(var(--text-xl) * 1.8) !important; }
  .content-wrapper.font-scale-180 .text-2xl { font-size: calc(var(--text-2xl) * 1.8) !important; }

  .content-wrapper.font-scale-190 .text-sm  { font-size: calc(var(--text-sm) * 1.9) !important; }
  .content-wrapper.font-scale-190 .text-base{ font-size: calc(var(--text-base) * 1.9) !important; }
  .content-wrapper.font-scale-190 .text-lg  { font-size: calc(var(--text-lg) * 1.9) !important; }
  .content-wrapper.font-scale-190 .text-xl  { font-size: calc(var(--text-xl) * 1.9) !important; }
  .content-wrapper.font-scale-190 .text-2xl { font-size: calc(var(--text-2xl) * 1.9) !important; }

  .content-wrapper.font-scale-200 .text-sm  { font-size: calc(var(--text-sm) * 2.0) !important; }
  .content-wrapper.font-scale-200 .text-base{ font-size: calc(var(--text-base) * 2.0) !important; }
  .content-wrapper.font-scale-200 .text-lg  { font-size: calc(var(--text-lg) * 2.0) !important; }
  .content-wrapper.font-scale-200 .text-xl  { font-size: calc(var(--text-xl) * 2.0) !important; }
  .content-wrapper.font-scale-200 .text-2xl { font-size: calc(var(--text-2xl) * 2.0) !important; }
}

/* =======================================
   === GAYA TAMBAHAN UNTUK AKSESIBILITAS ===
======================================= */
body.highlight-title .content-wrapper h1,
body.highlight-title .content-wrapper h2,
body.highlight-title .content-wrapper h3 {
  background-color: #fef08a;
  padding: 4px 8px;
  border-left: 5px solid #facc15;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  color: #1e293b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

body.highlight-links .content-wrapper a {
  background-color: #dbeafe;
  color: #000 !important;
  padding: 2px 4px;
  border-radius: 4px;
  text-decoration: none;
  box-shadow: 0 0 0 3px #93c5fd inset;
  transition: all 0.2s ease;
}

body.highlight-links .content-wrapper a:hover {
  background-color: #bfdbfe;
}

body.dyslexia-font,
body.dyslexia-font * {
  font-family: "Disleksia", Arial, sans-serif !important;
}

body.letter-spacing .content-wrapper * {
  letter-spacing: 0.1em !important;
}

body.line-height .content-wrapper * {
  line-height: 2 !important;
}

body.font-weight .content-wrapper,
body.font-weight .content-wrapper * {
  font-weight: bold !important;
}

body.dark-contrast .content-wrapper {
  background-color: #000 !important;
  color: #fff !important;
}

body.light-contrast .content-wrapper {
  background-color: #fff !important;
  color: #000 !important;
}

body.high-contrast .content-wrapper {
  filter: contrast(150%);
}

body.high-saturation .content-wrapper {
  filter: saturate(220%);
}

body.low-saturation .content-wrapper {
  filter: saturate(50%);
}

body.monochrome .content-wrapper {
  filter: grayscale(100%);
}

/* === Penunjuk Baca === */
body.reading-guide {
  cursor: default !important;
}

body.reading-guide::before {
  content: "";
  position: fixed;
  top: var(--reading-guide-top, 50%);
  left: var(--reading-guide-left, 50%);
  transform: translate(-50%, -50%);
  width: 40%;
  height: 6px;
  background-color: black;
  border: 3px solid yellow;
  border-radius: 8px;
  z-index: 10001;
  pointer-events: none;
  transition: top 50ms ease, left 50ms ease;
}

body.reading-guide::after {
  content: "";
  position: fixed;
  top: var(--reading-guide-top, 50%);
  left: var(--reading-guide-left, 50%);
  transform: translate(-50%, -85%) rotate(45deg);
  width: 10px;
  height: 10px;
  background-color: black;
  border: 2px solid yellow;
  z-index: 10002;
  pointer-events: none;
  transition: top 50ms ease, left 50ms ease;
}

body.reading-mask::before {
  content: "";
  position: fixed;
  top: var(--reading-mask-top, 50%);
  left: 0;
  width: 100%;
  height: 105px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.6);
  pointer-events: none;
  z-index: 9999;
  transition: top 0.1s ease;
}

/* === Cursor Besar === */
body.big-cursor,
body.big-cursor * {
  cursor: url(${___CSS_LOADER_URL_REPLACEMENT_1___}), auto;
}

body.big-cursor input,
body.big-cursor textarea {
  cursor: text !important;
}

/* =======================================
   === MENU AKSESIBILITAS & TOGGLE ===
======================================= */
body,
html {
  overflow-x: hidden;
}

.accessibility-toggle {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 9999;
  transform: translateY(-50%);
  cursor: grab;
  transition: left 0.2s ease, top 0.2s ease;
}

.accessibility-toggle:active {
  cursor: grabbing;
}

.accessibility-toggle.menu-open {
  display: none;
}

.api-content {
  transition: opacity 0.3s ease;
}
.api-content.invisible {
  opacity: 0;
}

.accessibility-menu {
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 40px;
  background: #f3f4f6;
  width: 532px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  z-index: 9998;
  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.4s ease, opacity 0.4s ease;
  box-sizing: border-box;
  overflow-x: hidden;
   box-shadow: 
  -1px 0 1px rgba(0, 0, 0, 0.06),
  -4px 0 6px rgba(0, 0, 0, 0.1),
  -10px 0 20px rgba(0, 0, 0, 0.12);
}

#google_translate_element > div > span {
  position: absolute !important;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

#google_translate_element > div {
  font-size: 0px;
}

#google_translate_element select {
  appearance: none;
  -webkit-appearance: none; /* untuk Safari */
  -moz-appearance: none;    /* untuk Firefox */
  border-radius: 0.375rem; /* rounded-md */
}

/* Spinner animasi loading */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #007BFF; /* Warna biru */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Wrapper agar spinner berada di tengah parent */
.spinner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: #555;
  font-style: italic;
  animation: fadeIn 0.3s ease-in-out;
}

/* Animasi berputar */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Animasi muncul */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.news-card {
  display: flex;
  align-items: flex-start; /* Perbaikan dari 'justify' → tidak valid */
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.news-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.news-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  background-color: #f0f0f0;
}

.news-card h3 {
  font-size: 1rem;
  margin: 0 0 0.25rem;
  color: #333;
}

.news-card p {
  font-size: 0.9rem;
  margin: 0;
  color: #555;
}

.api-news-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Tampilkan konten setelah translate selesai */
html:not(.loading-translate) .content-wrapper {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.accessibility-menu.open {
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
}

.menu-header {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2a9672;
  padding: 0.7rem 1.25rem;
  color: white;
  position: sticky;
  top: 0;
  z-index: 20;
}

.menu-header h2 {
  font-size: 1rem;
  font-weight: bolder;
  color: white;
}

.close-btn {
  font-size: 2rem;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
}

.menu-body {
  flex-grow: 1;
  overflow-y: auto;
  padding: 1.25rem;
}

/* Posisi Toggle yang Konsisten dan Sesuai Nama */
.accessibility-toggle.kiri-bawah {
  bottom: 20px;
  left: 20px;
  top: auto;
  right: auto;
  transform: none;
}

.accessibility-toggle.kanan-bawah {
  bottom: 20px;
  right: 20px;
  top: auto;
  left: auto;
  transform: none;
}

.accessibility-toggle.kiri-atas {
  top: 20px;
  left: 20px;
  bottom: auto;
  right: auto;
  transform: none;
}

.accessibility-toggle.kanan-atas {
  top: 20px;
  right: 20px;
  bottom: auto;
  left: auto;
  transform: none;
}

.accessibility-toggle.kiri-tengah {
  top: 50%;
  left: 20px;
  right: auto;
  bottom: auto;
  transform: translateY(-50%);
}

.accessibility-toggle.kanan-tengah {
  top: 50%;
  right: 20px;
  left: auto;
  bottom: auto;
  transform: translateY(-50%);
}

.accessibility-toggle.bawah-tengah {
  bottom: 20px;
  left: 50%;
  top: auto;
  right: auto;
  transform: translateX(-50%);
}

.accessibility-toggle.atas-tengah {
  top: 20px;
  left: 50%;
  margin-left: 20px;
  transform: translateX(-50%);
}

/* =======================================
   === ISI MENU & TOMBOL ===
======================================= */
.section {
  margin-bottom: 1.75rem;
}

.section label,
.section p {
  font-weight: 600;
  font-size: 1.1rem;
}

.section select,
.goog-te-combo {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  font-size: 0.875rem;
  font-family: inherit;
  background-color: #fff;
  appearance: none;
  margin-top: 1rem;
}

.font-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 2px;
  border-radius: 1rem;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.font-controls .btn {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f3f4f6;
}

.grid-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 0.75rem;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 0.83rem;
  padding: 1rem;
  background: #ffffff;
  border-radius: 0.75rem;
  border: 1px solid #ffffff;
  height: 100px;
  width: 148px;
}

.btn:hover {
  border: 2px solid #16a34a !important;
  background: #fff;
}

.btn.active {
  border: 2px solid #16a34a !important;
  color: #16a34a !important;
  background-color: #e6f4ec !important;
  position: relative;
}

.btn.active::after {
  content: "✔";
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 1rem;
  color: #16a34a;
}

.toggle-button {
  background: transparent !important;
  border: none !important;
  padding: 0;
  box-shadow: none;
}

.toggle-button img {
  width: 115px;
  height: 125px;
}

.reset-btn {
  width: 100%;
  background: #2a9672;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.reset-btn:hover {
  background: #238061;
}

.text-center {
  text-align: center;
}

/* NON-ANIMASI MODE */
body.no-animations *,
body.no-animations *::before,
body.no-animations *::after {
  animation: none !important;
  transition: none !important;
}

.icon-wrapper {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.icon-wrapper img {
  width: 46px;
  height: 39px;
}

.translate-box {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .accessibility-menu {
    width: 98vw;
    height: 100vh;
    top: 0;
    margin-top: 40px;
    padding: 0 1.25rem 1.25rem;
    border-left: none;
    border-radius: 0;
  }

  .menu-header {
    margin: 0 -1.25rem 1.5rem;
    border-radius: 0;
    position: sticky;
    z-index: 10;
    background-color: #29a078;
  }

  .menu-header h2 {
    font-size: 1rem;
  }

  .close-btn {
    font-size: 1.75rem;
  }

  .btn.active {
    border: 2px solid #16a34a !important;
    color: #16a34a !important;
    background-color: #e6f4ec !important;
    position: relative;
  }

  .grid-buttons {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  .btn {
    width: 100%;
    height: auto;
    padding: 0.65rem;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .font-controls {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .font-controls .btn {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
  }

  .section select,
  .goog-te-combo {
    font-size: 0.9rem;
    padding: 0.5rem;
    width: 100%;
  }

  .reset-btn {
    font-size: 0.95rem;
    padding: 0.65rem;
  }

  .accessibility-toggle {
    top: 20px;
    right: 20px;
    left: auto;
    bottom: auto;
    transform: none;
  }

  .toggle-button img {
    width: 95px;
    height: 100px;
  }

  .accessibility-toggle .toggle-button {
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
  }
}

@media (max-width: 640px) {
  .accessibility-menu {
    width: 97.5vw;
    height: 100vh;
    top: 0;
    margin-top: 40px;
    padding: 0 1.25rem 1.25rem;
    border-left: none;
    border-radius: 0;
  }

  .menu-header {
    margin: 0 -1.25rem 1.5rem;
    border-radius: 0;
    position: sticky;
    z-index: 10;
    background-color: #29a078;
  }

  .menu-header h2 {
    font-size: 1rem;
  }

  .close-btn {
    font-size: 1.75rem;
  }

  .btn.active {
    border: 2px solid #16a34a !important;
    color: #16a34a !important;
    background-color: #e6f4ec !important;
    position: relative;
  }

  .grid-buttons {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  .btn {
    width: 100%;
    height: auto;
    padding: 0.65rem;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .font-controls {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .font-controls .btn {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
  }

  .section select,
  .goog-te-combo {
    font-size: 0.9rem;
    padding: 0.5rem;
    width: 100%;
  }

  .reset-btn {
    font-size: 0.95rem;
    padding: 0.65rem;
  }

  .accessibility-toggle {
    top: 20px;
    right: 20px;
    left: auto;
    bottom: auto;
    transform: none;
  }

  .toggle-button img {
    width: 95px;
    height: 100px;
  }

  .accessibility-toggle .toggle-button {
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
  }
}

@media (max-width: 430px) {
  .accessibility-menu {
    width: 100vw;
    padding: 0 1rem 1.5rem;
  }

  .menu-header {
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
  }

  .grid-buttons {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .btn {
    width: 100%;
    height: auto;
    padding: 0.75rem;
    font-size: 0.85rem;
  }

  .icon-wrapper {
    font-size: 1.5rem;
  }

  .toggle-button img {
    width: 85px;
    height: 90px;
  }

  .section label,
  .section p {
    font-size: 1rem;
  }

  .font-controls {
    gap: 0.3rem;
  }

  .font-controls .btn {
    width: 32px;
    height: 32px;
  }

  .reset-btn {
    font-size: 0.9rem;
    padding: 0.6rem;
  }
}

@media (max-width: 360px) {
  .accessibility-menu {
    width: 100vw;
    height: 100vh;
    padding: 0 0.75rem 1rem;
    border-left: none;
    border-radius: 0;
  }

  .menu-header {
    padding: 0.75rem;
    font-size: 0.9rem;
  }

  .close-btn {
    font-size: 1.5rem;
  }

  .grid-buttons {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .btn {
    width: 100%;
    height: auto;
    padding: 0.5rem;
    font-size: 0.75rem;
  }

  .font-controls {
    flex-direction: column;
    gap: 0.5rem;
  }

  .font-controls .btn {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }

  .reset-btn {
    font-size: 0.85rem;
    padding: 0.5rem;
  }

  .toggle-button img {
    width: 85px;
    height: 95px;
  }
}

@media (max-width: 240px) {
  .accessibility-menu {
    width: 100vw;
    height: 100vh;
    padding: 0.5rem;
    font-size: 0.75rem;
    overflow-y: auto;
  }

  .menu-header {
    padding: 0.5rem;
    font-size: 0.75rem;
  }

  .grid-buttons {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
  }

  .btn {
    width: 100%;
    height: auto;
    padding: 0.4rem;
    font-size: 0.65rem;
  }

  .font-controls {
    flex-direction: column;
    gap: 0.3rem;
  }

  .font-controls .btn {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }

  .close-btn {
    font-size: 1.25rem;
  }

  .reset-btn {
    font-size: 0.75rem;
    padding: 0.5rem;
  }

  .toggle-button img {
    width: 70px;
    height: 80px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/accessibility.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,+DAA8C;EAC9C,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;yCAEyC;AACzC,mCAAmC;AACnC;;;EAGE,0BAA0B;AAC5B;;AAEA,0CAA0C;AAC1C,kCAAkC,yBAAyB,EAAE;AAC7D,kCAAkC,yBAAyB,EAAE;AAC7D,kCAAkC,yBAAyB,EAAE;AAC7D,kCAAkC,yBAAyB,EAAE;AAC7D,kCAAkC,yBAAyB,EAAE;AAC7D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;AAC9D,kCAAkC,0BAA0B,EAAE;;AAE9D,kDAAkD;;AAElD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;;EAE/F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,kDAAkD,EAAE;EAChG,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,gDAAgD,EAAE;EAC9F,4CAA4C,iDAAiD,EAAE;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","sourcesContent":["@font-face {\r\n  font-family: 'Disleksia';\r\n  src: url('./disleksia.ttf') format('truetype');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n/* =======================================\r\n   === SKALA & AKSESIBILITAS GLOBAL ===\r\n======================================= */\r\n/* === Global Font Scale Base === */\r\nhtml[class*=\"font-scale-\"],\r\nbody[class*=\"font-scale-\"],\r\n.content-wrapper[class*=\"font-scale-\"] {\r\n  font-size: 100% !important;\r\n}\r\n\r\n/* === Font Scale on content-wrapper === */\r\n.content-wrapper.font-scale-50  { font-size: 50% !important; }\r\n.content-wrapper.font-scale-60  { font-size: 60% !important; }\r\n.content-wrapper.font-scale-70  { font-size: 70% !important; }\r\n.content-wrapper.font-scale-80  { font-size: 80% !important; }\r\n.content-wrapper.font-scale-90  { font-size: 90% !important; }\r\n.content-wrapper.font-scale-100 { font-size: 100% !important; }\r\n.content-wrapper.font-scale-110 { font-size: 110% !important; }\r\n.content-wrapper.font-scale-120 { font-size: 120% !important; }\r\n.content-wrapper.font-scale-130 { font-size: 130% !important; }\r\n.content-wrapper.font-scale-140 { font-size: 140% !important; }\r\n.content-wrapper.font-scale-150 { font-size: 150% !important; }\r\n.content-wrapper.font-scale-160 { font-size: 160% !important; }\r\n.content-wrapper.font-scale-170 { font-size: 170% !important; }\r\n.content-wrapper.font-scale-180 { font-size: 180% !important; }\r\n.content-wrapper.font-scale-190 { font-size: 190% !important; }\r\n.content-wrapper.font-scale-200 { font-size: 200% !important; }\r\n\r\n/* Tailwind Font Scaling inside .content-wrapper */\r\n\r\n:root {\r\n  --text-sm: 0.875rem;\r\n  --text-base: 1rem;\r\n  --text-lg: 1.125rem;\r\n  --text-xl: 1.25rem;\r\n  --text-2xl: 1.5rem;\r\n}\r\n\r\n@media screen {\r\n  /* Skala 50% sampai 200% */\r\n  .content-wrapper.font-scale-50  .text-sm  { font-size: calc(var(--text-sm) * 0.5) !important; }\r\n  .content-wrapper.font-scale-50  .text-base{ font-size: calc(var(--text-base) * 0.5) !important; }\r\n  .content-wrapper.font-scale-50  .text-lg  { font-size: calc(var(--text-lg) * 0.5) !important; }\r\n  .content-wrapper.font-scale-50  .text-xl  { font-size: calc(var(--text-xl) * 0.5) !important; }\r\n  .content-wrapper.font-scale-50  .text-2xl { font-size: calc(var(--text-2xl) * 0.5) !important; }\r\n\r\n  .content-wrapper.font-scale-60  .text-sm  { font-size: calc(var(--text-sm) * 0.6) !important; }\r\n  .content-wrapper.font-scale-60  .text-base{ font-size: calc(var(--text-base) * 0.6) !important; }\r\n  .content-wrapper.font-scale-60  .text-lg  { font-size: calc(var(--text-lg) * 0.6) !important; }\r\n  .content-wrapper.font-scale-60  .text-xl  { font-size: calc(var(--text-xl) * 0.6) !important; }\r\n  .content-wrapper.font-scale-60  .text-2xl { font-size: calc(var(--text-2xl) * 0.6) !important; }\r\n\r\n  .content-wrapper.font-scale-70  .text-sm  { font-size: calc(var(--text-sm) * 0.7) !important; }\r\n  .content-wrapper.font-scale-70  .text-base{ font-size: calc(var(--text-base) * 0.7) !important; }\r\n  .content-wrapper.font-scale-70  .text-lg  { font-size: calc(var(--text-lg) * 0.7) !important; }\r\n  .content-wrapper.font-scale-70  .text-xl  { font-size: calc(var(--text-xl) * 0.7) !important; }\r\n  .content-wrapper.font-scale-70  .text-2xl { font-size: calc(var(--text-2xl) * 0.7) !important; }\r\n\r\n  .content-wrapper.font-scale-80  .text-sm  { font-size: calc(var(--text-sm) * 0.8) !important; }\r\n  .content-wrapper.font-scale-80  .text-base{ font-size: calc(var(--text-base) * 0.8) !important; }\r\n  .content-wrapper.font-scale-80  .text-lg  { font-size: calc(var(--text-lg) * 0.8) !important; }\r\n  .content-wrapper.font-scale-80  .text-xl  { font-size: calc(var(--text-xl) * 0.8) !important; }\r\n  .content-wrapper.font-scale-80  .text-2xl { font-size: calc(var(--text-2xl) * 0.8) !important; }\r\n\r\n  .content-wrapper.font-scale-90  .text-sm  { font-size: calc(var(--text-sm) * 0.9) !important; }\r\n  .content-wrapper.font-scale-90  .text-base{ font-size: calc(var(--text-base) * 0.9) !important; }\r\n  .content-wrapper.font-scale-90  .text-lg  { font-size: calc(var(--text-lg) * 0.9) !important; }\r\n  .content-wrapper.font-scale-90  .text-xl  { font-size: calc(var(--text-xl) * 0.9) !important; }\r\n  .content-wrapper.font-scale-90  .text-2xl { font-size: calc(var(--text-2xl) * 0.9) !important; }\r\n\r\n  .content-wrapper.font-scale-100 .text-sm  { font-size: calc(var(--text-sm) * 1.0) !important; }\r\n  .content-wrapper.font-scale-100 .text-base{ font-size: calc(var(--text-base) * 1.0) !important; }\r\n  .content-wrapper.font-scale-100 .text-lg  { font-size: calc(var(--text-lg) * 1.0) !important; }\r\n  .content-wrapper.font-scale-100 .text-xl  { font-size: calc(var(--text-xl) * 1.0) !important; }\r\n  .content-wrapper.font-scale-100 .text-2xl { font-size: calc(var(--text-2xl) * 1.0) !important; }\r\n\r\n  .content-wrapper.font-scale-110 .text-sm  { font-size: calc(var(--text-sm) * 1.1) !important; }\r\n  .content-wrapper.font-scale-110 .text-base{ font-size: calc(var(--text-base) * 1.1) !important; }\r\n  .content-wrapper.font-scale-110 .text-lg  { font-size: calc(var(--text-lg) * 1.1) !important; }\r\n  .content-wrapper.font-scale-110 .text-xl  { font-size: calc(var(--text-xl) * 1.1) !important; }\r\n  .content-wrapper.font-scale-110 .text-2xl { font-size: calc(var(--text-2xl) * 1.1) !important; }\r\n\r\n  .content-wrapper.font-scale-120 .text-sm  { font-size: calc(var(--text-sm) * 1.2) !important; }\r\n  .content-wrapper.font-scale-120 .text-base{ font-size: calc(var(--text-base) * 1.2) !important; }\r\n  .content-wrapper.font-scale-120 .text-lg  { font-size: calc(var(--text-lg) * 1.2) !important; }\r\n  .content-wrapper.font-scale-120 .text-xl  { font-size: calc(var(--text-xl) * 1.2) !important; }\r\n  .content-wrapper.font-scale-120 .text-2xl { font-size: calc(var(--text-2xl) * 1.2) !important; }\r\n\r\n  .content-wrapper.font-scale-130 .text-sm  { font-size: calc(var(--text-sm) * 1.3) !important; }\r\n  .content-wrapper.font-scale-130 .text-base{ font-size: calc(var(--text-base) * 1.3) !important; }\r\n  .content-wrapper.font-scale-130 .text-lg  { font-size: calc(var(--text-lg) * 1.3) !important; }\r\n  .content-wrapper.font-scale-130 .text-xl  { font-size: calc(var(--text-xl) * 1.3) !important; }\r\n  .content-wrapper.font-scale-130 .text-2xl { font-size: calc(var(--text-2xl) * 1.3) !important; }\r\n\r\n  .content-wrapper.font-scale-140 .text-sm  { font-size: calc(var(--text-sm) * 1.4) !important; }\r\n  .content-wrapper.font-scale-140 .text-base{ font-size: calc(var(--text-base) * 1.4) !important; }\r\n  .content-wrapper.font-scale-140 .text-lg  { font-size: calc(var(--text-lg) * 1.4) !important; }\r\n  .content-wrapper.font-scale-140 .text-xl  { font-size: calc(var(--text-xl) * 1.4) !important; }\r\n  .content-wrapper.font-scale-140 .text-2xl { font-size: calc(var(--text-2xl) * 1.4) !important; }\r\n\r\n  .content-wrapper.font-scale-150 .text-sm  { font-size: calc(var(--text-sm) * 1.5) !important; }\r\n  .content-wrapper.font-scale-150 .text-base{ font-size: calc(var(--text-base) * 1.5) !important; }\r\n  .content-wrapper.font-scale-150 .text-lg  { font-size: calc(var(--text-lg) * 1.5) !important; }\r\n  .content-wrapper.font-scale-150 .text-xl  { font-size: calc(var(--text-xl) * 1.5) !important; }\r\n  .content-wrapper.font-scale-150 .text-2xl { font-size: calc(var(--text-2xl) * 1.5) !important; }\r\n\r\n  .content-wrapper.font-scale-160 .text-sm  { font-size: calc(var(--text-sm) * 1.6) !important; }\r\n  .content-wrapper.font-scale-160 .text-base{ font-size: calc(var(--text-base) * 1.6) !important; }\r\n  .content-wrapper.font-scale-160 .text-lg  { font-size: calc(var(--text-lg) * 1.6) !important; }\r\n  .content-wrapper.font-scale-160 .text-xl  { font-size: calc(var(--text-xl) * 1.6) !important; }\r\n  .content-wrapper.font-scale-160 .text-2xl { font-size: calc(var(--text-2xl) * 1.6) !important; }\r\n\r\n  .content-wrapper.font-scale-170 .text-sm  { font-size: calc(var(--text-sm) * 1.7) !important; }\r\n  .content-wrapper.font-scale-170 .text-base{ font-size: calc(var(--text-base) * 1.7) !important; }\r\n  .content-wrapper.font-scale-170 .text-lg  { font-size: calc(var(--text-lg) * 1.7) !important; }\r\n  .content-wrapper.font-scale-170 .text-xl  { font-size: calc(var(--text-xl) * 1.7) !important; }\r\n  .content-wrapper.font-scale-170 .text-2xl { font-size: calc(var(--text-2xl) * 1.7) !important; }\r\n\r\n  .content-wrapper.font-scale-180 .text-sm  { font-size: calc(var(--text-sm) * 1.8) !important; }\r\n  .content-wrapper.font-scale-180 .text-base{ font-size: calc(var(--text-base) * 1.8) !important; }\r\n  .content-wrapper.font-scale-180 .text-lg  { font-size: calc(var(--text-lg) * 1.8) !important; }\r\n  .content-wrapper.font-scale-180 .text-xl  { font-size: calc(var(--text-xl) * 1.8) !important; }\r\n  .content-wrapper.font-scale-180 .text-2xl { font-size: calc(var(--text-2xl) * 1.8) !important; }\r\n\r\n  .content-wrapper.font-scale-190 .text-sm  { font-size: calc(var(--text-sm) * 1.9) !important; }\r\n  .content-wrapper.font-scale-190 .text-base{ font-size: calc(var(--text-base) * 1.9) !important; }\r\n  .content-wrapper.font-scale-190 .text-lg  { font-size: calc(var(--text-lg) * 1.9) !important; }\r\n  .content-wrapper.font-scale-190 .text-xl  { font-size: calc(var(--text-xl) * 1.9) !important; }\r\n  .content-wrapper.font-scale-190 .text-2xl { font-size: calc(var(--text-2xl) * 1.9) !important; }\r\n\r\n  .content-wrapper.font-scale-200 .text-sm  { font-size: calc(var(--text-sm) * 2.0) !important; }\r\n  .content-wrapper.font-scale-200 .text-base{ font-size: calc(var(--text-base) * 2.0) !important; }\r\n  .content-wrapper.font-scale-200 .text-lg  { font-size: calc(var(--text-lg) * 2.0) !important; }\r\n  .content-wrapper.font-scale-200 .text-xl  { font-size: calc(var(--text-xl) * 2.0) !important; }\r\n  .content-wrapper.font-scale-200 .text-2xl { font-size: calc(var(--text-2xl) * 2.0) !important; }\r\n}\r\n\r\n/* =======================================\r\n   === GAYA TAMBAHAN UNTUK AKSESIBILITAS ===\r\n======================================= */\r\nbody.highlight-title .content-wrapper h1,\r\nbody.highlight-title .content-wrapper h2,\r\nbody.highlight-title .content-wrapper h3 {\r\n  background-color: #fef08a;\r\n  padding: 4px 8px;\r\n  border-left: 5px solid #facc15;\r\n  border-radius: 4px;\r\n  margin-bottom: 0.5rem;\r\n  color: #1e293b;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\nbody.highlight-links .content-wrapper a {\r\n  background-color: #dbeafe;\r\n  color: #000 !important;\r\n  padding: 2px 4px;\r\n  border-radius: 4px;\r\n  text-decoration: none;\r\n  box-shadow: 0 0 0 3px #93c5fd inset;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\nbody.highlight-links .content-wrapper a:hover {\r\n  background-color: #bfdbfe;\r\n}\r\n\r\nbody.dyslexia-font,\r\nbody.dyslexia-font * {\r\n  font-family: \"Disleksia\", Arial, sans-serif !important;\r\n}\r\n\r\nbody.letter-spacing .content-wrapper * {\r\n  letter-spacing: 0.1em !important;\r\n}\r\n\r\nbody.line-height .content-wrapper * {\r\n  line-height: 2 !important;\r\n}\r\n\r\nbody.font-weight .content-wrapper,\r\nbody.font-weight .content-wrapper * {\r\n  font-weight: bold !important;\r\n}\r\n\r\nbody.dark-contrast .content-wrapper {\r\n  background-color: #000 !important;\r\n  color: #fff !important;\r\n}\r\n\r\nbody.light-contrast .content-wrapper {\r\n  background-color: #fff !important;\r\n  color: #000 !important;\r\n}\r\n\r\nbody.high-contrast .content-wrapper {\r\n  filter: contrast(150%);\r\n}\r\n\r\nbody.high-saturation .content-wrapper {\r\n  filter: saturate(220%);\r\n}\r\n\r\nbody.low-saturation .content-wrapper {\r\n  filter: saturate(50%);\r\n}\r\n\r\nbody.monochrome .content-wrapper {\r\n  filter: grayscale(100%);\r\n}\r\n\r\n/* === Penunjuk Baca === */\r\nbody.reading-guide {\r\n  cursor: default !important;\r\n}\r\n\r\nbody.reading-guide::before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: var(--reading-guide-top, 50%);\r\n  left: var(--reading-guide-left, 50%);\r\n  transform: translate(-50%, -50%);\r\n  width: 40%;\r\n  height: 6px;\r\n  background-color: black;\r\n  border: 3px solid yellow;\r\n  border-radius: 8px;\r\n  z-index: 10001;\r\n  pointer-events: none;\r\n  transition: top 50ms ease, left 50ms ease;\r\n}\r\n\r\nbody.reading-guide::after {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: var(--reading-guide-top, 50%);\r\n  left: var(--reading-guide-left, 50%);\r\n  transform: translate(-50%, -85%) rotate(45deg);\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: black;\r\n  border: 2px solid yellow;\r\n  z-index: 10002;\r\n  pointer-events: none;\r\n  transition: top 50ms ease, left 50ms ease;\r\n}\r\n\r\nbody.reading-mask::before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: var(--reading-mask-top, 50%);\r\n  left: 0;\r\n  width: 100%;\r\n  height: 105px;\r\n  background: rgba(255, 255, 255, 0.25);\r\n  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.6);\r\n  pointer-events: none;\r\n  z-index: 9999;\r\n  transition: top 0.1s ease;\r\n}\r\n\r\n/* === Cursor Besar === */\r\nbody.big-cursor,\r\nbody.big-cursor * {\r\n  cursor: url('./cursor.cur'), auto;\r\n}\r\n\r\nbody.big-cursor input,\r\nbody.big-cursor textarea {\r\n  cursor: text !important;\r\n}\r\n\r\n/* =======================================\r\n   === MENU AKSESIBILITAS & TOGGLE ===\r\n======================================= */\r\nbody,\r\nhtml {\r\n  overflow-x: hidden;\r\n}\r\n\r\n.accessibility-toggle {\r\n  position: fixed;\r\n  top: 50%;\r\n  right: 0;\r\n  z-index: 9999;\r\n  transform: translateY(-50%);\r\n  cursor: grab;\r\n  transition: left 0.2s ease, top 0.2s ease;\r\n}\r\n\r\n.accessibility-toggle:active {\r\n  cursor: grabbing;\r\n}\r\n\r\n.accessibility-toggle.menu-open {\r\n  display: none;\r\n}\r\n\r\n.api-content {\r\n  transition: opacity 0.3s ease;\r\n}\r\n.api-content.invisible {\r\n  opacity: 0;\r\n}\r\n\r\n.accessibility-menu {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  margin-top: 40px;\r\n  background: #f3f4f6;\r\n  width: 532px;\r\n  height: 95vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  z-index: 9998;\r\n  transform: translateX(100%);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: transform 0.4s ease, opacity 0.4s ease;\r\n  box-sizing: border-box;\r\n  overflow-x: hidden;\r\n   box-shadow: \r\n  -1px 0 1px rgba(0, 0, 0, 0.06),\r\n  -4px 0 6px rgba(0, 0, 0, 0.1),\r\n  -10px 0 20px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n#google_translate_element > div > span {\r\n  position: absolute !important;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n}\r\n\r\n#google_translate_element > div {\r\n  font-size: 0px;\r\n}\r\n\r\n#google_translate_element select {\r\n  appearance: none;\r\n  -webkit-appearance: none; /* untuk Safari */\r\n  -moz-appearance: none;    /* untuk Firefox */\r\n  border-radius: 0.375rem; /* rounded-md */\r\n}\r\n\r\n/* Spinner animasi loading */\r\n.spinner {\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 4px solid #ccc;\r\n  border-top-color: #007BFF; /* Warna biru */\r\n  border-radius: 50%;\r\n  animation: spin 1s linear infinite;\r\n}\r\n\r\n/* Wrapper agar spinner berada di tengah parent */\r\n.spinner-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1rem;\r\n  color: #555;\r\n  font-style: italic;\r\n  animation: fadeIn 0.3s ease-in-out;\r\n}\r\n\r\n/* Animasi berputar */\r\n@keyframes spin {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* Animasi muncul */\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.news-card {\r\n  display: flex;\r\n  align-items: flex-start; /* Perbaikan dari 'justify' → tidak valid */\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 12px;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\r\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.news-card:hover {\r\n  transform: scale(1.02);\r\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.news-img {\r\n  width: 80px;\r\n  height: 80px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n  flex-shrink: 0;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.news-card h3 {\r\n  font-size: 1rem;\r\n  margin: 0 0 0.25rem;\r\n  color: #333;\r\n}\r\n\r\n.news-card p {\r\n  font-size: 0.9rem;\r\n  margin: 0;\r\n  color: #555;\r\n}\r\n\r\n.api-news-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n/* Tampilkan konten setelah translate selesai */\r\nhtml:not(.loading-translate) .content-wrapper {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: opacity 0.2s ease-in-out;\r\n}\r\n\r\n.accessibility-menu.open {\r\n  transform: translateX(0);\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.menu-header {\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #2a9672;\r\n  padding: 0.7rem 1.25rem;\r\n  color: white;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 20;\r\n}\r\n\r\n.menu-header h2 {\r\n  font-size: 1rem;\r\n  font-weight: bolder;\r\n  color: white;\r\n}\r\n\r\n.close-btn {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\n\r\n.menu-body {\r\n  flex-grow: 1;\r\n  overflow-y: auto;\r\n  padding: 1.25rem;\r\n}\r\n\r\n/* Posisi Toggle yang Konsisten dan Sesuai Nama */\r\n.accessibility-toggle.kiri-bawah {\r\n  bottom: 20px;\r\n  left: 20px;\r\n  top: auto;\r\n  right: auto;\r\n  transform: none;\r\n}\r\n\r\n.accessibility-toggle.kanan-bawah {\r\n  bottom: 20px;\r\n  right: 20px;\r\n  top: auto;\r\n  left: auto;\r\n  transform: none;\r\n}\r\n\r\n.accessibility-toggle.kiri-atas {\r\n  top: 20px;\r\n  left: 20px;\r\n  bottom: auto;\r\n  right: auto;\r\n  transform: none;\r\n}\r\n\r\n.accessibility-toggle.kanan-atas {\r\n  top: 20px;\r\n  right: 20px;\r\n  bottom: auto;\r\n  left: auto;\r\n  transform: none;\r\n}\r\n\r\n.accessibility-toggle.kiri-tengah {\r\n  top: 50%;\r\n  left: 20px;\r\n  right: auto;\r\n  bottom: auto;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.accessibility-toggle.kanan-tengah {\r\n  top: 50%;\r\n  right: 20px;\r\n  left: auto;\r\n  bottom: auto;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.accessibility-toggle.bawah-tengah {\r\n  bottom: 20px;\r\n  left: 50%;\r\n  top: auto;\r\n  right: auto;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.accessibility-toggle.atas-tengah {\r\n  top: 20px;\r\n  left: 50%;\r\n  margin-left: 20px;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n/* =======================================\r\n   === ISI MENU & TOMBOL ===\r\n======================================= */\r\n.section {\r\n  margin-bottom: 1.75rem;\r\n}\r\n\r\n.section label,\r\n.section p {\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.section select,\r\n.goog-te-combo {\r\n  width: 100%;\r\n  padding: 0.75rem;\r\n  border-radius: 0.5rem;\r\n  border: 1px solid #d1d5db;\r\n  font-size: 0.875rem;\r\n  font-family: inherit;\r\n  background-color: #fff;\r\n  appearance: none;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.font-controls {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #ffffff;\r\n  padding: 2px;\r\n  border-radius: 1rem;\r\n  border: 1px solid #d1d5db;\r\n  font-size: 1rem;\r\n  gap: 1.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.font-controls .btn {\r\n  font-size: 1.5rem;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  background: #f3f4f6;\r\n}\r\n\r\n.grid-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 16px;\r\n  margin-top: 0.75rem;\r\n}\r\n\r\n.btn {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 0.83rem;\r\n  padding: 1rem;\r\n  background: #ffffff;\r\n  border-radius: 0.75rem;\r\n  border: 1px solid #ffffff;\r\n  height: 100px;\r\n  width: 148px;\r\n}\r\n\r\n.btn:hover {\r\n  border: 2px solid #16a34a !important;\r\n  background: #fff;\r\n}\r\n\r\n.btn.active {\r\n  border: 2px solid #16a34a !important;\r\n  color: #16a34a !important;\r\n  background-color: #e6f4ec !important;\r\n  position: relative;\r\n}\r\n\r\n.btn.active::after {\r\n  content: \"✔\";\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 10px;\r\n  font-size: 1rem;\r\n  color: #16a34a;\r\n}\r\n\r\n.toggle-button {\r\n  background: transparent !important;\r\n  border: none !important;\r\n  padding: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n.toggle-button img {\r\n  width: 115px;\r\n  height: 125px;\r\n}\r\n\r\n.reset-btn {\r\n  width: 100%;\r\n  background: #2a9672;\r\n  color: white;\r\n  padding: 0.75rem;\r\n  font-size: 1rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.reset-btn:hover {\r\n  background: #238061;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n/* NON-ANIMASI MODE */\r\nbody.no-animations *,\r\nbody.no-animations *::before,\r\nbody.no-animations *::after {\r\n  animation: none !important;\r\n  transition: none !important;\r\n}\r\n\r\n.icon-wrapper {\r\n  font-size: 1.8rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.icon-wrapper img {\r\n  width: 46px;\r\n  height: 39px;\r\n}\r\n\r\n.translate-box {\r\n  margin-top: 1rem;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .accessibility-menu {\r\n    width: 98vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    margin-top: 40px;\r\n    padding: 0 1.25rem 1.25rem;\r\n    border-left: none;\r\n    border-radius: 0;\r\n  }\r\n\r\n  .menu-header {\r\n    margin: 0 -1.25rem 1.5rem;\r\n    border-radius: 0;\r\n    position: sticky;\r\n    z-index: 10;\r\n    background-color: #29a078;\r\n  }\r\n\r\n  .menu-header h2 {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .close-btn {\r\n    font-size: 1.75rem;\r\n  }\r\n\r\n  .btn.active {\r\n    border: 2px solid #16a34a !important;\r\n    color: #16a34a !important;\r\n    background-color: #e6f4ec !important;\r\n    position: relative;\r\n  }\r\n\r\n  .grid-buttons {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .btn {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 0.65rem;\r\n    font-weight: bold;\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .font-controls {\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    padding: 0.5rem;\r\n  }\r\n\r\n  .font-controls .btn {\r\n    width: 36px;\r\n    height: 36px;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .section select,\r\n  .goog-te-combo {\r\n    font-size: 0.9rem;\r\n    padding: 0.5rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .reset-btn {\r\n    font-size: 0.95rem;\r\n    padding: 0.65rem;\r\n  }\r\n\r\n  .accessibility-toggle {\r\n    top: 20px;\r\n    right: 20px;\r\n    left: auto;\r\n    bottom: auto;\r\n    transform: none;\r\n  }\r\n\r\n  .toggle-button img {\r\n    width: 95px;\r\n    height: 100px;\r\n  }\r\n\r\n  .accessibility-toggle .toggle-button {\r\n    font-size: 1rem;\r\n    padding: 0.5rem 0.75rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n  .accessibility-menu {\r\n    width: 97.5vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    margin-top: 40px;\r\n    padding: 0 1.25rem 1.25rem;\r\n    border-left: none;\r\n    border-radius: 0;\r\n  }\r\n\r\n  .menu-header {\r\n    margin: 0 -1.25rem 1.5rem;\r\n    border-radius: 0;\r\n    position: sticky;\r\n    z-index: 10;\r\n    background-color: #29a078;\r\n  }\r\n\r\n  .menu-header h2 {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .close-btn {\r\n    font-size: 1.75rem;\r\n  }\r\n\r\n  .btn.active {\r\n    border: 2px solid #16a34a !important;\r\n    color: #16a34a !important;\r\n    background-color: #e6f4ec !important;\r\n    position: relative;\r\n  }\r\n\r\n  .grid-buttons {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .btn {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 0.65rem;\r\n    font-weight: bold;\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .font-controls {\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n    padding: 0.5rem;\r\n  }\r\n\r\n  .font-controls .btn {\r\n    width: 36px;\r\n    height: 36px;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .section select,\r\n  .goog-te-combo {\r\n    font-size: 0.9rem;\r\n    padding: 0.5rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .reset-btn {\r\n    font-size: 0.95rem;\r\n    padding: 0.65rem;\r\n  }\r\n\r\n  .accessibility-toggle {\r\n    top: 20px;\r\n    right: 20px;\r\n    left: auto;\r\n    bottom: auto;\r\n    transform: none;\r\n  }\r\n\r\n  .toggle-button img {\r\n    width: 95px;\r\n    height: 100px;\r\n  }\r\n\r\n  .accessibility-toggle .toggle-button {\r\n    font-size: 1rem;\r\n    padding: 0.5rem 0.75rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n  .accessibility-menu {\r\n    width: 100vw;\r\n    padding: 0 1rem 1.5rem;\r\n  }\r\n\r\n  .menu-header {\r\n    padding: 0.75rem 1rem;\r\n    font-size: 0.95rem;\r\n  }\r\n\r\n  .grid-buttons {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.75rem;\r\n  }\r\n\r\n  .btn {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 0.75rem;\r\n    font-size: 0.85rem;\r\n  }\r\n\r\n  .icon-wrapper {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .toggle-button img {\r\n    width: 85px;\r\n    height: 90px;\r\n  }\r\n\r\n  .section label,\r\n  .section p {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .font-controls {\r\n    gap: 0.3rem;\r\n  }\r\n\r\n  .font-controls .btn {\r\n    width: 32px;\r\n    height: 32px;\r\n  }\r\n\r\n  .reset-btn {\r\n    font-size: 0.9rem;\r\n    padding: 0.6rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 360px) {\r\n  .accessibility-menu {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    padding: 0 0.75rem 1rem;\r\n    border-left: none;\r\n    border-radius: 0;\r\n  }\r\n\r\n  .menu-header {\r\n    padding: 0.75rem;\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .close-btn {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .grid-buttons {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .btn {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 0.5rem;\r\n    font-size: 0.75rem;\r\n  }\r\n\r\n  .font-controls {\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .font-controls .btn {\r\n    width: 30px;\r\n    height: 30px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .reset-btn {\r\n    font-size: 0.85rem;\r\n    padding: 0.5rem;\r\n  }\r\n\r\n  .toggle-button img {\r\n    width: 85px;\r\n    height: 95px;\r\n  }\r\n}\r\n\r\n@media (max-width: 240px) {\r\n  .accessibility-menu {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    padding: 0.5rem;\r\n    font-size: 0.75rem;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .menu-header {\r\n    padding: 0.5rem;\r\n    font-size: 0.75rem;\r\n  }\r\n\r\n  .grid-buttons {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.4rem;\r\n  }\r\n\r\n  .btn {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 0.4rem;\r\n    font-size: 0.65rem;\r\n  }\r\n\r\n  .font-controls {\r\n    flex-direction: column;\r\n    gap: 0.3rem;\r\n  }\r\n\r\n  .font-controls .btn {\r\n    width: 28px;\r\n    height: 28px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .close-btn {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .reset-btn {\r\n    font-size: 0.75rem;\r\n    padding: 0.5rem;\r\n  }\r\n\r\n  .toggle-button img {\r\n    width: 70px;\r\n    height: 80px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/accessibility.css":
/*!*******************************!*\
  !*** ./src/accessibility.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_accessibility_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./accessibility.css */ "./node_modules/css-loader/dist/cjs.js!./src/accessibility.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_accessibility_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_accessibility_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_accessibility_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_accessibility_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/cursor.cur":
/*!************************!*\
  !*** ./src/cursor.cur ***!
  \************************/
/***/ ((module) => {

module.exports = "data:application/octet-stream;base64,AAACAAEAMDAAAAEAAACoHAAAFgAAACgAAAAwAAAAYAAAAAEAGAAAAAAAgBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWVlYFBQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcV1dra2sqKioDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAADk5OSbmZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAADFxMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD///////8AAP///////wAA////////AAD/D/////8AAP8D/////wAA/gP/////AAAeA/////8AAAwH/////wAABAf/////AAAAD/////8AAAAP/////wAAAAA/////AAAAAD////8AAAAAP////wAAAAB/////AAAAAP////8AAAAB/////wAAAAP/////AAAAB/////8AAAAP/////wAAAB//////AAAAP/////8AAAB//////wAAAP//////AAAB//////8AAAP//////wAAB///////AAAP//////8AAB///////wAAP///////AAA=";

/***/ }),

/***/ "./src/disleksia.ttf":
/*!***************************!*\
  !*** ./src/disleksia.ttf ***!
  \***************************/
/***/ ((module) => {

module.exports = "data:font/ttf;base64,T1RUTwAMAIAAAwBAQ0ZGINtzY0wAABNQAAB8zEdERUYKxwuwAACYYAAAAGRHUE9T96ItNgAAmvwAAAqsR1NVQk/0c3YAAJjEAAACOE9TLzJwaqdfAAABMAAAAGBjbWFwwmWKKwAADIgAAAamaGVhZATLKeYAAADMAAAANmhoZWEJmQQIAAABBAAAACRobXR4OMKQ1AAAkBwAAAhCbWF4cAITUAAAAAEoAAAABm5hbWUt7Js3AAABkAAACvhwb3N0/0cAMgAAEzAAAAAgAAEAAAACAEFiz/T+Xw889QADA+gAAAAA0H8EYQAAAADQfwRh/8nbcgTrBJEAAQADAAIAAAAAAAAAAQAABOL+DAAABTX/yf64BOsAAQAAAAAAAAAAAAAAAAAAAg4AAFAAAhMAAAADAoQCvAAFAAACigJYAAAASwKKAlgAAAFeADICWAAAAAAIAAAAAAAAACAAAAcAAAAAAAAAAAAAAABVS1dOACAAAPsCBhT+VgAABOIB9CAAAZMAAAAAA+gD6AAAACAAAwAAABQA9gABAAAAAAAAAVkAAAABAAAAAAABAAwBWQABAAAAAAACAAQBZQABAAAAAAADABwBaQABAAAAAAAEABEBhQABAAAAAAAFADwBlgABAAAAAAAGABEB0gABAAAAAAAJABEB4wABAAAAAAAMABIB9AABAAAAAAANAVACBgADAAEECQAAArIDVgADAAEECQABABgGCAADAAEECQACAAgGIAADAAEECQADADgGKAADAAEECQAEACIGYAADAAEECQAFAHgGggADAAEECQAGACIG+gADAAEECQAJACIHHAADAAEECQAMACQHPgADAAEECQANAqAHYk9yaWdpbmFsIEZvbnRzIGFyZSCpIEJpdHN0cmVhbS4gT3BlbkR5c2xleGljIGNoYW5nZXMgYW5kIGFkZGl0aW9uYWwgZ2x5cGhzIGJ5IEFiZWxhcmRvIEdvbnphbGV6IGFyZSBsaWNlbnNlZCB1bmRlciBhIENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gMy4wIFVucG9ydGVkIExpY2Vuc2UuCkJhc2VkIG9uIGEgd29yayBhdCBodHRwOi8vZHlzbGV4aWNmb250cy5jb20uIF8yMDEyIGJ5IEFiZWxhcmRvIEdvbnphbGV6LiBDb3B5aW5nIGlzIGFuIGFjdCBvZiBsb3ZlLiBQbGVhc2UgY29weS4KQml0c3RyZWFtIGxpY2Vuc2UgYXZhaWxhYmxlIGhlcmU6IGh0dHA6Ly9vcGVuZHlzbGV4aWMub3JnL2xlZ2FsL09wZW5EeXNsZXhpY0JvbGQyLjAwMTtVS1dOO09wZW5EeXNsZXhpYy1Cb2xkT3BlbkR5c2xleGljIEJvbGRWZXJzaW9uIDIuMDAxO1BTIDAwMi4wMDE7aG90Y29udiAxLjAuNzA7bWFrZW90Zi5saWIyLjUuNTgzMjlPcGVuRHlzbGV4aWMtQm9sZEFiZWxhcmRvIEdvbnphbGV6aHR0cDovL2FiYmllY29kLmVzRm9udHMgYXJlIKkgQml0c3RyZWFtLiBPcGVuRHlzbGV4aWMgY2hhbmdlcyBhbmQgYWRkaXRpb25hbCBnbHlwaHMgYnkgQWJlbGFyZG8gR29uemFsZXogYXJlIGxpY2Vuc2VkIHVuZGVyIGEgQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbiAzLjAgVW5wb3J0ZWQgTGljZW5zZS4KQmFzZWQgb24gYSB3b3JrIGF0IGh0dHA6Ly9keXNsZXhpY2ZvbnRzLmNvbS4gXzIwMTIgYnkgQWJlbGFyZG8gR29uemFsZXouIENvcHlpbmcgaXMgYW4gYWN0IG9mIGxvdmUuIFBsZWFzZSBjb3B5LgpCaXRzdHJlYW0gbGljZW5zZSBhdmFpbGFibGUgaGVyZTogaHR0cDovL29wZW5keXNsZXhpYy5vcmcvbGVnYWwvAE8AcgBpAGcAaQBuAGEAbAAgAEYAbwBuAHQAcwAgAGEAcgBlACAAqQAgAEIAaQB0AHMAdAByAGUAYQBtAC4AIABPAHAAZQBuAEQAeQBzAGwAZQB4AGkAYwAgAGMAaABhAG4AZwBlAHMAIABhAG4AZAAgAGEAZABkAGkAdABpAG8AbgBhAGwAIABnAGwAeQBwAGgAcwAgAGIAeQAgAEEAYgBlAGwAYQByAGQAbwAgAEcAbwBuAHoAYQBsAGUAegAgAGEAcgBlACAAbABpAGMAZQBuAHMAZQBkACAAdQBuAGQAZQByACAAYQAgAEMAcgBlAGEAdABpAHYAZQAgAEMAbwBtAG0AbwBuAHMAIABBAHQAdAByAGkAYgB1AHQAaQBvAG4AIAAzAC4AMAAgAFUAbgBwAG8AcgB0AGUAZAAgAEwAaQBjAGUAbgBzAGUALgAKAEIAYQBzAGUAZAAgAG8AbgAgAGEAIAB3AG8AcgBrACAAYQB0ACAAaAB0AHQAcAA6AC8ALwBkAHkAcwBsAGUAeABpAGMAZgBvAG4AdABzAC4AYwBvAG0ALgAgJmEAMgAwADEAMgAgAGIAeQAgAEEAYgBlAGwAYQByAGQAbwAgAEcAbwBuAHoAYQBsAGUAegAuACAAQwBvAHAAeQBpAG4AZwAgAGkAcwAgAGEAbgAgAGEAYwB0ACAAbwBmACAAbABvAHYAZQAuACAAUABsAGUAYQBzAGUAIABjAG8AcAB5AC4ACgBCAGkAdABzAHQAcgBlAGEAbQAgAGwAaQBjAGUAbgBzAGUAIABhAHYAYQBpAGwAYQBiAGwAZQAgAGgAZQByAGUAOgAgAGgAdAB0AHAAOgAvAC8AbwBwAGUAbgBkAHkAcwBsAGUAeABpAGMALgBvAHIAZwAvAGwAZQBnAGEAbAAvAE8AcABlAG4ARAB5AHMAbABlAHgAaQBjAEIAbwBsAGQAMgAuADAAMAAxADsAVQBLAFcATgA7AE8AcABlAG4ARAB5AHMAbABlAHgAaQBjAC0AQgBvAGwAZABPAHAAZQBuAEQAeQBzAGwAZQB4AGkAYwAgAEIAbwBsAGQAVgBlAHIAcwBpAG8AbgAgADIALgAwADAAMQA7AFAAUwAgADAAMAAyAC4AMAAwADEAOwBoAG8AdABjAG8AbgB2ACAAMQAuADAALgA3ADAAOwBtAGEAawBlAG8AdABmAC4AbABpAGIAMgAuADUALgA1ADgAMwAyADkATwBwAGUAbgBEAHkAcwBsAGUAeABpAGMALQBCAG8AbABkAEEAYgBlAGwAYQByAGQAbwAgAEcAbwBuAHoAYQBsAGUAegBoAHQAdABwADoALwAvAGEAYgBiAGkAZQBjAG8AZAAuAGUAcwBGAG8AbgB0AHMAIABhAHIAZQAgAKkAIABCAGkAdABzAHQAcgBlAGEAbQAuACAATwBwAGUAbgBEAHkAcwBsAGUAeABpAGMAIABjAGgAYQBuAGcAZQBzACAAYQBuAGQAIABhAGQAZABpAHQAaQBvAG4AYQBsACAAZwBsAHkAcABoAHMAIABiAHkAIABBAGIAZQBsAGEAcgBkAG8AIABHAG8AbgB6AGEAbABlAHoAIABhAHIAZQAgAGwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAGEAIABDAHIAZQBhAHQAaQB2AGUAIABDAG8AbQBtAG8AbgBzACAAQQB0AHQAcgBpAGIAdQB0AGkAbwBuACAAMwAuADAAIABVAG4AcABvAHIAdABlAGQAIABMAGkAYwBlAG4AcwBlAC4ACgBCAGEAcwBlAGQAIABvAG4AIABhACAAdwBvAHIAawAgAGEAdAAgAGgAdAB0AHAAOgAvAC8AZAB5AHMAbABlAHgAaQBjAGYAbwBuAHQAcwAuAGMAbwBtAC4AICZhADIAMAAxADIAIABiAHkAIABBAGIAZQBsAGEAcgBkAG8AIABHAG8AbgB6AGEAbABlAHoALgAgAEMAbwBwAHkAaQBuAGcAIABpAHMAIABhAG4AIABhAGMAdAAgAG8AZgAgAGwAbwB2AGUALgAgAFAAbABlAGEAcwBlACAAYwBvAHAAeQAuAAoAQgBpAHQAcwB0AHIAZQBhAG0AIABsAGkAYwBlAG4AcwBlACAAYQB2AGEAaQBsAGEAYgBsAGUAIABoAGUAcgBlADoAIABoAHQAdABwADoALwAvAG8AcABlAG4AZAB5AHMAbABlAHgAaQBjAC4AbwByAGcALwBsAGUAZwBhAGwALwAAAAMAAAADAAACFAABAAAAAAAcAAMAAQAAAhQABgH4AAAACQD3AAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAAACEAIUAhwCJAJEAlgCcAKEAoACiAKQAowClAKcAqQCoAKoAqwCtAKwArgCvALEAswCyALQAtgC1ALoAuQC7ALwA5gBwAGMAZABoAOgAdgCfAG4AagDuAHQAaQD6AIYAmAD3AHEA+wD8AGYAdQDwAPMA8gDdAPgAawB6AAAApgC4AH8AYgBtAPYA1AD5APEAbAB7AOkAYQCAAIMAlQDLAMwA3gDfAOMA5ADgAOEAtwD9AL8A0QDtAgsA6wDsAP4A/wDnAHcA4gDlAOoAggCKAIEAiwCIAI0AjgCPAIwAkwCUAAAAkgCaAJsAmQDIANUA2wBvANcA2ADZAHgA3ADaANYABASSAAAAmACAAAYAGAAAAH4ArACtAP8BBwETARsBIwErATMBNwFIAU0BWwFhAWsBfgGSAaEBsAHcAd8B5wH/AhsCKwLHAt0DCQMbAyMDJgMtAzEDwB4FHg8eEx4lHi8eNx4/HkceTR5THmMecR6FHpMe+SAUIBogHiAiICYgMCA6IEQgrCEiISYiAiIGIg8iEiIVIhoiHiIrIkgiYCJlJcr7Av//AAAAAAAgAKAArQCuAQABCgEWAR4BJgEuATYBOQFKAVABXgFiAW4BkgGgAa8BzQHeAeYB/gIYAigCxgLYAwkDGwMjAyYDLQMxA8AeBB4MHhIeJB4uHjYePB5EHkoeUB5iHmwegB6SHqAgEyAYIBwgICAmIDAgOSBEIKwhIiEmIgIiBiIPIhEiFSIZIh4iKyJIImAiZCXK+wH//wAB/+L/wQFd/8AAAAAAAAAAAAAAAAAAAAAAAAAAAP9vAAAAAP9CAAAAAAAAAAAAAAAAAAAAAP4P/f//B/72/uz+6P7g/uH9HQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODL4Mjgx+DG4MPguuCy4KnhX9/M38ne7t7r3uPe4t/33tze2d7N3rHemt6X2zMF/QABAAAAAAAAAAAAAACOAJwArgC4AMIAzADWANgA9gD8AAABEAEiAAABQAFCAUQBYgFkAWYBaAFuAAAAAAAAAAAAAAAAAAAAAAAAAWIBZAFqAWwBbgFwAXIBeAF+AYQBigGMAZYBoAGiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAGZAQkBigEZAZoAwADBARsBnADCAMMBHAGdAR4AxAErAasBKAGoASwBrAEhAaEAxQDGATABsAEvAa8BMQGxAToBugE4AbgBOQG5AMcAyAEzAbcBOwG7ATwBvAE/Ab8BPQG9AUABwADJAMoBQwHDAUYBxgFEAcQBSQHJAVoB2gFZAdkAywDMAV8B3wFhAeEBYAHgAWIB4gFnAecBZgHmAWUB5QF9Af0BegH6AXwB/AF5AfkBewH7AX8B/wGCAgIA0QGHAgcBiAIIANIA0wFTAdMBcwHzAQ8BkAE0AbMBSgHKAWwB7AFwAfABbQHtAW4B7gFvAe8BFQGWAS4BrgFdAd0BYwHjAWkB6QEiAaIBUAHQARoBmwEfAZ8BIAGgAR0BngEyAbIBNQG0AUEBwQE+Ab4BQgHCAUcBxwFIAcgBRQHFAV4B3gFcAdwBWwHbAWQB5AFqAeoBawHrAWgB6AGBAgEBfgH+AYACAAGJAgkBFgGXARcBmAEQAZEBEgGTARMBlAEUAZUBEQGSAQoBiwEMAY0BDQGOAQ4BjwELAYwBKQGpASoBqgEtAa0BIwGjASUBpQEmAaYBJwGnASQBpAE3AbYBNgG1AVEB0QFSAdIBSwHLAU0BzQFOAc4BTwHPAUwBzAFUAdQBVgHWAVcB1wFYAdgBVQHVAXEB8QFyAfIBdAH0AXYB9gF3AfcBeAH4AXUB9QGEAgQBgwIDAYUCBQGGAgYAAAADAAAAAAAA/0QAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAgABAQEST3BlbkR5c2xleGljLUJvbGQAAQEBKflJAPlKAflLAvgUBPtpDANUHNtyHATrHASRBRwZrw8cHbsRwxxwXBIBMQIAAQAFAAwAEgAYAB4AJAAuADQAOgBAAEgAUABSAF0AYgBnAHAAdwCBAIwAkwCbAKMAqgCzAL8AxwDMANEA1gDbAOAA5QDqAO8A9QD6AQUBEwEiAS0BQAFGAVEBYQFxAYUBlAGkAa0BtAG7AcUBzgHYAd4B5AH0AfsCBQILAhQCKAI4AksCWwJrAnUCfwKIAo8ClgKcAqICrAK4AroCvgLEAs0C1wLeAucC9QL7AwIDDgMUAyQDMAM2AzoDQANGA08DVQNlA2gDcQN7A4cDlwOqA7oDwAPQA+QD7QP0BAEEBgQQBBoEJAQuBDsEQgRQBFsEZgRyBH4EhASQBJYEnASoBK4EtgS/BMMEygTUBOQE7QTzBQEFDwUdBSIFMQU7BUQFTgVcBWkFcwV6BYQFiwWYBaMFqAWuBbQFugXDBcwF1wXdBecF8QX3Bf0GCwYUBh8GJQY0BjoGRQZQBmQGdAaHBpcGpwawBr8GyQbQBtkG4AbqBvoHAAcHBxAHFgcgBzAHRAdUB2cHdweAB4oHkQebB6EHqAe0B7oHvgfIB84H1wfgB+4H8Af6CAEICAgOCBoIIAgmCDIIQghGCE8IVQhbCGsIcQh9CIcIkAiTCKMIswi5CMwI4AjwCPcJAAkFCQ8JHAkmCTQJPglICVUJYQloCXQJfwmKCZAJlgmiCasJtwm9CcEJxwnXCd4J5gnvCf0KCwoRChsKKQo4CkEKSwpQCloKZApxCn8KhgqQCp0KpAqqCq8KtQrACsYKzwraCuAK6grzCvwLAgsICxILHAsjCycLLgs1C0ILTgtVC1wLYwy/DNBOVUxMdW5pMDBBMGNhY3V0ZUNhY3V0ZUNjYXJvbmNjYXJvbklkb3RhY2NlbnRnYnJldmVkY3JvYXRHYnJldmVzY2VkaWxsYVNjZWRpbGxhcGlwYXJ0aWFsZGlmZk9tZWdhRGVsdGFzdW1tYXRpb25wcm9kdWN0bWlkZG90LjAwMWFwcHJveGVxdWFscmFkaWNhbGludGVncmFsaW5maW5pdHlsb3plbmdlbGVzc2VxdWFsZ3JlYXRlcmVxdWFsbm90ZXF1YWxjNjQ2MGM2NDU5YzY0NjZjNjQ2M2M2NDYxYzY0NjJjNjQ2N2M2NDY5QWJyZXZlYzY0NjhBYnJldmVncmF2ZUFicmV2ZWRvdGJlbG93QWJyZXZlaG9va2Fib3ZlQWJyZXZlYWN1dGVBY2lyY3VtZmxleGRvdGJlbG93QWNhcm9uQWJyZXZldGlsZGVBY2lyY3VtZmxleGFjdXRlQWNpcmN1bWZsZXhncmF2ZUFjaXJjdW1mbGV4aG9va2Fib3ZlQWRpZXJlc2lzbWFjcm9uQWNpcmN1bWZsZXh0aWxkZUFkb3RiZWxvd0FvZ29uZWtBbWFjcm9uQWhvb2thYm92ZUJkb3RiZWxvd0Nkb3RhY2NlbnREY2Fyb25EY3JvYXREY2lyY3VtZmxleGJlbG93dW5pMDIyOERsaW5lYmVsb3dFY2Fyb25EZG90YmVsb3dFY2lyY3VtZmxleGhvb2thYm92ZUVjaXJjdW1mbGV4YWN1dGVFY2lyY3VtZmxleGRvdGJlbG93RWNpcmN1bWZsZXhncmF2ZUVjaXJjdW1mbGV4dGlsZGVFaG9va2Fib3ZlRWRvdGFjY2VudEVkb3RiZWxvd0VtYWNyb25Fb2dvbmVrRXRpbGRlR2Nhcm9uR2RvdGFjY2VudEdjb21tYWFjY2VudElKSGJhckljYXJvbkhkb3RiZWxvd0lob29rYWJvdmVJbWFjcm9uSWRvdGJlbG93SWRpZXJlc2lzYWN1dGVJdGlsZGVJb2dvbmVrS2NvbW1hYWNjZW50TGFjdXRlTGNpcmN1bWZsZXhiZWxvd0xjb21tYWFjY2VudExjYXJvbkxkb3ROY2Fyb25NYWN1dGVMZG90YmVsb3dOYWN1dGVOY2lyY3VtZmxleGJlbG93RW5nTmRvdGJlbG93TmRvdGFjY2VudE5jb21tYWFjY2VudE9jaXJjdW1mbGV4Z3JhdmVPY2lyY3VtZmxleGRvdGJlbG93T2NpcmN1bWZsZXhhY3V0ZU9jYXJvbk9jaXJjdW1mbGV4dGlsZGVPY2lyY3VtZmxleGhvb2thYm92ZU9kb3RiZWxvd3VuaTAyMkFPaG9ybmRvdGJlbG93T2hvcm5PaG9ybmFjdXRlT2hvb2thYm92ZU9ob3JuZ3JhdmVPaG9ybnRpbGRlT2h1bmdhcnVtbGF1dE9tYWNyb25PaG9ybmhvb2thYm92ZU90aWxkZWFjdXRlT3NsYXNoYWN1dGVPbWFjcm9uYWN1dGVPbWFjcm9uZ3JhdmVSYWN1dGVTY29tbWFhY2NlbnRTYWN1dGVSY2Fyb25SY29tbWFhY2NlbnRUY2Fyb25UY2VkaWxsYVNkb3RiZWxvd1RiYXJ1bmkwMjFBVGxpbmViZWxvd1RjaXJjdW1mbGV4YmVsb3dUZG90YmVsb3dVY2Fyb25VZGllcmVzaXNhY3V0ZVVkaWVyZXNpc2dyYXZlVWRpZXJlc2lzY2Fyb25VaG9yblVkaWVyZXNpc21hY3JvblVob29rYWJvdmVVZG90YmVsb3dVaG9ybmdyYXZlVWhvcm5ob29rYWJvdmVVaG9ybmRvdGJlbG93VWhvcm5hY3V0ZVVvZ29uZWtVaG9ybnRpbGRlVW1hY3JvblVodW5nYXJ1bWxhdXRXY2lyY3VtZmxleFVyaW5nVXRpbGRlV2FjdXRlV2dyYXZlWWRvdGJlbG93V2RpZXJlc2lzWWNpcmN1bWZsZXhZZ3JhdmVaZG90YWNjZW50WWhvb2thYm92ZVl0aWxkZVphY3V0ZWFicmV2ZWRvdGJlbG93WmRvdGJlbG93YWJyZXZlYWN1dGVhYnJldmVhYnJldmVob29rYWJvdmVhY2Fyb25hYnJldmVncmF2ZWFicmV2ZXRpbGRlYWNpcmN1bWZsZXhob29rYWJvdmVhY2lyY3VtZmxleHRpbGRlYWNpcmN1bWZsZXhkb3RiZWxvd2FjaXJjdW1mbGV4YWN1dGVhY2lyY3VtZmxleGdyYXZlYWRvdGJlbG93YWRpZXJlc2lzbWFjcm9uYWhvb2thYm92ZWFtYWNyb25iZG90YmVsb3dhb2dvbmVrY2RvdGFjY2VudGRjaXJjdW1mbGV4YmVsb3dkY2Fyb251bmkwMjI5ZGRvdGJlbG93ZWNhcm9uZGxpbmViZWxvd2VjaXJjdW1mbGV4YWN1dGVlY2lyY3VtZmxleGhvb2thYm92ZWVjaXJjdW1mbGV4dGlsZGVlY2lyY3VtZmxleGRvdGJlbG93ZWNpcmN1bWZsZXhncmF2ZWVkb3RiZWxvd2Vob29rYWJvdmVlbWFjcm9uZWRvdGFjY2VudGV0aWxkZWVvZ29uZWtnY29tbWFhY2NlbnRnY2Fyb25oYmFyZ2RvdGFjY2VudGljYXJvbmhkb3RiZWxvd2lkb3RiZWxvd2lkaWVyZXNpc2FjdXRlaWppaG9va2Fib3ZlaW9nb25la2ltYWNyb25pdGlsZGVrY29tbWFhY2NlbnRsYWN1dGVsY2Fyb25sY29tbWFhY2NlbnRsY2lyY3VtZmxleGJlbG93bGRvdGxkb3RiZWxvd21hY3V0ZW5hY3V0ZW5jaXJjdW1mbGV4YmVsb3duY2Fyb25uY29tbWFhY2NlbnRuZG90YWNjZW50bmRvdGJlbG93ZW5nb2NpcmN1bWZsZXhncmF2ZW9jaXJjdW1mbGV4YWN1dGVvY2Fyb25vY2lyY3VtZmxleGRvdGJlbG93b2NpcmN1bWZsZXhob29rYWJvdmVvY2lyY3VtZmxleHRpbGRldW5pMDIyQm9kb3RiZWxvd29ob3Jub2hvcm5hY3V0ZW9ob3JuZG90YmVsb3dvaG9va2Fib3Zlb2hvcm5ob29rYWJvdmVvaG9ybnRpbGRlb2hvcm5ncmF2ZW9odW5nYXJ1bWxhdXRvbWFjcm9uYWN1dGVvbWFjcm9ub21hY3JvbmdyYXZlb3NsYXNoYWN1dGVvdGlsZGVhY3V0ZXJjYXJvbnJhY3V0ZXJjb21tYWFjY2VudHNkb3RiZWxvd3Njb21tYWFjY2VudHNhY3V0ZXRiYXJ0Y2Fyb250Y2lyY3VtZmxleGJlbG93dW5pMDIxQnRjZWRpbGxhdGRvdGJlbG93dWRpZXJlc2lzYWN1dGV1ZGllcmVzaXNjYXJvbnVjYXJvbnRsaW5lYmVsb3d1ZGllcmVzaXNncmF2ZXVkaWVyZXNpc21hY3JvbnVkb3RiZWxvd3Vob29rYWJvdmV1aG9ybnVob3JuZ3JhdmV1aG9ybmFjdXRldWhvcm5kb3RiZWxvd3Vob3JuaG9va2Fib3ZldW9nb25la3Vob3JudGlsZGV1aHVuZ2FydW1sYXV0dW1hY3JvbnV0aWxkZXVyaW5nd2FjdXRld2NpcmN1bWZsZXh3Z3JhdmV3ZGllcmVzaXN5Y2lyY3VtZmxleHlncmF2ZXlob29rYWJvdmV5ZG90YmVsb3d6ZG90YmVsb3d5dGlsZGV6YWN1dGV6ZG90YWNjZW50c29mdGh5cGhlbnVuaTAzMjZFdXJvdW5pMjIxNXVuaTAzMkRob29rYWJvdmVjb21iZG90YmVsb3djb21idW5pMDMxQnVuaTAzMzEwMDIuMDAxT3JpZ2luYWwgRm9udHMgYXJlIMKpIEJpdHN0cmVhbS4gT3BlbkR5c2xleGljIGNoYW5nZXMgYW5kIGFkZGl0aW9uYWwgZ2x5cGhzIGJ5IEFiZWxhcmRvIEdvbnphbGV6IGFyZSBsaWNlbnNlZCB1bmRlciBhIENyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gMy4wIFVucG9ydGVkIExpY2Vuc2UuCkJhc2VkIG9uIGEgd29yayBhdCBodHRwOi8vZHlzbGV4aWNmb250cy5jb20uIOKZoTIwMTIgYnkgQWJlbGFyZG8gR29uemFsZXouIENvcHlpbmcgaXMgYW4gYWN0IG9mIGxvdmUuIFBsZWFzZSBjb3B5LgpCaXRzdHJlYW0gbGljZW5zZSBhdmFpbGFibGUgaGVyZTogaHR0cDovL29wZW5keXNsZXhpYy5vcmcvbGVnYWwvT3BlbkR5c2xleGljIEJvbGQAfAIAAQBiAKwA8wEyAU8BVgGBAYcB1QHpAf8CTgJdAnAChgKPAqACowKmAsoC9QMKAxoDYgOAA5UDmwPMA9EEYQTpBQsFDgUbBSsFMgU1BUIFSQVQBVMFugYU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AYcAAAE2AEkB9wBJAzUASQJwAEkDxwBJA1EASQEFAEkBuwBJAbsASQJfAEkC/wBJAV8ASQGyAEkBJgAxAhAASQKNAEkCTABJAmcASQJ3AEkCpwBJAm8ASQKNAEkCaABJApwASQKMAEkBLgBJAVIASQMbAEkC/wBJAxsASQIeAEkD3gBJA0MASQKsAEkC5QBJAv0ASQJ1AEkCSgBJAxQASQLRAEkBKABJAdkASQMBAEkCbABJA2EASQLNAEkDOABJAo4ASQNvAEkC3gBJAp4ASQMBAEkCyQBJA0EASQQuAEkDLABJAxcASQLtAEkBeABJAeIASQF4AEkDMwBJApwASQGxAEkCZgBJAoAAUwJLAEkCiABJAosASQHlAEkCiABJAnYASQENAEkBqwBJAqUASQFJAEkDswBJAoQASQKLAEkCiQAxAvIASQHeAEkCPQBJAfUASQJnAEkCuABJA28ASQLiAEkCugBJAlUASQIoAEkBLwBJAh8ASQL/AEkDWAAAATAASQJPAEkChgBJAsMASQLeAEkBBABJAjQASQHZAEkDWgBJAfsASQJxAEkDDgBJA1oASQHHAEkB2ABJAv8ASQHIAEkB0QBJAdEASQK5AEkCvgBJARcASQF0AEkBuwBJAhcASQJsAEkD2wBJA9gASQOcAEkCIgBJA0MASQNDAEkDQwBJA0MASQNDAEkDQgBJBB0ASQLlAEkCdQBJAnUASQJ1AEkCdQBJAawASQGQAEkB9ABJAcYASQNaAEkCzQBJAzgASQM4AEkDOABJAzgASQM4AEkCvQBJA1MASQLTAEkCyQBJAskASQLJAEkDFwBJAnYASQKgAEkCZgBJAm4ASQJmAEkCZgBJAmYASQJmAEkD4gBJAksASQKLAEkCiwBJAosASQKLAEkBsQBJAdEASQH5AEkB2QBJAosASQKEAEkCkABJAosASQKLAEkCiwBJAosASQMWAEkCvgBJAmcASQJnAEkCZwBJAmcASQK6AEkCgABJAroASQLlAEkCaQBJAuUASQJLAEkCxQBJAxQASQKIAEkBMgBJAQsASQLWAEkBzgBJBD0ASQQNAEkCngBJAmoASQKmAEkCgwB6AxcASQLtAEkCsgCnAvMASQH5AEkB+QBJAdcASQEUAEkBsQBJAWEASQHkAEkCEgBJAu0ASQKJAEkEXABJAWAASQFfAEkBQgBJAkoASQIwAEkCTwBJAlYASQJWAEkBxgBJA7cASQU1AEkBjQBJAYwASQIQAEkDGgBJA0QASQI+AEkDPgBJAusASQMOAEkC/wBJATMASQLyAEkC+ABJAnEASQL/AEkC/wBJAv8ASQL/AEkCgwBJAqgASQLJAEkBxgBJAYwASQHkAEkBjABJAfQASQH0AEkB8wBJAdcASQEUAEkDQwBJA0MASQNDAEkDQwBJA0MASQNDAEkDQwBJA0MASQNDAEkDQwBJA0MASQNDAEkDQwBJA0MASQNDAEkDQwBJA0MASQKsAEkC5QBJAv0ASQL9AEkC/QBJAv0ASQL9AEkCdQBJAnUASQJ1AEkCdQBJAnUASQJ1AEkCdQBJAnUASQJ1AEkCdQBJAnUASQJ1AEkCdQBJAxQASQMUAEkDFABJAtEAHwLRAEkDAQBJASj/6AEo//cBKABJASgASQEoAAABKAAuASj/8gMBAEkCbABJAmwASQJsAEkCbABJAmwASQJsAEkDYQBJAs0ASQLNAEkCzQBJAs0ASQLNAEkCzQBJAs0ASQM4AEkDOABJAzgASQM4AEkDOABJAzgASQM4AEkDOABJAzgASQM4AEkDOABJAzgASQM4AEkDOABJAzgASQM4AEkDOABJAzgASQM4AEkDUwBJAzgASQLeAEkC3gBJAt4ASQKeAEkCngBJAp4ASQMBAEkDAQBJAwEASQMBAEkDAQBJAwEASQMBAEkCyQBJAskASQLJAEkCyQBJAskASQLJAEkCyQBJAskASQLJAEkCyQBJAskASQLJAEkCyQBJAskASQLJAEkCyQBJAskASQLJAEkELgBJBC4ASQQuAEkELgBJAxcASQMXAEkDFwBJAxcASQMXAEkC7QBJAu0ASQLtAEkCZgBJAmYASQJmAEkCZgBJAmYASQJmAEkCZgBJAmYASQJmAEkCZgBJAmYASQJmAEkCZgBJAmYASQJmAEkCZgBJAmYASQKAAFMCSwBJAogASQKIAEkCiABJAogASQKLAEkCiwBJAosASQKLAEkCiwBJAosASQKLAEkCiwBJAosASQKLAEkCiwBJAosASQKLAEkCiABJAogAEwKIAEkCdgAfAnYASQEL/9EBC//gAQ0ASQELAEkCuABJAQv/6QELABoBC//bAqUASQFJAEkBSQBJAUn/yQFJABcBSQBJAUkANAOzAEkChABJAoQASQKEAEkChABJAoQASQKEAEkChABJAosASQKLAEkCiwBJAosASQKLAEkCiwBJAosASQKLAEkCiwBJAosASQKLAEkCiwBJAosASQKLAEkCiwBJAosASQKLAEkCiwBJAosASQK+AEkCiwBJAd4ASQHeAAQB3gBJAj0ASQI9AEkCPQBJAfUASQH1AEkB9QBJAfUARgH1AEkB9QBJAfUASQJnAEkCZwBJAmcASQJnAEkCZwBJAmcASQJnAEkCZwBJAmcASQJnAEkCZwBJAmcASQJnAEkCZwBJAmcASQJnAEkCZwBJAmcASQNvAEkDbwBJA28ASQNvAEkCugBJAroASQK6AEkCugBJAroASQJVAEkCVQBJAlUASQGyAEkC1QBJAsUASQAA/+EAEwBJAFgAQgACAAAAAQAAAAwAAAAAAAAAAgAOACMAPAABAEMAXAABAGsAawABAHUAdQABAHoAegABAIAAlgABAJgAtgABALgA0wABAN0A3QABAO8A7wABAPEA8QABAP4A/wACAQkCCQABAg0CEgADAAEAAAAKAFoBEAADREZMVAAUZ3JlawAobGF0bgA8AAQAAAAA//8ABQAAAAMABgAJAAwABAAAAAD//wAFAAEABAAHAAoADQAEAAAAAP//AAUAAgAFAAgACwAOAA9hYWx0AFxhYWx0AGJhYWx0AGhmcmFjAG5mcmFjAHRmcmFjAHpsaWdhAIBsaWdhAIZsaWdhAIxvcmRuAJJvcmRuAJhvcmRuAJ5zdXBzAKRzdXBzAKpzdXBzALAAAAABAAAAAAABAAAAAAABAAAAAAABAAIAAAABAAIAAAABAAIAAAABAAQAAAABAAQAAAABAAQAAAABAAMAAAABAAMAAAABAAMAAAABAAEAAAABAAEAAAABAAEABgAOABYAHgAmADAAOAABAAAAAQCoAAEAAAABACoABAAAAAEALgAGAAAAAgBSAGQABAAAAAEAbAABAAAAAQCSAAIAmAADAHkAcgBzAAEAlgACAAoAIAACAAYADgB9AAMAEQAUAHwAAwARABYAAQAEAH4AAwARABYAAwABAHIAAQB8AAAAAQAAAAUAAwABAGAAAQByAAAAAQAAAAUAAQBoAAEACAACAAYADAD+AAIASwD/AAIATgACAFQABwB5AHIAcwBrAHoAawB6AAIAUgAEAGsAegBrAHoAAgABABMAFQAAAAEAAgATABUAAgABABIAGwAAAAEAAgAjAEMAAQACADEAUQABAAEASAABAAcAEwAUABUAIwAxAEMAUQABAAQAIwAxAEMAUQABAAAACgBIAJIAA0RGTFQAFGdyZWsAImxhdG4AMAAEAAAAAP//AAIAAAADAAQAAAAA//8AAgABAAQABAAAAAD//wACAAIABQAGY3BzcAAmY3BzcAAsY3BzcAAybWFyawA4bWFyawA+bWFyawBEAAAAAQAAAAAAAQAAAAAAAQAAAAAAAQABAAAAAQABAAAAAQABAAIABgAOAAEAAAABABAABAAAAAEAEgABCPYABQAFAAoAAQlECU4AAwAMACYABgAABzAAAAc2AAAHPAABB0gAAgdOAAAHQgEuBzoHQAjAB0wHRgjAB1IHWAjAB14HZAjAB3AHagjAB3YHfAjACMAHggjACMAHiAjAB5QHjgjAB5oHoAjACMAHpgjAB7IHrAjACMAHvge4B8oHxAjAB9YH0AjAB9wH4gjACMAH7gfoCMAH9AjACMAH+gjACMAIAAjACMAIBgjAB9YIDAjACBIIwAjACBgIHgjACMAIJAjACMAIKgjACDAIwAjACDwINgjACEgIQgjACMAIBghOCFoIVAjACGYIYAjACGwIwAjACMAIeAhyCMAIfgjACMAIhAjACMAIigjACMAIkAjACMAIlgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAInAjACMAIogjACMAIqAjACMAIrgjACMAItAjACMAIAAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjABzoHQAjAB0wHRgjAB1IHWAjAB1IHWAjAB1IHWAjAB1IHWAjAB1IHWAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB14HZAjAB3AHagjAB3AHagjAB3AHagjAB3YHfAjAB3YHfAjACMAIugjACMAHggjACMAHggjACMAHggjACMAHggjACMAHggjACMAHggjACMAHggjAB5QHjgjAB5oHoAjAB5oHoAjAB5oHoAjAB5oHoAjAB5oHoAjAB5oHoAjACMAHpgjAB7IHrAjAB7IHrAjAB7IHrAjAB7IHrAjAB7IHrAjAB7IHrAjAB7IHrAjACMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAHvge4CMAIlgjACMAHvge4B8oHxAjAB8oHxAjAB8oHxAjAB9YH0AjAB9YH0AjAB9YH0AjAB9wH4gjAB9wH4gjAB9wH4gjAB9wH4gjAB9wH4gjAB9wH4gjAB9wH4gjACMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH7gfoCMAH9AjACMAH9AjACMAH9AjACMAH9AjACMAH+gjACMAH+gjACMAH+gjACMAH+gjACMAH+gjACMAIAAjACMAIAAjACMAIAAjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjACMAIBgjAB9YIDAjACBIIwAjACBIIwAjACBIIwAjACBIIwAjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACBgIHgjACMAIJAjACMAIJAjACMAIJAjACMAIKgjACMAIKgjACMAIqAjACMAIqAjACMAIqAjACMAIqAjACMAIqAjACMAIqAjACDAIwAjACDwINgjACDwINgjACDwINgjACDwINgjACDwINgjACDwINgjACEgIQgjACEgIQgjACEgIQgjACEgIQgjACEgIQgjACEgIQgjACMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIBghOCMAIogjACMAIBghOCFoIVAjACFoIVAjACFoIVAjACGYIYAjACGYIYAjACGYIYAjACGwIwAjACGwIwAjACGwIwAjACGwIwAjACGwIwAjACGwIwAjACGwIwAjACMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIeAhyCMAIfgjACMAIfgjACMAIfgjACMAIfgjACMAIhAjACMAIhAjACMAIhAjACMAIhAjACMAIhAjACMAIigjACMAIigjACMAIigjAAAEAkAAWAAEAdP/xAAEAjf/7AAEAmP/uAAEAhgI3AAEAQgGPAAEBn//7AAEBoQLZAAEBigLZAAEBigAAAAEBOwABAAEBWQLZAAEBMgAAAAEBMgLZAAEBnQLZAAEBnQAAAAEBZv/1AAEBaALZAAEAmwLZAAEBFwLZAAEBWwLZAAEBWwAAAAEBLP/gAAEA8ALZAAEBywKXAAEBbwLZAAEBbwAAAAECswH7AAEBnALZAAEBMwLZAAEBMwAAAAEBQwLZAAEBQwAAAAEBgAAAAAEBgALZAAECXwIjAAEBZALZAAECEwLZAAEBiwLZAAEBeQLZAAEBRQIjAAEBQwIjAAEBLv/CAAEBbP/zAAEBUAIjAAEBUQIjAAEBBAIjAAEBEAAAAAEAsgL4AAEAeAAAAAEBNAIjAAEBNAAAAAEB9AFZAAEAtwIjAAEAtwAAAAEBEwIjAAEBEwAAAAEA9QAAAAECBAGDAAEBOQIjAAEBuAIjAAEBLQIjAAEBMgIjAAECRALZAAEBqQLZAAEB8AIjAAEBXwIjAAEAhAIjAAECMQLZAAECBgIjAAECPwLZAAEAAAAAAAIADgAjADwAAACAAJYAGgCYAJ4AMQDAAMAAOADCAMIAOQDFAMUAOgDHAMcAOwDJAMkAPADLAMsAPQDNAM0APgDPAM8APwDRANIAQADvAO8AQgDxAPEAQwACAAECDQISAAAAAgAcACMAIwAAACUAJwABACkAMQAEADQANwANADkAOQARADsAPAASAEMAQwAUAEUARwAVAEkASgAYAE0ATgAaAFAAUQAcAFQAVwAeAFkAWQAiAFsAXAAjAIYAhgAlAJgAmAAmAKAApgAnALgAuAAuAMgAyAAvAMsAzAAwANIA0gAyAQkBGQAzARsBmgBEAZwBtADEAbYBtgDdAbgBwQDeAcMByADoAcoCCQDu";

/***/ }),

/***/ "./src/judul.svg":
/*!***********************!*\
  !*** ./src/judul.svg ***!
  \***********************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMTIsNTZWODhhMTIsMTIsMCwwLDEtMjQsMFY2OEgxNDBWMTg4aDIwYTEyLDEyLDAsMCwxLDAsMjRIOTZhMTIsMTIsMCwwLDEsMC0yNGgyMFY2OEg2OFY4OGExMiwxMiwwLDAsMS0yNCwwVjU2QTEyLDEyLDAsMCwxLDU2LDQ0SDIwMEExMiwxMiwwLDAsMSwyMTIsNTZaIj48L3BhdGg+PC9zdmc+";

/***/ }),

/***/ "./src/toggle.png":
/*!************************!*\
  !*** ./src/toggle.png ***!
  \************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"accessibility-widget": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/accessibility-widget.ts ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accessibility_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessibility.css */ "./src/accessibility.css");
/* harmony import */ var _toggle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle.png */ "./src/toggle.png");
/* harmony import */ var _judul_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./judul.svg */ "./src/judul.svg");
const allowedDomains = [
    "jogjaprov.go.id",
    "www.jogjaprov.go.id",
    "localhost",
    "127.0.0.1",
];
if (!allowedDomains.includes(window.location.hostname)) {
    console.warn("Script hanya diizinkan untuk domain jogjaprov.go.id.");
    throw new Error("Unauthorized domain: " + window.location.hostname);
}



const safeModifyDOMMethods = () => {
    if (typeof Node === "function" && Node.prototype) {
        const originalRemoveChild = Node.prototype.removeChild;
        const originalInsertBefore = Node.prototype.insertBefore;
        Node.prototype.removeChild = function (child) {
            if (!(child instanceof Node)) {
                console.error("removeChild: argument is not a Node", child);
                return child;
            }
            if (child.parentNode !== this) {
                console.error("Cannot remove a child from a different parent", child, this);
                return child;
            }
            return originalRemoveChild.call(this, child);
        };
        Node.prototype.insertBefore = function (newNode, referenceNode) {
            if (referenceNode &&
                (!(referenceNode instanceof Node) || referenceNode.parentNode !== this)) {
                console.error("Cannot insert before a reference node from a different parent", referenceNode, this);
                return newNode;
            }
            return originalInsertBefore.call(this, newNode, referenceNode);
        };
    }
};
class AccessibilityWidget extends HTMLElement {
    constructor() {
        super(...arguments);
        this.fontSize = 100;
        this.imagesHidden = false;
        this.speechEnabled = false;
        this.speechSynthesis = window.speechSynthesis;
    }
    connectedCallback() {
        // Lindungi metode native DOM jika diperlukan
        var _a, _b, _c, _d, _e, _f, _g;
        // Render UI Accessibility Widget
        (_a = this.render) === null || _a === void 0 ? void 0 : _a.call(this);
        // Setup event listener seperti toggle, tombol, dsb
        (_b = this.setupEventListeners) === null || _b === void 0 ? void 0 : _b.call(this);
        // Setup pembaca teks yang diseleksi (jika tersedia)
        (_c = this.setupTextSelectionReader) === null || _c === void 0 ? void 0 : _c.call(this);
        // Ambil bahasa tersimpan, atau default ke 'id'
        const savedLang = localStorage.getItem("selectedLang") || "id";
        localStorage.setItem("selectedLang", savedLang); // simpan ulang jika belum ada
        // Load Google Translate
        (_d = this.loadGoogleTranslate) === null || _d === void 0 ? void 0 : _d.call(this);
        // Jika ingin render manual elemen Google Translate (opsional)
        (_e = this.renderGoogleTranslateElement) === null || _e === void 0 ? void 0 : _e.call(this);
        // ✅ Tambahan: Load konten user dan produk dummy
        (_f = this.loadUserList) === null || _f === void 0 ? void 0 : _f.call(this);
        (_g = this.fetchAPIContent) === null || _g === void 0 ? void 0 : _g.call(this);
    }
    render() {
        this.innerHTML = `
      <div id="accessibility-toggle" class="accessibility-toggle">
        <button class="toggle-button">
          <img src="${_toggle_png__WEBPACK_IMPORTED_MODULE_1__}" alt="Toggle Accessibility Menu"/>
        </button>
      </div>
      <div id="accessibility-menu" class="accessibility-menu invisible opacity-0">
        <div class="menu-header">
          <h2 data-i18n="menuTitle">Menu Aksesibilitas</h2>
          <button class="close-btn">×</button>
        </div>

        <div class="menu-body">
        <div class="section">
          <label data-i18n="languageLabel">Pilih Bahasa</label>
          <div id="google_translate_element" class="translate-box"></div>
        </div>

        <div class="section">
          <label for="accessibility-profile">Pilih Profil Aksesibilitas</label>
          <select id="accessibility-profile">
            <option value="">Pilih Profil Aksesibilitas</option>
            <option value="buta-warna">Buta Warna</option>
            <option value="disleksia">Disleksia</option>
            <option value="gangguan-penglihatan">Gangguan Penglihatan</option>
            <option value="tunanetra">Pembaca Layar</option>
            <option value="kognitif">Kognitif & Pembelajaran</option>
            <option value="epilepsi">Kejang & Epilepsi</option>
            <option value="adhd">ADHD</option>
          </select>
        </div>

        <div class="section">
          <label for="widget-position">Posisi Widget</label>
          <select id="widget-position">
            <option value="kiri-bawah">Kiri Bawah</option>
            <option value="kanan-bawah" selected>Kanan Bawah</option>
            <option value="kiri-atas">Kiri Atas</option>
            <option value="kanan-atas">Kanan Atas</option>
            <option value="kiri-tengah">Kiri Tengah</option>
            <option value="kanan-tengah">Kanan Tengah</option>
            <option value="bawah-tengah">Bawah Tengah</option>
            <option value="atas-tengah">Atas Tengah</option>
          </select>
        </div>

        <div class="section">
          <p data-i18n="fontSizeLabel">Sesuaikan Ukuran Font</p>
          <div class="font-controls">
            <button class="btn decrease-font">-</button>
            <span id="fontSizeDisplay">100%</span>
            <button class="btn increase-font">+</button>
          </div>
        </div>

        <div class="section">
          <p data-i18n="adjustContent">Penyesuaian Konten</p>
          <div class="grid-buttons">
            ${this.generateButtons([
            [
                "highlight-title",
                `<img src="${_judul_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="Sorot Judul"/>`,
                "title",
            ],
            ["highlight-links", "🔗", "links"],
            ["dyslexia-font", "🧠", "dyslexia"],
            ["letter-spacing", "↔️", "spacing"],
            ["line-height", "📏", "lineHeight"],
            ["font-weight", "🅱️", "bold"],
        ])}
          </div>
        </div>

        <div class="section">
          <p data-i18n="adjustColor">Penyesuaian Warna</p>
          <div class="grid-buttons">
            ${this.generateButtons([
            ["dark-contrast", "🌑", "dark"],
            ["light-contrast", "🌕", "light"],
            ["high-contrast", "🔳", "contrast"],
            ["high-saturation", "🎨", "saturateHigh"],
            ["low-saturation", "🌫️", "saturateLow"],
            ["monochrome", "⚫", "mono"],
        ])}
          </div>
        </div>

        <div class="section">
          <p data-i18n="tools">Alat</p>
          <div class="grid-buttons">
            <button class="btn toggle-reader toggle-class" data-feature="reader">
              <div class="icon-wrapper">🔈</div>
              <span data-i18n="reader">Pembaca Layar</span>
            </button>
            <button class="btn toggle-images toggle-class">
              <div class="icon-wrapper">🖼️</div>
              <span data-i18n="hideImages">Sembunyikan Gambar</span>
            </button>
            <button class="btn toggle-class" data-class="reading-guide">
              <div class="icon-wrapper">📘</div>
              <span data-i18n="guide">Panduan Membaca</span>
            </button>
            <button class="btn toggle-class" data-class="reading-mask">
              <div class="icon-wrapper">🕶️</div>
              <span data-i18n="mask">Masker Membaca</span>
            </button>
            <button class="btn disable-animations toggle-class">
              <div class="icon-wrapper">⛔</div>
              <span data-i18n="stopAnim">Nonaktifkan Animasi</span>
            </button>
            <button class="btn toggle-class" data-class="big-cursor">
              <div class="icon-wrapper">🖱️</div>
              <span data-i18n="cursor">Kursor Besar</span>
            </button>
          </div>
        </div>

        <div class="section text-center">
          <button class="reset-btn" data-i18n="reset">Atur Ulang Pengaturan</button>
        </div>
         </div>
      </div>
    `;
    }
    generateButtons(buttons) {
        const labels = {
            title: "Sorot Judul",
            links: "Sorot Tautan",
            dyslexia: "Font Disleksia",
            spacing: "Jarak Huruf",
            lineHeight: "Tinggi Baris",
            bold: "Ketebalan Font",
            dark: "Kontras Gelap",
            light: "Kontras Terang",
            contrast: "Kontras Tinggi",
            saturateHigh: "Saturasi Tinggi",
            saturateLow: "Saturasi Rendah",
            mono: "Monokrom",
        };
        return buttons
            .map(([cls, icon, key]) => `
      <button class="btn toggle-class" data-class="${cls}">
        <div class="icon-wrapper">${icon}</div>
        <span data-i18n="${key}">${labels[key]}</span>
      </button>
    `)
            .join("");
    }
    setupTextSelectionReader() {
        document.addEventListener("mouseup", () => {
            var _a;
            if (!this.speechEnabled)
                return;
            const selectedText = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString().trim();
            if (selectedText)
                this.readText(selectedText);
        });
    }
    getSelectedTranslateLang() {
        var _a;
        const frame = document.querySelector("iframe.goog-te-menu-frame");
        if (!frame)
            return "id-ID"; // default bahasa Indonesia
        try {
            const langElement = (_a = frame.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelector(".goog-te-menu2-item-selected span.text");
            if (!langElement)
                return "id-ID";
            const langText = langElement.innerText.toLowerCase();
            // Peta bahasa ke BCP 47 codes yang dikenali speechSynthesis
            const langMap = {
                indonesian: "id-ID",
                english: "en-US",
                japanese: "ja-JP",
                korean: "ko-KR",
                dutch: "nl-NL",
                "chinese (simplified)": "zh-CN",
                "chinese (traditional)": "zh-TW",
                russian: "ru-RU",
                arabic: "ar-SA",
                german: "de-DE",
                spanish: "es-ES",
                italian: "it-IT",
                malay: "ms-MY",
                thai: "th-TH",
                vietnamese: "vi-VN",
                hindi: "hi-IN",
                french: "fr-FR",
                armenian: "hy-AM",
                belarusian: "be-BY",
                bulgarian: "bg-BG",
                catalan: "ca-ES",
                frisian: "fy-NL",
            };
            return langMap[langText] || "id-ID"; // fallback
        }
        catch (_b) {
            return "id-ID";
        }
    }
    readText(text) {
        this.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = this.getSelectedTranslateLang(); // gunakan bahasa aktif
        utterance.rate = 1;
        this.speechSynthesis.speak(utterance);
    }
    setupEventListeners() {
        const $ = (selector) => this.querySelector(selector);
        const $$ = (selector) => this.querySelectorAll(selector);
        const toggleBtn = $(".toggle-button");
        const closeBtn = $(".close-btn");
        const incFont = $(".increase-font");
        const decFont = $(".decrease-font");
        const resetBtn = $(".reset-btn");
        const imgToggle = $(".toggle-images");
        const animDisable = $(".disable-animations");
        const readerToggle = $(".toggle-reader");
        const profileSelect = $("#accessibility-profile");
        const positionSelect = $("#widget-position");
        toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", () => this.toggleMenu());
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => this.toggleMenu());
        incFont === null || incFont === void 0 ? void 0 : incFont.addEventListener("click", () => this.adjustFontSize(10));
        decFont === null || decFont === void 0 ? void 0 : decFont.addEventListener("click", () => this.adjustFontSize(-10));
        resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", () => this.resetAccessibility());
        imgToggle === null || imgToggle === void 0 ? void 0 : imgToggle.addEventListener("click", () => {
            this.toggleImages();
            imgToggle.classList.toggle("active", this.imagesHidden);
        });
        animDisable === null || animDisable === void 0 ? void 0 : animDisable.addEventListener("click", () => {
            this.disableAnimations();
            animDisable.classList.toggle("active");
        });
        //
        readerToggle === null || readerToggle === void 0 ? void 0 : readerToggle.addEventListener("click", () => {
            const wasEnabled = this.speechEnabled;
            this.speechEnabled = !this.speechEnabled;
            readerToggle.classList.toggle("active", this.speechEnabled);
            if (wasEnabled && !this.speechEnabled) {
                this.speechSynthesis.cancel();
                this.readText("Fitur pembaca layar dinonaktifkan.");
            }
            else if (!wasEnabled && this.speechEnabled) {
                this.readText("Fitur pembaca layar diaktifkan. Silakan blok teks untuk dibacakan.");
            }
        });
        $$(".toggle-class").forEach((btn) => {
            btn.addEventListener("click", () => {
                const className = btn.dataset.class;
                if (!className)
                    return;
                const colorClasses = [
                    "dark-contrast",
                    "light-contrast",
                    "high-contrast",
                    "high-saturation",
                    "low-saturation",
                    "monochrome",
                ];
                // Jika termasuk dalam kategori warna (hanya satu boleh aktif)
                if (colorClasses.includes(className)) {
                    const isActive = btn.classList.contains("active");
                    document.body.classList.remove(...colorClasses);
                    $$(".toggle-class").forEach((b) => {
                        const bc = b.dataset.class;
                        if (bc && colorClasses.includes(bc)) {
                            b.classList.remove("active");
                        }
                    });
                    if (!isActive) {
                        document.body.classList.add(className);
                        btn.classList.add("active");
                    }
                }
                else {
                    // Cek apakah fitur reading-guide atau reading-mask
                    const isReadingGuide = className === "reading-guide";
                    const isReadingMask = className === "reading-mask";
                    if (isReadingGuide || isReadingMask) {
                        // Matikan yang satunya jika sedang aktif
                        const otherClass = isReadingGuide
                            ? "reading-mask"
                            : "reading-guide";
                        document.body.classList.remove(otherClass);
                        const otherBtn = document.querySelector(`.toggle-class[data-class="${otherClass}"]`);
                        if (otherBtn)
                            otherBtn.classList.remove("active");
                    }
                    // Toggle class saat ini
                    const isActive = document.body.classList.toggle(className);
                    btn.classList.toggle("active", isActive);
                }
            });
        });
        profileSelect === null || profileSelect === void 0 ? void 0 : profileSelect.addEventListener("change", (e) => {
            // Matikan pembaca layar
            this.speechEnabled = false;
            this.speechSynthesis.cancel();
            // Reset tombol reader
            const readerBtn = this.querySelector('.toggle-class[data-feature="reader"]');
            if (readerBtn)
                readerBtn.classList.remove("active");
            // Reset semua class dari body dan html
            const resetClasses = [
                "highlight-title",
                "highlight-links",
                "dyslexia-font",
                "letter-spacing",
                "line-height",
                "font-weight",
                "dark-contrast",
                "light-contrast",
                "high-contrast",
                "high-saturation",
                "low-saturation",
                "monochrome",
                "reading-guide",
                "reading-mask",
                "big-cursor",
            ];
            document.body.classList.remove(...resetClasses);
            document.documentElement.classList.remove(...Array.from(document.documentElement.classList).filter((cls) => cls.startsWith("font-scale-")));
            document.documentElement.classList.add("font-scale-100");
            // Reset juga class font-scale pada .content-wrapper
            const contentWrapper = document.querySelector(".content-wrapper");
            if (contentWrapper) {
                contentWrapper.classList.remove(...Array.from(contentWrapper.classList).filter((cls) => cls.startsWith("font-scale-")));
                contentWrapper.classList.add("font-scale-100");
            }
            // Reset label display font jika ada
            const fontDisplay = this.querySelector("#fontSizeDisplay");
            if (fontDisplay)
                fontDisplay.textContent = "100%";
            // Reset semua tombol toggle
            this.querySelectorAll(".toggle-class").forEach((btn) => {
                btn.classList.remove("active");
            });
            // Fungsi aktifkan toggle tombol
            const activateToggleButton = (className) => {
                const btn = this.querySelector(`.toggle-class[data-class="${className}"]`);
                if (btn) {
                    btn.classList.add("active");
                    document.body.classList.add(className);
                }
            };
            // Ambil nilai pilihan profil
            const value = e.target.value;
            // Switch berdasarkan profil
            switch (value) {
                case "":
                    this.resetAccessibility(); // Reset manual tambahan jika perlu
                    break;
                case "buta-warna":
                    activateToggleButton("high-saturation");
                    break;
                case "disleksia":
                    activateToggleButton("dyslexia-font");
                    break;
                case "gangguan-penglihatan":
                    activateToggleButton("high-saturation");
                    activateToggleButton("big-cursor");
                    if (contentWrapper) {
                        contentWrapper.classList.remove(...Array.from(contentWrapper.classList).filter((cls) => cls.startsWith("font-scale-")));
                        contentWrapper.classList.add("font-scale-130");
                    }
                    this.fontSize = 130;
                    if (fontDisplay)
                        fontDisplay.textContent = "130%";
                    break;
                case "tunanetra":
                    this.speechEnabled = true;
                    if (readerBtn)
                        readerBtn.classList.add("active");
                    const lang = this.getSelectedTranslateLang();
                    this.readText("Fitur pembaca layar diaktifkan. Silakan blok teks untuk dibacakan.");
                    break;
                case "kognitif":
                    activateToggleButton("font-weight");
                    activateToggleButton("high-contrast");
                    activateToggleButton("reading-guide");
                    break;
                case "epilepsi":
                    activateToggleButton("low-saturation");
                    break;
                case "adhd":
                    activateToggleButton("low-saturation");
                    activateToggleButton("reading-mask");
                    break;
            }
        });
        positionSelect === null || positionSelect === void 0 ? void 0 : positionSelect.addEventListener("change", (e) => {
            const value = e.target.value;
            const widget = $("#accessibility-toggle");
            const menu = $("#accessibility-menu");
            if (!widget || !menu)
                return;
            const positions = {
                "kiri-bawah": { bottom: "20px", left: "20px" },
                "kanan-bawah": { bottom: "20px", right: "20px" },
                "kiri-atas": { top: "20px", left: "20px" },
                "kanan-atas": { top: "20px", right: "20px" },
                "kiri-tengah": {
                    top: "50%",
                    left: "20px",
                    transform: "translateY(-50%)",
                },
                "kanan-tengah": {
                    top: "50%",
                    right: "20px",
                    transform: "translateY(-50%)",
                },
                "bawah-tengah": {
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                },
                "atas-tengah": {
                    top: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                },
            };
            Object.assign(widget.style, Object.assign({ top: "", bottom: "", left: "", right: "", transform: "" }, positions[value]));
            menu.classList.remove("open");
            widget.classList.remove("menu-open");
        });
        // Reading Guide & Mask Follow Cursor
        document.addEventListener("mousemove", (e) => {
            if (document.body.classList.contains("reading-mask")) {
                document.body.style.setProperty("--reading-mask-top", `${e.clientY - 52}px`);
            }
            if (document.body.classList.contains("reading-guide")) {
                const offsetY = 10;
                document.body.style.setProperty("--reading-guide-top", `${e.clientY - offsetY}px`);
                document.body.style.setProperty("--reading-guide-left", `${e.clientX}px`);
            }
        });
        const toggleContainer = this.querySelector("#accessibility-toggle");
        if (!toggleContainer)
            return;
        let isDragging = false;
        let wasDragged = false;
        let startX = 0;
        let startY = 0;
        let offsetX = 0;
        let offsetY = 0;
        const threshold = 3; // Ambang sensitivitas minimal
        toggleContainer.addEventListener("mousedown", (e) => {
            isDragging = true;
            wasDragged = false;
            const rect = toggleContainer.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            startX = e.clientX;
            startY = e.clientY;
            toggleContainer.style.transition = "none";
            e.preventDefault(); // Cegah seleksi teks
        });
        document.addEventListener("mousemove", (e) => {
            if (!isDragging)
                return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            if (Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
                wasDragged = true;
                const left = e.clientX - offsetX;
                const top = e.clientY - offsetY;
                toggleContainer.style.left = `${left}px`;
                toggleContainer.style.top = `${top}px`;
                toggleContainer.style.right = "auto";
                toggleContainer.style.bottom = "auto";
                toggleContainer.style.transform = "none";
            }
        });
        document.addEventListener("mouseup", () => {
            if (!isDragging)
                return;
            isDragging = false;
            toggleContainer.style.transition = "";
            if (wasDragged) {
                // Cegah klik setelah drag langsung membuka toggle
                const preventClick = (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleContainer.removeEventListener("click", preventClick, true);
                };
                toggleContainer.addEventListener("click", preventClick, true);
            }
        });
    }
    toggleMenu() {
        const menu = this.querySelector("#accessibility-menu");
        const toggle = this.querySelector(".accessibility-toggle");
        const isOpen = menu === null || menu === void 0 ? void 0 : menu.classList.toggle("open");
        toggle === null || toggle === void 0 ? void 0 : toggle.classList.toggle("menu-open", isOpen !== null && isOpen !== void 0 ? isOpen : false);
    }
    adjustFontSize(change) {
        this.fontSize = Math.min(200, Math.max(50, this.fontSize + change));
        const contentWrapper = document.querySelector(".content-wrapper");
        if (!contentWrapper)
            return;
        // Hapus semua class yang diawali font-scale-
        contentWrapper.classList.remove(...Array.from(contentWrapper.classList).filter((cls) => cls.startsWith("font-scale-")));
        // Tambahkan class baru sesuai skala
        contentWrapper.classList.add(`font-scale-${this.fontSize}`);
        // Perbarui tampilan angka persentase
        const display = this.querySelector("#fontSizeDisplay");
        if (display)
            display.textContent = `${this.fontSize}%`;
    }
    toggleImages() {
        this.imagesHidden = !this.imagesHidden;
        const selectors = [
            ".image-wrapper",
            ".gambar",
            ".image-box",
            "figure",
            "img",
            ".carousel-slide",
            ".carousel-container",
        ];
        selectors.forEach((selector) => {
            document.querySelectorAll(selector).forEach((el) => {
                el.style.display = this.imagesHidden ? "none" : "";
            });
        });
    }
    disableAnimations() {
        document.body.classList.toggle("no-animations");
    }
    resetAccessibility() {
        const resetClasses = [
            "highlight-title",
            "highlight-links",
            "dyslexia-font",
            "letter-spacing",
            "line-height",
            "font-weight",
            "dark-contrast",
            "light-contrast",
            "high-contrast",
            "high-saturation",
            "low-saturation",
            "monochrome",
            "reading-guide",
            "reading-mask",
            "big-cursor",
            "no-animations", // tambahkan ini
        ];
        document.body.classList.remove(...resetClasses);
        // Hapus font-scale-* dari .content-wrapper
        const contentWrapper = document.querySelector(".content-wrapper");
        if (contentWrapper) {
            contentWrapper.classList.remove(...Array.from(contentWrapper.classList).filter((cls) => cls.startsWith("font-scale-")));
            contentWrapper.classList.add("font-scale-100");
        }
        this.fontSize = 100;
        this.imagesHidden = false;
        // Tampilkan kembali semua gambar
        const imageSelectors = [
            ".image-wrapper",
            ".gambar",
            ".image-box",
            "figure",
            "img",
            ".carousel-slide",
            ".carousel-container",
        ];
        imageSelectors.forEach((selector) => {
            document.querySelectorAll(selector).forEach((el) => {
                el.style.display = "";
            });
        });
        // Reset tampilan font size
        const fontDisplay = this.querySelector("#fontSizeDisplay");
        if (fontDisplay)
            fontDisplay.textContent = "100%";
        // Hilangkan status aktif dari semua tombol toggle
        this.querySelectorAll(".toggle-class").forEach((btn) => {
            btn.classList.remove("active");
        });
        // ✅ Reset bahasa ke default (Indonesia)
        const selectedLang = localStorage.getItem("selectedLang");
        const translateSelect = document.querySelector(".goog-te-combo");
        if (translateSelect && selectedLang) {
            translateSelect.value = selectedLang;
            translateSelect.dispatchEvent(new Event("change"));
        }
        // ✅ Matikan speech reader juga
        this.speechEnabled = false;
        this.speechSynthesis.cancel();
        const readerBtn = this.querySelector('.toggle-class[data-feature="reader"]');
        if (readerBtn)
            readerBtn.classList.remove("active");
    }
    renderGoogleTranslateElement() {
        // Tambahkan elemen hanya jika belum ada
        if (!document.getElementById("google_translate_element")) {
            const container = document.createElement("div");
            container.id = "google_translate_element";
            container.className = "translate-box"; // Opsional
            this.appendChild(container); // `this` mengacu ke elemen custom (shadow/light DOM)
        }
    }
    loadGoogleTranslate() {
        let savedLang = localStorage.getItem("selectedLang");
        // Jika belum ada pilihan bahasa, default ke 'id'
        if (!savedLang) {
            savedLang = "id";
            localStorage.setItem("selectedLang", savedLang);
        }
        const TRANSLATE_SCRIPT_SRC = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        // Tambahkan indikator loading
        document.documentElement.classList.add("loading-translate");
        document.documentElement.setAttribute("data-translating", "true");
        // Pastikan elemen target sudah ada di DOM
        if (!document.getElementById("google_translate_element")) {
            const el = document.createElement("div");
            el.id = "google_translate_element";
            document.body.appendChild(el); // fallback jika `this.appendChild` tidak jalan
        }
        const initGoogleTranslate = () => {
            var _a;
            const google = window.google;
            if (!((_a = google === null || google === void 0 ? void 0 : google.translate) === null || _a === void 0 ? void 0 : _a.TranslateElement)) {
                console.warn("Google Translate belum siap. Menunggu ulang...");
                setTimeout(initGoogleTranslate, 300);
                return;
            }
            new google.translate.TranslateElement({
                pageLanguage: "",
                autoDisplay: false,
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            }, "google_translate_element");
        };
        // Load script hanya jika belum ada
        if (!document.querySelector(`script[src="${TRANSLATE_SCRIPT_SRC}"]`)) {
            const script = document.createElement("script");
            script.src = TRANSLATE_SCRIPT_SRC;
            document.body.appendChild(script);
        }
        // Jalankan init setelah delay (Google akan panggil `googleTranslateElementInit`)
        window.googleTranslateElementInit = initGoogleTranslate;
    }
    loadJSONAfterTranslate(url, containerSelector, templateFn, options = {}) {
        const container = document.querySelector(containerSelector);
        const spinnerWrapper = container === null || container === void 0 ? void 0 : container.previousElementSibling;
        const spinner = spinnerWrapper === null || spinnerWrapper === void 0 ? void 0 : spinnerWrapper.querySelector(".spinner");
        if (!container)
            return;
        if (spinner)
            spinner.style.display = "block";
        container.innerHTML = `<div class="api-content invisible opacity-0 transition-opacity duration-700"></div>`;
        const contentBox = container.querySelector(".api-content");
        const { limit = 5, delay = 800, translated = false } = options;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
            const items = Array.isArray(data)
                ? data
                : data.products || data.users || data.data || [];
            const limitedItems = limit ? items.slice(0, limit) : items;
            if (limitedItems.length === 0) {
                if (spinner) {
                    spinner.outerHTML = `<p style="text-align:center;">Tidak ada data.</p>`;
                }
                return;
            }
            const html = limitedItems.map(templateFn).join("");
            setTimeout(() => {
                contentBox.innerHTML = html;
                if (translated) {
                    this.retranslateNewContent();
                    this.waitForContainerTranslatedIn(container, ".api-content", () => {
                        contentBox.classList.remove("invisible");
                        contentBox.classList.add("opacity-100");
                        if (spinner)
                            spinner.style.display = "none";
                    });
                }
                else {
                    contentBox.classList.remove("invisible");
                    contentBox.classList.add("opacity-100");
                    if (spinner)
                        spinner.style.display = "none";
                }
            }, delay);
        })
            .catch((err) => {
            console.error("Gagal memuat data:", err);
            if (spinner) {
                spinner.outerHTML = `<p style="text-align:center;">Gagal memuat data.</p>`;
            }
        });
    }
    waitForContainerTranslatedIn(container, selector, callback) {
        const target = container.querySelector(selector);
        if (!target)
            return;
        const observer = new MutationObserver(() => {
            var _a;
            const translated = ((_a = target.textContent) === null || _a === void 0 ? void 0 : _a.trim().length) > 0;
            if (translated) {
                observer.disconnect();
                callback();
            }
        });
    }
    retranslateNewContent() {
        const select = document.querySelector(".goog-te-combo");
        if (select && select.value !== "") {
            const event = new Event("change", { bubbles: true });
            select.dispatchEvent(event);
        }
    }
    waitForTranslationReady(callback) {
        const selectedLang = localStorage.getItem("selectedLang");
        const htmlEl = document.documentElement;
        const check = () => {
            const isTranslated = htmlEl.classList.contains("translated-ltr") ||
                htmlEl.classList.contains("translated-rtl");
            if (selectedLang && selectedLang !== "id") {
                if (isTranslated) {
                    callback(true);
                }
                else {
                    setTimeout(check, 200);
                }
            }
            else {
                callback(false);
            }
        };
        check();
    }
    loadUserList() {
        this.waitForTranslationReady((translated) => {
            this.loadJSONAfterTranslate("https://dummyjson.com/users", "#users-section .user-list", (user) => `
        <div class="user-card">
          <h3>${user.firstName} ${user.lastName}</h3>
          <p>${user.email}</p>
        </div>
      `, { limit: 5, translated });
        });
    }
    fetchAPIContent() {
        this.waitForTranslationReady((translated) => {
            this.loadJSONAfterTranslate("https://dummyjson.com/products", "#berita-api .api-news-list", (item) => `
        <div class="news-card">
          <img src="${item.thumbnail}" alt="${item.title}" class="news-img" />
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `, { limit: 5, translated });
        });
    }
}
// Di luar class, jika belum terdaftar:
if (!customElements.get("accessibility-widget")) {
    customElements.define("accessibility-widget", AccessibilityWidget);
}

})();

/******/ })()
;
//# sourceMappingURL=accessibility-widget.js.map