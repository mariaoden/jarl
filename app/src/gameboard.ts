module Jarl {
	export class Gameboard {
		private gameboard : GameboardType;
		
		constructor() {
			for (var i = 0; i < 6; i++) {
				for (var j = 0; j < 6; j++) {
					this.gameboard[i,j] = 0;
				}
			} 
		}
		
		public getGameboard() : GameboardType {
			return this.gameboard;
		}
		
	};
	
	export interface GameboardType {
		gameboard : Array<Array<number>>;
	};
};