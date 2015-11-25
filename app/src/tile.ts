module Jarl {
	export enum TypeOfTile {Jarl, Freeman, Undefined};
	
	export interface TileInterface {
		getColor() : Color;
		getTileType() : TypeOfTile;
		move(row : number, column : number) : boolean; //reutrns true if current move is possible
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
		
		public move(row : number, column : number) : boolean {
			return false;
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
		
		public move(row : number, column : number) : boolean {
			return true;
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
		
		public move(row : number, column : number) : boolean {
			return true;
		}
		
		public flip() : number {
			return 0;
		}
	};
}