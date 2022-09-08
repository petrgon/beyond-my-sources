// ==UserScript==
// @name        Beyond My Content
// @namespace   Violentmonkey Scripts
// @match       https://www.dndbeyond.com/*
// @grant       none
// @version     1.4
// @author      Petr Gondek
// @description Adds a button to DnDBeyond to filter the content you own.
// @license MIT
// ==/UserScript==

window.addEventListener('load', function() {
    Main();
}, false);

// Execute this to get new content array
//Array.from(document.getElementById("filter-source")).map(e => e.id);

// comment out content you don't own
const myContent = [
  //"filter-source-acquisitions-incorporated",
  //"filter-source-against-the-giants",
  //"filter-source-baldurs-gate-descent-into-avernus",
  "filter-source-basic-rules",
  "filter-source-candlekeep-mysteries",
  //"filter-source-critical-role",
  //"filter-source-critical-role-call-of-the-netherdeep",
  //"filter-source-curse-of-strahd",
  //"filter-source-curse-of-strahd-character-options",
  //"filter-source-dead-in-thay",
  "filter-source-divine-contention",
  "filter-source-dragon-of-icespire-peak",
  "filter-source-dungeon-masters-guide",
  //"filter-source-dungeons-dragons-vs-rick-and-morty",
  //"filter-source-eberron-rising-from-the-last-war",
  //"filter-source-elemental-evil-players-companion",
  //"filter-source-explorers-guide-to-wildemount",
  "filter-source-fizbans-treasury-of-dragons",
  "filter-source-frozen-sick",
  //"filter-source-ghosts-of-saltmarsh",
  //"filter-source-guildmasters-guide-to-ravnica",
  //"filter-source-hoard-of-the-dragon-queen",
  //"filter-source-hunt-for-the-thessalhydra",
  "filter-source-icewind-dale-rime-of-the-frostmaiden",
  //"filter-source-infernal-machine-rebuild",
  //"filter-source-journeys-through-the-radiant-citadel",
  //"filter-source-locathah-rising",
  //"filter-source-lost-laboratory-of-kwalish",
  "filter-source-lost-mine-of-phandelver",
  "filter-source-monster-manual",
  "filter-source-monstrous-compendium-volume-one-spelljammer",
  //"filter-source-mordenkainen-presents-monsters-of-the-multiverse",
  "filter-source-mordenkainens-tome-of-foes",
  "filter-source-mordenkainens-fiendish-folio-volume-1",
  //"filter-source-mythic-odysseys-of-theros",
  //"filter-source-one-d-d-playtest",
  "filter-source-one-grung-above",
  //"filter-source-out-of-the-abyss",
  "filter-source-players-handbook",
  //"filter-source-princes-of-the-apocalypse",
  //"filter-source-rise-of-tiamat",
  //"filter-source-rrakkma",
  "filter-source-sage-advice-compendium",
  //"filter-source-sapphire-dragon",
  "filter-source-sleeping-dragons-wake",
  "filter-source-spelljammer-academy",
  //"filter-source-spelljammer-adventures-in-space",
  //"filter-source-storm-kings-thunder",
  //"filter-source-storm-lords-wrath",
  //"filter-source-strixhaven-a-curriculum-of-chaos",
  "filter-source-sword-coast-adventurers-guide",
  //"filter-source-tactical-maps-reincarnated",
  //"filter-source-tales-from-the-yawning-portal",
  "filter-source-tashas-cauldron-of-everything",
  //"filter-source-the-forge-of-fury",
  //"filter-source-the-hidden-shrine-of-tamoachan",
  //"filter-source-the-radiant-citadel",
  //"filter-source-the-sunless-citadel",
  "filter-source-the-tortle-package",
  "filter-source-the-vecna-dossier",
  //"filter-source-the-wild-beyond-the-witchlight",
  //"filter-source-tomb-of-annihilation",
  //"filter-source-tomb-of-horrors",
  "filter-source-unearthed-arcana",
  //"filter-source-van-richtens-guide-to-ravenloft",
  "filter-source-volos-guide-to-monsters",
  //"filter-source-waterdeep-dragon-heist",
  //"filter-source-waterdeep-dungeon-of-the-mad-mage",
  //"filter-source-wayfinders-guide-to-eberron",
  //"filter-source-white-plume-mountain",
  "filter-source-xanathars-guide-to-everything"
];

const FILTER_SOURCE_ID = "filter-source";
const LISTING_FILTERS_CLASS = "listing-filters";
const RESET_BUTTON_CONTAINER_CLASS = "reset-button-container";

function AllElementsAvailable() {
  return document.getElementById(FILTER_SOURCE_ID) != null && 
    document.getElementsByClassName(LISTING_FILTERS_CLASS)[0] != null && 
    document.getElementsByClassName(RESET_BUTTON_CONTAINER_CLASS)[0] != null;
}

function Main() {
  if (!AllElementsAvailable()){
    console.error("beyond-my-content: Can't find an element.");
    return;
  }
  
  CreateButton();
}

function ButtonOnClick() {
  SelectAll();  
  document.getElementsByClassName(LISTING_FILTERS_CLASS)[0].submit();
}


function GetCssText(element) {
  let styles = window.getComputedStyle(element);

  let cssText = styles.cssText;

  if (!cssText) {
    cssText = Array.from(styles).reduce((str, property) => {
      return `${str}${property}:${styles.getPropertyValue(property)};`;
    }, '');
  }
  
  return cssText;
}

function CreateButton () {
  let container = document.getElementsByClassName(RESET_BUTTON_CONTAINER_CLASS)[0];
  if (container == null)
    return false;
  let btn = document.createElement("button");
  btn.innerHTML = "Filter my content";
  btn.id = btn.innerHTML;
  btn.onclick = ButtonOnClick;
  btn.style.cssText = GetCssText(container.firstElementChild.firstElementChild);
  let div = document.createElement("div");
  div.style.cssText = GetCssText(container.firstElementChild);
  
  div.appendChild(btn);
  container.appendChild(div);
  return true;
};

function SelectAll () {
  Array.from(document.getElementById(FILTER_SOURCE_ID)).forEach(e => { 
    if (myContent.includes(e.id)) {
      e.selected = true;
    }
  });
}
