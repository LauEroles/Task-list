/*
importar y usar libreria Ale
 https://github.com/alemutn/stdio/tree/master
*/

import path from "path";
//import CustomFileClass from "./file";

export default class GestorDeArchivos { 

    private file: CustomFileClass = new CustomFileClass(); //tipo de archivo json a manejar?
    
    public writeFile() {
      this.file.open(path.resolve("prueba.txt"), "w");
    
      this.file.writeToFile("hola");
      this.file.writeToFile("mundo");
    
      this.file.close();
    }
    
    public async readFile() {
        this.file.open(path.resolve("prueba.txt"), "r");
      
        let i = 1;
        for await(const line of this.file.readLine()) {
          console.log(`#${i} - ${line}`);
          i++;
        }
      
      }
    
}
