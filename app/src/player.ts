module Jarl {
	export interface PlayerInterface {
		getStartupTiles() : Array<Tile>;
		addLostTile(lostTile : Tile) : Number;
		getLostTiles() : Array<Tile>;
		drawTileFromBag() : Tile; //Draws a random Tile from the bag and adds it to startupTiles and returns startupTiles
	}
	
	export class Player implements PlayerInterface{
		private lostTiles : Array<Tile>;
		private startupTiles : Array<Tile>;
		private tilesInBag : Array<Tile>;
		
		private jarlTile : Tile;
		private freeman : Tile;
		
		constructor(color_ : Color) {
			this.jarlTile = {color : color_, tileType : TypeOfTile.Jarl};
			this.freeman =  {color : color_, tileType : TypeOfTile.Freeman};
			// All tiles must be unique, will not work in the future
			this.tilesInBag = [this.freeman, this.freeman, this.freeman, this.freeman];
			this.startupTiles = [this.jarlTile, this.freeman, this.freeman];
			this.lostTiles = [];
		};
		
		public getStartupTiles() : Array<Tile> {
			return this.startupTiles;
		};
		
		public addLostTile(lostTile : Tile) : Number {
			var nbrOfLostTiles : Number = this.lostTiles.push(lostTile);
			return nbrOfLostTiles;
		};
		
		public getLostTiles() : Array<Tile> {
			return this.lostTiles;
		}
		
		public drawTileFromBag() : Tile {
			var tile : Tile[];
			var index = Math.floor(Math.random() * this.tilesInBag.length);
			if (this.tilesInBag.length > 0) {
				tile = this.tilesInBag.splice(index, 1); 
				return tile[0];
			} else {
				return null; // is this needed???
				throw new EmptyBagException();
			}						
 
		};
	};
	
	export function EmptyBagException() {
		console.log('The bag is empty no more tiles can be drawn');
	}
};