document.addEventListener("DOMContentLoaded", function () {
  var codeElements = document.getElementsByTagName("code");
  var countCode = codeElements.length;
  var codediv = document.getElementsByClassName("code");

  console.log("Number of code elements on the page: " + countCode);

  for (var i = 0; i < countCode; i++) {
    codeElements[i].classList.add("code" + i);

    var div = document.createElement("i");
    div.classList.add("fa-regular", "fa-clipboard", "px-3", "copybtn");
    div.id = "copyButton" + i;
    div.setAttribute("data-clipboard-target", ".code" + i);
    div.setAttribute("data-toggle", "tooltip");
    div.setAttribute("data-placement", "top");
    div.setAttribute("title", "Copy");

    codediv[i].appendChild(div); // Fix here
    var clipboard = new ClipboardJS("#copyButton" + i);
    //console.log(clipboard);
    clipboard.on("success", function (e) {
      // Change the title attribute of the button (tooltip text)
      console.log("Text copied to clipboard: ", e.text);
    });
    clipboard.on("error", function (e) {
      console.error("Error copying text to clipboard:", e.text);
    });
  }
});
