

      const generateMainBoard = function () {
        const board = document.querySelector(".main-board");
        for (let i = 0; i < 76; i++) {
          board.innerHTML += `<div class='cell'>${i + 1}</div>`;
        }
      };

      //create an array
      const fillArray = function () {
        const arr = [];
        for (let i = 0; i < 76; i++) {
          arr.push(i + 1);
        }
        return arr;
      };
      //generate rand index in the range of the arr.length
      //get a element in the arr under the index
      //remove the elemnt from the arr
      const getRandomNum = function (range) {
        const randIndex = Math.floor(Math.random() * range.length);
        const random = range.splice(randIndex, 1)[0];
        return random;
      };

      const generateRandNumber = function (range) {
        const random = getRandomNum(range);
        const randNumDiv = document.getElementById("randNum");
        randNumDiv.innerText = "Number: " + random;
        const cells = document.querySelectorAll(".main-board .cell");
        cells[random - 1].classList.add("highlight");

        const userCells = document.querySelectorAll(".user-board .cell");
        userCells.forEach((cell) => {
          if (parseInt(cell.innerText) === random) {
            cell.classList.add("highlight");
          }
        });
      };


      window.onload = function () {
        generateMainBoard();
        const randBtn = document.getElementById("randBtn");
        const range = fillArray();
        randBtn.addEventListener("click", function () {
          generateRandNumber(range);
        });
      };