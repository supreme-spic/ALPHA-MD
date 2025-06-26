

/*Why does my code work? I don’t know. Why does my code break? I also don’t know.*/
/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VVy47iRhT9lai20INt/ERqKbbBxmCDwUADURaFXX6AX5RfmBGrrGaXVZRFVvMFkaLORyRf0X8SGbrTLSUz6XhVKlede+695576COIkyNAY1aD3EaQ4KGGOmmVepwj0gFS4LsKgDRyYQ9ADiT4Zx2ZHIP3jdEsT1DHzxcHE3sodMgk3nsnyczMdbKaGStyDSxukxS4M7K8Arjl8zldENO0Py9YEK7o6Lx2zZXBTtQz4Q4T8lmSxQ7Wg7HtwaRBhgIPYG6Q+ihCG4RjVJgzw++iPBzXDhgLnnzjhON4sc6vabpQ5hSyazR7StFou5JbR2bRi8X30p6d5JdVuMJHXQuRNxyv9vKAyxQpkC1XycrI7UrNyJW+0/uxGPwu8GDmag+I8yOt31501TG2fluaOd9TCHcxcdqPWK9w/yeuS3sPJhFnBJPUHI9V+H3HNVaZ4bMitsX5O66KVJzGClXqSFDE1bGcwsl1hCQ98IhJviZv4RSuH/1P3meaazGQSFk5XWqelSPGLRGX7+do4e7nnPvDkjmbxWKuW76TP+FheaH1xq7pwQG76qV/svcqad2Zkfyqc00IRtmgYk5wivtKHeYG/xnI0GzEn2HFnhjiEeL63XH+o0u5OpuzRYS1bXTeQPCLmKfrgrGiazTNq29lVne6sqs+pUNie0NHPoaKZp+UkUFtWMOKl6v6a0QHVmgN65KUNMPKCLMcwD5K42aO6dBtAp7SQjVF+LS/gWhvaXy13U26wljYUez45gUGOapaPw0NemYLZQtKUGRBz8R60QYoTG2UZcoZBlie4NlCWQQ9loPfdtVNN0hhFSY5GgQN6gGK7HMfzDE/R7LfZh8qHeQbT9EOMctAGLk4iA4FejgvUBtcLfF9WBpQiKJLQJ5iuMpAomuxzAkvyNNclmSbF6BZ0EUQoy2GUgh7JMYRAkwTfvXzfBjE65Tf9NFl3yTZwA5zly7hIwwQ6L+J6+QltOyni3KpjW24WCIPem22U50HsZU1mRQyx7Qclkps8QM+FYYYubeCgMrCRduV/l076FG/P6lpntqlKw/iO95rK+Un8fIQjSJrm+DuXRtQdjUjnDu5s4c5xaZKhechCggNNOW6j29z5si08KKsDXldeGkk63jKirxCHlntaj5KrGm4SQBg5L1XeQftQpIvkgOKv4Fqr0EGzyl4T0IjTzRCXoeUka5PNsze4N2mB3sdXu5QTp8GbmxuWW/Ar0HSrifMPNfRY5p+CiGFzGvz5+enx56fHn/747enx09Pjj0+Pn755+v2XP359evzhz8+gDcIrnMASHNHlKZJiCJ5uAJv9y9+ta+I6KIdBmIEekMfldr8TBwNTZwVDU1Vp4ImyJ4LXVr+M7m00EpvvWNFoqunDMGPV9YOQVdmG0RVf15b1Jon4QqonnXPH5+//BQT0QLdKO9YyaYVIU9WSlogO0TpbEz6s9P1xz3PxLGK0XdQ/HOex340cbT8dHv1wLM3wWRuefNg1qeS0eGjRKFQGpn7Uklhu5vxFcm+DRdvqaHQQRUT0nnt4oKq5OnURXASrrlxxxkneq5rmxf1T6ZdjXZhgHGbJJkvLmWyKQ2UUG8QuqGJqzhg6r0Aima1nknczlauphc+PSfA87jeBugG6evNz6/6zxa+zQlzabzCe3f4LepTg0DSJNFgE8onZTf2QLHeGrk6t08aqFSMaj0rds/cu36FdcGlMIA1h7iY4Aj2QRTsI2gAnRTPJWuwmX4kki0tNFm9phzDLxVd3+BfDYdjbKRMn6RBmflMBlRajohF+LaaplcP8xWyA2HwjbQwufwGWeiSfDwkAAA==', //paste your session here 
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Keith", //replace with your owner name
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254748387615",   //replace with your owner number  
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/4h8lfw.jpg",    //replace with your image url                     
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://github.com/Keithkeizzah", // replace with your url
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'supremr', //replace with your bot name
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", //replace with your timezone 
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;

//Why do we call it "open source" when it feels more like "open wounds"?🗿🗿

//Because sharing is caring... and crying is healing🗿🗿

