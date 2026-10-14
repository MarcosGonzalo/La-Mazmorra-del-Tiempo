// js/levels/level3.js - Nivel 3 (Laberinto final / Trampa)
class Level3 {
    constructor() {
        this.platforms = [
            { x: 0, y: 450, width: 800, height: 50 },
            { x: 100, y: 380, width: 80, height: 20 },
            { x: 280, y: 300, width: 80, height: 20 },
            { x: 460, y: 220, width: 80, height: 20 },
            { x: 640, y: 140, width: 100, height: 20 }
        ];
        this.traps = [
            { x: 200, y: 430, width: 200, height: 20 }
        ];
    }
    draw(ctx) {
        ctx.fillStyle = "#2c3e50";
        this.platforms.forEach(p => ctx.fillRect(p.x, p.y, p.width, p.height));

        ctx.fillStyle = "#e74c3c";
        this.traps.forEach(t => ctx.fillRect(t.x, t.y, t.width, t.height));
    }
}