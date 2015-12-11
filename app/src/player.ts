/// <reference path="../../typings/underscore/underscore.d.ts" />

module Jarl {
	
	export class Player {
		private lostTiles : Array<TileInterface>;
		private tilesOnGameboard : Array<TileInterface>;
		private tilesInBag : Array<TileInterface>;
		private availableTiles : Array<TileInterface>;
		
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
			this.availableTiles = [this.jarlTile, this.freeman1, this.freeman2];
			this.tilesOnGameboard = [];
			this.lostTiles = [];
			
		};
		
		public addLostTile(lostTile : TileInterface) : Number {
			this.lostTiles.push(lostTile);
			
			var index = _.findIndex(this.tilesOnGameboard,  function(item) {return item.getColor() == lostTile.getColor() && item.getTileType() == lostTile.getTileType() });
			this.tilesOnGameboard.splice(index, 1);

			var nbrOfLostTiles : Number = this.lostTiles.length;
			
			return nbrOfLostTiles;
		};
		
		public getLostTiles() : Array<TileInterface> {
			return this.lostTiles;
		}
		
		public drawTileFromBag() : TileInterface {
			var tile : TileInterface[];
			var index = Math.floor(Math.random() * this.tilesInBag.length);
			
			// search through gameboard and lost tiles to make sure that the startup tiles are used before any new tile is drawn from the bag
			var usingJarlTile : boolean  = (_.findWhere(this.tilesOnGameboard, this.jarlTile) != undefined);
			var lostJarlTile : boolean  = (_.findWhere(this.lostTiles, this.jarlTile) != undefined);
			var usingFreeman1 : boolean = (_.findWhere(this.tilesOnGameboard, this.freeman1) != undefined);
			var lostFreeman1 : boolean = (_.findWhere(this.lostTiles, this.freeman1) != undefined);
			var usingFreeman2 : boolean = (_.findWhere(this.tilesOnGameboard, this.freeman2) != undefined);
			var lostFreeman2 : boolean = (_.findWhere(this.lostTiles, this.freeman2) != undefined);
			
			if ((usingJarlTile || lostJarlTile) && (usingFreeman1 || lostFreeman1) && (usingFreeman2 || lostFreeman2)) {
				if (this.tilesInBag.length > 0) {
					tile = this.tilesInBag.splice(index, 1); 
					this.availableTiles.push(tile[0]);
					return tile[0];
				} else {
					throw EmptyBagException();
					return null; // is this needed???
				}
			} else {
				throw NotUsedStartupTilesException();
				return null;
			}
						
 
		};
		
		public getAvailableTiles() : Array<TileInterface> {
			return this.availableTiles;
		}
		
		public useTile(tile : TileInterface) {
			var index : number;
			
			index = _.findIndex(this.availableTiles,  function(item) {return item.getColor() == tile.getColor() && item.getTileType() == tile.getTileType() });
			if (index != undefined) {
				this.availableTiles.splice(index, 1);
				this.tilesOnGameboard.push(tile);
			} else {
				throw TileNotAvailableException();
			}
			
			
		}
	};
	
	export function EmptyBagException() : string {
		console.log('The bag is empty no more tiles can be drawn');
		return ('The bag is empty no more tiles can be drawn');
	}
	
	export function TileNotAvailableException() : string {
		console.log('The searched tile is not available, either choose another tile or draw a new tile from bag');
		return ('The searched tile is not available, either choose another tile or draw a new tile from bag');
	}
	
	export function NotUsedStartupTilesException() : string {
		console.log('The start up tiles must be used before a new tile can be drawn');
		return ('The start up tiles must be used before a new tile can be drawn');
	}
};