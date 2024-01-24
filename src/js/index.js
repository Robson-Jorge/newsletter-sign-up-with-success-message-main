const inputUserEmail = document.getElementById("input-user-email")
const subscribeForm = document.querySelector("#subscribe-form")
const requiredEmail = document.querySelector("#required-email")
const thankYouCard = document.querySelector(".thank-you-card")
const newsletterCard = document.querySelector(".newsletter-card")
const userEmail = document.getElementById("user-email")
const dismissButton = document.querySelector(".dismiss-button")

const regex = /.+@[^@\s]+\.[a-zA-Z]{2,}/

const validateEmail = () => {
  if (!regex.test(inputUserEmail.value)) {
    inputUserEmail.classList.add("invalid-email")
    requiredEmail.style.display = "block"
    return false
  } else {
    inputUserEmail.classList.remove("invalid-email")
    requiredEmail.style.display = "none"
    return true
  }
}

const showThankYouCard = () => {
  newsletterCard.classList.add("hidden")
  thankYouCard.classList.remove("hidden")
  userEmail.innerText = inputUserEmail.value
}

const resetForm = () => {
  newsletterCard.classList.remove("hidden")
  thankYouCard.classList.add("hidden")
  inputUserEmail.value = ""
}

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (validateEmail()) {
    showThankYouCard()
  }
})

dismissButton.addEventListener("click",resetForm)