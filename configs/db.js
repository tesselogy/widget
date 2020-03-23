/**
 * Created by ELEMIAN on 10.06.2018.
 */
module.exports = {
    url : 'mongodb://service:owremlvyki360@ds149676.mlab.com:49676/bim360',
    options: {
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0,
        useNewUrlParser: true
    }
};

