import React from 'react';
import { View, Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage';


global.db = SQLite.openDatabase(
    {
        name: 'local_storage.db',
        location: 'default',
        createFromLocation: '~local_storage.db',
    },
    suss => {
        null;
    },
    error => {
        null;
    },
);
export default class SQl extends React.Component {
    constructor() {
        super();
        SQLite.DEBUG = true;
    }


    async componentDidMount() {
        await this.CreateTable();

    }



    ExecuteQuery = (sql, params = []) =>
        new Promise((resolve, reject) => {
            db.transaction(trans => {
                trans.executeSql(
                    sql,
                    params,
                    (trans, results) => {
                        resolve(results);
                    },
                    error => {
                        reject(error);
                    },
                );
            });
        });


    async CreateTable() {
        let details = await this.ExecuteQuery(
            'CREATE TABLE if not EXISTS details (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), hint TEXT )',
            [],
        );
        console.log("details is success connect ");
    }



    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Button
                    title="Dalete"
                    color="#841584"
                />
            </View>
        );
    }
}