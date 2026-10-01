function dft(x) {
    const X = [];
    const N = x.length;
    for (let k = 0; k < N; k++) {
        let re = 0;
        let im = 0;
        // console.log(re)
        for (let n = 0; n < N; n++) {
            // let X: any[];
            let phi = (TWO_PI * k * n) / N;
            // console.log(re)
            re += x[n] * cos(phi);
            im -= x[n] * sin(phi);
        }

        re = re / N;
        im = im / N;
        let freq = k;
        let amp = sqrt(re * re + im * im);
        let phase = atan2(im, re);
        X[k] = { re, im, freq, amp, phase };
    }
    return X;
}




function dft2D(points) {
    const X = [];
    const N = points.length;
    for (let k = 0; k < N; k++) {
        let re = 0;
        let im = 0;
        // console.log(re)
        for (let n = 0; n < N; n++) {
            // let X: any[];
            let phi = (TWO_PI * k * n) / N;
            // console.log(re)
            // re += x[n] * cos(phi);
            // im -= x[n] * sin(phi);
            re += points[n].x * cos(phi) + points[n].y * sin(phi);
            im += points[n].y * cos(phi) - points[n].x * sin(phi);
        }

        re = re / N;
        im = im / N;
        let freq = k;
        let amp = sqrt(re * re + im * im);
        let phase = atan2(im, re);
        X[k] = { re, im, freq, amp, phase };
    }
    return X;
}