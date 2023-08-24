document.getElementById("btn-case-plus").addEventListener("click", () => {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseFloat(caseNumberString);

  const newCaseNumber = previousCaseNumber + 1;
  caseNumberField.value = newCaseNumber;
});
