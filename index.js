function checkButtonClicks() {
    let buttons = document.getElementsByClassName("button")
    console.log(buttons)
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            console.log(button.id)
        })
    })
}

checkButtonClicks()
