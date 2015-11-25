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
		
		// Not used right now
		private isBoardEmpty() : boolean {
			var occupied : boolean[] = [];
			var isEmpty : boolean;
			for (var i = 0; i < 6; i++) {
				for (var j = 0; j < 6; j++) {
					occupied.push(this.gameboard[i][j].isOccupied());
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
		
		// Check if the tile is added next to a Jarl of same color.
		private isPositionValid (tile : Tile, row :number, column : number) : boolean {
			var left : Tile = {color : Color.Undefined, tileType : TypeOfTile.Undefined};
			var rigth : Tile = {color : Color.Undefined, tileType : TypeOfTile.Undefined};
			var below : Tile = {color : Color.Undefined, tileType : TypeOfTile.Undefined};
			var above : Tile = {color : Color.Undefined, tileType : TypeOfTile.Undefined};
			
			// To handle that a new tile is added at the border of the board
			if (row > 0) {
				var below : Tile = this.gameboard[row - 1][column].getTile();
			} 
			if (row < 5) {
				var above : Tile = this.gameboard[row + 1][column].getTile();	
			}
			if (column > 0) {
				var left : Tile = this.gameboard[row][column - 1].getTile();	
			}
			if (column < 5) {
				var rigth : Tile = this.gameboard[row][column + 1].getTile();
			}
			
			// Check if any of the tiles rigth, left, above or below the tile is a Jarl of the same color.
			if (((below.color == tile.color) && (below.tileType == TypeOfTile.Jarl)) ||
				((above.color == tile.color) && (above.tileType == TypeOfTile.Jarl)) ||
				((left.color == tile.color) && (left.tileType == TypeOfTile.Jarl)) ||
				((rigth.color == tile.color) && (rigth.tileType == TypeOfTile.Jarl)))			 
			{
				return true;
			} else {
				return false;
			}
		}
		
		public addTileToGameboard(tile : Tile, row :number, column : number) {
			// Make sure that the Jarl is the first tile to be added. And it is always black who starts
			var validPositionBlackJarl : boolean = (row == 0 && ( column == 2 || column == 3));
			var validPositionWhiteJarl : boolean = (row == 5 && ( column == 2 || column == 3));
			var isNotOccupied : boolean = !this.gameboard[row][column].isOccupied();
			
			// Behöver jag ta hänsyn till sånt som inte ska kunna hända. Som att man försöker lägga ut två stycken jarl av samma färg. Kanske kan lägga in funkiton i Jarl brickan att constructorn bara får anropas en gång eller nått....
			if (isNotOccupied) {
				if (tile.tileType == TypeOfTile.Jarl && tile.color == Color.Black && validPositionBlackJarl) {
					this.gameboard[row][column].setBoardSquare(true, tile);
				} else if (tile.tileType == TypeOfTile.Jarl && tile.color == Color.White && validPositionWhiteJarl) {
					this.gameboard[row][column].setBoardSquare(true, tile);
				} else if (tile.tileType != TypeOfTile.Jarl && this.isPositionValid(tile, row, column)) {
					this.gameboard[row][column].setBoardSquare(true, tile);
				} else {		
					throw NotValidPositionException(0);
				};	
			} else {
				throw NotValidPositionException(1);
			}		
		};
				
	};
	
	export function NotValidPositionException(n : number) : string{
		var msg : string;
		if (n == 0) {
			msg = "Not valid position";
		} else if (n == 1) {
			msg = "Square is already occupied"
		}
		console.log(msg);
		return(msg);
	}
	
	export enum Color {White, Black, Undefined};

	export interface BoardSquareInterface {
		isOccupied() : boolean;
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
			// Add Error message if occupied is true and tile is not undefined, or overwrite incomming tile
		}	
		
		resetBoardSquare() {
			this.occupied = false;
			this.tile = {color : Color.Undefined, tileType : TypeOfTile.Undefined};
		}
		
		isOccupied() : boolean {
			return this.occupied;
		}	
		getTile() : Tile {
			return this.tile;
		}
	};

};