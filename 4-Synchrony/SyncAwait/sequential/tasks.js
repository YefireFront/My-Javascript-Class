const util = require('util')
const sleep = util.promisify(setTimeout)
module.exports = {

    async taskOne(){
        try {
            await sleep(3000);
            return 'One Value'
            
        } catch (err) {
            console.log(err)
        }
    },
    
    async taskTwo(){
       try {

        await sleep(2000);
        return 'Two Value'
        
       } catch (err) {
        console.log(err);
       }
    }
}