class Confetti {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.querySelector('.confetti-container').appendChild(this.canvas);
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.particles = [];
        this.init();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    init() {
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * -this.height,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                size: Math.random() * 10 + 5,
                speed: Math.random() * 3 + 2,
                angle: Math.random() * Math.PI * 2
            });
        }
        this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        this.particles.forEach(particle => {
            particle.y += particle.speed;
            particle.x += Math.cos(particle.angle) * 2;
            particle.angle += 0.03;

            if (particle.y > this.height) {
                particle.y = -10;
                particle.x = Math.random() * this.width;
            }

            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

new Confetti();