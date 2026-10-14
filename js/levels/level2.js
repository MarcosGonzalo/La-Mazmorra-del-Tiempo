// js/levels/level2.js - Nivel 2 (Dificultad Media: Trampas y Pinchos)

class Level2 {
    constructor() {
        // Plataformas con huecos (vacío al fondo)
        this.platforms = [
            { x: 0, y: 450, width: 220, height: 50 },   // Inicio
            { x: 280, y: 380, width: 130, height: 20 },  // Salto 1
            { x: 460, y: 300, width: 120, height: 20 },  // Salto 2
            { x: 630, y: 220, width: 170, height: 50 }   // Zona de Meta
        ];

        // Trampas / Pinchos (x, y, ancho, alto)
        this.traps = [
            { x: 310, y: 360, width: 40, height: 20 },   // Pinchos sobre plataforma 2
            { x: 490, y: 280, width: 30, height: 20 }    // Pinchos sobre plataforma 3
        ];

        // Meta al final del nivel
        this.goal = { x: 720, y: 160, width: 35, height: 60 };
        
        // Punto de reaparición inicial
        this.spawnPoint = { x: 30, y: 350 };
    }

    checkCollisions(player) {
        // 1. Colisión con plataformas
        let onAnyPlatform = false;
        this.platforms.forEach(plat => {
            if (
                player.x < plat.x + plat.width &&
                player.x + player.width > plat.x &&
                player.y + player.height <= plat.y + 12 &&
                player.y + player.height + player.vy >= plat.y
            ) {
                player.y = plat.y - player.height;
                player.vy = 0;
                player.isGrounded = true;
                onAnyPlatform = true;
            }
        });

        // 2. Colisión con Trampas / Pinchos -> Quita Vida y Respawn
        this.traps.forEach(trap => {
            if (
                player.x < trap.x + trap.width &&
                player.x + player.width > trap.x &&
                player.y < trap.y + trap.height &&
                player.y + player.height > trap.y
            ) {
                this.respawnPlayer(player);
            }
        });

        // 3. Caída al vacío (Caer fuera del canvas) -> Quita Vida y Respawn
        if (player.y > 500) {
            this.respawnPlayer(player);
        }

        // 4. Llegada a la Meta -> Pasa al Nivel 3
        if (
            player.x < this.goal.x + this.goal.width &&
            player.x + player.width > this.goal.x &&
            player.y < this.goal.y + this.goal.height &&
            player.y + player.height > this.goal.y
        ) {
            console.log("¡Nivel 2 Completado!");
            game.nextLevel();
        }
    }

    respawnPlayer(player) {
        game.loseLife();
        player.x = this.spawnPoint.x;
        player.y = this.spawnPoint.y;
        player.vx = 0;
        player.vy = 0;
    }

    draw(ctx) {
        // Dibujar plataformas (Azul Mazmorra)
        ctx.fillStyle = "#34495e";
        this.platforms.forEach(plat => {
            ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
        });

        // Dibujar Pinchos / Trampas (Rojo Peligro)
        ctx.fillStyle = "#e74c3c";
        this.traps.forEach(trap => {
            ctx.fillRect(trap.x, trap.y, trap.width, trap.height);
        });

        // Dibujar la Meta (Dorado)
        ctx.fillStyle = "#f1c40f";
        ctx.fillRect(this.goal.x, this.goal.y, this.goal.width, this.goal.height);
    }
}