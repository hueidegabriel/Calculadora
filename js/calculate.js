export default function calculate() {
  const resultInput = document.querySelector('#result')
  resultInput.value = 'Expressão inválida!'
  resultInput.classList.add('error')

  const result = eval(input.value)

  resultInput.value = result
  resultInput.classList.remove('error')
}