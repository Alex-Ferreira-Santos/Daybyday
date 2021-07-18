import SQLite from 'react-native-sqlite-storage'
SQLite.DEBUG(true)
SQLite.enablePromise(true)

const database_name = 'DayByDay.db'
const database_version = '1.0'
const database_display_name = 'DayByDay'
const database_size = 200000

export default class VisitedDB{
    initDB(){
        let db
        return new Promise(resolve => {
            console.log('abrindo o banco de dados')
            SQLite.openDatabase(database_name, database_version, database_display_name, database_size).then( DB =>{
                db = DB
                db.executeSql('SELECT 1 FROM visited LIMIT 1').then(()=>{
                    console.log('o banco de dados está aberto')
                }).catch(error => {
                    console.log('erro recebido: ' + error)
                    console.log('criando banco de dados')
                    db.transaction(tx => {
                        tx.executeSql('CREATE TABLE IF NOT EXISTS visited (id INTEGER PRIMARY KEY AUTOINCREMENT, aguaVisited BOOLEAN NOT NULL, alimentacaoVisited BOOLEAN NOT NULL, massaVisited BOOLEAN NOT NULL, tarefaVisited BOOLEAN NOT NULL, sonoVisited BOOLEAN NOT NULL)')    
                    }).then(()=>{
                        db.transaction(tx => {
                            tx.executeSql('INSERT INTO visited VALUES(1,0,0,0,0,0)')    
                        }).then(()=>{
                            console.log('tabela visited criada com sucesso')
                        }).catch(error=>{
                            console.log(error)
                        })    
                        console.log('tabela visited criada com sucesso')
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

    select(){
        return new Promise(resolve => {
            const products = []
            this.initDB().then( db => {
                db.transaction( tx => {
                    tx.executeSql('SELECT * FROM visited',[]).then(([tx,result]) => {
                        var len = result.rows.length
                        for(let i = 0; i < len; i++){
                            let row = result.rows.item(i)
                            const {id,aguaVisited,alimentacaoVisited,massaVisited,tarefaVisited,sonoVisited} = row
                            products.push({id,aguaVisited,alimentacaoVisited,massaVisited,tarefaVisited,sonoVisited})
                        }
                        resolve(products)
                    })
                }).then(result => this.closeDB(db)).catch(err => console.log(err))
            }).catch( err => console.log(err))
        })
    }

    update(field,value){
        return new Promise((resolve, reject) =>{
            this.initDB().then( db => {
                db.transaction(tx => {
                    tx.executeSql(`UPDATE visited SET ${field} = '${value}' WHERE id = 1`,[]).then(([tx,results])=>{
                        resolve(results)
                    }) 
                }).then((results)=>this.closeDB()).catch(err => console.log(err))
            }).catch(err => console.log(err))
        })
    }
}