// Change values here
const dateStartVacation = "2023-11-22 00:00"
const dateEndVacation = "2024-01-07 23:59"
const imageURL = `vacation.jpg`
const modalOpenTime = 120 // Modal close after time in seconds

// Create modal div element with styles
function addNewElement() {
    // Create elements
    const newDiv = document.createElement("div")
    const newButton = document.createElement("button")
    const modalBody = document.createElement("div")
    const modalBodyImg = document.createElement("img")

    // Set class and id
    newDiv.setAttribute("class", "jmModal")
    newDiv.setAttribute("id", "modal")
    newButton.setAttribute("id", "btnClose")
    newButton.setAttribute("onclick", "closeModal()")
    modalBody.setAttribute("class", "jmModalBody")
    modalBodyImg.setAttribute("src", imageURL)

    // Insert components inside div element
    newDiv.appendChild(modalBody)
    modalBody.appendChild(newButton)
    modalBody.appendChild(modalBodyImg)

    // Insert new element inside body
    document.body.appendChild(newDiv)
}

// Modal control
// Open modal by id
function openModal(id) {
    document.getElementById(id).classList.add("open")
    // document.body.classList.add("jmModal-open")
}
// Close currently open modal
function closeModal() {
    document.querySelector(".jmModal.open").classList.remove("open")
    //document.body.classList.remove("jmModal-open")
}
// Timer Modal
function timerModal() {
    const dateStart = new Date(dateStartVacation)
    const dateStartSecs = Date.parse(dateStart)
    const dateEnd = new Date(dateEndVacation)
    const dateEndSecs = Date.parse(dateEnd)
    const currentDate = new Date()
    const currentSecs = Date.parse(currentDate)

    if ((currentSecs >= dateStartSecs) & (currentSecs <= dateEndSecs)) {
        // Open Modal after load the page
        setTimeout(() => {
            openModal("modal")
            // Close Modal after time set
            setTimeout(() => {
                closeModal()
            }, 1000 * modalOpenTime)
        }, 2000)
    }
}

window.addEventListener("load", () => {
    // Create div
    addNewElement()
    // Call function to open modal automatically
    timerModal()
    // Close modal on background click
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("jmModal")) return closeModal()
    })
})
