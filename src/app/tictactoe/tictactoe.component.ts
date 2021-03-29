import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {

  currentPlayer = 'X';
  winner = '';
  isEnded = false;
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  getPlay(line: number, col: number) {
    if (this.board[line][col] === '' && this.isEnded === false) {
      this.board[line][col] = this.currentPlayer;

      this.checkWinner(this.currentPlayer);

      (this.currentPlayer === 'X')
        ? this.currentPlayer = 'O'
        : this.currentPlayer = 'X';
    }
  }

  checkWinner(player: string) {
    for (let i = 0; i < this.board.length; i++) {
      if(this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        this.winner = player;
        this.isEnded = true;
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      if(this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        this.winner = player;
        this.isEnded = true;
      }
    }

    if(
      this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player ||
      this.board[0][2] == player && this.board[1][1] == player && this.board[2][0]  == player
    ) {
      this.winner = player;
      this.isEnded = true;
    }
  }

  restart() {
    this.winner = '';
    this.currentPlayer = 'X';
    this.isEnded = false;
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.board[i][j] = '';
      }
    }
  }
}
