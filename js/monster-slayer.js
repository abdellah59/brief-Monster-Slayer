"use strict";

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

function getRandomNumber(min,max){

    return Math.floor(Math.random() * (max- min+ 1))+ min;
}

function updateHealthBars(){

    const playerPercentage =Math.max(0,(playerHealth / maxHealth) *100);
    const monsterPercentage = Math.max(0, (monsterHealth / maxHealth)* 100);
    
    playerHealthBar.style.width = playerPercentage +'%';
    monsterHealthBar.style.width = monsterPercentage+ '%';
    
    playerHealthValue.textContent =Math.max(0, playerHealth);
    monsterHealthValue.textContent =Math.max(0,monsterHealth);
}

function addLogMessage(message,type){
    const listItem= document.createElement('li');
    listItem.textContent =message;
    listItem.className =type;
    logList.appendChild(listItem);
    
    logList.scrollTop =logList.scrollHeight;
}

function checkGameOver(){
    if (playerHealth<= 0) {
        addLogMessage('Vous avez été vaincu par le monstre !', 'game-over');
        endGame();
            return true;

    } else if(monsterHealth <= 0){
        addLogMessage('Félicitations ! Vous avez vaincu le monstre !', 'game-over');
        endGame();
        return true;
    }
        return false;
}

function endGame(){
    isGameActive =false;
    actionButtons.classList.add('hidden');
    startBtn.textContent ='Rejouer';
    startBtn.style.display='block';
}


function startGame(){

    playerHealth=100;
    monsterHealth=100;
    isGameActive =true;
    specialAttackCooldown =0;
    
    updateHealthBars();
    updateSpecialAttackButton();
    
    startBtn.style.display ='none';
    actionButtons.classList.remove('hidden');
    
    logList.innerHTML ='';
    addLogMessage('Le combat commence ! Bonne chance !', 'game-info');
}

function updateSpecialAttackButton(){

    if(specialAttackCooldown > 0){
        specialAttackBtn.disabled =true;
        specialAttackBtn.textContent=`Attaque spéciale (${specialAttackCooldown})`;
    } else {

         specialAttackBtn.disabled=false;
        specialAttackBtn.textContent ='Attaque spéciale';
    }
}

function playerAttack(){
    if (!isGameActive) return;
    
    const damage=getRandomNumber(8, 15);
    monsterHealth -=damage;
    
    addLogMessage(`Vous attaquez le monstre et lui infligez ${damage} points de dégâts !`, 'player-action');
    
    updateHealthBars();
    
    if (!checkGameOver()){
    
        setTimeout(monsterAttack,1000);
    }
}

function playerSpecialAttack(){
    if (!isGameActive || specialAttackCooldown > 0) return;
    
    const damage=getRandomNumber(15, 25);
    monsterHealth -=damage;
    specialAttackCooldown=3; 
    
    addLogMessage(`Attaque spéciale ! Vous infligez ${damage} points de dégâts critiques !`, 'player-action');
    
    updateHealthBars();
    updateSpecialAttackButton();
    
    if (!checkGameOver()){

            setTimeout(monsterAttack,1000);
    }
}

function playerHeal(){
    if (!isGameActive) return;
    
    const healing =getRandomNumber(12,20);
    const oldHealth =playerHealth;
    playerHealth =Math.min(maxHealth, playerHealth + healing);
    const actualHealing=playerHealth - oldHealth;
    
    addLogMessage(`Vous vous soignez et récupérez ${actualHealing} points de vie !`, 'player-action');
    
    updateHealthBars();
    
     setTimeout(monsterAttack,1000);

}

function playerSurrender(){
    if (!isGameActive)return;
    
    addLogMessage('Vous abandonnez le combat...', 'game-over');

    endGame();
}

function monsterAttack(){
    if (!isGameActive) return;
    
    const damage=getRandomNumber(6,12);
    playerHealth -=damage;
    
    addLogMessage(`Le monstre vous attaque et vous inflige ${damage} points de dégâts !`, 'monster-action');
    
    if (specialAttackCooldown > 0){

         specialAttackCooldown--;

        updateSpecialAttackButton();
    }
    
    updateHealthBars();
    checkGameOver();
}

startBtn.addEventListener('click',startGame);
attackBtn.addEventListener('click',playerAttack);
specialAttackBtn.addEventListener('click', playerSpecialAttack);
healBtn.addEventListener('click',playerHeal);
surrenderBtn.addEventListener('click', playerSurrender);

document.addEventListener('DOMContentLoaded', function(){
    updateHealthBars();
    
    actionButtons.classList.add('hidden');
    
    addLogMessage('Bienvenue dans Monster Slayer ! Cliquez sur "Jouer" pour commencer.', 'game-info');
}

);