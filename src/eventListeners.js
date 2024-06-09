export default function addEventListeners() {
    let viewWorkBtn = document.getElementById('viewGalleryBtn');
    viewWorkBtn.addEventListener('click', () => {
        let gallery = document.getElementById('gallery');
        gallery.scrollIntoView({behavior: 'smooth', block:'start'});
    })
}