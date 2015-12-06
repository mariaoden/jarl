module Jarl {
	export class Model {
		private player1 : PlayerInterface;
		private player2 : PlayerInterface;
		private gameboard : Gameboard;
		
		constructor() {
			this.player1 = new Player(Jarl.Color.Black);
			this.player2 = new Player(Jarl.Color.White);
			this.gameboard = new Gameboard()
		}
		
		public runGame() {
			
		}
		
		public getGameboard() : Gameboard {
			return this.gameboard;
		}
		
		public getPlayer1() : PlayerInterface {
			return this.player1;
		}
		
		public getPlayer2() : PlayerInterface {
			return this.player2;
		}
		
		

		
		
				
	};
};