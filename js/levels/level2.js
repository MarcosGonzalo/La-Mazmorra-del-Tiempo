// js/levels/level2.js - Nivel 2 (Con obstáculos y pinchos)
class Level2 {
    constructor() {
        this.platforms = [
            { x: 0, y: 450, width: 800, height: 50 },
            { x: 150, y: 360, width: 100, height: 20 },
            { x: 350, y: 270, width: 100, height: 20 },
            { x: 550, y: 180, width: 100, height: 20 }
        ];
        this.traps = [
            { x: 300, y: 430, width: 40, height: 20 } // Pinchos de ejemplo
        ];
    }
    draw(ctx) {
        ctx.fillStyle = "#34495e";
        this.platforms.forEach(p => ctx.fillRect(p.x, p.y, p.width, p.height));
        
        ctx.fillStyle = "#c0392b"; // Pinchos rojos
        this.traps.forEach(t => ctx.fillRect(t.x, t.y, t.width, t.height));
    }
}