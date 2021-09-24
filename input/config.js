const fs = require("fs");
const width = 2172;
const height = 3060;
const dir = __dirname;
const description = "These are Generative NFT Artworks on Polygon & Fantom chains - Inedible Content Studios";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 29;
const editionSize = 30;
const raceWeights = [
  {
    value: "rattfink",
    from: 1,
    to: editionSize,
  },
];

const races = {
rattfink: {
    name: "RattFink",
    layers: [
      {    
        name: "Background",
        elements: [
          { 
            id: 0,
            name: "Black",
            path: `${dir}/Background/black.png`,
            weight: 175, //100%
          },
          {
            id: 1,
            name: "Green",
            path: `${dir}/Background/green.png`,
            weight: 75, //50%
          },
          {
            id: 2,
            name: "Red",
            path: `${dir}/Background/red.png`,
            weight: 25, //20%
          },
          {
            id: 3,
            name: "Yellow",
            path: `${dir}/Background/yellow.png`,
            weight: 5, 
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {    
        name: "RatBase",
        elements: [
          {
            id: 0,
            name: "Grey",
            path: `${dir}/RatBase/grey.png`,
            weight: 75,
          },
          {
            id: 1,
            name: "Banana",
            path: `${dir}/RatBase/banana.png`,
            weight: 50,
          },
          {
            id: 2,
            name: "Blanco",
            path: `${dir}/RatBase/blanco.png`,
            weight: 40,
          },
          {
            id: 3,
            name: "Dayglo",
            path: `${dir}/RatBase/dayglo.png`,
            weight: 30,
          },
          {
            id: 4,
            name: "Neon",
            path: `${dir}/RatBase/neon.png`,
            weight: 20,
          },
          {
            id: 5,
            name: "Orange",
            path: `${dir}/RatBase/orange.png`,
            weight: 35,
          },
          {
            id: 6,
            name: "Soup",
            path: `${dir}/RatBase/soup.png`,
            weight: 30,
          },
          {
            id: 7,
            name: "Darkblue",
            path: `${dir}/RatBase/darkblue.png`,
            weight: 25,
          },
          { 
            id: 8,
            name: "Azure",
            path: `${dir}/RatBase/azure.png`,
            weight: 15,
          },
          {
            id: 9,
            name: "Pimp",
            path: `${dir}/RatBase/pimp.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {    
        name: "RatEyes",
        elements: [
          { 
            id: 0,
            name: "AngryOrange",
            path: `${dir}/RatEyes/angryorange.png`,
            weight: 200, // 100%
          },
          {
            id: 1,
            name: "RedGlare",
            path: `${dir}/RatEyes/redglare.png`,
            weight: 75,  
          },
          {
            id: 2,
            name: "Chaos",
            path: `${dir}/RatEyes/chaos.png`,
            weight: 76,
          },
          {
            id: 3,
            name: "ChaosHeavy",
            path: `${dir}/RatEyes/chaoshvy.png`,
            weight: 66,
          },
          {
            id: 4,
            name: "Firey",
            path: `${dir}/RatEyes/firey.png`,
            weight: 65,
          },
          {
            id: 5,
            name: "FTM",
            path: `${dir}/RatEyes/ftm.png`,
            weight: 55,
          },
          {
            id: 6,
            name: "RedMist",
            path: `${dir}/RatEyes/redmist.png`,
            weight: 50,
          },
          {
            id: 7,
            name: "Flatliners",
            path: `${dir}/RatEyes/flatline.png`,
            weight: 37,
          },
          {
            id: 8,
            name: "Poppies",
            path: `${dir}/RatEyes/poppies.png`,
            weight: 36,
          },
          {
            id: 9,
            name: "Fuck",
            path: `${dir}/RatEyes/fuck.png`,
            weight: 32,
          },
          {
            id: 10,
            name: "NatureGlare",
            path: `${dir}/RatEyes/natureglare.png`,
            weight: 26,
          },
          {
            id: 11,
            name: "KILL",
            path: `${dir}/RatEyes/kill.png`,
            weight: 14,
          },
          {
            id: 12,
            name: "JunkRatt",
            path: `${dir}/RatEyes/junkratt.png`,
            weight: 13,
          },
          {
            id: 13,
            name: "BeetleJuice",
            path: `${dir}/RatEyes/beetlejuice.png`,
            weight: 12,
          },
          {
            id: 14,
            name: "VioletGlare",
            path: `${dir}/RatEyes/violetglare.png`,
            weight: 11,
          },
          {
            id: 15,
            name: "Unsane",
            path: `${dir}/RatEyes/unsane.png`,
            weight: 10,
          },
          {
            id: 16,
            name: "XmasEye",
            path: `${dir}/RatEyes/xmaseyez.png`,
            weight: 6,
          },
          {
            id: 17,
            name: "Spiral",
            path: `${dir}/RatEyes/spiral.png`,
            weight: 5,
          },
          {
            id: 18,
            name: "REKT",
            path: `${dir}/RatEyes/rekt.png`,
            weight: 4,
          },
          {
            id: 19,
            name: "StapleSleep",
            path: `${dir}/RatEyes/staplesleep.png`,
            weight: 3,
          },
          {
            id: 20,
            name: "Misfit",
            path: `${dir}/RatEyes/misfit.png`,
            weight: 2,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {    
        name: "RatMouth",
        elements: [
          { 
            id: 0,
            name: "Butt",
            path: `${dir}/RatMouth/butt.png`,
            weight: 30,
          },
          {
            id: 1,
            name: "Plume",
            path: `${dir}/RatMouth/plume.png`,
            weight: 20,
          },
          {
            id: 2,
            name: "Spliff",
            path: `${dir}/RatMouth/spliff.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {    
        name: "RatNose",
        elements: [
          { 
            id: 0,
            name: "Bloody",
            path: `${dir}/RatNose/bloody.png`,
            weight: 75, // 25%
          },
          {
            id: 1,
            name: "Goop",
            path: `${dir}/RatNose/goop.png`,
            weight: 50, // 25%
          },
          {
            id: 2,
            name: "Puss",
            path: `${dir}/RatNose/puss.png`,
            weight: 25, //10%
          },
          {
            id: 3,
            name: "Slime",
            path: `${dir}/RatNose/slime.png`,
            weight: 1,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {    
        name: "RatSpecial",
        elements: [
          {
            id: 1,
            name: "KnifeRight",
            path: `${dir}/RatSpecial/kniferight.png`,
            weight: 50, // 20%
          },
          {
            id: 2,
            name: "KillerRight",
            path: `${dir}/RatSpecial/killerright.png`,
            weight: 15, //8%
          },
          { 
            id: 3,
            name: "DualWield",
            path: `${dir}/RatSpecial/dualwield.png`,
            weight: 7, // 4%
          },
          {
            id: 4,
            name: "MAX",
            path: `${dir}/RatSpecial/max.png`,
            weight: 3, // 2%
          },
          {
            id: 5,
            name: "MAXII",
            path: `${dir}/RatSpecial/max2.png`,
            weight: 1, // 1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ] ,
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
