import SQLite from 'react-native-sqlite-storage'
SQLite.DEBUG(true)
SQLite.enablePromise(true)

const database_name = 'DayByDay.db'
const database_version = '1.0'
const database_display_name = 'DayByDay'
const database_size = 200000

export default class Database{
    initDB(){
        let db
        return new Promise(resolve => {
            console.log('abrindo o banco de dados')
            SQLite.openDatabase(database_name, database_version, database_display_name, database_size).then(DB =>{
                db = DB
                db.executeSql('SELECT 1 FROM usuario LIMIT 1').then(()=>{
                    console.log('o banco de dados está aberto')
                }).catch(error => {
                    console.log('erro recebido: ' + error)
                    console.log('criando banco de dados')
                    db.transaction(tx => {
                        tx.executeSql('CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, senha VARCHAR(128) NOT NULL)')
                    }).then(()=>{
                        console.log('tabela usuario criada com sucesso')
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

    insert(user){
        return new Promise(resolve =>{
            this.initDB().then(db => {
                db.transaction(tx => {
                    tx.executeSql('INSERT INTO usuario VALUES(?,?)',[user.id,user.senha]).then(([tx,results]) => {
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
                    tx.executeSql('SELECT * FROM usuario',[]).then(([tx,result]) => {
                        var len = result.row.length
                        for(let i = 0; i < len; i++){
                            let row = result.row.item(i)
                            const {id,senha} = row
                            products.push({id,senha})
                        }
                        resolve(products)
                    })
                }).then(result => this.closeDB(db)).catch(err => console.log(err))
            }).catch( err => console.log(err))
        })
    }
}