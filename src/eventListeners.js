export default function addEventListeners() {
    // Landing Page Button
    let viewWorkBtn = document.getElementById('viewGalleryBtn');
    viewWorkBtn.addEventListener('click', () => {
        let gallery = document.getElementById('gallery-container');
        gallery.scrollIntoView({behavior: 'smooth', block:'end'});
    })
    // Links for nav bar
    // gallery link
    let galleryLink = document.getElementById('gallery-link');
    galleryLink.addEventListener('click', () => {
        let gallery = document.getElementById('gallery-container');
        gallery.scrollIntoView({behavior: 'smooth', block:'end'});
    })
    // about link
    let aboutLink = document.getElementById('about-link');
    aboutLink.addEventListener('click', () => {
        let about = document.getElementById('about-container');
        about.scrollIntoView({behavior: 'smooth', block:'end'});
    })

    // Contact Section Listeners
    // Copy Phone Number to Clipboard
    let phoneNumber = document.getElementById('phoneContact');
    phoneNumber.addEventListener('click', () => {
        // Below will copy the following to the computers clipboard
        navigator.clipboard.writeText("+1(727)280-5737").then(() => {
            console.log('Content copied to clipboard');
            let phoneTitle = document.getElementById('phoneTitle');
            phoneTitle.innerHTML = 'Copied to Clipboard';
            // Switches html back to original after 3 seconds
            setTimeout(function(){phoneTitle.innerHTML = "Phone (Click to Copy)"}, 3000);
            // Text successfully copied
        }, () => {
            console.error('Failed to copy to clipboard');
            // text failed to copy to clipboard
        })
    })

    // Copy Email to Clipboard
    let emailAddress = document.getElementById('emailContact');
    emailAddress.addEventListener('click', () => {
       // Below will copy the following to the computers clipboard
        navigator.clipboard.writeText("jackhalcisak@outlook.com").then(() => {
            console.log('Content Copied');
            let emailTitle = document.getElementById('emailTitle');
            emailTitle.innerHTML = "Copied to Clipboard";
            // Switches html back to original after 3 seconds
            setTimeout(function(){emailTitle.innerHTML = "Email (Click to Copy)"}, 3000)
        })
    })

    // Open new tab to Github Profile
    let githubProfile = document.getElementById('githubProfile');
    githubProfile.addEventListener('click', () => {
        window.open("https://github.com/hackezar", "_blank", "noopener noreferrer");
    })
}