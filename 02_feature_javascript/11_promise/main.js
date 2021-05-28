"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------
// NG Code
// ------------------------------
var fs = require("fs");
function loadJSONSync(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
}
// 正しいJSONファイル
console.log(loadJSONSync('good.json'));
// 存在しないファイル：fs.readFileSyncが失敗する
try {
    console.log(loadJSONSync('absent.json'));
}
catch (err) {
    console.log('absent.json error', err.message);
}
// 正しくないJSONファイル　例：ファイルは存在するが JSON.parse が失敗する
try {
    console.log(loadJSONSync('invalid.json'));
}
catch (err) {
    console.log('invalid.json error', err.message);
}
// ------------------------------
// Promise Code
// ------------------------------
Promise.resolve(123)
    .then(function (res) {
    console.log(res); // 123
    return 456;
})
    .then(function (res) {
    console.log(res); // 456
    return Promise.resolve(123); // resolveされたPromiseを返しています
})
    .then(function (res) {
    console.log(res); // 123 : resolveされた値で`then`が呼び出されます
    return 123;
});
// rejectされたPromiseを作成する
Promise.reject(new Error('何か悪いことが起きた'))
    .then(function (res) {
    console.log(res); // 呼び出されない
    return 456;
})
    .then(function (res) {
    console.log(res); // 呼び出されない
    return 123;
})
    .then(function (res) {
    console.log(res); // 呼び出されない
    return 123;
})
    .catch(function (err) {
    console.log(err.message); // 何か悪いことが起きた
});
// rejectされたPromiseを作成する
Promise.reject(new Error('何か悪いことが起きた'))
    .then(function (res) {
    console.log(res); // 呼び出されない
    return 456;
})
    .catch(function (err) {
    console.log(err.message); // 何か悪いことが起きた
    return 123;
})
    .then(function (res) {
    console.log(res); // 123
});
Promise.resolve(123)
    .then(function (res) {
    throw new Error('何か悪いことが起きた'); // 同期処理でエラーを発生させる
    return 456;
})
    .then(function (res) {
    console.log(res); // 呼び出されない
    return Promise.resolve(789);
})
    .catch(function (err) {
    console.log(err.message); // 何か悪いことが起きた
});
Promise.resolve(123)
    .then(function (res) {
    throw new Error('何か悪いことが起きた'); // 同期処理でエラーを発生させる
    return 456;
})
    .catch(function (err) {
    console.log('first catch: ' + err.message); // 何か悪いことが起きた
    return 123;
})
    .then(function (res) {
    console.log(res); // 123
    return Promise.resolve(789);
})
    .catch(function (err) {
    console.log('second catch: ' + err.message); // 呼び出されない
});
Promise.resolve(123)
    .then(function (res) {
    return 456;
})
    .catch(function (err) {
    console.log("HERE"); // 呼び出されない
});
Promise.resolve(123)
    .then(function (res) {
    // res は `number` 型と推論される
    return true;
})
    .then(function (res) {
    // res は `boolean` 型と推論される
});
function iReturnPromiseAfter1Second() {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Hello world!"); }, 1000);
    });
}
Promise.resolve(123)
    .then(function (res) {
    // res は `number` 型と推論される
    return iReturnPromiseAfter1Second(); // `Promise<string>`を返す
})
    .then(function (res) {
    // res は `string` 型と推論される
    console.log(res); // Hello world!
});
function readFileAsync(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, result) {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}
function loadJSONAsync(filename) {
    return readFileAsync(filename) // 直前に作成した関数を使います
        .then(function (res) {
        return JSON.parse(res);
    });
}
// 正しいjsonファイル
loadJSONAsync('good.json')
    .then(function (val) { console.log(val); })
    .catch(function (err) {
    console.log('good.json error', err.message); // 呼び出されない
})
    // 存在しないjsonファイル
    .then(function () {
    return loadJSONAsync('absent.json');
})
    .then(function (val) { console.log(val); }) // 呼び出されない
    .catch(function (err) {
    console.log('absent.json error', err.message);
})
    // 正しくないjsonファイル
    .then(function () {
    return loadJSONAsync('invalid.json');
})
    .then(function (val) { console.log(val); }) // 呼び出されない
    .catch(function (err) {
    console.log('bad.json error', err.message);
});
// 何らかのデータをサーバから読み込むことを再現する処理
function loadItem(id) {
    return new Promise(function (resolve) {
        console.log('loading item', id);
        setTimeout(function () {
            resolve({ id: id });
        }, 1000);
    });
}
// Promiseチェーン
var item1, item2;
loadItem(1)
    .then(function (res) {
    item1 = res;
    return loadItem(2);
})
    .then(function (res) {
    item2 = res;
    console.log('done');
}); // 全体で 2秒 かかる
// 並列処理
Promise.all([loadItem(1), loadItem(2)])
    .then(function (res) {
    item1 = res[0], item2 = res[1];
    console.log('done');
}); // 全体で 1秒 かかる
var task1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, 'one');
});
var task2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, 'two');
});
Promise.race([task1, task2]).then(function (value) {
    console.log(value); // "one"
    // 両方ともresolveされるが、task1の方が早く終わる
});
