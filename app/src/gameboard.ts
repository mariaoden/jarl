module Jarl {
	export class Gameboard {
		private gameboard : GameboardType;
		
		constructor() {
			for (var i = 0; i < 6; i++) {
				this.gameboard[i] = [0, 0, 0, 0, 0, 0];
			} 
		}
		
		public getGameboard() : GameboardType {
			return this.gameboard;
		}
		
	}
	
	export interface GameboardType {
		gameboard : Array<Array<number>>;
	} 
}