function openArtwork(artistID, workID) {
    let data = JSON.parse(artistData);
    let title = data["artists"]["" + artistID]["works"]["" + workID]["title"];
    let created = data["artists"]["" + artistID]["works"]["" + workID]["created"];
    let medium = data["artists"]["" + artistID]["works"]["" + workID]["medium"];
    let contentPanel = document.getElementById("content-panel"); 
    let contentText = document.getElementById("content-info"); 
    let contentImage = document.getElementById("painting-image"); 
    if (!contentPanelActive) {
        contentPanel.classList.remove('selector-panel-inactive');
        void contentPanel.offsetWidth; 
        contentPanel.classList.add('selector-panel-active');
    } 
    // contentPanel.textContent = "Title: " + title + "\nMedium: " + medium + "\n Created on: " + created; 
    contentText.childNodes[1].textContent = "Title: " + title;
    contentText.childNodes[3].textContent = "Medium: " + medium;
    contentText.childNodes[5].textContent = "Year Created: " + created;
    console.log("url(/images/artworks/" + artistID + "/" + workID + ".jpg)"); 
    contentImage.style.backgroundImage = "url(/images/artworks/" + artistID + "/" + workID + ".jpg)"; 
}

function changeContentPanel() {
    let contentPanel = document.getElementById("content-panel"); 

    

    contentPanelActive = !contentPanelActive; 
    firstArtwork = false; 
}

function activateSidePanel(PanelID) {
    let artistPanel = document.getElementById("artist-panel"); 
    
    let data = JSON.parse(artistData);
    let dataPath = data["artists"]["" + PanelID]["works"];
    let selectorPanel = document.getElementById('selector-panel');
    let childNodeArray = selectorPanel.childNodes;
    for (let i = 0; i < childNodeArray.length; i += 1) {
        if (i * 2 + 1 < 9) {
            childNodeArray[i * 2 + 1].childNodes[0].textContent = dataPath["" + i]["title"];
        }
    }

    artistPanel.childNodes[1].textContent = data["artists"]["" + PanelID]["name"]; 

}

function setlocalID(id) {
    localID = id;
}

function setContent() {

}

function changeSideSelectorPanel(index) {
    setlocalID(index);

    let selectorPanel = document.getElementById('selector-panel');
    let contentPanel = document.getElementById('content-panel'); 
    let exitButton = document.getElementById('exit-button');

    void selectorPanel.offsetWidth;
    void exitButton.offsetWidth;
    if (!sidePanelActive) {
        toggleSideSelectorPanel(sidePanelActive);
        sidePanelActive = true;
    }

    activateSidePanel(index);


    void selectorPanel.offsetWidth;

    contentPanel.classList.remove('selector-panel-active');
    void contentPanel.offsetWidth; 
    contentPanel.classList.add('selector-panel-inactive');
}

function toggleExitButton(state) {
    toggleSideSelectorPanel(state);
    sidePanelActive = false;
}

function toggleSideSelectorPanel(state) {
    let selectorPanel = document.getElementById('selector-panel');
    let exitButton = document.getElementById('exit-button');

    if (!state) {
        selectorPanel.classList.remove('selector-panel-inactive');
        exitButton.classList.remove('exit-button-inactive');

        void selectorPanel.offsetWidth;
        void exitButton.offsetWidth;

        selectorPanel.classList.add('selector-panel-active');
        exitButton.classList.add('exit-button-active');
    } else {
        selectorPanel.classList.remove('selector-panel-active');
        exitButton.classList.remove('exit-button-active');

        void selectorPanel.offsetWidth;
        void exitButton.offsetWidth;

        selectorPanel.classList.add('selector-panel-inactive');
        exitButton.classList.add('exit-button-inactive');
    }

    if (contentPanelActive) {
        contentPanel.classList.remove('selector-panel-active');
        void contentPanel.offsetWidth; 
        contentPanel.classList.add('selector-panel-inactive');
    } 
}