//GET
function get_user(){
    axios({
        method:'get',
        url: 'https://jsonplaceholder.typicode.com/users',
        params:{_limit: 2}
    })
    .then(res=>document.getElementById('res').innerHTML = `${JSON.stringify(res)}`)
    .catch(err=> console.log(err));
}

//POST
function add_user(){
    axios
    .post('https://jsonplaceholder.typicode.com/users',{
        "id":11,
        "name":"abcd",
    })
    .then(res=>document.getElementById('res').innerHTML = `${JSON.stringify(res)}`)
    .catch(err=> console.log(err));
}

//PATCH
function update_user(){
    axios
    .delete('https://jsonplaceholder.typicode.com/users/1',{
        "name":"***********updated***************",
    })
    .then(res=>document.getElementById('res').innerHTML = `${JSON.stringify(res)}`)
    .catch(err=> console.log(err));
}

//DELETE
function remove_user(){
    axios
    .delete('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>document.getElementById('res').innerHTML = `${JSON.stringify(res)}`)
    .catch(err=> console.log(err));
}

// Event listeners
document.getElementById('get').addEventListener('click', get_user);
document.getElementById('post').addEventListener('click', add_user);
document.getElementById('update').addEventListener('click', update_user);
document.getElementById('delete').addEventListener('click', remove_user);