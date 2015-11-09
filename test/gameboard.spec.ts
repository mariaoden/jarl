// <reference path="../typings/jasmine/jasmine.d.ts" />
// <reference path="../src/gameboard.ts" />
describe('gameboard', function() {
	var gameboard : GameboardType;
	it('should provide a gameboard', function() {
		expect(App.Gameboard.getGameboard()).toEqual(gameboard);
	});
	
});