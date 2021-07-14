const find = require('../../core/v1/users/find.js');
const save = require('../../core/v1/users/save.js');

const { findAll } = new find.FindClass();
const { saveData } = new save.SaveClass();

const findUser = async () => {
    const result = await findAll();
    return result;
};


const saveUser = async (body) => {
    try {
        const data = await saveData(body);
        return data;
    } catch (error) {
        console.log(' ### error ###', error);
    }

}

module.exports = { findUser, saveUser}