/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../app/src/player.ts" />
/// <reference path="../typings/underscore/underscore.d.ts" />

describe('create new Player', function() {
	it('should create a new white player, with three available tiles one Jarl and two Freeman', function() {
		var player  = new Jarl.Player(Jarl.Color.White);
		var startupTiles : Array<Jarl.TileInterface> = player.getAvailableTiles();
		var jarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.White);
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.White);
				
		// Check if expected tiles are available and remove the once that are found to make sure the array is empty when all tiles are found
		expect(_.findWhere(startupTiles, jarlTile)).not.toBeUndefined();
		startupTiles.splice(_.findIndex(startupTiles, function(item) {return item.getColor() == jarlTile.getColor() && item.getTileType() == jarlTile.getTileType(); }),1);

		expect(_.findWhere(startupTiles, freeman)).not.toBeUndefined();
		startupTiles.splice(_.findIndex(startupTiles, function(item) {return item.getColor() == freeman.getColor() && item.getTileType() == freeman.getTileType(); }),1);

		expect(_.findWhere(startupTiles, freeman)).not.toBeUndefined();
		startupTiles.splice(_.findIndex(startupTiles, function(item) {return item.getColor() == freeman.getColor() && item.getTileType() == freeman.getTileType(); }),1);

		expect(startupTiles.length).toEqual(0);
	});	
	
	it('should create a new Black player, with three available tiles one Jarl and two Freeman', function() {
		var player  = new Jarl.Player(Jarl.Color.Black);
		var startupTiles : Array<Jarl.TileInterface> = player.getAvailableTiles();
		var jarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.Black);
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
				
		// Check if expected tiles are available and remove the once that are found to make sure the array is empty when all tiles are found
		expect(_.findWhere(startupTiles, jarlTile)).not.toBeUndefined();
		startupTiles.splice(_.findIndex(startupTiles, function(item) {return item.getColor() == jarlTile.getColor() && item.getTileType() == jarlTile.getTileType(); }),1);

		expect(_.findWhere(startupTiles, freeman)).not.toBeUndefined();
		startupTiles.splice(_.findIndex(startupTiles, function(item) {return item.getColor() == freeman.getColor() && item.getTileType() == freeman.getTileType(); }),1);

		expect(_.findWhere(startupTiles, freeman)).not.toBeUndefined();
		startupTiles.splice(_.findIndex(startupTiles, function(item) {return item.getColor() == freeman.getColor() && item.getTileType() == freeman.getTileType(); }),1);

		expect(startupTiles.length).toEqual(0);
	});
	
	it('When a new player is created there should be no lost tiles', function() {
		var lostTilesBlackPlayer : Array<Jarl.TileInterface> = new Jarl.Player(Jarl.Color.Black).getLostTiles();
		var lostTilesWhitePlayer : Array<Jarl.TileInterface> = new Jarl.Player(Jarl.Color.White).getLostTiles();
		
		expect(lostTilesBlackPlayer.length).toEqual(0);
		expect(lostTilesWhitePlayer.length).toEqual(0);
	});
	
});

describe('start up tiles must be used before a new tile can be drawn', function() {
	var player = new Jarl.Player(Jarl.Color.White);
	
	
	it('no used tile', function () {
		expect(player.drawTileFromBag()).toEqual(null);
	});
	player.useTile(new Jarl.JarlTile(Jarl.Color.White));
	it('first tile', function() {
		expect(player.drawTileFromBag()).toEqual(null);
	})
	player.useTile(new Jarl.FreemanTile(Jarl.Color.White));
	it('second tile', function() {
		expect(player.drawTileFromBag()).toEqual(null);
	})
	player.useTile(new Jarl.FreemanTile(Jarl.Color.White));
	it('third tile', function() {
		expect(player.drawTileFromBag()).toEqual(!null);
	});
	
});

describe ('draw tiles from bag', function () {
	it(' should be able to draw tiles from the bag in random order untill the bag is empty', function() {
		var player  = new Jarl.Player(Jarl.Color.Black);
		var jarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.Black);
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		var drawnTiles : Array<Jarl.TileInterface> = [];
		
		for (var i = 0; i < 4; i++) //There are supposed to be 4 freeman in the bag 
		{
			drawnTiles.push(player.drawTileFromBag());
			expect(drawnTiles[i]).not.toEqual(null); 
		}	
		
		// Check that 4 Freemans has been drawn		
		for (var i = 0; i < 4; i++) {
			expect(_.findWhere(drawnTiles, freeman)).not.toBeUndefined();
			drawnTiles.splice(_.findIndex(drawnTiles, function(item) {return item.getColor() == freeman.getColor() && item.getTileType() == freeman.getTileType(); }),1);
		}		
	});
	
	it(' should not be possible to draw more tiles when the bag is empty', function() {
		var player  = new Jarl.Player(Jarl.Color.Black);
		
		// Draw the tiles in the bag
		for (var i = 0; i < 4; i++) {
			player.drawTileFromBag();
		}	
		
		// Draw one more tile and make sure an error is given and null returned
		expect(player.drawTileFromBag()).toEqual(null);
	//	expect( function () { player.drawTileFromBag(); } ).toThrow(new Jarl.EmptyBagException);
	});
});

