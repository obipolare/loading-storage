const form = document.getElementById('form')
const name = document.getElementById('name')
const key = document.getElementById('key')
const select = document.getElementById('select')

form.addEventListener('submit', (e) => {
    e.preventDefault()


    localStorage.setItem(form.key.value, form.value.value)
    select.innerHTML += `<option>${form.key.value}</option>`

    form.reset()
})


select.addEventListener('change', () => {

    document.getElementById('addText').textContent = localStorage.getItem(select[select.selectedIndex].textContent)

})




const fileInput = document.getElementById('file')
const video = document.getElementById('video')

fileInput.addEventListener('change', (e) => {
    e.preventDefault()

    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener('load', (e) => {
        video.setAttribute('controls', '')
        video.setAttribute('src', e.target.result)

    })

    const root = document.documentElement

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%')
    })

    fileReader.addEventListener('loadend', (e) => {
        root.style.setProperty('--bar-width', '100%')
    })


})