

module Jarl {
	export enum TypeOfTile {Jarl, Freeman, Undefined};
	
	export interface TileInterface {
		getColor() : Color;
		getTileType() : TypeOfTile;
		getAct(currentSquare : squareInterface, actingSquare : squareInterface) : string; //reutrns the type of move that is possible, if no move is valid null is returned
		getShield(currentSquare : squareInterface) : squareInterface ; //returns the squares which its shield is acting on
		flip() : number; //returns the side of the tile which is facing upp
	};
	
	export class UndefinedTile implements TileInterface {
		color : Color = Color.Undefined;
		tileType : TypeOfTile = TypeOfTile.Undefined;
		
		public getColor() : Color {
			return this.color;
		}
		
		public getTileType() : TypeOfTile {
			return this.tileType;
		}
		
		public getAct(currentSquare : squareInterface, actingSquare : squareInterface) : string {
			return null;
		}
		
		public getShield(currentSquare : squareInterface) : squareInterface {
			return null;
		}
		
		public flip() : number {
			return 0;
		}
	};
	
	export class JarlTile implements TileInterface {
		color : Color = Color.Undefined;
		tileType : TypeOfTile = TypeOfTile.Jarl;
		constructor (c : Color) {
			this.color = c;			
		};
		
		public getColor() : Color {
			return this.color;
		}
		
		public getTileType() : TypeOfTile {
			return this.tileType;
		}
		
		public getAct(currentSquare : squareInterface, actingSquare : squareInterface) : string {
			return null;
		}
		
		public getShield(currentSquare : squareInterface) : squareInterface {
			return null;
		}
		
		public flip() : number {
			return 0;
		}
	};
	
	export class FreemanTile implements TileInterface {
		color : Color = Color.Undefined;
		tileType : TypeOfTile = TypeOfTile.Freeman;
		constructor (c : Color) {
			this.color = c;			
		};
		
		public getColor() : Color {
			return this.color;
		}
		
		public getTileType() : TypeOfTile {
			return this.tileType;
		}
		
		public getAct(currentSquare : squareInterface, actingSquare : squareInterface) : string {
					   
			var act : string;
			
			if (((currentSquare.row + 1 == actingSquare.row) && ((currentSquare.column - 1 == actingSquare.column) || (currentSquare.column + 1 == actingSquare.column))) ||
				((currentSquare.row - 1 == actingSquare.row) && (currentSquare.column == actingSquare.column))) {
			
				act = "killMove";
			
			} else if ((currentSquare.row + 2 == actingSquare.row) && (currentSquare.column == actingSquare.column)) {
				act = "move";
			} else {
				act = null;
			}				
			return act;
		}
		
		public getShield(currentSquare : squareInterface) : squareInterface {
			var shield : squareInterface = {row : currentSquare.row + 1, column : currentSquare.column};
			return shield;
		}
		
		public flip() : number {
			return 0;
		}
	};
}