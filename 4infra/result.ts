export class Result<T>{
    //Quantidade de registros por pagina
    Qtd!: number;
    //Pagina da pesquisa
    Page!: number;
    //Total de registros encontrados no banco de dados
    Total!: number;
    //Array de uma entidade
    Data!: Array<T>
}