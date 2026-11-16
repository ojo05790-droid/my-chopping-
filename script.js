
 const loading = document.getElementById("loading")
 const errorMsg = document.getElementById("errorMsg")
 const reloadBtn = document.getElementById("reloadBtn")

//  function loadUSers() {
//   usersContainer.innerHTML="";
//   errorMsg.style.display="none";
//   errorMsg.textContent="";
//   loading.style.display = "block";
//   loading.textContent="loading users...";
//  }

//  fetch("https://jsonplaceholder.typicode.com/users")
//  .then(!response => {
//   if (response.ok){
//     throw new error ("failed to fetch users")
//   }
//   return responce.json();
//  } )

const container = document.getElementById("usersContainer")
 const getUsers = async () => {
  
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!response.ok) {
      throw new error("failed to fetch users")
    }
    const users = await response.json()
    displayUser(users)
  }
  catch(error) {
    error.message
  }
 }

getUsers()

const displayUser = (users) => {
    users.forEach(user => {
      container.innerHTML += `Name: ${user.name},
       Email: ${user.email}`
      
    });
}

  
 reloadBtn.addEventListener("click", getUsers)