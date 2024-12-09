function openArtwork(PanelID) {
    
}

function activateSidePanel(PanelID) {

}

function setContent() {
    
    let selectorPanel = document.getElementById('selector-panel'); 
    

}

function getArtistData(name) {
    fs.readFile('json/artworks_list.json', (err, inputD) => {
        if (err) throw err;
           alert(inputD.toString());
     })


}

function changeSideSelectorPanel(index) {
    let selectorPanel = document.getElementById('selector-panel'); 
    // let oldSelectorPanel = document.getElementById('selector-panel-old'); 
    let exitButton = document.getElementById('exit-button'); 

    void selectorPanel.offsetWidth; 
    void exitButton.offsetWidth; 
    if (!sidePanelActive) {
        toggleSideSelectorPanel(sidePanelActive); 
        sidePanelActive = true; 
    }

    activateSidePanel(index); 
    
    void selectorPanel.offsetWidth; 
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
}