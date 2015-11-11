module Jarl {
	export class Gameboard {
		private gameboard = Array<Array<BoardSquareInterface>>();
		
		constructor() {
			var defaultMarker : Marker = {color : Color.Undefined, sort : SortOfMarker.Undefined};
			for (var i = 0; i < 6; i++) {
				this.gameboard[i] = Array<BoardSquareInterface>();
				for (var j = 0; j < 6; j++) {					
					this.gameboard[i][j].setBoardSquare(false,defaultMarker);
				}
			} 
		}
		
		public getGameboard() : Array<Array<BoardSquareInterface>> {
			return this.gameboard;
		}
		
	};
	
	enum Color {White = 0, Black = 1, Undefined = 2};
	enum SortOfMarker {Jarl = 0, Freeman = 1, Undefined = 2};
	
	export interface Marker {
		color : Color;
		sort : SortOfMarker; 
	}
	export interface BoardSquareInterface {
		getOccupied() : boolean;
		getMarker() : Marker;
		setBoardSquare(occupied_ : boolean, marker_ : Marker);		 
	}
	
	class BoardSquare implements BoardSquareInterface {
		private occupied : boolean;
		private marker : Marker;
		constructor() {
			this.occupied = false;
			this.marker = {color : Color.Undefined, sort : SortOfMarker.Undefined};
		}
		setBoardSquare(occupied_ : boolean, marker_ : Marker) {
			this.occupied = occupied_;
			this.marker = marker_;
			// Add Error message if occupied is false and marker is not undefined, or overwrite incomming marker
		}	
		getOccupied() : boolean {
			return this.occupied;
		}	
		getMarker() : Marker {
			return this.marker;
		}
	};
};