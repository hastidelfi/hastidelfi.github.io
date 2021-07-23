// CLOCK

const hour = document.getElementById('clock-hour'),
minutes = document.getElementById('clock-minutes'),
seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() *30,
        mm = date.getMinutes() *6,
        ss = date.getSeconds() *6

        //add rotation
        hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
        minutes.style.transform = `rotateZ(${mm}deg)`
        seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000) //1000=1s

// CLOCK AND DATE TEXT
const textHour = document.getElementById('text-hour'),
textMinutes = document.getElementById('text-minutes'),
textAmPm = document.getElementById('text-ampm'),
dateDay = document.getElementById('date-day'),
dateMonth = document.getElementById('date-month'),
dateYear = document.getElementById('date-year')

const clockText = ()=>{
    let date = new Date()

    let hh = date.getHours(),
    mm=date.getMinutes(),
    ampm,
    day=date.getDate(),
    //weekDay=date.getDay(),
    month=date.getMonth(),
    year=date.getFullYear()

    // We change the hours from 24 to 12 hours and establish whether it is AM or PM
   if(hh>= 12){
       hh=hh -12
       ampm = 'PM'
   }
   else{ampm="AM"}

    // We detect when it's 0 AM and transform to 12 AM
    if(hh == 0){hh = 12}

    // Show a zero before hours
    if(hh < 10){hh = `0${hh}`}

    // Show time
    textHour.innerHTML=`${hh}:`
    
    // Show a zero before the minutes
    if(mm<10){mm = `0${mm}`}
    
    // Show minutes
    textMinutes.innerHTML=mm

    // Show am or pm
    textAmPm.innerHTML=ampm
    // We get the days of the week and show it
    //let weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']

    // We get the months of the year and show it
   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // We show the day, the month and the year
    dateDay.innerHTML = day

    dateMonth.innerHTML = `${months[month]}`

    dateYear.innerHTML = year
}

setInterval(clockText, 1000)

// dark/light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//get current them that inetrface has
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

//
if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='bxs-moon' ? 'add' : 'remove'](iconTheme)
}


//activate/deactivate the theme using the button
themeButton.addEventListener('click', ()=> {
    //add/remove dark them / icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //save the current them / icon
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})