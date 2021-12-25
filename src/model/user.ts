export interface User {

  code: string;
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: Date;
  type:string;

  //client
  tel: string;
  gsm: string;
  fax: string;
  adresse: string;
  ville: string;
  codePostal: number;
}
