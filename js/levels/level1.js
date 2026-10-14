// js/levels/level1.js - Nivel 1 (Tutorial e Introducción)

class Level1 {
    constructor() {
        // Definición de Plataformas (x, y, ancho, alto)
        this.platforms = [
            { x: 0, y: 450, width: 800, height: 50 },    // Suelo principal
            { x: 150, y: 360, width: 120, height: 20 },  // Plataforma 1
            { x: 340, y: 280, width: 140, height: 20 },  // Plataforma 2
            { x: 550, y: 200, width: 150, height: 20 }   // Plataforma final
        ];

        // Posición de la Meta / Puerta de Salida
        this.goal = { x: 650, y: 140, width: 35, height: 60 };
        
        // Sin trampas en el tutorial
        this.traps = [];
    }

    // Comprobar colisiones del jugador con las plataformas
    checkCollisions(player) {
        player.platforms = this.platforms;

        // Detección de colisión con plataformas
        this.platforms.forEach(plat => {
            if (
                player.x < plat.x + plat.width &&
                player.x + player.width > plat.x &&
                player.y + player.height <= plat.y + 10 &&
                player.y + player.height + player.vy >= plat.y
            ) {
                player.y = plat.y - player.height;
                player.vy = 0;
                player.isGrounded = true;
            }
        });

        // Verificación de llegada a la Meta
        if (
            player.x < this.goal.x + this.goal.width &&
            player.x + player.width > this.goal.x &&
            player.y < this.goal.y + this.goal.height &&
            player.y + player.height > this.goal.y
        ) {
            console.log("¡Nivel 1 Completado!");
            game.nextLevel(); // Pasa al siguiente nivel mediante game.js
        }
    }

    // Dibujar el escenario en el Canvas
    draw(ctx) {
        // Dibujar plataformas (Verde Tutorial)
        ctx.fillStyle = "#2ecc71";
        this.platforms.forEach(plat => {
            ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
        });

        // Dibujar la Meta / Puerta (Dorado)
        ctx.fillStyle = "#f1c40f";
        ctx.fillRect(this.goal.x, this.goal.y, this.goal.width, this.goal.height);
    }
}
