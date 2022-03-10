// Add your code here

function submitData(userName,email){
    const Obj = { 
        method:'POST',
        headers: {
        'Content-Type': 'application/json',
        "accept": 'application/json'
    },
    body:JSON.stringify({
        'name': userName,
        'email': email 
    })
};
  return  fetch(`http://localhost:3000/users`, Obj)
  .then(res => res.json())
  .then(body => addContact(body.id))

.catch(error => {
    let message = 'Unauthorized Access'
    const p = document.createElement('p')
    p.innerHTML = error.message;
    const body = document.querySelector('body');
    body.append(p);
})

function addContact(newId){
    document.getElementsByTagName('body')[0].innerHTML = newId;
    document.body.append(message)

submitData('name', 'name@name.com')

}}