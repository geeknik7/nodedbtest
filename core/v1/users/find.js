const USERTBL = require('../../../models').users

class Find {

    async findAll (){
        try {
            const result = await USERTBL.findAll();
            return result;
        } catch (error) {
            console.error(' *** error **** ', error);
        }
    }

    // findAll() {
    //     return new Promise((resolve, reject) => {
    //         TRAINEETBL.findAll().then((data) => {
    //             resolve(data)
    //         }).catch((err) => {
    //             reject(err)
    //         });
    //     });
    // }

}
module.exports = {
    FindClass: Find,
};
