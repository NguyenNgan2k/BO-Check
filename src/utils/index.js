import * as _ from 'lodash';
import MD5 from 'crypto-js/md5';
import packageJson from '../../package.json';

export const errMsg = {
    '-6004': { msg: 'Lệnh đã được xử lý, không được gửi lại.' },
    '-6007': { msg: 'Hủy lệnh không thành công.' },
    '-6012': { msg: 'Tài khoản không đủ sức mua.' },
    '-6013': { msg: 'Không đủ số dư chứng khoán.' },
    '-6014': { msg: 'Lệnh không được hủy.' },
    '-6015': { msg: 'Không được sửa lệnh này.' },
    '-6016': { msg: 'Loại chứng khoán không hợp lệ.' },
    '-6017': { msg: 'Tài Khoản đang chờ kích hoạt.' },
    '-6019': { msg: 'Khối lượng đặt không hợp lệ.' },
    '-6020': { msg: 'Không xác định được thị trường.' },
    '-6021': { msg: 'Giá không phù hợp.' },
    '-6022': { msg: 'Thị trường đóng cửa.' },
    '-6023': { msg: 'Loại lệnh không phù hợp.' },
    '-6024': { msg: 'Không được đặt loại lệnh phiên này.' },
    '-6025': { msg: 'Hệ thống chưa sẵn sàng đặt lệnh ngoài giờ.' },
    '-6026': { msg: 'Không được huỷ/sửa lệnh phiên này.' },
    '-6027': { msg: 'Không được đặt lệnh điều kiện.' },
    '-6028': { msg: 'Tài khoản không được mua - bán.' },
    '-6029': { msg: 'Tài khoản không được ủy quyền.' },
    '-6030': { msg: 'User không có quyền xem tài khoản.' },
    '-6031': { msg: 'Chứng khoán không hợp lệ.' },
    '-6032': { msg: 'Vượt qua tỷ lệ an toàn tài khoản.' },
    '-6033': { msg: 'Chứng khoán đáo hạn không được giao dịch.' },
    '-6034': { msg: 'Vượt qua khối lượng 1000 của phái sinh.' },
    '-6035': { msg: 'Sai giá trần/sàn.' },
    '-6036': { msg: 'Sai bước giá cho trái phiếu.' },
    '-6037': { msg: 'Không được đặt lệnh.' },
    '-6038': { msg: 'Vượt qua tổng vị thế tối đa.' },
    '-6039': { msg: 'Tài khoản mới mở, chưa được giao dịch.' },
    '-6041': { msg: 'Tài khoản hạn chế giao dịch.' },
    '-6043': { msg: 'Không được mua bán cùng phiên.' },
    '-6045': { msg: 'Chứng khoán hết room cho vay' },
    '-6046': { msg: 'Chứng khoán hết room nước ngoài' },
    '-6047': { msg: 'Hết hạn mức mã chứng khoán ' },
    '-6048': { msg: 'Không được sửa đồng thời giá và khối lượng' },
    '-6666': { msg: 'Hết hạn mức nguồn.' },
    '-6667': { msg: 'Hết hạn mức tài khoản.' },
    '-6668': { msg: 'Tài khoản hạn chế bán do QTRR.' },
    '-6669': { msg: 'Lệnh forcesell, KH không được thao tác.' },
    '-6670': { msg: 'Hết hạn mức tổng của nhóm.' },
    '-6671': { msg: 'Hết hạn mức công ty.' },

    '-8001': { msg: 'Không kết nối được với gateway.' },
    '-8002': { msg: 'Thị trường đóng của, không được đặt lệnh.' },
    '-8003': { msg: 'Không hủy/sửa phiên khớp lệnh định kỳ.' },
    '-8004': { msg: 'Lệnh đã khớp hết, không được hủy/sửa.' },
    '-8005': { msg: 'Sai mã PIN.' },
    '-8006': { msg: 'Không dùng password cũ.' },
    '-8007': { msg: 'Password không hợp lệ.' },
    '-8008': { msg: 'Không có quyền truy cập từ IP ngoài.' },
    '-8009': { msg: 'TRADER HALT.' },
    '-8010': { msg: 'Hệ thống đang thi với HSX, KHÔNG ĐƯỢC ĐẶT LỆNH.' },
    '-8011': { msg: 'BrokerID đang bị chặn MUA.' },
    '-8012': { msg: 'BrokerID đang bị chặn BÁN.' },
    '-8013': { msg: 'BrokerID đang bị chặn giao dịch.' },
    '-8014': { msg: 'BrokerID bị chặn giao dịch thoả thuận.' },
    '-8015': { msg: 'BrokerID bị chặn giao dịch thoả thuận BÁN.' },
    '-8016': { msg: 'BrokerID bị chặn giao dịch thoả thuận MUA.' },
    '-9998': { msg: 'Lệnh chưa được confirm!' },
    '-9999': { msg: 'Không đủ điều kiện sửa.' },
    '-9001': { msg: 'Không được giao dịch mã chứng quyền trên TK margin' },
    '-8': { msg: 'Hệ thống chưa sẵn sàng nhận lệnh' },
    '-111': { msg: 'Không kết nối được hệ thống.' },
};

export const MARKET = {
    10: 'VN-Index',
    11: 'VN30-Index',
    '02': 'HNX-Index',
    12: 'HNX30-Index',
    '03': 'UPCOM-Index',
};

export function checkVersion() {
    const version = localStorage.getItem('version');

    if (packageJson.version !== version) {
        // localStorage.clear();
        localStorage.removeItem('token');
        localStorage.setItem('version', packageJson.version);
        return false;
    }
    return true;
}

export const PSLIST = ['VN30F1M', 'VN30F2M', 'VN30F1Q', 'VN30F2Q'];

export function _processMapDataCS(item) {
    let symbol = {};
    symbol.sym = item.sym;
    symbol.mc = item.mc;
    symbol.c = item.c;
    symbol.f = item.f;
    symbol.r = item.r;
    symbol.lastPrice = item.lastPrice;
    symbol.lastVolume = item.lastVolume;
    symbol.status_info = item.status_info;
    symbol.matchCL = item.cl;
    symbol.lot = item.lot;
    symbol.change = item.ot;
    if (item.changePc) {
        symbol.changePc = item.changePc;
    } else {
        symbol.changePc =
            (item.lastPrice - item.r >= 0 ? '' : '-') +
            numberFormat(((item.lastPrice - item.r) / item.r) * 100, 2);
    }
    symbol.avePrice = item.avePrice;
    symbol.highPrice = item.highPrice;
    symbol.lowPrice = item.lowPrice;
    symbol.fBVol = item.fBVol;
    symbol.fSVolume = item.fSVolume;
    symbol.fRoom = item.fRoom;
    let g1 = item.g1.split('|');
    symbol.bP1 = g1[0];
    symbol.bV1 = g1[1];
    symbol.bCl1 = g1[0] === 'ATC' || g1[0] === 'ATO' ? '' : g1[2];
    symbol.bVC1 = symbol.bCl1;
    let g2 = item.g2.split('|');
    symbol.bP2 = g2[0];
    symbol.bV2 = g2[1];
    symbol.bCl2 = g2[2];
    symbol.bVC2 = symbol.bCl2;
    let g3 = item.g3.split('|');
    symbol.bP3 = g3[0];
    symbol.bV3 = g3[1];
    symbol.bCl3 = g3[2];
    symbol.bVC3 = symbol.bCl3;
    let g4 = item.g4.split('|');
    symbol.oP1 = g4[0];
    symbol.oV1 = g4[1];
    symbol.oCl1 = g4[0] === 'ATC' || g4[0] === 'ATO' ? '' : g4[2];
    symbol.oVC1 = symbol.oCl1;
    let g5 = item.g5.split('|');
    symbol.oP2 = g5[0];
    symbol.oV2 = g5[1];
    symbol.oCl2 = g5[2];
    symbol.oVC2 = symbol.oCl2;
    let g6 = item.g6.split('|');
    symbol.oP3 = g6[0];
    symbol.oV3 = g6[1];
    symbol.oCl3 = g6[2];
    symbol.oVC3 = symbol.oCl3;
    let g7 = item.g7.split('|');
    symbol.duMua = g7[0];
    symbol.duBan = g7[1];

    return symbol;
}

export function _processMapDataPS(item) {
    let symbol = {};
    symbol.sym = item.sym;
    symbol.matureDate = item.matureDate;
    symbol.mc = item.mc;
    symbol.c = item.c;
    symbol.f = item.f;
    symbol.r = item.r;
    symbol.lastPrice = item.lastPrice;
    symbol.lastVolume = item.lastVolume;
    symbol.lot = item.lot;
    symbol.oi = item.oi;
    symbol.change = item.lastPrice - item.r;
    symbol.avePrice = item.avePrice;
    symbol.highPrice = item.highPrice;
    symbol.lowPrice = item.lowPrice;
    symbol.fBVol = item.fBVol;
    symbol.fSVolume = item.fSVolume;
    let g1 = item.g1.split('|');
    symbol.bP1 = g1[0];
    symbol.bV1 = g1[1];
    symbol.bCl1 = g1[0] === 'ATC' || g1[0] === 'ATO' ? '' : g1[2];
    symbol.bVC1 = symbol.bCl1;
    let g2 = item.g2.split('|');
    symbol.bP2 = g2[0];
    symbol.bV2 = g2[1];
    symbol.bCl2 = g2[2];
    symbol.bVC2 = symbol.bCl2;
    let g3 = item.g3.split('|');
    symbol.bP3 = g3[0];
    symbol.bV3 = g3[1];
    symbol.bCl3 = g3[2];
    symbol.bVC3 = symbol.bCl3;
    let g4 = item.g4.split('|');
    symbol.oP1 = g4[0];
    symbol.oV1 = g4[1];
    symbol.oCl1 = g4[0] === 'ATC' || g4[0] === 'ATO' ? '' : g4[2];
    symbol.oVC1 = symbol.oCl1;
    let g5 = item.g5.split('|');
    symbol.oP2 = g5[0];
    symbol.oV2 = g5[1];
    symbol.oCl2 = g5[2];
    symbol.oVC2 = symbol.oCl2;
    let g6 = item.g6.split('|');
    symbol.oP3 = g6[0];
    symbol.oV3 = g6[1];
    symbol.oCl3 = g6[2];
    symbol.oVC3 = symbol.oCl3;
    // let g7 = item.g7.split('|');
    // symbol.duMua = g7[0];
    // symbol.duBan = g7[1];
    // log(symbol);
    return symbol;
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

export function _processMapData10(element) {
    let data = element.ndata.split('SOH');
    // if (element.side == 'S') {
    //   data = (_.sortBy(data, function(o) { return parseFloat(o.split(':')[0]); })).reverse();
    // }

    let _dt = [],
        sum = 0;
    data.forEach((el) => {
        const _el = el.split(':');
        _dt.push(_el);
        sum += StringToInt(_el[1]);
    });

    let record = {};
    record.sym = element.sym;
    record.side = element.side;
    record.data = _dt;
    record.totalVol = sum;

    return record;
}

/**
 * !function
 */

export function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

function pick(...manyMoreArgs) {
    let a = manyMoreArgs,
        c,
        r,
        u = a.length;
    for (c = 0; c < u; c++)
        if (((r = a[c]), void 0 !== r && null !== r)) return r;
}

function FormatCurrency(num, delimitor, separate) {
    let sign, tail, ret_value;
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) num = '0';
    sign = num == (num = Math.abs(num));
    let str = num.toString();
    let arr_str = str.split(separate);
    if (arr_str.length > 1) {
        tail = String(arr_str[1]);
        if (tail.length < 2) {
            tail = tail + '0';
        }
    } else {
        tail = '';
    }
    num = arr_str[0];
    for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num =
            num.substring(0, num.length - (4 * i + 3)) +
            delimitor +
            num.substring(num.length - (4 * i + 3));

    if (tail == '') ret_value = (sign ? '' : '-') + num;
    else ret_value = (sign ? '' : '-') + num + separate + tail;
    return ret_value;
}

export function formatVolume10(number) {
    let vTemp = StringToInt(number) * 10;
    let vNumber = FormatCurrency(vTemp.toString(), ',', '.');
    return vNumber.substring(0, vNumber.length - 1);
}

export function numberFormat(h, c = 0, t = '', r, u) {
    if (h === 'ATO' || h === 'ATC') return h;
    h = +h || 0;
    c = +c;
    let w = (h.toString().split('.')[1] || '').split('e')[0].length,
        n,
        g,
        d = h.toString().split('e');

    g = (Math.abs(d[1] ? d[0] : h) + Math.pow(10, -Math.max(c, w) - 1)).toFixed(
        c
    );
    w = String(parseInt(g, 10));
    n = 3 < w.length ? w.length % 3 : 0;
    r = pick(r, '.');
    u = pick(u, ',');
    h = (0 > h ? '-' : '') + (n ? w.substr(0, n) + u : '');
    h += w.substr(n).replace(/(\d{3})(?=\d)/g, '$1' + u);
    c && (h += r + g.slice(-c));
    d[1] && 0 !== +h && (h += 'e' + d[1]);
    if (h == 0) return t;
    return h;
}

export function colorFix(cPrice, oPrice, tran, san, tc) {
    if (cPrice == '0' || cPrice == '0.0' || cPrice == '0.00' || cPrice == '')
        return '';
    if (cPrice == tc) return 'r';
    if (cPrice == tran) return 'c';
    if (cPrice == san) return 'f';
    if (cPrice - oPrice > 0) {
        return 'i';
    } else if (cPrice - oPrice < 0) {
        return 'd';
    }
    return 'r';
}

export function colorByChange(change) {
    if (change > 0) {
        return 'green';
    } else if (change < 0) {
        return 'red';
    }
    return 'yellow';
}

export function StringToInt(pString) {
    pString = '' + pString;
    pString = pString.replace(/,/g, '');
    let vInt = parseInt(pString, 10);
    if (isNaN(vInt)) {
        return 0;
    } else {
        return vInt;
    }
}

export function StringToDouble(pString) {
    pString = '' + pString;
    pString = pString.replace(/,/g, '');
    //Convert sang so he so 10
    let vFloat = parseFloat(pString);
    if (isNaN(vFloat)) {
        return 0;
    } else {
        return vFloat;
    }
}

export function formatDateTimeFull(idata, slack = ':') {
    const h = addZero(idata.getHours());
    const m = addZero(idata.getMinutes());
    const s = addZero(idata.getSeconds());

    const yyyy = idata.getFullYear();
    const mm = addZero(idata.getMonth() + 1);
    const dd = addZero(idata.getDate());

    return h + slack + m + slack + s + ' ' + dd + '/' + mm + '/' + yyyy;
}

export function formatDateTime(idata, slack = ':') {
    try {
        if (typeof idata === 'number') {
            let st = new Date(idata);
            let h = addZero(st.getHours());
            let m = addZero(st.getMinutes());
            let s = addZero(st.getSeconds());
            return h + slack + m + slack + s;
        } else {
            let h = addZero(idata.getHours());
            let m = addZero(idata.getMinutes());
            let s = addZero(idata.getSeconds());
            return h + slack + m + slack + s;
        }
    } catch (error) {
        return idata;
    }
}

export function formatDate(idata, slack = ':', _fm = 'ymd') {
    let y, m, d;

    try {
        if (typeof idata === 'number' || typeof idata === 'string') {
            let st;
            if (typeof idata === 'number') st = new Date(idata);
            if (typeof idata === 'string') st = new Date(idata.replace(/-/g, "/"));
            y = st.getFullYear();
            m = addZero(st.getMonth() + 1);
            d = addZero(st.getDate());
        } else {
            y = idata.getFullYear();
            m = addZero(idata.getMonth() + 1);
            d = addZero(idata.getDate());
        }
        if (_fm === 'ymd') {
            return y + slack + m + slack + d;
        } else {
            return d + slack + m + slack + y;
        }
    } catch (error) {
        return null;
    }
}

export function stringToDate(idata, format = 'ymd', slack = '/') {
    try {
        const _date = idata.split(slack);
        if (format === 'ymd') {
            let y = _date[0];
            let m = addZero(_date[1]);
            let d = addZero(_date[2]);
            let st = new Date(y + '/' + m + '/' + d);
            return st;
        } else {
            let y = _date[2];
            let m = addZero(_date[1]);
            let d = addZero(_date[0]);
            let st = new Date(y + '/' + m + '/' + d);
            return st;
        }
    } catch (error) {
        return null;
    }
}

export function _formatDate(str) {
    const arr = str.split('/');

    return arr.reverse().join('');
}

export function _formatDate2(str, slack = '/') {
    if (!str || str.length !== 8) return str;

    const year = str.substring(0, 4);
    const month = str.substring(4, 6);
    const day = str.slice(-2);

    return day + slack + month + slack + year;
}

export function _formatDate3(str) {
    const arr = str.split(' ');

    const _arr1 = arr[0].split('-');

    return _arr1[2] + '/' + _arr1[1];
}

export function _formatDate4(str) {
    const arr = str.split(' ');

    const _arr1 = arr[0].split('-');

    return _arr1.reverse().join('/');
}

export function checkRightEndDate(str) {
    if (!str || str.length !== 8) return false;
    // log(str)
    const year = str.substring(0, 4);
    const month = str.substring(4, 6);
    const day = str.slice(-2);

    let chkDate = new Date(year, month - 1, day);
    let curDate = new Date();
    curDate.setHours(0, 0, 0, 0);

    return curDate <= chkDate;
}

export function _diff2Date(date1, date2) {
    let mydate1, mydate2;
    if (typeof date1 === 'string') {
        let parts1 = date1.split('/');
        mydate1 = new Date(parts1[2], parts1[1] - 1, parts1[0]);
    } else {
        mydate1 = date1;
    }
    if (typeof date2 === 'string') {
        let parts2 = date2.split('/');
        mydate2 = new Date(parts2[2], parts2[1] - 1, parts2[0]);
    } else {
        mydate2 = date2;
    }

    var diff = Math.floor((mydate1 - mydate2) / (1000 * 60 * 60 * 24));

    return diff || 0;
}

export function _diff2DateSecond(date1, date2) {
    let mydate1, mydate2;
    if (typeof date1 === 'string') {
        let parts1 = date1.split('/');
        mydate1 = new Date(parts1[2], parts1[1] - 1, parts1[0]);
    } else {
        mydate1 = date1;
    }
    if (typeof date2 === 'string') {
        let parts2 = date2.split('/');
        mydate2 = new Date(parts2[2], parts2[1] - 1, parts2[0]);
    } else {
        mydate2 = date2;
    }

    var diff = Math.floor((mydate1 - mydate2) / 1000);
    return diff || 0;
}

export function _getClassIndex(cPrice, oPrice) {
    if (cPrice - oPrice > 0) {
        return 'i';
    } else if (cPrice - oPrice < 0) {
        return 'd';
    }
    return 'r';
}

export function _getNameAcronym(str) {
    let matches = str.match(/\b([A-Z])/g);
    let acronym = _.takeRight(matches, 2).join('').toUpperCase();
    return acronym;
}

export function _convertTradeTp(orderPrice) {
    if (!orderPrice) return '00';
    // log(orderPrice);
    const ordPrice = orderPrice ? (orderPrice + '').toUpperCase() : '';
    if (StringToDouble(orderPrice) > 0) return '01';

    switch (ordPrice) {
        case 'ATO':
            return '02';

        case 'ATC':
            return '03';

        case 'MP':
            return '04';

        case 'MTL':
            return '05';

        case 'MOK':
            return '06';

        case 'MAK':
            return '07';

        case 'PLO':
            return '08';

        default:
            return '00';
    }
}

export function _convertTpToPrice(odType) {
    switch (odType) {
        case '01':
            return 'LO';

        case '02':
            return 'ATO';

        case '03':
            return 'ATC';

        case '04':
            return 'MP';

        case '05':
            return 'MTL';

        case '06':
            return 'MOK';

        case '07':
            return 'MAK';

        case '08':
            return 'PLO';

        default:
            return 'LO';
    }
}


export function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

export function _chkOrdCanEdit(stt, qty, matQty, odType) {
    let canEdit = false;
    switch (stt) {
        case '1':
            break;

        default:
            break;
    }
    return canEdit;
}

export function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

export function _validVolHose(vol) {
    let step = 10;
    if (vol < 1 || vol > 500000 || vol % step !== 0) {
        return false;
    }

    return true;
}

export function _validVolHnx(vol) {
    let step = 100;
    if (vol === 0 || (vol >= 100 && vol % step !== 0)) {
        return false;
    }

    return true;
}

export function _hideMidStr(str) {
    if (!str || str.length < 2) return str;

    return str.replace(/^(\+?[\d]{2})\d+(\d{2})$/g, '$1*****$2');
}

export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


export function formatPhoneNumber(str) {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');
    // log(cleaned);
    //Check if the input is of correct

    let match84 = cleaned.match(/^(84|)?(\d{3})(\d{3})(\d{3})$/);
    // log(match84);
    if (match84) {
        //Remove the matched extension code
        //Change this to format for any country code.
        let intlCode = match84[1] ? '+84' : '';
        return [
            '(',
            intlCode,
            ') ',
            match84[2],
            '.',
            match84[3],
            '.',
            match84[4],
        ].join('');
    } else {
        let match = cleaned.match(/(\d{4})(\d{3})(\d{3})$/);
        if (match) {
            return [match[1], '.', match[2], '.', match[3]].join('');
        }
    }
    return null;
}

export function canEditOrder(ordrStatTp, ordrQty, matchedQty) {
    if (ordrStatTp === 'P' || ordrStatTp.endsWith('C')) return true;
    if (
        ordrStatTp.endsWith('M') &&
        StringToInt(matchedQty) < StringToInt(ordrQty)
    )
        return true;

    return false;
}

export function canDeleteOrder(ordrStatTp, ordrQty, matchedQty) {
    if (ordrStatTp === 'P' || ordrStatTp.endsWith('C')) return true;
    if (
        ordrStatTp.endsWith('M') &&
        StringToInt(matchedQty) < StringToInt(ordrQty)
    )
        return true;

    return false;
}

export function removeAccent(str) {
    if (!str) return str;

    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str;
}

export function validateEmail(email) {
    var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function getMessageError(res, getState) {
    const { setting } = getState().client;
    const { listMessage } = getState().priceBoard;

    const lang = setting.lang || 'vi';
    const msg = listMessage[res.data.messageNo];
    // log(msg);
    if (msg) {
        return msg[lang];
    }

    return res.data.message || 'Có lỗi trong quá trình xử lý. Hãy thử lại sau!';
}

export function getColor10Gia(tc, tran, san, gia) {
    // log(tc, tran, san, gia)
    if (gia === '0') return '#d4d4d4';
    if (StringToDouble(gia) === StringToDouble(tran)) return '#ff25ff';
    if (StringToDouble(gia) === StringToDouble(san)) return '#1eeeee';
    if (StringToDouble(gia) === StringToDouble(tc)) return '#ffd900';
    if (StringToDouble(gia) < StringToDouble(tc)) {
        return '#ff3737';
    } else {
        return '#0f0';
    }
}

export function formatDateVietStock(params) {
    if (!params) return null;

    var numb = params.match(/\d/g);
    numb = numb.join('');

    const _numb = new Date(StringToInt(numb));

    return formatDate(_numb, '-', 'dmy');
}

export function getCodeByNameIndex(params) {
    const _code =
        params === 'HSX'
            ? '10'
            : params === 'HNX'
                ? '02'
                : params === 'UPCOM'
                    ? '03'
                    : '10';

    return _code;
}

export function showPosition(str) {
    return str === 'Blank' ? '' : str;
}

export function formatRatio(str) {
    const _arr = str.split(':');
    return _arr[0] * 1 + ':' + _arr[1] * 1;
}

export function getRandom() {
    var text = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 23; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export function checkSum(a, b) {
    if (b == null || b == '' || typeof b === 'undefined') {
        return 'xxx';
    }
    if (typeof b == 'object') {
        let checkSum = a;
        let keysCheckSum = [
            'price',
            'side',
            'volume',
            'account',
            'symbol',
            'refId',
        ];
        keysCheckSum.map((item) => {
            if (item != 'volume') {
                checkSum += b[item];
            } else {
                checkSum += b[item] * 100 + 'vpbs@456';
            }
        });
        return MD5(checkSum).toString();
    } else {
        return MD5(b).toString();
    }
}

export function getMsgByErrorCode(code) {
    return errMsg[code] ? errMsg[code].msg : 'Error';
}

export function checkInvalidSession(rs) {
    if (
        rs === 'Invalid session' ||
        rs.includes('InvalidSessionException') ||
        rs.includes('NotLoginException')
    )
        return true;

    return false;
}

export function isValidURL(string) {
    var res = string.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
}

export function htmlEscape(text) {
    return text
        .replace(/\\/g, '')
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export function msToTime(s) {
    // Pad to 2 or 3 digits, default is 2
    var pad = (n, z = 2) => ('00' + n).slice(-z);
    return (
        pad((((s / 3.6e6) | 0) + 7) % 24) +
        ':' +
        pad(((s % 3.6e6) / 6e4) | 0) +
        ':' +
        pad(((s % 6e4) / 1000) | 0)
    ); // + '.' + pad(s%1000, 3);
}

export function getQ(params) {
    let st = new Date(params);
    const _month = addZero(st.getMonth() + 1) + '';
    const _year = st.getFullYear();

    // log(_month)

    let _txt = '';
    switch (_month) {
        case '12':
            _txt = 'Q4';
            break;

        case '03':
            _txt = 'Q1';
            break;
        case '06':
            _txt = 'Q2';
            break;
        case '09':
            _txt = 'Q3';
            break;

        default:
            break;
    }

    return _txt + '/' + _year;
}

export function formatTimeNews(params) {
    let parts2 = params.split(' ');
    const _year = parts2[0].split('/')
    const _hour = parts2[1].split(':')
    let mydate2 = new Date(_year[2], _year[1] - 1, _year[0], _hour[0], _hour[1], _hour[2]);

    const _sec = Math.floor((new Date()) - (new Date(mydate2))) / 1000;

    // log(_sec, params, mydate2)

    if (_sec < 60) return _sec + ' giây trước';

    const _minus = Math.floor(_sec / 60);

    if (_minus < 60) return _minus + ' phút trước';

    const __hour = Math.floor(_minus / 60);

    if (__hour < 24) return __hour + ' giờ trước';

    return Math.floor(__hour / 24) + ' ngày ' + (__hour % 24) + ' giờ trước';
}

/**
 * function log
 * @param {*} str 
 * @param {*} type log/error/warning
 */
export function log(...theArgs) {
    console['log'](theArgs);
}

export function hmsToSeconds(s) {
    var b = s.split(':');
    return b[0] * 3600 + b[1] * 60 + (+b[2] || 0);
}

export function secondsToHMS(secs) {
    function z(n) { return (n < 10 ? '0' : '') + n; }
    var sign = secs < 0 ? '-' : '';
    secs = Math.abs(secs);
    return sign + z(secs / 3600 | 0) + ':' + z((secs % 3600) / 60 | 0) + ':' + z(secs % 60);
}