// js/entities/player.js - Control, Físicas y Movimiento del Personaje

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 50;
        
        // Físicas y movimiento
        this.vx = 0;
        this.vy = 0;
        this.speed = 4;
        this.jumpForce = -10;
        this.gravity = 0.5;
        this.isGrounded = false;
    }

    // Control de movimiento por teclado
    handleInput(keys) {
        this.vx = 0;
        if (keys['ArrowLeft'] || keys['KeyA']) {
            this.vx = -this.speed;
        }
        if (keys['ArrowRight'] || keys['KeyD']) {
            this.vx = this.speed;
        }
        // Salto condicionado a que esté tocando el suelo
        if ((keys['Space'] || keys['ArrowUp'] || keys['KeyW']) && this.isGrounded) {
            this.vy = this.jumpForce;
            this.isGrounded = false;
        }
    }

    // Aplicar físicas y colisión básica
    update(platforms) {
        // Aplicar gravedad
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;

        // Colisión temporal contra el suelo del canvas (piso base)
        if (this.y + this.height >= 450) {
            this.y = 450 - this.height;
            this.vy = 0;
            this.isGrounded = true;
        }
    }

    // Renderizar el personaje en el Canvas 2D
    draw(ctx) {
        ctx.fillStyle = "#e67e22"; // Color estilo príncipe de Persia
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}