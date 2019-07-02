const Storage = require('node-storage');
const storageFile = new Storage('./storage/store.json');

const store = {};

store.getStatus = () => {
    return getValueForKey('status');
};

store.setMakerID = (status) => {
    setValueForKey('status', status);
};

function setValueForKey (key, value) {
    value === ''
        ? storageFile.remove(key)
        : storageFile.put(key, value);
}

// Defaults to undefined if key is not found
function getValueForKey (key) {
    return storageFile.get(key);
}

module.exports = store;
