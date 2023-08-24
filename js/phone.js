function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);

  let newPhoneNumber;
  if (isIncrease) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;

  return newPhoneNumber;
}

function updatePhonePriceTotal(newPhoneNumber) {
  const phonePriceTotal = newPhoneNumber * 1219;
  const phonePriceTotalElement = document.getElementById("phone-total");
  phonePriceTotalElement.innerText = phonePriceTotal;
}
document.getElementById("btn-phone-plus").addEventListener("click", () => {
  const newPhoneNumber = updatePhoneNumber(true);

  updatePhonePriceTotal(newPhoneNumber);
});

document.getElementById("btn-phone-minus").addEventListener("click", () => {
  const newPhoneNumber = updatePhoneNumber(false);
  updatePhonePriceTotal(newPhoneNumber);
});
