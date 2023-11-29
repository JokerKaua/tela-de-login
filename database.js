const { MongoClient } = require('mongodb');
const readline = require('readline');

//Código para pegar dados da entrada do usuário
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
async function input(prompt) {
    return new Promise(resolve => rl.question(prompt, resolve))
}

async function main() {

    //Pegando dados de username e password de um login do BD 
    const userdb = await input('MongoDB (database) username> ');
    const passdb = await input('MongoDB (database) password> ');
    rl.close();
    
    // Conectando no MongoDB
    const client = new MongoClient(`mongodb+srv://${userdb}:${passdb}@teladelogin.psck7jy.mongodb.net/`);

    try {

        await client.connect();

        console.log('Conectado ao MongoDB');

        //Definindo o banco de dados e a collection
        const db = client.db('teladelogin');
        const collectionName = 'users';

        //Verificando se a collection já existe 
        console.log('Verificando collection \'users\' no BD');
        const collections = await db.listCollections().toArray();
        const collectionExists = collections.some(collection => collection.name === collectionName);

        if (collectionExists) {
            console.log('users collection: ok');
        } else {
            console.log('users collection: not found\nCriando collection \'users\'...');
            await db.createCollection('users');
            console.log('Collection \'users\' criada!');
        }

        // Dados/Registros para dar INSERT no BD.
        const users = [
            { username: 'joker', password: 'joker123', id: 1 },
            { username: 'andrew', password: 'andrewwiliian', id: 2 },
            { username: 'danilo', password: 'danilo043', id: 3 }
        ];

        // Inserindo registros no BD.
        console.log('Adicionando os registros no BD: \n' + JSON.stringify(users) + '\n');

        for (const user of users) {
            // Verificando se os dados já existem no BD.
            const existingUser = await db.collection(collectionName).findOne({ id: user.id });

            if (existingUser) {
                console.log(`Já existe o registro: ${JSON.stringify(user)}`);
            } else {
                await db.collection(collectionName).insertOne(user);
                console.log(`Registro inserido: ${JSON.stringify(user, ['username', 'password', 'id'])}`);
            }
        }
    } finally {
        // Fechando a conexão com o cliente
        await client.close();
        console.log('\n\nConexão fechada');
    }
}

main().catch(console.error);
