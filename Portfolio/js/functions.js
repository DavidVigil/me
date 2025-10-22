function switchTheme(){
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    const preview = document.getElementById('preview');
    if (newTheme === 'dark') {
        preview.style.filter = "invert(1)";
    } else {
        preview.style.filter = "invert(0)";
    }
}
function showPreview(previewPic){
    const src = previewPic.href;
    const preview = document.getElementById('preview');
    preview.style.filter = "invert(0)"
    preview.style.backgroundImage = `url('${src}')`;
}
function resetPreview(){
    const theme = document.documentElement.getAttribute('data-theme');
    const preview = document.getElementById('preview');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (theme === 'light') {
            preview.style.filter = "invert(0)";
        }
        else {
            preview.style.filter = "invert(1)";
        }
    }
    preview.style.backgroundImage = `url('./images/gallery.png')`;
}
function toggleMenu(){
    const nav = document.getElementById('nav-links');
    if(nav.style.display === "grid"){
        nav.style.display = "none";
    } else {
        nav.style.display = "grid";
    }
}
document.addEventListener("DOMContentLoaded", function(){
    var page = window.location.pathname.split("/").pop();
    page = page.replace('.html', '');
    document.documentElement.style.setProperty('--header-bg-img', `url("../images/${page}-banner.png")`);
});