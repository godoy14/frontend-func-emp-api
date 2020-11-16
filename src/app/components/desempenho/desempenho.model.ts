import { Funcionario } from './../funcionario/funcionario.model';
export interface Desempenho {
    id?:number
    titulo:string
    data:string
    descricao:string
    funcionario:Funcionario
}