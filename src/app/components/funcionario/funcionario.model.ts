import { Cargo } from './../cargo/cargo.model';
export interface Funcionario {
    id?: number
    nome: string
    telefone: string
    email: string
    salario: number
    cargo: Cargo
}