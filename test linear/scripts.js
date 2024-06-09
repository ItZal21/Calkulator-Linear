function solve2Variable() {
    // Ambil nilai dari input
    let a1 = parseFloat(document.getElementById('a1').value);
    let b1 = parseFloat(document.getElementById('b1').value);
    let c1 = parseFloat(document.getElementById('c1').value);
    let a2 = parseFloat(document.getElementById('a2').value);
    let b2 = parseFloat(document.getElementById('b2').value);
    let c2 = parseFloat(document.getElementById('c2').value);

    // Validasi input
    if (isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(a2) || isNaN(b2) || isNaN(c2)) {
        document.getElementById('result2').innerText = 'Please fill in all fields.';
        return;
    }

    // Hitung determinan
    let det = a1 * b2 - a2 * b1;
    if (det === 0) {
        document.getElementById('result2').innerText = 'No unique solution exists.';
        return;
    }

    // Hitung solusi
    let x = (c1 * b2 - c2 * b1) / det;
    let y = (a1 * c2 - a2 * c1) / det;

    document.getElementById('result2').innerText = `x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
}

function solve3Variable() {
    // Ambil nilai dari input
    let a1 = parseFloat(document.getElementById('a3').value);
    let b1 = parseFloat(document.getElementById('b3').value);
    let c1 = parseFloat(document.getElementById('c3').value);
    let d1 = parseFloat(document.getElementById('d1').value);
    let a2 = parseFloat(document.getElementById('a4').value);
    let b2 = parseFloat(document.getElementById('b4').value);
    let c2 = parseFloat(document.getElementById('c4').value);
    let d2 = parseFloat(document.getElementById('d2').value);
    let a3 = parseFloat(document.getElementById('a5').value);
    let b3 = parseFloat(document.getElementById('b5').value);
    let c3 = parseFloat(document.getElementById('c5').value);
    let d3 = parseFloat(document.getElementById('d3').value);

    // Validasi input
    if (isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(d1) || isNaN(a2) || isNaN(b2) || isNaN(c2) || isNaN(d2) || isNaN(a3) || isNaN(b3) || isNaN(c3) || isNaN(d3)) {
        document.getElementById('result3').innerText = 'Please fill in all fields.';
        return;
    }

    // Hitung determinan utama
    let D = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
    if (D === 0) {
        document.getElementById('result3').innerText = 'No unique solution exists.';
        return;
    }

    // Hitung Dx, Dy, Dz
    let Dx = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
    let Dy = a1 * (d2 * c3 - d3 * c2) - d1 * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
    let Dz = a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);

    // Hitung solusi
    let x = Dx / D;
    let y = Dy / D;
    let z = Dz / D;

    document.getElementById('result3').innerText = `x = ${x.toFixed(2)}, y = ${y.toFixed(2)}, z = ${z.toFixed(2)}`;
}

function resetInputs() {
    let inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => input.value = '');
    document.getElementById('result2').innerText = '';
    document.getElementById('result3').innerText = '';
}
