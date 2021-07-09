export interface Tarefa {
    membro_id: number,
    id?: number,
    titulo: string,
    descricao: string,
    prazo: Date,
    categoria: string,
    concluido: boolean,
    membros: string,
    anexo: string,
    subTarefa?: string[],
}
