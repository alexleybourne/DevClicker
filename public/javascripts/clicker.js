let count = 0
let currentClicker = "Assets/OldComputer.png"

function pageLoaded(){
    console.log("Page Loaded")
}

// Dark & Light Mode Button
function darkMode(){
    console.log("Dark Mode Clicked")
    let button = document.getElementById('darkModeButton')
    let text = document.getElementById('darkModeText')
    let stylesRoot = document.documentElement;

    if (text.innerHTML == "&nbsp;Dark") {
        // Dark Values
        button.innerHTML = `<a class="white uk-animation-fade"><ion-icon name="sunny"></ion-icon><b id="darkModeText">&nbsp;Light</b></a>`
        stylesRoot.style.setProperty('--bg-color', "rgba(24, 24, 24, 0.918)")
        stylesRoot.style.setProperty('--text-color', "rgba(255, 255, 255, 0.863)")
        stylesRoot.style.setProperty('--button-bg-color', "rgba(255, 255, 255, 0.164)")
        stylesRoot.style.setProperty('--circle-color', "rgba(160, 160, 160, 0.315)")
    } else {
        // Normal Value
        button.innerHTML = `<a class="white uk-animation-fade"><ion-icon name="moon"></ion-icon><b id="darkModeText">&nbsp;Dark</b></a>`
        stylesRoot.style.setProperty('--bg-color', "none")
        stylesRoot.style.setProperty('--text-color', "rgba(36, 36, 36, 0.863)")
        stylesRoot.style.setProperty('--button-bg-color', "rgba(255, 255, 255, 0.164)")
        stylesRoot.style.setProperty('--circle-color', "rgba(231, 231, 231, 0.801)")
    }
}

function updateCount(){
    count++
    document.getElementById('counter').innerHTML = count + " Lines Coded"

    document.title = "Dev Clicker - " + count + " Lines Coded"

    anime({
        targets: '.counter',
        scale: [
            { value: 1.2, duration: 10, delay: 50 },
            { value: 1, duration: 10, delay: 50 }
        ]
    })

    // Update Clicker
    if (count > 19) {
        currentClicker = "Assets/MidComputer.png"
        document.getElementById("clicker").src = currentClicker
    }

}

// Nics Genius Spawn Pawn
function spawnItem() {
    let maxSpawnedItems = 40
    let spawnArea = document.getElementById("spawnedItems")

    if (spawnArea.children.length > maxSpawnedItems) {
        spawnArea.removeChild(spawnArea.children[spawnArea.children.length - 1])
    }

    let img = document.createElement('img')
    img.src = currentClicker
    img.classList.add('spawnedObject')
    spawnArea.insertBefore(img, spawnArea.children[0])

    let randVal = Math.random()
    let size = randVal*(200 - 50) + 50
    let speed = (1-randVal)*2+1
    let zIndex = Math.round(randVal)
    let blur = randVal*4
    let left = Math.random()*80
    let delay = Math.random()*0.75
    let rotation = Math.random()*270-135

    img.classList.add('particle')
    img.style.setProperty('--rotation', `${rotation}deg`);
    img.style.animationDuration = `${speed}s`
    img.style.filter = `blur(${blur}px)`
    img.style.left = `${left}%`
    img.style.zIndex = zIndex*3 - 1
    img.style.width = `${size}px`
    img.style.height = `${size}px`
    img.style.animationDelay = `${delay}s`
    setTimeout(() => {
      Array.from(spawnArea.children).includes(img) && spawnArea.removeChild(img)
    }, (speed+delay)*1000)
}

function clicked(){
    console.log("Clicked")

    updateCount()
    spawnItem()

    anime({
        targets: '.clickerImage',
        scale: [
            { value: 1.1, duration: 10, delay: 50 },
            { value: 1, duration: 10, delay: 50 }
        ]
    })
}


// Mouse Hover Button Animation
function enterClicker() { 
    anime({
        targets: ".clickerImage",
        scale: 1.2,
        elasticity: 10
      })
}

function leaveClicker() { 
    anime({
        targets: ".clickerImage",
        scale: 1.0,
        elasticity: 10
      })
}


// Shop Menu

function shopButtonClose(){
    document.getElementById("shopMenu").setAttribute("style", "transform: translateX(-100%);")
    document.getElementById("mainArea").setAttribute("style", "transform: translateX(0);")
}

function shopButtonClick(){
    document.getElementById("shopMenu").setAttribute("style", "transform: translateX(0);")
    document.getElementById("mainArea").setAttribute("style", "transform: translateX(100%);")
}

// Upgrade Menu

function upgradeButtonClose(){
    document.getElementById("upgradeMenu").setAttribute("style", "transform: translateX(+100%);")
    document.getElementById("mainArea").setAttribute("style", "transform: translateX(0);")
}

function upgradeButtonClick(){
    document.getElementById("upgradeMenu").setAttribute("style", "transform: translateX(0);")
    document.getElementById("mainArea").setAttribute("style", "transform: translateX(-100%);")
}

