import 'dotenv/config';
import conectarAoBanco from "../config/dbConfig.js"
import { ObjectId } from "mongodb";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts() {
    const db = conexao.db("alura")
    const conlecao = db.collection("posts")
    return conlecao.find().toArray()
};

export async function criarPost(novoPost) {
    const db = conexao.db("alura")
    const conlecao = db.collection("posts")
    return conlecao.insertOne(novoPost)

};

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("alura");
    const conlecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return conlecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});

}
