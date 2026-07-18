const landing_view = "views/landing.html"
const teatro_view = "views/teatro.html"

let actual_view = "landing";
let main = document.getElementById('main');
let link_style;


function set_view(view) {


    switch (view) {

        case "landing":
            link_style = document.createElement('link');
            link_style.rel = 'stylesheet';
            link_style.href = 'styles/landing.css';
            link_style.id = 'landing_style';
            document.head.appendChild(link_style);
            fetch(landing_view)
                .then(respuesta => respuesta.text()) // Convierte la respuesta a texto plano
                .then(html => {
                    main.innerHTML = html; // Inserta el HTML en tu elemento
                })
                .catch(error => {
                    console.error('Error al cargar el archivo HTML:', error);
                });
            document.getElementById('teatro_style')?.remove();
            break;
        case "teatro":
            link_style = document.createElement('link');
            link_style.rel = 'stylesheet';
            link_style.href = 'styles/teatro.css';
            link_style.id = 'teatro_style';
            document.head.appendChild(link_style);

            fetch(teatro_view)
                .then(respuesta => respuesta.text()) // Convierte la respuesta a texto plano
                .then(html => {
                    main.innerHTML = html; // Inserta el HTML en tu elemento
                })
                .catch(error => {
                    console.error('Error al cargar el archivo HTML:', error);
                });
            document.getElementById('landing_style')?.remove();
            break;
    }

}

set_view(actual_view);

main.addEventListener('click', function (event) {
    // Check if the clicked element (or its ID) is the 'teatro' button
    if (event.target && event.target.id === 'teatro') {
        set_view('teatro');
    }
});

