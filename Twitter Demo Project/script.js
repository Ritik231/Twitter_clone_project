const postInput = document.getElementById("postInput");
const postButton = document.getElementById("postButton");
const postList = document.querySelector(".middle-section");

postButton.addEventListener("click", () => {
  const postText = postInput.value;
  if (postText == "") {
    alert("Please Add Some Text To Post");
  } else {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `<div class="post__avatar">
    <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" />
    </div>
    
    <div class="post__body">
    <div class="post__header">
    <div class="post__headerText">
    <h3>
    Virat Kohli
    <span class="post_headerSpecial"><span class="material-icons post__badge"> verified
    </span>@ritik</span>
    </h3>
    </div>
    <div class="post__headerDescription">
    <p>${postText}</p>
    </div>
    </div>
    <img src="https://picsum.photos/1920/1080?viratkohli=${Math.random()}" alt="" />
    <div class="post__footer">
    <span class="material-icons"> repeat </span>
    <span class="material-icons"> favorite_border </span>
    <span class="material-icons"> publish </span>
    </div>
    </div>`;
    postList.insertBefore(postElement, postList.firstChild);
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      postElement.remove();
    });
    postElement.appendChild(deleteButton);
    postList.appendChild(postElement);
    postInput.value = "";
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});