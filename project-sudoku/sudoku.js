/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let result = board.match(/.{9}/g).map(el => {
    el = el.split('');
    el.unshift('|');
    el.push('|')
    el.splice(4, 0, '|');
    el.splice(8, 0, '|');
    return el;
  })

  const border = '|=======|=======|=======|';
  
  result = result.map(el => el.join(' '));
  result.unshift(border);
  result.push(border);
  result.splice(4, 0, border);
  result.splice(8, 0, border);

  return result.join('\n');
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
