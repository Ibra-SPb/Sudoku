/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const re = /.{9}/g
  const board = boardString.match(re).map((line) => { return line.split('') })
  console.log(board)
}
solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')
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
