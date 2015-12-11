/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../app/src/model.ts" />

describe('drawTile for player 1', function() {
	it('should make a new tile available for player 1 and remove that one from the stack', function() {
	});
});

describe('starting a new game', function() {
	var jarl : Jarl.Model = new Jarl.Model();
	it('should create two players, player 1 should be black and player 2 should be white', function() {
		expect(jarl.getPlayer1()).toEqual(new Jarl.Player(Jarl.Color.Black));
		expect(jarl.getPlayer2()).toEqual(new Jarl.Player(Jarl.Color.White));
	});	
	
	it('should create a gameboard', function() {
		expect(jarl.getGameboard()).toEqual(new Jarl.Gameboard());
	});
});

describe('startup phase', function() {
	var jarl : Jarl.Model = new Jarl.Model();
	var player1 : Jarl.Player = jarl.getPlayer1();
	var player2 : Jarl.Player = jarl.getPlayer2();
	var gameboard : Jarl.Gameboard = jarl.getGameboard();
	
	it('should be possible to add tiles to board one player at a time', function () {
		// jarl.getPlayer1().getAvailableTiles();
	});
});
	