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
});