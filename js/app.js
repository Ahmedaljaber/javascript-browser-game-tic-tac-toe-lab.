/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


/*
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4 ,6],
]


const init = () => {
    board = ['','','','','','','','','']
    turn = 'X'
    winner = false
    tie = false
    render ()
}
    init()


// Variables 

let board
let turn
let winner
let tie 



// Element 

const squareEls = document.querySelector('.sqr')

const messageEl = document.querySelector('#message')

const resetBtnEl = document.querySelector('#reset');

// function 

const placePices = (idx) =>{
    board[idx] = turn
}

const checkForTie = () =>{
    if (winner) {
    return;
    }

    if (!board.includes('')) {
        tie = true;
    }
}

const checkForWinner = () => {
    if (
        (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) 
        (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) 
        (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) 
        (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) 
        (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) 
        (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) 
        (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) 
        (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
    ) 
    {
        winner = true
    }
}

const switchPlayerTurn = () => {
    if (winner) {
        return;
    }

    if (turn === 'X') {
        turn = 'O'
    }
    else {
        turn = 'X'
    }

}



const updateBoard = () => {
    board.forEach((cell,idx) => {
        if (cell === 'X'){
            squareEls[idx].textContent = 'X'
        }
        else if (cell === 'O') {
            squareEls[idx].textContent = 'O'
        }
        else {
            squareEls[idx].textContent = ''
        }

    })
}

const updateMessage = () => {
    if (!winner && !tie) {
      if (turn === 'X') {
        messageEl.textContent = "It's X's turn";
      } else {
        messageEl.textContent = "It's O's turn";
      }
    } else if (!winner && tie) {
      messageEl.textContent = 'Tie game!';
    } else {
      if (turn === 'X') {
        messageEl.textContent = 'X wins!';
      } else {
        messageEl.textContent = 'O wins!';
      }
    }
  }
const render = () => {
    updateBoard()
    updateMessage()
}


const handleClick = (evt) => {
    const sqIdx = evt.target.id
    const squareIsFull = board[sqIdx] !==''
    if (squareIsFull || winner) {
        return
    }
    placePices(sqIdx)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}




squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', init)

*/




const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  
  
  let board;
  let turn;
  let winner;
  let tie;
  
  
  const squareEls = document.querySelectorAll('.sqr');
  const messageEl = document.querySelector('#message');
  const resetBtnEl = document.querySelector('#reset');
  

  
  const placePiece = (idx) => {
    board[idx] = turn;
  };
  
  const checkForTie = () => {
    if (winner) {
      return;
    }
  
    if (!board.includes('')) {
      tie = true;
    }
  };
  
  const checkForWinner = () => {
    if (
      (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) ||
      (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
      (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) ||
      (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
      (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
      (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) ||
      (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
      (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
    ) {
      winner = true;
    }
  };
  
  
  const switchPlayerTurn = () => {
    if (winner) {
      return;
    }
    if (turn === 'X') {
      turn = 'O';
    } else {
      turn = 'X';
    }
  };
  
  const updateBoard = () => {
    board.forEach((cell, idx) => {
      if (cell === 'X') {
        squareEls[idx].textContent = 'X';
      } else if (cell === 'O') {
        squareEls[idx].textContent = 'O';
      } else {
        squareEls[idx].textContent = '';
      }
    });
  };
  
  const updateMessage = () => {
    if (!winner && !tie) {
      if (turn === 'X') {
        messageEl.textContent = "It's X's turn";
      } else {
        messageEl.textContent = "It's O's turn";
      }
    } else if (!winner && tie) {
      messageEl.textContent = 'Tie game!';
    } else {
      if (turn === 'X') {
        messageEl.textContent = 'X wins!';
      } else {
        messageEl.textContent = 'O wins!';
      }
    }
  };
  
  const render = () => {
    updateBoard();
    updateMessage();
  };
  
  const handleClick = (evt) => {
    const sqIdx = evt.target.id;
    const squareIsFull = board[sqIdx] !== '';
    if (squareIsFull || winner) {
      return;
    }
  
    placePiece(sqIdx);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
  };
  
  const init = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
  };
  
  init();
  
  
  squareEls.forEach((square) => {
    square.addEventListener('click', handleClick);
  });
  resetBtnEl.addEventListener('click', init);
  