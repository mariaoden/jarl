/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../app/src/player.ts" />
/// <reference path="../typings/underscore/underscore.d.ts" />

describe('create new Player', function() {
	it('should create a new white player, with three available tiles one Jarl and two Freeman', function() {
		var player  = new Jarl.Player(Jarl.Color.White);
		var availableTiles : Array<Jarl.Tile> = player.getAvailableTiles();
		var jarlTile : Jarl.Tile = {color : Jarl.Color.White, sort : Jarl.SortOfTile.Jarl};
		var freeman : Jarl.Tile = {color : Jarl.Color.White, sort : Jarl.SortOfTile.Freeman};
				
		// Check if expected tiles are available and remove the once that are found to make sure the array is empty when all tiles are found
		expect(_.findWhere(availableTiles, jarlTile)).not.toBeUndefined();
		availableTiles.splice(_.findIndex(availableTiles, function(item) {return item.color == jarlTile.color && item.sort == jarlTile.sort; }),1);

		expect(_.findWhere(availableTiles, freeman)).not.toBeUndefined();
		availableTiles.splice(_.findIndex(availableTiles, function(item) {return item.color == freeman.color && item.sort == freeman.sort; }),1);

		expect(_.findWhere(availableTiles, freeman)).not.toBeUndefined();
		availableTiles.splice(_.findIndex(availableTiles, function(item) {return item.color == freeman.color && item.sort == freeman.sort; }),1);

		expect(availableTiles.length).toEqual(0);
	});	
	
	it('should create a new Black player, with three available tiles one Jarl and two Freeman', function() {
		var player  = new Jarl.Player(Jarl.Color.Black);
		var availableTiles : Array<Jarl.Tile> = player.getAvailableTiles();
		var jarlTile : Jarl.Tile = {color : Jarl.Color.Black, sort : Jarl.SortOfTile.Jarl};
		var freeman : Jarl.Tile = {color : Jarl.Color.Black, sort : Jarl.SortOfTile.Freeman};
				
		// Check if expected tiles are available and remove the once that are found to make sure the array is empty when all tiles are found
		expect(_.findWhere(availableTiles, jarlTile)).not.toBeUndefined();
		availableTiles.splice(_.findIndex(availableTiles, function(item) {return item.color == jarlTile.color && item.sort == jarlTile.sort; }),1);

		expect(_.findWhere(availableTiles, freeman)).not.toBeUndefined();
		availableTiles.splice(_.findIndex(availableTiles, function(item) {return item.color == freeman.color && item.sort == freeman.sort; }),1);

		expect(_.findWhere(availableTiles, freeman)).not.toBeUndefined();
		availableTiles.splice(_.findIndex(availableTiles, function(item) {return item.color == freeman.color && item.sort == freeman.sort; }),1);

		expect(availableTiles.length).toEqual(0);
	});	
	
	it('When a new player is created there should be no lost tiles', function() {
		var lostTilesBlackPlayer : Array<Jarl.Tile> = new Jarl.Player(Jarl.Color.Black).getLostTiles();
		var lostTilesWhitePlayer : Array<Jarl.Tile> = new Jarl.Player(Jarl.Color.White).getLostTiles();
		
		expect(lostTilesBlackPlayer.length).toEqual(0);
		expect(lostTilesWhitePlayer.length).toEqual(0);
	});
	
	it(' should be able to draw tiles from the bag in random order untill the bag is empty', function() {
		var player  = new Jarl.Player(Jarl.Color.Black);
		var jarlTile : Jarl.Tile = {color : Jarl.Color.Black, sort : Jarl.SortOfTile.Jarl};
		var freeman : Jarl.Tile = {color : Jarl.Color.Black, sort : Jarl.SortOfTile.Freeman};
		var availableTiles : Array<Jarl.Tile> = player.getAvailableTiles();
		
		var nbrOfTilesAvailableAtStartup = 3;
		
		for (var i = 0; i < 4; i++) //There are supposed to be 4 freeman in the bag 
		{
			player.drawTileFromBag();
			//each time a tile is drawn from the bag it should be added too availableTiles
			expect(availableTiles.length).toEqual(nbrOfTilesAvailableAtStartup +  i + 1); 
		}	
		
		// Check that there are 1 jarl and 6 freemans in available tiles
		expect(_.findWhere(availableTiles, jarlTile)).not.toBeUndefined();
		availableTiles.splice(_.findIndex(availableTiles, function(item) {return item.color == jarlTile.color && item.sort == jarlTile.sort; }),1);
		
		for (var i = 0; i < 6; i++) {
			expect(_.findWhere(availableTiles, freeman)).not.toBeUndefined();
			availableTiles.splice(_.findIndex(availableTiles, function(item) {return item.color == freeman.color && item.sort == freeman.sort; }),1);
		}		
	});	
	
	it(' should not be possible to draw more tiles when the bag is empty', function() {
		var player  = new Jarl.Player(Jarl.Color.Black);
		
		// Draw the tiles in the bag
		for (var i = 0; i < 4; i++) {
			player.drawTileFromBag();
		}	
		
		// Draw one more tile and make sure an error is given
		expect(player.drawTileFromBag()).toThrow();
	});	
});