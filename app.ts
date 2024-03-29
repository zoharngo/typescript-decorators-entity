import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import APIServer from "./APIServer";
import Person from './entities/Person';

export const apiServer = new APIServer();
export const db = new JsonDB(new Config("entityDatabase", true, true, '/'));
export const AWS_SQS_ACCESS_KEY_ID = 'QEDFFDKK6SM354DHT';
apiServer.addEntity<Person>(Person);

apiServer.start();
