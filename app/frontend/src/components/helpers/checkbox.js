export const allChecked = () => {
  const nodeListOfCheckboxInput = document.querySelectorAll('.checkbox')
  const arrayOfCheckboxInput = [...nodeListOfCheckboxInput]

  return arrayOfCheckboxInput
}
