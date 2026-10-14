

// js/core/game.js



const Game = {

  canvas: null,

  ctx: null,

  currentLevelIndex: 0,

  levels: [],

  currentLevel: null,

  isRunning: false,

  score: 0,

  lives: 3,



  init() {

    this.canvas = document.getElementById('gameCanvas');

    this.ctx = this.canvas.getContext('2d');

    

    // Lista de niveles del juego

    this.levels = [Level1, Level2, Level3];

    this.currentLevelIndex = 0;

    this.currentLevel = this.levels[this.currentLevelIndex];



    // Inicializar Jugador

    Player.init(this.canvas);

    

    this.setupEvents();

  },



  setupEvents() {

    window.addEventListener('keydown', (e) => Player.handleKeyDown(e));

    window.addEventListener('keyup', (e) => Player.handleKeyUp(e));

  },



  start() {

    if (this.isRunning) return;

    this.isRunning = true;

    this.lives = 3;

    this.score = 0;

    this.currentLevelIndex = 0;

    this.loadLevel(this.currentLevelIndex);

    this.loop();

  },



  loadLevel(index) {

    if (index < this.levels.length) {

      this.currentLevelIndex = index;

      this.currentLevel = this.levels[this.currentLevelIndex];

      Player.resetPosition(this.currentLevel);

    } else {

      this.victory();

    }

  },



  loseLife() {

    this.lives--;

    this.updateHUD();

    

    if (this.lives <= 0) {

      this.gameOver();

    } else {

      // Regresar al inicio del nivel actual

      Player.resetPosition(this.currentLevel);

    }

  },



  updateHUD() {

    const livesDisplay = document.getElementById('lives-display');

    if (livesDisplay) {

      livesDisplay.textContent = '❤️'.repeat(Math.max(0, this.lives));

    }

  },



  nextLevel() {

    this.currentLevelIndex++;

    if (this.currentLevelIndex < this.levels.length) {

      alert(`🎉 ¡Nivel superado! Pasando a: ${this.levels[this.currentLevelIndex].name}`);

      this.loadLevel(this.currentLevelIndex);

    } else {

      this.victory();

    }

  },



  gameOver() {

    this.isRunning = false;

    const gameOverModal = document.getElementById('game-over-modal');

    const hud = document.getElementById('hud');

    if (gameOverModal) gameOverModal.classList.remove('hidden');

    if (hud) hud.classList.add('hidden');

  },



  victory() {

    this.isRunning = false;

    const hud = document.getElementById('hud');

    if (hud) hud.classList.add('hidden');

    

    alert("🏆 ¡VICTORIA! Has completado La Mazmorra del Tiempo y rescatado el futuro.");

    location.reload(); // Recarga para volver al menú principal

  },



  loop() {

    if (!this.isRunning) return;



    this.update();

    this.draw();



    requestAnimationFrame(() => this.loop());

  },



  update() {

    Player.update(this.currentLevel);

  },



  draw() {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);



    if (this.currentLevel && this.currentLevel.draw) {

      this.currentLevel.draw(this.ctx);

    }



    Player.draw(this.ctx);

  }

};



window.addEventListener('load', () => {

  Game.init();

});