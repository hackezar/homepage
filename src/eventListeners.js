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
    
}