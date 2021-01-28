import SQLite from 'react-native-sqlite-storage'
SQLite.DEBUG(true)
SQLite.enablePromise(true)

const database_name = 'DayByDay.db'
const database_version = '1.0'
const database_display_name = 'DayByDay'
const database_size = 200000

export default class TarefaDB{
    initDB(){
        let db
        return new Promise(resolve => {
            console.log('abrindo o banco de dados')
            SQLite.openDatabase(database_name, database_version, database_display_name, database_size).then(DB =>{
                db = DB
                db.executeSql('SELECT 1 FROM tarefa LIMIT 1').then(()=>{
                    console.log('o banco de dados está aberto')
                }).catch(error => {
                    console.log('erro recebido: ' + error)
                    console.log('criando banco de dados')
                    db.transaction(tx => {
                        tx.executeSql('CREATE TABLE IF NOT EXISTS tarefa (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo VARCHAR(255) NOT NULL, descricao VARCHAR(255) NOT NULL, dataDeTermino VARCHAR(255) NOT NULL, prioridade VARCHAR(255) NOT NULL)')
                    }).then(()=>{
                        console.log('tabela tarefa criada com sucesso')
                    }).catch(error=>{
                        console.log(error)
                    })
                })
            resolve(db)
            }).catch(error => console.log(error))
        })
    }

    closeDB(db){
        if(db){
            console.log('Fechando banco de dados')
            db.close().then(status => console.log('Banco de dados desconectado')).catch(error => console.log(error))
        }else{
            console.log('A conexão com o banco não está aberta')
        }
    }

    insert(task){
        return new Promise(resolve =>{
            this.initDB().then(db => {
                db.transaction(tx => {
                    tx.executeSql('INSERT INTO tarefa VALUES(?,?,?,?,?)',[task.id,task.titulo,task.descricao,task.dataDeTermino,task.prioridade]).then(([tx,results]) => {
                        resolve(results)
                    })
                }).then( results => {
                    this.closeDB(db)
                }).catch( err => console.log(err))
            }).catch( err => console.log(err))
        })
    }

    select(){
        return new Promise(resolve => {
            const products = []
            this.initDB().then( db => {
                db.transaction( tx => {
                    tx.executeSql('SELECT * FROM tarefa',[]).then(([tx,result]) => {
                        var len = result.rows.length
                        for(let i = 0; i < len; i++){
                            let row = result.rows.item(i)
                            const {id,titulo,descricao,dataDeTermino,prioridade} = row
                            products.push({id,titulo,descricao,dataDeTermino,prioridade})
                        }
                        resolve(products)
                    })
                }).then(result => this.closeDB(db)).catch(err => console.log(err))
            }).catch( err => console.log(err))
        })
    }

    SelectById(id){
        return new Promise( resolve => {
            this.initDB().then(db => {
                db.transaction( tx => {
                    tx.executeSql(`SELECT * FROM tarefa WHERE id = ${id}`,[]).then(([tx, result]) => {
                        if(result.rows.length > 0) {
                            let row = result.rows.item(0)
                            resolve(row)
                        }
                    })
                }).then( result => {
                    this.closeDB(db)
                }).catch( err => console.log(err))
            }).catch( err => console.log(err))
        })
    }

    update(task,id){
        return new Promise((resolve, reject) =>{
            this.initDB().then( db => {
                db.transaction(tx => {
                    tx.executeSql(`UPDATE tarefa SET titulo = '${task.titulo}', descricao = '${task.descricao}', dataDeTermino = '${task.dataDeTermino}', prioridade = '${task.prioridade}' WHERE id = ${id}`,[]).then(([tx,results])=>{
                        resolve(results)
                    }) 
                }).then((results)=>this.closeDB()).catch(err => console.log(err))
            }).catch(err => console.log(err))
        })
    }

    delete(id){
        return new Promise((resolve, reject) => {
            this.initDB().then( db => {
                db.transaction( tx => {
                    tx.executeSql(`DELETE FROM tarefa WHERE id = ${id}`,[]).then(([tx, result]) => {
                        console.log(result)
                        resolve(result)
                    })
                }).then( result => this.closeDatabase()).catch( err => console.log(err))
            }).catch( err => console.log(err))
        })
    }
}