//import conetarComBancoDeDados from "./utils/database.js"; //Nescessario colocar o TIPO de arquivo que está exportando database."js"
import * as database from "./utils/database.js"; 
import {pegarDadosDaApi} from "./api.js";

database.conetarComBancoDeDados("MariaDB");

database.desconetarComBancoDeDados();


pegarDadosDaApi();

