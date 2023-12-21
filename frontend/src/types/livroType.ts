export interface LivroType {
    id: number,
    titulo: string,
    autor: string,
    genero: string,
    sinopse: string,
    data_publicacao: Date,
    avaliacao: number,
    excluido: Boolean,
    data_excluido: Date,
}