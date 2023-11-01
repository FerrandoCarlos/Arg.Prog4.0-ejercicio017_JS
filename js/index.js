async function fetchPost() {
    //manejo de errores
    try {
        //se recupera los datos de la API 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        //se convierte lo recuperado a JSON
        const data = await response.json();
        //le pasamos al párrafo con id counter la cantidad de post 
        document.getElementById('counter').innerHTML = `La Cantidad de post es: 
        <strong>${data.length}</strong>`;
        //del primer post debemos obtener el campo title y el campo body
        document.getElementById('first-post').innerHTML = `
        <h1>Primer Post</h1>
        <h2>${data[0].title}</h2>
        <p>${data[0].body}</p>`
    } catch (error) {
        alert('Ha ocurrido un error.');
    }
}
//llamamos a la function 
fetchPost();