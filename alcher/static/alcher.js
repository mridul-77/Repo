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

var addUserModal = document.getElementById("addUserModal");
var editUserModal = document.getElementById("editUserModal");

var addUserBtn = document.getElementById("addUserBtn");

var closeAddModalSpan = document.getElementsByClassName("close-add-modal")[0];
var closeEditModalSpan = document.getElementsByClassName("close")[0];

addUserBtn.onclick = function() {
    addUserModal.style.display = "block";
}

closeAddModalSpan.onclick = function() {
    addUserModal.style.display = "none";
}

closeEditModalSpan.onclick = function() {
    editUserModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == addUserModal) {
        addUserModal.style.display = "none";
    } else if (event.target == editUserModal) {
        editUserModal.style.display = "none";
    }
}

document.querySelectorAll(".edit-btn").forEach(function(button) {
    button.onclick = function() {
        editUserModal.style.display = "block";
        document.getElementById("userId").value = this.dataset.id;
        document.getElementById("fullname").value = this.dataset.fullname;
        document.getElementById("user_name").value = this.dataset.username;
        document.getElementById("email").value = this.dataset.email;
        document.getElementById("editUserForm").action = "/update/" + this.dataset.id + "/";
    }
});



