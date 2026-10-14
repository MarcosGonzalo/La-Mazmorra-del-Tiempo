
// js/levels/level1.js - Nivel 1 (Tutorial)
class Level1 {
    constructor() {
        this.platforms = [
            { x: 0, y: 450, width: 800, height: 50 }, // Piso base
            { x: 200, y: 350, width: 150, height: 20 },
            { x: 450, y: 250, width: 150, height: 20 }
        ];
        this.traps = [];
    }
    draw(ctx) {
        ctx.fillStyle = "#7f8c8d";
        this.platforms.forEach(p => ctx.fillRect(p.x, p.y, p.width, p.height));
    }
}