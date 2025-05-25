
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