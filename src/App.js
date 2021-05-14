import React from 'react';
import './App.css';
import { Component } from 'react';
// import Board from './Board/board';
import logo from './logo.png';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PauseIcon from '@material-ui/icons/Pause';
import { CheckBoxRounded } from '@material-ui/icons';
// import { PlayCircleFilledWhiteRounded } from '@material-ui/icons';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';



class App extends Component {
  state = {
    Board : [
      [2, 8, 6, 7, 5, 4, 9, 3, 1],
      [9, 3, 1, 2, 8, 6, 7, 5, 4],
      [7, 5, 4, 9, 1, 3, 8, 6, 2],
      [8, 9, 2, 6, 7, 5, 4, 1, 3],
      [6, 7, 5, 4, 3, 1, 2, 9, 8],
      [4, 1, 3, 8, 9, 2, 6, 7, 5],
      [5, 6, 9, 3, 4, 8, 1, 2, 7],
      [3, 4, 7, 1, 2, 9, 5, 8, 6],
      [1, 2, 8, 5, 6, 7, 3, 4, 9]
  ],

  Game : [[]],

  Solution : [[]],

  Copy : [[]],

  GameOn: false,

  Halt: false,

  Solvemode : false,
  };



  newBtn = () => {
    this.setState({GameOn: true });
    this.grid();
  }

  pauseBtn = () => {
    let halt = this.state.Halt;
    this.setState({Halt : !halt});
  }

  resetBtn = () =>{

    const solve = this.state.Solvemode
    this.setState({Solvemode : !solve});
    this.toggleSolve();
  }

  toggleSolve = () =>{

    if (this.state.Solvemode) {
      const resetGrid = JSON.parse(JSON.stringify(this.state.Solution));
      this.setState({Game : resetGrid})  
    } 
    else {
       const game = JSON.parse(JSON.stringify(this.state.Copy));
       this.setState({Game : game}) 
    }
  }
  


  grid = () => {

    const solution = JSON.parse(JSON.stringify(this.state.Board));
    let random = Math.floor((Math.random() * 100) + 1);

  

   for (let k = 0; k < random; k++) 
   {
     for (let i = 0; i < 9; i++)
       {
          for (let j = 0; j < 9; j++) 
           {
             solution[i][j]++;
             if (solution[i][j] === 10) 
              {
                solution[i][j] = 1;
              }
            }
        }
    }

    this.setState({Solution : solution});
    

    let Grid = JSON.parse(JSON.stringify(solution));

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 6; j++) {
       let randomPostion = Math.floor((Math.random() * 9));
       
       Grid[i][randomPostion] = 0;

      } 
    }
    
    this.setState({Game : Grid});
    this.setState({Copy : Grid});

    return Grid;
  }


  
 
  render() 
  {

    let Sudoku =null;

    let arr = [];

    
    if (this.state.Halt) {
      arr.push('hidden');
      console.log(arr)
    }

    let Pause = null;

    if (!this.state.Halt) {
      Pause = <button onClick={this.pauseBtn}> <PauseIcon></PauseIcon> Pause</button>
    } else {
      Pause = <button onClick={this.pauseBtn}> <PlayArrowIcon></PlayArrowIcon> Continue</button>
    }
    
    let Solve = null;
    if (this.state.Solvemode) {
      Solve = <button onClick={this.resetBtn}> <DoneAllIcon></DoneAllIcon> Solve </button>;
    } else {
      Solve = <button onClick={this.resetBtn}> <DoneAllIcon></DoneAllIcon> My Solution</button>;
    }
  


    if (this.state.GameOn) {

        let cell00;
        if (this.state.Game[0][0] === 0) 
        {
          cell00 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell00 = <td className='default'>{this.state.Game[0][0]}</td> ;
        }

        let cell01;
        if (this.state.Game[0][1] === 0) 
        {
          cell01 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell01 = <td className='default'>{this.state.Game[0][1]}</td> ;
        }

        let cell02;
        if (this.state.Game[0][2] === 0) 
        {
          cell02 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell02 = <td className = 'thick-right default'>{this.state.Game[0][2]}</td> ;
        }

        let cell03;
        if (this.state.Game[0][3] === 0) 
        {
          cell03 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell03 = <td className='default'>{this.state.Game[0][3]}</td> ; 
        }

        let cell04;
        if (this.state.Game[0][4] === 0) 
        {
          cell04 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell04 = <td className='default'>{this.state.Game[0][4]}</td> ;
        }

        let cell05;
        if (this.state.Game[0][5] === 0) 
        {
          cell05 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell05 = <td className = 'thick-right default'>{this.state.Game[0][5]}</td> ;
        }

        let cell06;
        if (this.state.Game[0][6] === 0) 
        {
          cell06 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell06 = <td className='default'>{this.state.Game[0][6]}</td> ;
        }

        let cell07;
        if (this.state.Game[0][7] === 0) 
        {
          cell07 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell07 = <td className='default'>{this.state.Game[0][7]}</td> ;
        }

        let cell08;
        if (this.state.Game[0][8] === 0) 
        {
          cell08 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell08 = <td className='default'>{this.state.Game[0][8]}</td> ;
        }

        let row0 = <tr>{cell00}{cell01}{cell02}{cell03}{cell04}{cell05}{cell06}{cell07}{cell08} </tr>

        let cell10;
        if (this.state.Game[1][0] === 0) 
        {
          cell10 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell10 = <td className='default'>{this.state.Game[1][0]}</td> ;
        }

        let cell11;
        if (this.state.Game[1][1] === 0) 
        {
          cell11 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell11 = <td className='default'>{this.state.Game[1][1]}</td> ;
        }

        let cell12;
        if (this.state.Game[1][2] === 0) 
        {
          cell12 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell12 = <td className = 'thick-right default'>{this.state.Game[1][2]}</td> ;
        }

        let cell13;
        if (this.state.Game[1][3] === 0) 
        {
          cell13 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell13 = <td className='default'>{this.state.Game[1][3]}</td> ;
        }

        let cell14;
        if (this.state.Game[1][4] === 0) 
        {
          cell14 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell14 = <td className='default'>{this.state.Game[1][4]}</td> ;
        }

        let cell15;
        if (this.state.Game[1][5] === 0) 
        {
          cell15 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell15 = <td className = 'thick-right default'>{this.state.Game[1][5]}</td> ;
        }

        let cell16;
        if (this.state.Game[1][6] === 0) 
        {
          cell16 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell16 = <td className='default'>{this.state.Game[1][6]}</td> ;
        }

        let cell17;
        if (this.state.Game[1][7] === 0) 
        {
          cell17 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell17 = <td className='default'>{this.state.Game[1][7]}</td> ;
        }

        let cell18;
        if (this.state.Game[1][8] === 0) 
        {
          cell18 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell18 = <td className='default'>{this.state.Game[1][8]}</td> ;
        }

        let row1 = <tr>{cell10}{cell11}{cell12}{cell13}{cell14}{cell15}{cell16}{cell17}{cell18} </tr>
      
        let cell20;
        if (this.state.Game[2][0] === 0) 
        {
          cell20 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell20 = <td className = 'thick-bottom default'>{this.state.Game[2][0]}</td> ;
        }

        let cell21;
        if (this.state.Game[2][1] === 0) 
        {
          cell21 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell21 = <td className = 'thick-bottom default'>{this.state.Game[2][1]}</td> ;
        }

        let cell22;
        if (this.state.Game[2][2] === 0) 
        {
          cell22 = <td className = 'thick-right thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell22 = <td className = 'thick-right thick-bottom default'>{this.state.Game[2][2]}</td> ;
        }

        let cell23;
        if (this.state.Game[2][3] === 0) 
        {
          cell23 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell23 = <td className = 'thick-bottom default'>{this.state.Game[2][3]}</td> ;
        }

        let cell24;
        if (this.state.Game[2][4] === 0) 
        {
          cell24 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell24 = <td className = 'thick-bottom default'>{this.state.Game[2][4]}</td> ;
        }

        let cell25;
        if (this.state.Game[2][5] === 0) 
        {
          cell25 = <td className = 'thick-right thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell25 = <td className = 'thick-right thick-bottom default'>{this.state.Game[2][5]}</td> ;
        }

        let cell26;
        if (this.state.Game[2][6] === 0) 
        {
          cell26 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell26 = <td className = 'thick-bottom default'>{this.state.Game[2][6]}</td> ;
        }

        let cell27;
        if (this.state.Game[2][7] === 0) 
        {
          cell27 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell27 = <td className = 'thick-bottom default'>{this.state.Game[2][7]}</td> ;
        }

        let cell28;
        if (this.state.Game[2][8] === 0) 
        {
          cell28 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell28 = <td className = 'thick-bottom default'>{this.state.Game[2][8]}</td> ;
        }

        let row2 = <tr>{cell20}{cell21}{cell22}{cell23}{cell24}{cell25}{cell26}{cell27}{cell28} </tr>

        let cell30;
        if (this.state.Game[3][0] === 0) 
        {
          cell30 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell30 = <td className ='default'>{this.state.Game[3][0]}</td> ;
        }

        let cell31;
        if (this.state.Game[3][1] === 0) 
        {
          cell31 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell31 = <td className ='default'>{this.state.Game[3][1]}</td> ;
        }

        let cell32;
        if (this.state.Game[3][2] === 0) 
        {
          cell32 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell32 = <td className = 'thick-right default'>{this.state.Game[3][2]}</td> ;
        }

        let cell33;
        if (this.state.Game[3][3] === 0) 
        {
          cell33 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell33 = <td className ='default'>{this.state.Game[3][3]}</td> ;
        }

        let cell34;
        if (this.state.Game[3][4] === 0) 
        {
          cell34 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell34 = <td className ='default'>{this.state.Game[3][4]}</td> ;
        }

        let cell35;
        if (this.state.Game[3][5] === 0) 
        {
          cell35 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell35 = <td className = 'thick-right default'>{this.state.Game[3][5]}</td> ;
        }

        let cell36;
        if (this.state.Game[3][6] === 0) 
        {
          cell36 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell36 = <td className ='default'>{this.state.Game[3][6]}</td> ;
        }

        let cell37;
        if (this.state.Game[3][7] === 0) 
        {
          cell37 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell37 = <td className ='default'>{this.state.Game[3][7]}</td> ;
        }

        let cell38;
        if (this.state.Game[3][8] === 0) 
        {
          cell38 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell38 = <td className ='default'>{this.state.Game[3][8]}</td> ;
        }

        let row3 = <tr>{cell30}{cell31}{cell32}{cell33}{cell34}{cell35}{cell36}{cell37}{cell38} </tr>

        let cell40;
        if (this.state.Game[4][0] === 0) 
        {
          cell40 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell40 = <td className ='default'>{this.state.Game[4][0]}</td> ;
        }

        let cell41;
        if (this.state.Game[4][1] === 0) 
        {
          cell41 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell41 = <td className ='default'>{this.state.Game[4][1]}</td> ;
        }

        let cell42;
        if (this.state.Game[4][2] === 0) 
        {
          cell42 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell42 = <td className = 'thick-right default'>{this.state.Game[4][2]}</td> ;
        }

        let cell43;
        if (this.state.Game[4][3] === 0) 
        {
          cell43 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell43 = <td className ='default'>{this.state.Game[4][3]}</td> ;
        }

        let cell44;
        if (this.state.Game[4][4] === 0) 
        {
          cell44 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell44 = <td className ='default'>{this.state.Game[4][4]}</td> ;
        }

        let cell45;
        if (this.state.Game[4][5] === 0) 
        {
          cell45 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell45 = <td className = 'thick-right default'>{this.state.Game[4][5]}</td> ;
        }

        let cell46;
        if (this.state.Game[4][6] === 0) 
        {
          cell46 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell46 = <td className ='default'>{this.state.Game[4][6]}</td> ;
        }

        let cell47;
        if (this.state.Game[4][7] === 0) 
        {
          cell47 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell47 = <td className ='default'>{this.state.Game[4][7]}</td> ;
        }

        let cell48;
        if (this.state.Game[4][8] === 0) 
        {
          cell48 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell48 = <td className ='default'>{this.state.Game[4][8]}</td> ;
        }

        let row4 = <tr>{cell40}{cell41}{cell42}{cell43}{cell44}{cell45}{cell46}{cell47}{cell48} </tr>

        let cell50;
        if (this.state.Game[5][0] === 0) 
        {
          cell50 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell50 = <td className = 'thick-bottom default'>{this.state.Game[5][0]}</td> ;
        }

        let cell51;
        if (this.state.Game[5][1] === 0) 
        {
          cell51 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell51 = <td className = 'thick-bottom default'>{this.state.Game[5][1]}</td> ;
        }

        let cell52;
        if (this.state.Game[5][2] === 0) 
        {
          cell52 = <td className = 'thick-right thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell52 = <td className = 'thick-right thick-bottom default'>{this.state.Game[5][2]}</td> ;
        }

        let cell53;
        if (this.state.Game[5][3] === 0) 
        {
          cell53 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell53 = <td className = 'thick-bottom default'>{this.state.Game[5][3]}</td> ;
        }

        let cell54;
        if (this.state.Game[5][4] === 0) 
        {
          cell54 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell54 = <td className = 'thick-bottom default'>{this.state.Game[5][4]}</td> ;
        }

        let cell55;
        if (this.state.Game[5][5] === 0) 
        {
          cell55 = <td className = 'thick-right thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell55 = <td className = 'thick-right thick-bottom default'>{this.state.Game[5][5]}</td> ;
        }

        let cell56;
        if (this.state.Game[5][6] === 0) 
        {
          cell56 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell56 = <td className = 'thick-bottom default'>{this.state.Game[5][6]}</td> ;
        }

        let cell57;
        if (this.state.Game[5][7] === 0) 
        {
          cell57 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell57 = <td className = 'thick-bottom default'>{this.state.Game[5][7]}</td> ;
        }

        let cell58;
        if (this.state.Game[5][8] === 0) 
        {
          cell58 = <td className = 'thick-bottom'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell58 = <td className = 'thick-bottom default'>{this.state.Game[5][8]}</td> ;
        }

        let row5 = <tr>{cell50}{cell51}{cell52}{cell53}{cell54}{cell55}{cell56}{cell57}{cell58} </tr>

        let cell60;
        if (this.state.Game[6][0] === 0) 
        {
          cell60 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell60 = <td className='default'>{this.state.Game[6][0]}</td> ;
        }

        let cell61;
        if (this.state.Game[6][1] === 0) 
        {
          cell61 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell61 = <td className='default'>{this.state.Game[6][1]}</td> ;
        }

        let cell62;
        if (this.state.Game[6][2] === 0) 
        {
          cell62 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell62 = <td className = 'thick-right default'>{this.state.Game[6][2]}</td> ;
        }

        let cell63;
        if (this.state.Game[6][3] === 0) 
        {
          cell63 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell63 = <td className='default'>{this.state.Game[6][3]}</td> ;
        }

        let cell64;
        if (this.state.Game[6][4] === 0) 
        {
          cell64 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell64 = <td className='default'>{this.state.Game[6][4]}</td> ;
        }

        let cell65;
        if (this.state.Game[6][5] === 0) 
        {
          cell65 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell65 = <td className = 'thick-right default'>{this.state.Game[6][5]}</td> ;
        }

        let cell66;
        if (this.state.Game[6][6] === 0) 
        {
          cell66 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell66 = <td className='default'>{this.state.Game[6][6]}</td> ;
        }

        let cell67;
        if (this.state.Game[6][7] === 0) 
        {
          cell67 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell67 = <td className='default'>{this.state.Game[6][7]}</td> ;
        }

        let cell68;
        if (this.state.Game[6][8] === 0) 
        {
          cell68 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell68 = <td className='default'>{this.state.Game[6][8]}</td> ;
        }

        let row6 = <tr>{cell60}{cell61}{cell62}{cell63}{cell64}{cell65}{cell66}{cell67}{cell68} </tr>

        let cell70;
        if (this.state.Game[7][0] === 0) 
        {
          cell70 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell70 = <td className='default'>{this.state.Game[7][0]}</td> ;
        }

        let cell71;
        if (this.state.Game[7][1] === 0) 
        {
          cell71 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell71 = <td className='default'>{this.state.Game[7][1]}</td> ;
        }

        let cell72;
        if (this.state.Game[7][2] === 0) 
        {
          cell72 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell72 = <td className = 'thick-right default'>{this.state.Game[7][2]}</td> ;
        }

        let cell73;
        if (this.state.Game[7][3] === 0) 
        {
          cell73 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell73 = <td className='default'>{this.state.Game[7][3]}</td> ;
        }

        let cell74;
        if (this.state.Game[7][4] === 0) 
        {
          cell74 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell74 = <td className='default'>{this.state.Game[7][4]}</td> ;
        }

        let cell75;
        if (this.state.Game[7][5] === 0) 
        {
          cell75 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell75 = <td className = 'thick-right default'>{this.state.Game[7][5]}</td> ;
        }

        let cell76;
        if (this.state.Game[7][6] === 0) 
        {
          cell76 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell76 = <td className='default'>{this.state.Game[7][6]}</td> ;
        }

        let cell77;
        if (this.state.Game[7][7] === 0) 
        {
          cell77 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell77 = <td className='default'>{this.state.Game[7][7]}</td> ;
        }

        let cell78;
        if (this.state.Game[7][8] === 0) 
        {
          cell78 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell78 = <td className='default'>{this.state.Game[7][8]}</td> ;
        }

        let row7 = <tr>{cell70}{cell71}{cell72}{cell73}{cell74}{cell75}{cell76}{cell77}{cell78} </tr>

        let cell80;
        if (this.state.Game[8][0] === 0) 
        {
          cell80 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell80 = <td className='default'>{this.state.Game[8][0]}</td> ;
        }

        let cell81;
        if (this.state.Game[8][1] === 0) 
        {
          cell81 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell81 = <td className='default'>{this.state.Game[8][1]}</td> ;
        }

        let cell82;
        if (this.state.Game[8][2] === 0) 
        {
          cell82 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell82 = <td className = 'thick-right default'>{this.state.Game[8][2]}</td> ;
        }

        let cell83;
        if (this.state.Game[8][3] === 0) 
        {
          cell83 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell83 = <td className='default'>{this.state.Game[8][3]}</td> ;
        }

        let cell84;
        if (this.state.Game[8][4] === 0) 
        {
          cell84 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell84 = <td className='default'>{this.state.Game[8][4]}</td> ;
        }

        let cell85;
        if (this.state.Game[8][5] === 0) 
        {
          cell85 = <td className = 'thick-right'><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell85 = <td className = 'thick-right default'>{this.state.Game[8][5]}</td> ;
        }

        let cell86;
        if (this.state.Game[8][6] === 0) 
        {
          cell86 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell86 = <td className='default'>{this.state.Game[8][6]}</td> ;
        }

        let cell87;
        if (this.state.Game[8][7] === 0) 
        {
          cell87 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell87 = <td className='default'>{this.state.Game[8][7]}</td> ;
        }

        let cell88;
        if (this.state.Game[8][8] === 0) 
        {
          cell88 = <td><input maxLenght='1'></input></td> ;
        } 
        else 
        {
          cell88 = <td className='default'>{this.state.Game[8][8]}</td> ;
        }

        let row8 = <tr>{cell80}{cell81}{cell82}{cell83}{cell84}{cell85}{cell86}{cell87}{cell88} </tr>




      Sudoku = (
        <div className = 'grid'>
        <table>
          <tbody className = {arr.join()} >
          
        {row0}
        {row1}
        {row2}
        {row3}
        {row4}
        {row5}
        {row6}
        {row7}
        {row8}
        
        </tbody>
        </table> 
        <div className='rules'>
           <h1>Rules</h1>
           <ul>
             <li>Each Row MUST have each number from 1 to 9</li>
             <li>Each column MUST have each number from 1 to 9</li>
             <li>Each Block MUST have each number from 1 to 9</li>
           </ul>
           <p>If any of the above conditions does not match then the solution will be considered invalid</p>
           <h3>How the difficulty of this Sudoku is determined</h3>
           <p>In this case the difficulty is random. A Complete Sudoku is Generated and random amount of numbers are removed.</p>
           <p><a href='https://en.wikipedia.org/wiki/Sudoku' target = '_blank'>Know more about the game Here</a></p>
        </div>
        </div>
      );
    }

    
    





   return (
     <div className="App">
       <div className='navbar'>        
         <img className='logo' src={logo} alt='Logo'/>
         <div className='buttons' >
           <button onClick={this.newBtn}  > <SportsEsportsIcon></SportsEsportsIcon>  New Game</button>
           {Solve}
           {Pause}
         </div> 
      </div>
      {Sudoku}
    </div>
   );
  }
}

export default App;
