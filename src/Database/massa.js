import SQLite from 'react-native-sqlite-storage'
SQLite.DEBUG(true)
SQLite.enablePromise(true)

const database_name = 'DayByDay.db'
const database_version = '1.0'
const database_display_name = 'DayByDay'
const database_size = 200000

export default class Massa{
    initDB(){
        let db
        return new Promise(resolve => {
            console.log('abrindo o banco de dados')
            SQLite.openDatabase(database_name, database_version, database_display_name, database_size).then(DB =>{
                db = DB
                db.executeSql('SELECT 1 FROM massa LIMIT 1').then(()=>{
                    console.log('o banco de dados está aberto')
                }).catch(error => {
                    console.log('erro recebido: ' + error)
                    console.log('criando banco de dados')
                    db.transaction(tx => {
                        tx.executeSql('CREATE TABLE IF NOT EXISTS massa (id INTEGER PRIMARY KEY AUTOINCREMENT, altura INTEGER NOT NULL, peso INTEGER NOT NULL)')
                    }).then(()=>{
                        console.log('tabela massa criada com sucesso')
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

    insert(massa){
        return new Promise(resolve =>{
            this.initDB().then(db => {
                db.transaction(tx => {
                    tx.executeSql('INSERT INTO massa VALUES(?,?,?)',[massa.id,massa.altura,massa.peso]).then(([tx,results]) => {
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
                    tx.executeSql('SELECT * FROM massa',[]).then(([tx,result]) => {
                        var len = result.rows.length
                        for(let i = 0; i < len; i++){
                            let row = result.rows.item(i)
                            const {id,altura,peso} = row
                            products.push({id,altura,peso})
                        }
                        resolve(products)
                    })
                }).then(result => this.closeDB(db)).catch(err => console.log(err))
            }).catch( err => console.log(err))
        })
    }

    update(massa){
        return new Promise((resolve, reject) =>{
            this.initDB().then( db => {
                db.transaction(tx => {
                    tx.executeSql(`UPDATE massa SET altura = ${massa.altura}, peso = ${massa.peso} WHERE id = 1`,[]).then(([tx,results])=>{
                        resolve(results)
                    }) 
                }).then((results)=>this.closeDB()).catch(err => console.log(err))
            }).catch(err => console.log(err))
        })
    }
}