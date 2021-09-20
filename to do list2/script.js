function showPopup() {
    var popup = document.getElementById('popup')
    popup.style.display = 'flex'
}
function creatNote() {
    var title = document.getElementById('input').value
    var textContent = document.getElementById('textarea').value

    var notes = document.getElementById('notes')

    var card = document.createElement('div');
    card.setAttribute('class', 'card')
    notes.appendChild(card)

    var cardhead = document.createElement('div')
    cardhead.setAttribute('class', 'card-head')
    card.appendChild(cardhead)

    var titlespan = document.createElement('span')
    titlespan.innerHTML = title
    cardhead.appendChild(titlespan)
   
    var logo = document.createElement('img')
    logo.setAttribute('src', 'image/delete.png')
    logo.setAttribute('onClick', 'deteleNote(this)')
    cardhead.appendChild(logo)
  
    var cardcontent = document.createElement('div')
    cardcontent.setAttribute('class', 'card-content')
    card.appendChild(cardcontent)

   
 var contentspan = document.createElement('span')
    contentspan.innerHTML = textContent
    cardcontent.appendChild(contentspan)
   
    
   

    //reset inputs
    document.getElementById('input').value = ''
    document.getElementById('textarea').value = ''

    closePopup()

}

function deteleNote(img) {
    var toDelete = img
        .parentNode
        .parentNode;
    toDelete.remove()
}



function closePopup() {
    var popup = document.getElementById('popup')
    popup.style.display = 'none'
}