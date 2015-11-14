/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../app/src/gameboard.ts" />
describe('gameboard', function() {
	
	var gameboard = new Jarl.Gameboard().getGameboard(); 
	
	it('should provide a gameboard', function() {
		for (var i = 0; i < 6; i ++) {
			for (var j = 0; j < 6; j++) {
				expect(gameboard[i][j].getTile().color).toEqual(Jarl.Color.Undefined);
				expect(gameboard[i][j].getTile().tileType).toEqual(Jarl.TypeOfTile.Undefined);
				expect(gameboard[i][j].getOccupied()).toEqual(false);
			}
		}
	});
	
describe('add jarl to board', function() {
	it('should be possible to add jarlTile as the first tile on the board', function () {
		var gameboard = new Jarl.Gameboard();
		var jarlTile : Jarl.Tile = {color : Jarl.Color.Black, tileType : Jarl.TypeOfTile.Jarl};
	});
});

	it('should keep track of tiles placed on the board', function() {
		
	});
	
});