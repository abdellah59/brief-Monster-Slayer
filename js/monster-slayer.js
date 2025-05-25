
let playerHealth =100;
let monsterHealth = 100;
let maxHealth =100;
let isGameActive =false;
let specialAttackCooldown = 0;

const playerHealthBar =document.getElementById('player-health-bar');
const monsterHealthBar = document.getElementById('monster-health-bar');
const playerHealthValue = document.getElementById('player-health-value');
const monsterHealthValue = document.getElementById('monster-health-value');
const startBtn = document.getElementById('start-btn');
const actionButtons= document.getElementById('action-buttons');
const attackBtn = document.getElementById('attack-btn');
const specialAttackBtn = document.getElementById('special-attack-btn');
const healBtn = document.getElementById('heal-btn');
const surrenderBtn = document.getElementById('surrender-btn');
const logList = document.getElementById('log-list');

