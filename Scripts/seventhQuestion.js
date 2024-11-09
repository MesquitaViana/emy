const correctAnswer = "4";

document.querySelectorAll('input[name="option"]').forEach(option => {
    option.addEventListener('change', function () {
        if (this.value === correctAnswer) {
            document.getElementById('nextButton').style.display = 'block';
        } else {
            showHintPopup("Dica: Ja falei isso em alguns textos, procure em algum textinho");
        }
    });
});

function showHintPopup(hintText) {
    document.getElementById('hintText').innerText = hintText;
    document.getElementById('hintPopup').style.display = 'flex';
}

function closeHintPopup() {
    document.getElementById('hintPopup').style.display = 'none';
}

function showVoucherPopup() {
    document.getElementById('voucherPopup').style.display = 'flex';
}

function goToNextPage() {
    window.location.href = "eighthQuestion.html"; // Substitua "nextpage.html" pelo URL da próxima pergunta
}
