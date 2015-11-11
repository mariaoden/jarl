/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="../app/src/gameboard.ts" />
describe('gameboard', function() {
	
	var gameboard = new Jarl.Gameboard(); 
	var testGameboard;
	
	for (var i = 0; i < 6; i++) {
		testGameboard[i] = [];
		for (var j = 0; j < 6; j++) {
			testGameboard[i][j] = 0;
		}
	}
	
	it('should provide a gameboard', function() {
		expect(gameboard.getGameboard()).toEqual(testGameboard);
		expect(1).toEqual(1);
	});
	
});