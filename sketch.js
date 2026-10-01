let time = 0;
let wave = [];


function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(0);

    translate(50, 50);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 3; i++) {
        let prex = x;
        let prey = y;
        let n = i * 2 + 1;
        let radius = 30 * 4 / (n * PI);
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        stroke(255);
        noFill();
        ellipse(prex, prey, radius * 2);

        fill(255);
        ellipse(x, y, 5);
        noFill();
        stroke(255);
        line(prex, prey, x, y);
    }
    wave.unshift(y);

    let padding = 100;
    let span = 0.3;
    noFill();
    stroke(255);
    beginShape();
    for (let i = 0; i < wave.length; i++) {
        vertex(i * span + 100, wave[i]);
    }
    endShape();

    stroke(255, 180, 0);
    line(x, y, padding, y);
    // console.log(wave.length)

    if (wave.length > 420) {
        wave.pop();
    }

    // console.log(wave.length)


    time -= 0.03;
}