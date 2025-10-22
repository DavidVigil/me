function switchTheme(){
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === '3d.html') {
        const preview = document.getElementById('preview');
        preview.style.filter = newTheme === 'dark' ? "invert(1)" : "invert(0)";
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
    preview.style.backgroundImage = `url('./images/gallery.png')`; //Used . instead of .. so github won't have trouble finding it.
}
function toggleMenu(){
    const nav = document.getElementById('nav-links');
    if(nav.style.display === "grid"){
        nav.style.display = "none";
    } else {
        nav.style.display = "grid";
    }
}
function showMore(button){
    const moreContent = button.nextElementSibling;
    moreContent.style.display = "block";
    button.style.transform = "rotate(180deg)";
    button.onclick = function(){
        moreContent.style.display = "none";
        button.style.transform = "rotate(0deg)";
        button.onclick = function(){
            showMore(button);
        }
    }
}
document.addEventListener("DOMContentLoaded", function(){
    var page = window.location.pathname.split("/").pop();
    page = page.replace('.html', '');
    document.documentElement.style.setProperty('--header-bg-img', `url("../images/${page}-banner.png")`);
    // Initialize theme based on system preference or default to light
    if (!document.documentElement.hasAttribute('data-theme')) {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
});
