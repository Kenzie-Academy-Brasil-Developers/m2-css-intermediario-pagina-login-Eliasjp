function creatingModal (){
    let queryBody = document.querySelector(`body`)

    let modalBackground = document.createElement(`div`)
        modalBackground.classList = `modalBackground`

    let sectionModal = document.createElement(`section`)
        sectionModal.classList = `modalPasswordRecovery border-radius-8`

    let modalHeader = document.createElement(`div`)
        modalHeader.classList = `modalHeader border-radius-8`

    let modalH2 = document.createElement(`h2`)
        modalH2.classList = `modalH2 border-radius-4`
        modalH2.innerHTML = `Recuperação de senha`

    let modalExit = document.createElement(`button`)
        modalExit.classList = `closeModal`
        modalExit.innerHTML = `X`

    let modalDescription = document.createElement(`p`)
        modalDescription.classList = `modalDescription border-radius-4`
        modalDescription.innerHTML = `Digite seu e-mail para o envio do código de recuperação da senha.`

    let formInput = document.createElement(`form`)
        formInput.id = `inputEmail`

    let modalInput = document.createElement(`input`)
        modalInput.classList = `modalEmail`
        modalInput.type = `email`
        modalInput.placeholder = `Digite seu e-mail`
    
    let modalSend = document.createElement(`button`)
        modalSend.classList = `modalSend border-radius-8`
        modalSend.innerHTML = `Enviar`
        modalSend.form = `inputEmail`

    queryBody.append(modalBackground)
    modalBackground.append(sectionModal)
    sectionModal.append(modalHeader, modalDescription, formInput,)
    modalHeader.append(modalH2, modalExit)
    formInput.append(modalInput, modalSend)

    return creatingModal
}

function openingModal () {
    let x = document.querySelector(`#fgtPasswordID`)

    x.addEventListener(`click`, function (e){
        e.preventDefault()
        creatingModal()
        closingModal()
        return openingModal
    })
}

openingModal()

function closingModal (){
    let queryDiv = document.querySelector(`.modalBackground`)
    let queryExit = document.querySelector(`.closeModal`)
    queryExit.addEventListener(`click`, function (){
        queryDiv.remove()
    })
}