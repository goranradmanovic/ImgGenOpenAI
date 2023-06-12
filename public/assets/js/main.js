document.addEventListener('DOMContentLoaded', () => {

  // Get all DOM elements
  const form = document.querySelector('.image-form'),
    loader = document.querySelector('.loader'),
    image = document.querySelector('.openai-img')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    loader.classList.add('show')

    let formPrompt = form.prompt.value.trim()

    if (formPrompt !== '') {
      const res = await fetch('openai/image', {
    		method: 'POST',
    		headers: {
    			'Content-Type': 'application/json'
    		},
    		body: JSON.stringify({ prompt: formPrompt })
    	})

      const data = await res.json()

      if (data.url) {
        image.setAttribute('src', data.url)
        loader.classList.remove('show')
        image.classList.add('show')
      }
    } else {
      console.log('Field is required')
    }
  })

})
