
(function () {

    const fabric_px = new Map([
        ['left', 'pxx'],
        ['top', 'pxy'],
        ['pxx', 'pxx'],
        ['pxy', 'pxy']
    ]);

    const fabric_json = new Map([
        ['left', 'pxx'],
        ['top', 'pxy'],
        ['pxx', 'pxx'],
        ['pxy', 'pxy'],
        ['mmx', [UtilsUnit.pxToMm, 'pxx']],
        ['mmy', [UtilsUnit.pxToMm, 'pxy']]
    ]);

    const val_raw = { pxx: 20, pxy: 50 };

    let val_new = UtilsKeyMap.getTransformedObject(val_raw, fabric_json);

    console.log('mapper', fabric_json);
    console.log('oldobj', val_raw);
    console.log('newobj', val_new);
    console.log('(func)', UtilsUnit.pxToMm);
    
})();
