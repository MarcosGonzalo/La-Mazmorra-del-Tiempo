// js/core/game.js - Sistema Global, Vidas y Cambio de Niveles

class Game {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.currentLevel = 1;
        this.gameState = "MENU"; // MENU, PLAYING, GAMEOVER, VICTORY
    }

    // Sistema global de cambio de niveles
    nextLevel() {
        this.currentLevel++;
        if (this.currentLevel > 3) {
            this.gameState = "VICTORY";
            console.log("¡Victoria global alcanzada!");
        } else {
            console.log(`Avanzando al Nivel ${this.currentLevel}`);
        }
    }

    // Lógica de salud y vidas
    loseLife() {
        this.lives--;
        console.log(`¡Has perdido una vida! Vidas restantes: ${this.lives}`);
        if (this.lives <= 0) {
            this.gameState = "GAMEOVER";
            console.log("=== GAME OVER ===");
        }
    }

    resetGame() {
        this.score = 0;
        this.lives = 3;
        this.currentLevel = 1;
        this.gameState = "PLAYING";
    }
}

// Exportamos la instancia global del juego
const game = new Game();