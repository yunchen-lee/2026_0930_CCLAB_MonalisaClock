// let y = [];
let points = [];
let fourierXY = [];
let data = [];


let time = 0;
let wave = [];


async function setup() {
    createCanvas(800, 800);
    data = await loadJSON("monalisa.json");
    // let srcList = data.map(parseFace);
    // console.log(data)


    // y = [100, -100, 100, 100, 100, 100, -100];
    // for (let i = 0; i < 100; i++) {
    //     y[i] = i - 50

    // }



    // let radius = 100;
    // let deg = PI * 2 / 360;
    // for (let i = 0; i < 360; i++) {
    //     let r = 30 * sin(i / 6);
    //     let x = (radius + r) * cos(deg * i);
    //     let y = (radius + r) * sin(deg * i);
    //     points.push({ x, y });
    // }



    // console.log(typeof(data))
    for (const [key, value] of Object.entries(data)) {
        //   console.log(`${key}: ${value}`);
        points.push(value);
    }

    console.log(points);


    fourierXY = dft2D(points);
    // console.log(fourierY);
}

function draw() {
    background(0);

    translate(width / 2, height / 2);

    let x = 0;
    let y = 0;

    for (let i = 0; i < fourierXY.length; i++) {
        let prex = x;
        let prey = y;

        // let n = i * 2 + 1;
        let freq = fourierXY[i].freq;
        let amp = fourierXY[i].amp;
        let phase = fourierXY[i].phase;
        // console.log(fourierY[i] )
        // let radius = 30 * 4 / (n * PI);
        x += amp * cos(freq * time + phase + HALF_PI);
        y += amp * sin(freq * time + phase + HALF_PI);

        stroke(100);
        // noFill();
        ellipse(prex, prey, amp * 2);

        // fill(255);
        // ellipse(x, y, 5);
        // noFill();
        // stroke(255);
        // line(prex, prey, x, y);
    }
    wave.unshift({ x: x, y: y });

    let padding = 100;
    let span = 0.3;
    noFill();
    stroke(255);
    beginShape();
    for (let i = 0; i < wave.length; i++) {
        vertex(wave[i].x, wave[i].y);
    }
    endShape();

    // stroke(255, 180, 0);
    // line(x, y, padding, y);
    // console.log(wave.length)

    // if (wave.length > 420) {
    //     wave.pop();
    // }

    // console.log(wave.length)


    const dt = TWO_PI / fourierXY.length;
    time -= dt;
}