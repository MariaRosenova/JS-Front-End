function lockedProfile() {
    const btn = Array.from(document.getElementsByTagName('button'))
    .forEach((button) => {
        button.addEventListener('click', toggleInfo);
    });

    function toggleInfo(e){
        const btn = e.currentTarget;
        const currentProfile = btn.parentElement;
        const children = Array.from(currentProfile.children);
        const additionalInfo = children[9];
        const UnlockRadioButton = children[4];
        console.log(additionalInfo);

        if (UnlockRadioButton.checked) {
            if (btn.textContent === 'Show more') {
                additionalInfo.style.display = "block";
                btn.textContent = "Hide it"
            }
            else{
                additionalInfo.style.display = "none";
                btn.textContent = "Show more";
            }
    
        }              
    }
}