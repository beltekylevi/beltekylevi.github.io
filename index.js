'use strict'

{
  const body = document.body
  fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(res => body.style.backgroundImage = `url(${res.file})`)
    .catch(_ => body.textContent = '🐈')
}
