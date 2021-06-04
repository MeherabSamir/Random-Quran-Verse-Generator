// Selecting DOM Elements
const arabicAyah = document.querySelector('.arabic-ayah')
const banglaAyah = document.querySelector('.bangla-ayah')
const suraNumber = document.querySelector('sura-number')
const tweetShare = document.querySelector('.twitter-share')
const audio = document.querySelector('audio')
const btnPlay = document.querySelector('.btn-play')
const generateBtn = document.querySelector('.btn-generate')
const suraName = document.querySelector('.sura-name')
const ayahNum = document.querySelector('.ayah-number')
const suraInfo = document.querySelector('.sura-info')


// Random Number
function generateRandomNum(){
    return Math.floor(Math.random() * 6236)
}
const randomNum = generateRandomNum()


// Fetching API
const arabicApi = `https://api.alquran.cloud/v1/ayah/${randomNum}/ar.alafasy`
const banglaApi = `https://api.alquran.cloud/v1/ayah/${randomNum}/bn.bengali`

const arabic = fetch(arabicApi)
                .then(blob => blob.json())
                .then(data => {
                    arabicAyah.textContent = `${data.data.text}`
                    suraName.textContent = `${data.data.surah.englishName}`
                    ayahNum.textContent = `${data.data.numberInSurah}`
                    audio.src = data.data.audio
                })

const bangla = fetch(banglaApi)
                .then(blob => blob.json())
                .then(data => {
                    banglaAyah.textContent = `${data.data.text}`
                })


// Event Listener
btnPlay.addEventListener('click', () =>{
    audio.play()
})
generateBtn.addEventListener('click',()=>{
    location.reload()
})


// Tweet
function tweet(){
    tweetShare.setAttribute('href',`https://twitter.com/intent/tweet/?text=${banglaAyah.innerText} আল-কুরআন।`)
}

setInterval(tweet,1000)