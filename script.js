const arabicAyah = document.querySelector('.arabic-ayah')
const banglaAyah = document.querySelector('.bangla-ayah')
const suraNumber = document.querySelector('sura-number')
const tweet = document.querySelector('.twitter-share')
const audio = document.querySelector('audio')
const btnPlay = document.querySelector('.btn-play')
const generateBtn = document.querySelector('.btn-generate')
const suraName = document.querySelector('.sura-name')
const ayahNum = document.querySelector('.ayah-number')

// Random Number
function generateRandomNum(){
    return Math.floor(Math.random() * 6236)
}
const randomNum = generateRandomNum()

generateBtn.addEventListener('click',()=>{
    location.reload()
})

// Fetching API
const arabicApi = `http://api.alquran.cloud/v1/ayah/${randomNum}/ar.alafasy`
const banglaApi = `http://api.alquran.cloud/v1/ayah/${randomNum}/bn.bengali`


const arabic = fetch(arabicApi).then(blob => blob.json()).then(data => {
    arabicAyah.textContent = `${data.data.text}`
    suraName.textContent = `${data.data.surah.englishName}`
    ayahNum.textContent = `${data.data.numberInSurah}`
    console.log(data.data)
    const audioUrl = data.data.audio
    audio.src = audioUrl
    tweet.setAttribute('href',`https://twitter.com/intent/tweet/?text=${data.data.text}`)
})

const bangla = fetch(banglaApi).then(blob => blob.json()).then(data => {
    banglaAyah.textContent = `${data.data.text}`
    tweet.setAttribute('href',`https://twitter.com/intent/tweet/?text=${data.data.text}`)
})

// Event Listener
btnPlay.addEventListener('click', () =>{
    audio.play()
})


const test = fetch(banglaApi).then(blob => blob.json()).then(data => {
    console.log(data)
})

console.log(randomNum)