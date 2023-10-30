//task2
const variantCell = document.getElementById('cell-1');
const inputColor = document.getElementById('color-input');

function setRandomColor() {
    // Get the table cell
    var cell = document.querySelector("#cell-1"); 
    
    // Generate a random color
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + "," + g + "," + b + ")";
    
    // Set the cell's background color
    cell.style.backgroundColor = color;
}

variantCell.addEventListener('mouseover', () => variantCell.style.backgroundColor = setRandomColor());

variantCell.addEventListener('click', () => variantCell.style.backgroundColor = inputColor.value);

variantCell.addEventListener("dblclick", () => {
  var index = variantCell.cellIndex;
    var rows = variantCell.parentElement.parentElement.rows;
    var color = inputColor.value;
    for (var i = 0; i < rows.length; i++) {
        rows[i].cells[index].style.backgroundColor = color;
    }
});
