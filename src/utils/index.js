export const MARKET = {
    10: 'VN-Index',
    11: 'VN30-Index',
    '02': 'HNX-Index',
    12: 'HNX30-Index',
    '03': 'UPCOM-Index',
};


export function _getClassIndex(cPrice, oPrice) {
    if (cPrice - oPrice > 0) {
        return 'i';
    } else if (cPrice - oPrice < 0) {
        return 'd';
    }
    return 'r';
}


export function _processMapDataIndex(element) {
    let index = {};
    index.mc = element.mc;
    index.name = MARKET[element.mc];
    index.cIndex = element.cIndex;
    index.oIndex = element.oIndex;
    index.vol = element.vol;
    index.value = element.value;
    index.time = element.time;
    index.status = element.status;
    let dt = element.ot.split('|');
    index.change = dt[0];
    index.changePc = dt[1];
    index.up = dt[3];
    index.down = dt[4];
    index.rel = dt[5];
    index.cl = _getClassIndex(element.cIndex, element.oIndex);
    return index;
}

export function hmsToSeconds(s) {
    var b = s.split(':');
    return b[0] * 3600 + b[1] * 60 + (+b[2] || 0);
}

export function log(...theArgs) {
    console['log'](theArgs);
}
