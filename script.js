  function updateFontSize() {
    // Get the font size value from the form
    var fontSize = document.getElementById("font-size").value;

    // Update the font size of the textarea
    document.getElementById("editor").style.fontSize = fontSize + "px";
  }

  function updateFontFamily() {
    // Get the font family value from the form
    var fontFamily = document.getElementById("font-family").value;
  
    // Update the font family of the textarea
    document.getElementById("editor").style.fontFamily = fontFamily;
  }
  function updateBold() {
    // Get the checked state of the bold checkbox
    var isBold = document.getElementById("bold").checked;
  
    // Update the font weight of the textarea
    if (isBold) {
      document.getElementById("editor").style.fontWeight = "bold";
    } else {
      document.getElementById("editor").style.fontWeight = "normal";
    }
  }
  function updateItalic() {
    // Get the checked state of the italic checkbox
    var isItalic = document.getElementById("italic").checked;
  
    // Update the font style of the textarea
    if (isItalic) {
      document.getElementById("editor").style.fontStyle = "italic";
    } else {
      document.getElementById("editor").style.fontStyle = "normal";
    }
  }
  function updateUnderline() {
    // Get the checked state of the underline checkbox
    var isUnderlined = document.getElementById("underline").checked;
  
    // Update the text decoration of the textarea
    if (isUnderlined) {
      document.getElementById("editor").style.textDecoration = "underline";
    } else {
      document.getElementById("editor").style.textDecoration = "none";
    }
  }
  function alignLeft() {
    // Set the text alignment to left
    document.getElementById("editor").style.textAlign = "left";
  }
  
  function alignCenter() {
    // Set the text alignment to center
    document.getElementById("editor").style.textAlign = "center";
  }
  
  function alignRight() {
    // Set the text alignment to right
    document.getElementById("editor").style.textAlign = "right";
  }
  function capitalize() {
    var button = document.querySelector(".capitalize-button");
  button.classList.toggle("checked");
    // Get the current text in the textarea
    var text = document.getElementById("editor").value;
  
    // Check if the text is already capitalized
    var isCapitalized = text === text.toUpperCase();
  
    // Toggle between capitalized and lowercase text
    var capitalizedText = isCapitalized ? text.toLowerCase() : text.toUpperCase();
  
    // Update the textarea with the capitalized/lowercase text
    document.getElementById("editor").value = capitalizedText;
  
    // Get the "Capitalize" button
    var button = document.getElementById("capitalize");
  
    // Add or remove the "darkened" class based on the capitalization of the text
    if (isCapitalized) {
      button.classList.remove("darkened");
    } else {
      button.classList.add("darkened");
    }
  }
  

  

    