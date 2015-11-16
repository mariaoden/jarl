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
});

describe('clean gameboard', function() {
	it('should be possible to remove all tiles on the board', function () {
		var gameboard = new Jarl.Gameboard();
		var blackJarlTile : Jarl.Tile = {color : Jarl.Color.Black, tileType : Jarl.TypeOfTile.Jarl};

		gameboard.addTileToGameboard(blackJarlTile, 0, 2);
		gameboard.cleanGameboard();

		for (var i = 0; i < 6; i ++) {
			for (var j = 0; j < 6; j++) {
				expect(gameboard[i][j].getTile().color).toEqual(Jarl.Color.Undefined);
				expect(gameboard[i][j].getTile().tileType).toEqual(Jarl.TypeOfTile.Undefined);
				expect(gameboard[i][j].getOccupied()).toEqual(false);
			}
		}
		
	});
});
	
describe('add jarl to board', function() {
	it('should be possible to add the Jarl as the first tile on the board, and it should be on square [0][2] or [0][3] for black and [5][2] and [5][3] for white.', function () {
		var gameboard = new Jarl.Gameboard();
		var blackJarlTile : Jarl.Tile = {color : Jarl.Color.Black, tileType : Jarl.TypeOfTile.Jarl};
		var whiteJarlTile : Jarl.Tile = {color : Jarl.Color.White, tileType : Jarl.TypeOfTile.Jarl};
		
		gameboard.addTileToGameboard(blackJarlTile, 0, 2);
		checkAdditionOfJarlToGameboard(0, 2, gameboard, blackJarlTile);
		gameboard.cleanGameboard();
		
		gameboard.addTileToGameboard(blackJarlTile, 0, 3);
		checkAdditionOfJarlToGameboard(0, 3, gameboard, blackJarlTile);
		gameboard.cleanGameboard();
		
		gameboard.addTileToGameboard(whiteJarlTile, 5, 2);
		checkAdditionOfJarlToGameboard(5, 2, gameboard, whiteJarlTile);
		gameboard.cleanGameboard();
		
		gameboard.addTileToGameboard(whiteJarlTile, 5, 3);
		checkAdditionOfJarlToGameboard(5, 3, gameboard, whiteJarlTile);
		
		// Check that the tile is placed on suggested square and that all other squares are empty
		function checkAdditionOfJarlToGameboard(row : number, column : number, gameboard : Jarl.Gameboard, tile : Jarl.Tile) {
			for (var i = 0; i < 6; i ++) {
				for (var j = 0; j < 6; j++) {
					if (i == row && j == column) {
						expect(gameboard.getGameboard()[i][j].getTile().color).toEqual(tile.color);
						expect(gameboard.getGameboard()[i][j].getTile().tileType).toEqual(tile.tileType);
						expect(gameboard.getGameboard()[i][j].getOccupied()).toEqual(true);
					} else {
						expect(gameboard.getGameboard()[i][j].getTile().color).toEqual(Jarl.Color.Undefined);
						expect(gameboard.getGameboard()[i][j].getTile().tileType).toEqual(Jarl.TypeOfTile.Undefined);
						expect(gameboard.getGameboard()[i][j].getOccupied()).toEqual(false);
					}
				}
			}
		}
	});
	
	it('should only be possible to add other tiles next to the Jarl', function () {
		var gameboard = new Jarl.Gameboard();
		var freeman : Jarl.Tile = {color : Jarl.Color.Black, tileType : Jarl.TypeOfTile.Freeman};
		
		gameboard.addTileToGameboard(freeman, 0, 3);
		
		// Check that no tile is placed on the board and that an exception is thrown
		for (var i = 0; i < 6; i ++) {
			for (var j = 0; j < 6; j++) {
				expect(gameboard.getGameboard()[i][j].getTile().color).toEqual(Jarl.Color.Undefined);
				expect(gameboard.getGameboard()[i][j].getTile().tileType).toEqual(Jarl.TypeOfTile.Undefined);
				expect(gameboard.getGameboard()[i][j].getOccupied()).toEqual(false);
			}
		}
		
		// expect( function () { gameboard.addTileToGameboard(); } ).toThrow(new Jarl.AddTileToGameboardException);
	});
});

describe('keep track of tiles', function() {
	it('should keep track of tiles placed on the board', function() {
		
	});
	
});