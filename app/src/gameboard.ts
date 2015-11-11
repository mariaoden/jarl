module Jarl {
	export class Gameboard {
		private gameboard = [];
		
		constructor() {
			for (var i = 0; i < 6; i++) {
				this.gameboard[i] = [];
				for (var j = 0; j < 6; j++) {
					this.gameboard[i][j] = 0;
				}
			} 
		}
		
		public getGameboard() : number[][] {
			return this.gameboard;
		}
		
	};
};