// Họ tên: NGUYỄN VIẾT HẬU
// MSSV: 2280600893

const arr = [1, 2, 3, 4, 5];

function showResult() {
	const chanLe = arr.map(x => x % 2 === 0 ? 'chẵn' : 'lẻ');
	const tich = arr.reduce((acc, x) => acc * x, 1);
	const phanTuChan = arr.filter(x => x % 2 === 0);
	const coChiaHetCho2 = arr.some(x => x % 2 === 0);
	const tatCaChiaHetCho3 = arr.every(x => x % 3 === 0);

	let html = '';
	html += `<b>Mảng:</b> [${arr.join(', ')}]<br>`;
	html += `<b>map:</b> ${JSON.stringify(chanLe)}<br>`;
	html += `<b>reduce:</b> ${tich}<br>`;
	html += `<b>filter:</b> [${phanTuChan.join(', ')}]<br>`;
	html += `<b>some:</b> ${coChiaHetCho2}<br>`;
	html += `<b>every:</b> ${tatCaChiaHetCho3}<br>`;

	document.getElementById('result').innerHTML = html;
}