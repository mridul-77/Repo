function fetchData() {
        var apiUrl = 'https://dummyjson.com/users';
        fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                var table = document.getElementById('table').getElementsByTagName('tbody')[0];
                data.users.forEach(function(item) {
          var row = table.insertRow();
          var fullnameCell = row.insertCell(0);
          var usernameCell = row.insertCell(1);
       var emailCell = row.insertCell(2);
         var actionsCell = row.insertCell(3);
    
        fullnameCell.textContent = item.firstName + ' ' + item.lastName;
         usernameCell.textContent = item.username;
    emailCell.textContent = item.email;
    
                    var editBtn = document.createElement('button');
                    editBtn.className = 'edit-btn';
                    editBtn.textContent = '📄Edit';
                    editBtn.onclick = function() {
                        editRow(fullnameCell, usernameCell, emailCell, editBtn);
                    };
    
                    var deleteBtn = document.createElement('button');
                    deleteBtn.className = 'delete-btn';
                    deleteBtn.textContent = '📄Delete';
                    deleteBtn.onclick = function() {
                        table.deleteRow(row.rowIndex);
                    };
    
                    actionsCell.appendChild(editBtn);
                    actionsCell.appendChild(deleteBtn);
                });
            })
            .catch(function(error) {
                console.error('Error fetching data:', error);
            });
    }
    function editRow(fullnameCell, usernameCell, emailCell, editBtn) {
        if (editBtn.textContent === '📄Edit') {
            fullnameCell.contentEditable = 'true';
            usernameCell.contentEditable = 'true';
            emailCell.contentEditable = 'true';
            fullnameCell.focus();
            editBtn.textContent = '📄Save';
        } else {
            fullnameCell.contentEditable = 'false';
            usernameCell.contentEditable = 'false';
            emailCell.contentEditable = 'false';
            
            editBtn.textContent = '📄Edit';
        }
    }
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            } else {
                dropdownContent.classList.add("show");
            }
        });
    }
function addRow() {
    var table = document.getElementById('table').getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    var fullnameCell = row.insertCell(0);
    var usernameCell = row.insertCell(1);
         var emailCell = row.insertCell(2);
     var actionsCell = row.insertCell(3);

    fullnameCell.contentEditable = 'true';
    usernameCell.contentEditable = 'true';
    emailCell.contentEditable = 'true';
    fullnameCell.focus();

    var editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = '📄Save';
    editBtn.onclick = function() {
        editRow(fullnameCell, usernameCell, emailCell, editBtn);
    };

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '📄Delete';
      deleteBtn.onclick = function() {
        table.deleteRow(row.rowIndex );
    };

    actionsCell.appendChild(editBtn);
       actionsCell.appendChild(deleteBtn);
}

  document.getElementById('addRowBtn').onclick = addRow;
fetchData();


// // Get modal elements
// var modal = document.getElementById("myModal");
// var addRowBtn = document.getElementById("addRowBtn");
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// addRowBtn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// // Handle form submission
// document.getElementById("userForm").onsubmit = function(event) {
//     event.preventDefault();
    
//     var fullname = document.getElementById("fullname").value;
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;

//     // Here you can handle the form data, such as sending it to the server or displaying it on the page.
//     // For now, we'll just log it to the console.
//     console.log("Full Name: " + fullname);
//     console.log("Username: " + username);
//     console.log("Email: " + email);

//     // Close the modal after submission
//     modal.style.display = "none";

//     // Optionally reset the form
//     document.getElementById("userForm").reset();
// };
