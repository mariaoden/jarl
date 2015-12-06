/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../app/src/tile.ts" />
/// <reference path="../typings/underscore/underscore.d.ts" />

describe ('freeman', function() {
	
	it ('should create a freeman', function() {
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		expect(freeman.getTileType()).toEqual(Jarl.TypeOfTile.Freeman);
	});
	
	it ('should create a freeman of correct color', function() {
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		expect(freeman.getColor()).toEqual(Jarl.Color.Black);
	});
	
	it ('should be possible to make a killMove one square behind current square', function () {
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		var currentSquare : Jarl.squareInterface = {row : 2, column : 3};
		var actingSquare : Jarl.squareInterface = {row : 1, column : 3};
		
		expect(freeman.getAct(currentSquare, actingSquare)).toEqual("killMove");
	});
	
	it ('should be possible to make a killMove one square diagonal up to the left of current square', function () {
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		var currentSquare : Jarl.squareInterface = {row : 2, column : 3};
		var actingSquare : Jarl.squareInterface = {row : 3, column : 2};
		
		expect(freeman.getAct(currentSquare, actingSquare)).toEqual("killMove");
	});
	
	it ('should be possible to make a killMove one square diagonal up to the right of current square', function () {
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.Black);
		var currentSquare : Jarl.squareInterface = {row : 2, column : 3};
		var actingSquare : Jarl.squareInterface = {row : 3, column : 4};
		
		expect(freeman.getAct(currentSquare, actingSquare)).toEqual("killMove");
	});
	
	it ('should return shields on command getShield', function() {
		var freeman : Jarl.TileInterface = new Jarl.FreemanTile(Jarl.Color.White);
		var currentSquare : Jarl.squareInterface = {row : 4, column : 2};
		
		expect(freeman.getShield(currentSquare).row).toEqual(currentSquare.row + 1);
		expect(freeman.getShield(currentSquare).column).toEqual(currentSquare.column);
	});
});