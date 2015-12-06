/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../app/src/gameboard.ts" />
describe('gameboard', function() {
	var gameboard = new Jarl.Gameboard().getBoard(); 
	
	it('should provide a gameboard', function() {
		for (var i = 0; i < 6; i ++) {
			for (var j = 0; j < 6; j++) {
				expect(gameboard[i][j].getTile().getColor()).toEqual(Jarl.Color.Undefined);
				expect(gameboard[i][j].getTile().getTileType()).toEqual(Jarl.TypeOfTile.Undefined);
				expect(gameboard[i][j].isOccupied()).toEqual(false);
			}
		}
	});
	
});

describe('clean gameboard', function() {
	it('should be possible to remove all tiles on the board', function () {
		var gameboard = new Jarl.Gameboard();
		var blackJarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.Black);

		gameboard.addTileToGameboard(blackJarlTile, 0, 2);
		gameboard.cleanGameboard();

		for (var i = 0; i < 6; i ++) {
			for (var j = 0; j < 6; j++) {
				expect(gameboard.getBoard()[i][j].getTile().getColor()).toEqual(Jarl.Color.Undefined);
				expect(gameboard.getBoard()[i][j].getTile().getTileType()).toEqual(Jarl.TypeOfTile.Undefined);
				expect(gameboard.getBoard()[i][j].isOccupied()).toEqual(false);
			}
		}
		
	});
});
	
describe('add jarl to board', function() {
	it('should be possible to add the Jarl as the first tile on the board, and it should be on square [0][2] or [0][3] for black and [5][2] and [5][3] for white.', function () {
		var gameboard = new Jarl.Gameboard();
		var blackJarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.Black);
		var whiteJarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.White);
		
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
		function checkAdditionOfJarlToGameboard(row : number, column : number, gameboard : Jarl.Gameboard, tile : Jarl.TileInterface) {
			for (var i = 0; i < 6; i ++) {
				for (var j = 0; j < 6; j++) {
					if (i == row && j == column) {
						expect(gameboard.getBoard()[i][j].getTile().getColor()).toEqual(tile.getColor());
						expect(gameboard.getBoard()[i][j].getTile().getTileType()).toEqual(tile.getTileType());
						expect(gameboard.getBoard()[i][j].isOccupied()).toEqual(true);
					} else {
						expect(gameboard.getBoard()[i][j].getTile().getColor()).toEqual(Jarl.Color.Undefined);
						expect(gameboard.getBoard()[i][j].getTile().getTileType()).toEqual(Jarl.TypeOfTile.Undefined);
						expect(gameboard.getBoard()[i][j].isOccupied()).toEqual(false);
					}
				}
			}
		}
	});
	
	it('should not be possible to add Jarl on wrong square', function() {
		var gameboard = new Jarl.Gameboard();
		var blackJarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.Black);
		var whiteJarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.White);

		gameboard.addTileToGameboard(whiteJarlTile, 5, 0);
		
		for (var i = 0; i < 6; i ++) {
			for (var j = 0; j < 6; j++) {
				expect(gameboard.getBoard()[i][j].getTile().getColor()).toEqual(Jarl.Color.Undefined);
				expect(gameboard.getBoard()[i][j].getTile().getTileType()).toEqual(Jarl.TypeOfTile.Undefined);
				expect(gameboard.getBoard()[i][j].isOccupied()).toEqual(false);
			}
		}
	});
});

describe('add tile to board', function () {	
	it('should only be possible to add other tiles next to the Jarl', function () {
		var gameboard = new Jarl.Gameboard();
		var freeman : Jarl.TileInterface =  new Jarl.FreemanTile(Jarl.Color.White);
		
		gameboard.addTileToGameboard(freeman, 1, 3);
		
		// Check that no tile is placed on the board and that an exception is thrown
		for (var i = 0; i < 6; i ++) {
			for (var j = 0; j < 6; j++) {
				expect(gameboard.getBoard()[i][j].getTile().getColor()).toEqual(Jarl.Color.Undefined);
				expect(gameboard.getBoard()[i][j].getTile().getTileType()).toEqual(Jarl.TypeOfTile.Undefined);
				expect(gameboard.getBoard()[i][j].isOccupied()).toEqual(false);
			}
		}
		
		// expect( function () { gameboard.addTileToGameboard(); } ).toThrow(new Jarl.AddTileToGameboardException);
	});
	
	it('should be possible to add tile next to Jarl', function() {
		var gameboard = new Jarl.Gameboard();
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		var jarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.Black);

		gameboard.addTileToGameboard(jarlTile, 0, 2);
		gameboard.addTileToGameboard(freeman, 0, 3);
		
		expect(gameboard.getBoard()[0][2].getTile().getColor()).toEqual(Jarl.Color.Black);
		expect(gameboard.getBoard()[0][2].getTile().getTileType()).toEqual(Jarl.TypeOfTile.Jarl);
		expect(gameboard.getBoard()[0][2].isOccupied()).toEqual(true);
		
		expect(gameboard.getBoard()[0][3].getTile().getColor()).toEqual(Jarl.Color.Black);
		expect(gameboard.getBoard()[0][3].getTile().getTileType()).toEqual(Jarl.TypeOfTile.Freeman);
		expect(gameboard.getBoard()[0][3].isOccupied()).toEqual(true);
		
		gameboard.addTileToGameboard(freeman, 1, 2);
		expect(gameboard.getBoard()[1][2].getTile().getColor()).toEqual(Jarl.Color.Black);
		expect(gameboard.getBoard()[1][2].getTile().getTileType()).toEqual(Jarl.TypeOfTile.Freeman);
		expect(gameboard.getBoard()[1][2].isOccupied()).toEqual(true);
	});
});

describe('move tile', function() {
	it('should determine if a move is possible and act upon the tiles on the board', function() {
		var gameboard : Jarl.Gameboard = new Jarl.Gameboard();
		var blackJarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.Black);
		var whiteJarlTile : Jarl.TileInterface = new Jarl.JarlTile(Jarl.Color.White);
		var blackFreeman1 : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		var blackFreeman2 : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		var blackFreeman3 : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		var blackFreeman4 : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		var whiteFreeman1 : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.White);
		var whiteFreeman2 : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.White);
		var whiteFreeman3 : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.White);
		var whiteFreeman4 : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.White);
	});
});
describe('keep track of tiles', function() {
	it('should keep track of tiles placed on the board', function() {
		
	});
	
});