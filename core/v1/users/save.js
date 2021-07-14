const USERTBL = require('../../../models').users

class Save {

    async saveData (body){
        try {
            const result = await USERTBL.create(body);
            return result;
        } catch (error) {
            console.error(' *** error **** ', error);
        }
    }

}

module.exports = {
    SaveClass: Save,
};
