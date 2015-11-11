/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../app/src/gameboard.ts" />
describe('gameboard', function() {
	
	var gameboard = new Jarl.Gameboard().getGameboard(); 
	
	it('should provide a gameboard', function() {
		for (var i = 0; i < 6; i ++) {
			for (var j = 0; j < 6; j++) {
				expect(gameboard[i][j].getMarker().color).toEqual(Jarl.Color.Undefined);
				expect(gameboard[i][j].getMarker().sort).toEqual(Jarl.SortOfMarker.Undefined);
				expect(gameboard[i][j].getOccupied()).toEqual(false);
			}
		}
	});
	
});