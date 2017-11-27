export class RecipeBook{

	// First we define the public/private access than define the variable: datatype
	public name: string;
	public description: string;
	public imagePath: string;


	//To create a instance
	constructor(name: string, desc:string, imagePath:string) {

		this.name = name;
		this.description = desc;
		this.imagePath = imagePath;


	}

}