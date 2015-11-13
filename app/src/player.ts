module Jarl {
	export interface PlayerInterface {
		getAvailableTiles() : Array<Tile>;
		addLostTile(lostTile : Tile) : Number;
		getLostTiles() : Array<Tile>;
		drawTileFromBag() : Array<Tile>; //Draws a random Tile from the bag and adds it to availableTiles and returns availableTiles
	}
	
	export class Player implements PlayerInterface{
		private lostTiles : Array<Tile>;
		private availableTiles : Array<Tile>;
		private tilesInBag : Array<Tile>;
		
		private jarlTile : Tile;
		private freeman : Tile;
		
		constructor(color_ : Color) {
			this.jarlTile = {color : color_, sort : SortOfTile.Jarl};
			this.freeman =  {color : color_, sort : SortOfTile.Freeman};
			// All tiles must be unique, will not work in the future
			this.tilesInBag = [this.freeman, this.freeman, this.freeman, this.freeman];
			this.availableTiles = [this.jarlTile, this.freeman, this.freeman];
			this.lostTiles = [];
		};
		
		public getAvailableTiles() : Array<Tile> {
			return this.availableTiles;
		};
		
		public addLostTile(lostTile : Tile) : Number {
			var nbrOfLostTiles : Number = this.lostTiles.push(lostTile);
			return nbrOfLostTiles;
		};
		
		public getLostTiles() : Array<Tile> {
			return this.lostTiles;
		}
		
		public drawTileFromBag() : Array<Tile> {
			var tile : Tile[];
			var index = Math.floor(Math.random() * this.tilesInBag.length);
			if (this.tilesInBag.length > 0) {
				tile = this.tilesInBag.splice(index, 1); 
				this.availableTiles.push(tile[0]);
			} else {
				throw new EmptyBagException();
			}						
			return this.availableTiles; 
		};
	};
	
	export function EmptyBagException() {
		console.log('The bag is empty no more tiles can be drawn')
	}
};