import { LightningElement } from "lwc";

export default class App extends LightningElement {
  musicas = [
      {cod: 1, nome: "Metalica", artista:"James Hetfield",album:"Death Magnetic"},
      {cod: 2, nome: "Maroon 5", artista:"Songs About Jane",album:"The Fourth World"},
      {cod: 3, nome: "One Direction", artista:"Harry Styles",album:"Up All Night"},
      {cod: 4, nome: "Eminem", artista:"Marshall Bruce Mathers III",album:"Infinite"},
      {cod: 5, nome: "Bruno Mars", artista:"Peter Gene Hernandez",album:"Leave The Door Open"}
      ];
}
