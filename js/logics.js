function openProfile(){
document.querySelector('#myTab button[data-bs-target="#profile-page"]').click();
}

function activatePage(id){
document.querySelector(`#myTab button[data-bs-target="#${id}"]`).click();
}