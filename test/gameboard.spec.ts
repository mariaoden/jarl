// <reference path="../typings/jasmine/jasmine.d.ts" />
// <reference path="../src/gameboard.ts" />
describe('gameboard', function() {
	var gameboard : Jarl.GameboardType;
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			gameboard[i,j] = 0;
		}
	} 
	it('should provide a gameboard', function() {
		expect(new Jarl.Gameboard().getGameboard()).toEqual(gameboard);
	});
	
});