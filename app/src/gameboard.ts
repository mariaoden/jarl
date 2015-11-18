module Jarl {
	export class Gameboard {
		private gameboard : Array<Array<BoardSquareInterface>> = [];
		
		constructor() {
			var defaultTile : Tile = {color : Color.Undefined, tileType : TypeOfTile.Undefined};
			for (var i = 0; i < 6; i++) {
				this.gameboard[i] = new Array<BoardSquareInterface>();
				for (var j = 0; j < 6; j++) {
					this.gameboard[i][j] = new BoardSquare();
				}
			} 
		}
		
		private isBoardEmpty() : boolean {
			var occupied : boolean[];
			var isEmpty : boolean;
			for (var i = 0; i < 6; i++) {
				for (var j = 0; j < 6; j++) {
					occupied.push(this.gameboard[i][j].getOccupied());
				}
			}
			isEmpty = (_.findWhere(occupied, true) == undefined);
			return true;
		};
		
		public getGameboard() : Array<Array<BoardSquareInterface>> {
			return this.gameboard;
		}
		
		public cleanGameboard() {
			for (var i = 0; i < 6; i++) {
				for (var j = 0; j < 6; j++) {
					this.gameboard[i][j].resetBoardSquare();
				}
			}
		}
		
		public addTileToGameboard(tile : Tile, row :number, column : number) {
			// Make sure that the Jarl is the first tile to be added. And it is always black who starts
			if (tile.tileType == TypeOfTile.Jarl && tile.color == Color.Black) {
				if ((row == 0 && ( column == 2 || column == 3)) && this.isBoardEmpty()) {
					this.gameboard[row][column].setBoardSquare(true, tile);
				} else {
					throw new NotValidPositionException();
				}
			}
			
		}
				
	};
	
	export function NotValidPositionException() {
		console.log('Not valid position');
	}
	
	export enum Color {White, Black, Undefined};
	export enum TypeOfTile {Jarl, Freeman, Undefined};
	
	export interface Tile {
		color : Color;
		tileType : TypeOfTile; 
	}
	export interface BoardSquareInterface {
		getOccupied() : boolean;
		getTile() : Tile;
		setBoardSquare(occupied_ : boolean, tile_ : Tile);	
		resetBoardSquare();
	}
	
	export class BoardSquare implements BoardSquareInterface {
		private occupied : boolean;
		private tile : Tile;
		constructor() {
			this.occupied = false;
			this.tile = {color : Color.Undefined, tileType : TypeOfTile.Undefined};
		}
		setBoardSquare(occupied_ : boolean, tile_ : Tile) {
			this.occupied = occupied_;
			this.tile = tile_;
			// Add Error message if occupied is false and tile is not undefined, or overwrite incomming tile
		}	
		
		resetBoardSquare() {
			this.occupied = false;
			this.tile = {color : Color.Undefined, tileType : TypeOfTile.Undefined};
		}
		
		getOccupied() : boolean {
			return this.occupied;
		}	
		getTile() : Tile {
			return this.tile;
		}
	};

};