import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface TodoIntance extends Model {
    id: string;
    title: string;
    done: number;
}

export const Todo = sequelize.define<TodoIntance>('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'todos',
    timestamps: false
})