import "./styles.css";

function1();
function2();

function function1() {
  const deButton = document.getElementById("add-comment");
  deButton.addEventListener("click", function () {
    var ul = document.getElementById("comments");
    var li = document.createElement("li");
    var dI = document.createElement("div");
    dI.classList.add("comment");
    var fEle = document.createElement("div");
    fEle.classList.add("comment-rating");
    var sEle = document.createElement("div");
    sEle.classList.add("comment-text");

    var dIBut = document.createElement("button");
    dIBut.classList.add("remove-comment");
    dIBut.appendChild(document.createTextNode("remove comment"));

    fEle.appendChild(
      document.createTextNode(document.getElementById("reviewNro").value + " ")
    );
    sEle.appendChild(
      document.createTextNode(document.getElementById("comment").value)
    );
    dIBut.addEventListener("click", function () {
      dIBut.parentNode.parentNode.remove();
    });
    dIBut.style.visibility = "hidden";
    dI.appendChild(fEle);
    dI.appendChild(sEle);
    dI.appendChild(dIBut);

    li.appendChild(dI);
    ul.appendChild(li);
  });
}

function function2() {
  const deButton = document.getElementById("remove-comments");
  deButton.addEventListener("click", function () {
    var ele = document.getElementsByClassName("remove-comment");
    var x;
    for (x = 0; x < ele.length; x++) {
      ele[x].style.visibility = "visible";
    }
  });
}
