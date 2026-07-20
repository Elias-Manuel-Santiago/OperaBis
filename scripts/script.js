const landing_view = "views/landing.html"
const teatro_view = "views/teatro.html"
const shows_view = "views/shows.html"



let actual_view = localStorage.getItem('actual_view');
let main = document.getElementById('main');

async function set_view(view) {

    let link_style, res;

    switch (view) {

        case "landing":
            link_style = document.createElement('link');
            link_style.rel = 'stylesheet';
            link_style.href = 'styles/landing.css';
            link_style.id = 'landing_style';
            document.head.appendChild(link_style);

            res = await fetch(landing_view);
            main.innerHTML = await res.text();

            localStorage.setItem('actual_view', 'landing');

            document.getElementById('teatro_style')?.remove();
            document.getElementById('shows_style')?.remove();
            break;
        case "teatro":
            link_style = document.createElement('link');
            link_style.rel = 'stylesheet';
            link_style.href = 'styles/teatro.css';
            link_style.id = 'teatro_style';
            document.head.appendChild(link_style);

            res = await fetch(teatro_view);
            main.innerHTML = await res.text();

            localStorage.setItem('actual_view', 'teatro');

            document.getElementById('landing_style')?.remove();
            document.getElementById('shows_style')?.remove();
            break;
        case "shows":
            link_style = document.createElement('link');
            link_style.rel = 'stylesheet';
            link_style.href = 'styles/shows.css';
            link_style.id = 'shows_style';
            document.head.appendChild(link_style);

            res = await fetch(shows_view);
            main.innerHTML = await res.text();

            localStorage.setItem('actual_view', 'shows');

            document.getElementById('landing_style')?.remove();
            document.getElementById('teatro_style')?.remove();
            break;
    }

}

if (actual_view == null) {
    set_view('landing');
} else {
    set_view(actual_view);
}
document.body.addEventListener('click', function (event) {
    if(event.target){
        switch(event.target.id){
            case 'nav0':
                set_view('landing');
                break;
            case 'teatro':
                set_view('teatro');
                break;
            case 'nav1':
            case 'shows':
                set_view('shows');
                break;
        }
    }
});

