let rowNumberSection = document.querySelector('.row-number-section');
let coulumnTagSection = document.querySelector('.column-tag-section');
let formulaBarSelectedCellArea = document.querySelector('.selected-cell-div')
let cellSection = document.querySelector('.cell-section');

// last visited cell
let lastVisitedCell;

let dataObject = {}

for (let i = 1; i <= 100; i++) {
    let div = document.createElement('div');

    div.innerText = i;
    div.classList.add('row-number')
    rowNumberSection.append(div);
}

// Add columns ie 26 headings
for (let i = 0; i < 26; i++) {
    let div = document.createElement('div');
    div.classList.add("column-tag")
    div.innerText = String.fromCharCode(65 + i);

    coulumnTagSection.append(div)
}


// cell section make it scroll
cellSection.addEventListener("scroll", (e) => {
    console.log(e.currentTarget.scrollLeft);
    coulumnTagSection.style.transform = `translateX(-${e.currentTarget.scrollLeft}px)`
    rowNumberSection.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`
});

// for grid elements 
// we are creating individual cell + UI
for (let i = 1; i <= 100; i++) {

    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let j = 0; j < 26; j++) {
        let asciiCode = 65 + j;
        let alpha = String.fromCharCode(asciiCode);

        // eg : A1, A2, B6 etc
        let cellAddress = alpha + i;

        // object 
        dataObject[cellAddress] = {
            value: undefined,
            formula: undefined,
            upsream: [],
            downstream: [],
        };

        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-address', cellAddress);
        // to edit 
        cell.contentEditable = true;

        // Whenever we do changes, it updates
        cell.addEventListener("input", (e) => {

            // get address of cell 
            let currentCellAddress = e.currentTarget.getAttribute('data-address')
            let currentCellObject = dataObject[currentCellAddress];

            // console.log(e.currentTarget.innerText);
            // change the value 
            currentCellObject.value = e.currentTarget.innerText;
            console.log(currentCellObject);
        })

        cell.addEventListener('click', (e) => {

            if (lastVisitedCell && lastVisitedCell != e.currentTarget) {
                lastVisitedCell.classList.remove("cell-selected");
            }


            e.currentTarget.classList.add('cell-selected');

            lastVisitedCell = e.currentTarget;

            let currentCellAddress = e.currentTarget.getAttribute("data-address");
            formulaBarSelectedCellArea.innerText = `${currentCellAddress}`;

        });

        // finally appeding
        rowDiv.append(cell);
    }
    console.log('adding');
    cellSection.append(rowDiv);
}