import mysql from "mysql2/promise"

interface IConnectToSql {
    host: string;
    user: string;
    password: string;
    database: string;
}

export async function connectToSql({host, user, password, database}: IConnectToSql){
    try {

    const connection = await mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database
    });

    console.log('Successfully connected to MySQL!');

    return connection
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}