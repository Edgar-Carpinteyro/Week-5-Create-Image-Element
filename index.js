




const createImg = document.getElementById("createImg");

createImg.addEventListener("click", function() {
    let img = document.createElement("img");

    img.setAttribute(
        "src",
        "https://images.unsplash.com/photo-1524633412778-878453ef0cd7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    let imgDiv = document.createElement("div");

    document.body.append(imgDiv);

    imgDiv.append(img);

    deleteImg.addEventListener("click", function() {
        img.remove();
    })
})

const deleteImg = document.getElementById("deleteImg");
