const correctAnswer = "3";

document.querySelectorAll('input[name="option"]').forEach(option => {
    option.addEventListener('change', function () {
        if (this.value === correctAnswer) {
            document.getElementById('nextButton').style.display = 'block';
        } else {
            showHintPopup("Dica: Lembre do site do seu aniversaio, que você entendera (assim que acertar, lhe explicarei o do porque)");
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
    window.location.href = "seventhQuestion.html"; // Substitua "nextpage.html" pelo URL da próxima pergunta
}
