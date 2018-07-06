
/**
 * map 2 objects having different key names for some value
 */

const UtilsKeyMap = {
    getKeyByValue(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    },
    getPairedObject(obj, map) {
        let result = {};
        Object.keys(obj).forEach(key => {
            result[map.get(key)] = obj[key];
        });
        return result;
    },
    getExpandedObject(obj, map) {
        let result = {};
        map.forEach((v, k) => {
            result[k] = obj[v];
        });
        return result;
    },
    getTransformedObject(obj, map) {
        let result = {};
        map.forEach((v, k) => {
            result[k] = this.hasFunc(v) ? this.runFunc(v, obj) : obj[v];
        });
        return result;
    },
    mapToObject(map) {
        let obj = {};
        map.forEach(item => { (v, k) => { obj[k] = v } });
        return obj;
    },
    objectToMap(obj) {
        let map = new Map;
        Object.keys(obj).forEach(k => { map.set(k, obj[k]) });
        return map;
    },
    hasFunc(value) {
        return "object" === typeof value;
    },
    runFunc(value, obj) {
        let func = value[0];
        let args = obj[value[1]];
        return func(args);
    }
}

