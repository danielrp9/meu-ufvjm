function searchFunction() {
    // Variáveis
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let content = document.getElementById('content');
    let cards = content.getElementsByClassName('col-md-4');

    // Laço para percorrer os cards e filtrar
    for (let i = 0; i < cards.length; i++) {
        let cardTitle = cards[i].getElementsByClassName('card-title')[0];
        if (cardTitle) {
            let textValue = cardTitle.textContent || cardTitle.innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}