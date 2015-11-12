module Jarl {
	export class Gameboard {
		private gameboard : Array<Array<BoardSquareInterface>> = [];
		
		constructor() {
			var defaultTile : Tile = {color : Color.Undefined, sort : SortOfTile.Undefined};
			for (var i = 0; i < 6; i++) {
				this.gameboard[i] = new Array<BoardSquareInterface>();
				for (var j = 0; j < 6; j++) {
					this.gameboard[i][j] = new BoardSquare();
				}
			} 
		}
		
		public getGameboard() : Array<Array<BoardSquareInterface>> {
			return this.gameboard;
		}
		
	};
	
	export enum Color {White, Black, Undefined};
	export enum SortOfTile {Jarl, Freeman, Undefined};
	
	export interface Tile {
		color : Color;
		sort : SortOfTile; 
	}
	export interface BoardSquareInterface {
		getOccupied() : boolean;
		getTile() : Tile;
		setBoardSquare(occupied_ : boolean, tile_ : Tile);		 
	}
	
	export class BoardSquare implements BoardSquareInterface {
		private occupied : boolean;
		private tile : Tile;
		constructor() {
			this.occupied = false;
			this.tile = {color : Color.Undefined, sort : SortOfTile.Undefined};
		}
		setBoardSquare(occupied_ : boolean, tile_ : Tile) {
			this.occupied = occupied_;
			this.tile = tile_;
			// Add Error message if occupied is false and tile is not undefined, or overwrite incomming tile
		}	
		getOccupied() : boolean {
			return this.occupied;
		}	
		getTile() : Tile {
			return this.tile;
		}
	};
};