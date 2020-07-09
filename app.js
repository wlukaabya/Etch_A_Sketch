//Declarations
container = document.querySelector('#container');
let grid = document.createElement('div')
let squares;
const resetButton = document.getElementById('reset');
const addGrid = document.getElementById('addGrid')
const addColorf = document.getElementById('addColor')
const darkGrid = document.getElementById('opacfil')

//this is a function that draws grids.
function drawGrid(numCells=16)
{
for(let i = 0; i<numCells**2; i++)
{
    let grid = document.createElement('div')
    grid.classList.add('gridItem');
    container.appendChild(grid);
}
container.style.cssText = `grid-template-columns: repeat(${numCells}, 1fr); grid-template-rows: repeat(${numCells}, 1fr)`;
}

//this function adds color to the squares
function addColor()
{
    squares = Object.values(document.getElementsByClassName('gridItem'));
    squares.forEach(function(grid){
    grid.addEventListener('mouseover',()=>{
    grid.classList.add('item--color');
    })      
    });
}

resetButton.addEventListener('click',()=>{
    container.innerHTML='';
})

function putGrid()
    {
        let x = prompt('Please enter the amount of cells you want per side?')
        drawGrid(x);
        addColor();
    }

addGrid.addEventListener('click',putGrid)


