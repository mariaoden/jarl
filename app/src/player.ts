module Jarl {
	export interface PlayerInterface {
		getStartupTiles() : Array<TileInterface>;
		addLostTile(lostTile : TileInterface) : Number;
		getLostTiles() : Array<TileInterface>;
		drawTileFromBag() : TileInterface; //Draws a random Tile from the bag and adds it to startupTiles and returns startupTiles
	}
	
	export class Player implements PlayerInterface{
		private lostTiles : Array<TileInterface>;
		private startupTiles : Array<TileInterface>;
		private tilesInBag : Array<TileInterface>;
		
		private jarlTile : TileInterface;
		private freeman1 : TileInterface;
		private freeman2 : TileInterface;
		private freeman3 : TileInterface;		
		private freeman4 : TileInterface;
		private freeman5 : TileInterface;
		private freeman6 : TileInterface;
		
		constructor(color_ : Color) {
			this.jarlTile = new JarlTile(color_);
			this.freeman1 =  new FreemanTile(color_);
			this.freeman2 =  new FreemanTile(color_);			
			this.freeman3 =  new FreemanTile(color_);
			this.freeman4 =  new FreemanTile(color_);
			this.freeman5 =  new FreemanTile(color_);
			this.freeman6 =  new FreemanTile(color_);
			
			this.tilesInBag = [this.freeman3, this.freeman4, this.freeman5, this.freeman6];
			this.startupTiles = [this.jarlTile, this.freeman1, this.freeman2];
			this.lostTiles = [];
		};
		
		public getStartupTiles() : Array<TileInterface> {
			return this.startupTiles;
		};
		
		public addLostTile(lostTile : TileInterface) : Number {
			var nbrOfLostTiles : Number = this.lostTiles.push(lostTile);
			return nbrOfLostTiles;
		};
		
		public getLostTiles() : Array<TileInterface> {
			return this.lostTiles;
		}
		
		public drawTileFromBag() : TileInterface {
			var tile : TileInterface[];
			var index = Math.floor(Math.random() * this.tilesInBag.length);
			if (this.tilesInBag.length > 0) {
				tile = this.tilesInBag.splice(index, 1); 
				return tile[0];
			} else {
				throw EmptyBagException();
				return null; // is this needed???
			}						
 
		};
	};
	
	export function EmptyBagException() : string {
		console.log('The bag is empty no more tiles can be drawn');
		return ('The bag is empty no more tiles can be drawn');
	}
};