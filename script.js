// ==UserScript==
// @name        Select my content
// @namespace   Violentmonkey Scripts
// @match       https://www.dndbeyond.com/*
// @grant       none
// @version     1.0
// @author      Petr Gondek
// @description 9/8/2022, 10:01:53 PM
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

function Main () {
  if(document.getElementById("filter-source") == null)
    return;
  if(!CreateButton())
    return;
  SelectAll();
}

function ButtonOnClick() {
  SelectAll();
  SubmitForm();
}

function SubmitForm(){
  let form =  document.getElementsByClassName("listing-filters")[0];
  if (form == null) {
    console.error("Form not found");
    return;
  }
  
  form.submit();
}

function GetStyle(element) {
  const computedStyles = window.getComputedStyle(element);
  let styles = {};
  switch (computedStyles.constructor.name) {
      // Fix for firefox
      case 'CSS2Properties':
        Object.values(computedStyles).forEach((prop) => {
          styles[prop] = computedStyles[prop];
        });
        break;
      case 'CSSStyleDeclaration':
        styles = computedStyles;
        break;
      default:
        console.error('Unknown style object prototype');
        break;
    }
  
  return styles;
}

function CreateButton () {
  let container = document.getElementsByClassName("reset-button-container")[0];
  if (container == null)
    return false;
  let btn = document.createElement("button");
  btn.innerHTML = "Filter my content";
  btn.id = btn.innerHTM;
  btn.onclick = ButtonOnClick;
  Object.assign(btn.style, GetStyle(container.firstElementChild.firstElementChild));
  
  let div = document.createElement("div");
  Object.assign(div.style, GetStyle(container.firstElementChild));
  
  div.appendChild(btn);
  container.appendChild(div);
  return true;
};

function SelectAll () {
  //console.log("SelectAll");
  Array.from(document.getElementById("filter-source")).forEach(e => { 
    myContent.forEach(c => {
      // console.log("Looking for '" + c + "' in '" + e.id + "'");
       if (e.id.includes(c)) {
         //console.log("Found '" + c + "'!");
         e.selected = true;
       }
    });
  });
}