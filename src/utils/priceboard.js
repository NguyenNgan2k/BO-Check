import { func } from "prop-types";
import { formatVolume10 } from "utils";
import { numberFormat } from "utils";
import { StringToInt } from "utils";

let arrUpdate = [];

export function _processDuMuaBan(sym, data, idVol) {
    const _type = sym.startsWith('VN30F' ? 'D' : 'A');
    let _rootDuMuaBan = document.getElementById(sym + idVol);

    if (!_rootDuMuaBan || data < 1) return;

    _rootDuMuaBan.innerHTML =
        _type === 'D' ? numberFormat(data) : formatVolume10(data);
    _rootDuMuaBan.classList.add('active');

    setTimeout(() => {
        if (_rootDuMuaBan) _rootDuMuaBan.classList.remove('active');
    }, 500);
}

export function _testProcessG(sym, data, idPrice, idVol) {
    if (!sym) return;
    const _type = sym.startsWith('VN30F') ? 'D' : 'A';

    let _rootPrice = document.getElementById(sym + idPrice);
    let _rootVol = document.getElementById(sym + idVol)
    if (!_rootPrice) return;

    const _g = data.split('|');

    const _oldVol = StringToInt(_rootVol.children[0].innerHTML);

    const price = _g[0];
    const vol = StringToInt(_g[1]);
    const clp = _g[0] === 'ATO' || _g[0] === 'ATC' ? '' : _g[2];
    const clv = _oldVol < vol ? 'i' : _oldVol > vol ? 'd' : clp;

    // change price
    const _oldPrice = _rootPrice.children[0].innerHTML;
    const _newPrice = numberFormat(price, _type === 'D' ? 1 : 2);
    if (_oldPrice != _newPrice) {
        if (!arrUpdate[sym + idPrice]) {
            _rootPrice.classList.remove('d', 'e', 'i', 'r', 'c', 'f');
            if (clp) _rootPrice.classList.add(clp, 'active')
            arrUpdate[sym + idPrice] = true;
        }
        _rootPrice.children[0].innerHTML = _newPrice
    }

    // change volume 
    if (_oldVol !== vol) {
        const _newVol = _type === 'D' ? numberFormat(vol) : formatVolume10(vol);
        if (!arrUpdate[sym + idVol]) {
            _rootVol.classList.remove('d', 'e', 'i', 'r', 'c', 'f');
            if (clp) _rootVol.classList.add(clv, 'active')
            arrUpdate[sym + idVol] = true;
        }
        _rootVol.children[0].innerHTML = _newVol;
    }

    //remove active price
    if (arrUpdate[sym + idPrice]) {
        setTimeout(() => {
            arrUpdate[sym + idPrice] = false;
            if (clp) _rootPrice.classList.remove('active');
        }, 500);
    }

    // remove active volume && set clp cho volume
    if (arrUpdate[sym + idVol]) {
        setTimeout(() => {
            arrUpdate[sym + idVol] = false;
            if (clv) {
                _rootVol.classList.remove('d', 'e', 'i', 'r', 'c', 'f', 'active', clv);
            }
            if (clp) _rootVol.classList.add(clp);
        }, 500);
    }

}

export function _process3210(data) {
    if (data.side === 'B') {
        _testProcessG(data.sym, data.g1, 'bP1', 'bV1');
        _testProcessG(data.sym, data.g2, 'bP2', 'bV2');
        _testProcessG(data.sym, data.g3, 'bP3', 'bV3');

        _processDuMuaBan(data.sym, data.vol4, 'duMua');
    } else {
        _testProcessG(data.sym, data.g1, 'oP1', 'oV1');
        _testProcessG(data.sym, data.g2, 'oP2', 'oV2');
        _testProcessG(data.sym, data.g3, 'oP3', 'oV3');

        _processDuMuaBan(data.sym, data.vol4, 'duBan');
    }
}

export function _process3220(data) {
    const _type = data.sym.startsWith('VN30F') ? 'D' : 'A';

    let _rootLastPrice = document.getElementById(data.sym + 'lastPrice');
    let _rootLastVol = document.getElementById(data.sym + 'lastVolume');
    let _rootChange = document.getElementById(data.sym + 'change');
    let _rootLot = document.getElementById(data.sym + 'lot');
    let _rootHighP = document.getElementById(data.sym + 'highP');
    let _rootLowP = document.getElementById(data.sym + 'lowP');
    let _rootAveP = document.getElementById(data.sym + 'aveP');
    let _rootSym = document.getElementById(data.sym + 'sym');

    if (!_rootSym) return;

    const _oldPrice = _rootLastPrice.children[0].innerHTML;
    const _newPrice = numberFormat(data.lastPrice, _type === 'D' ? 1 : 2);
    const _oldVol = _rootLastVol ? _rootLastVol.children[0].innerHTML : 0;
    const _newVol =
        _type === 'D' ? numberFormat(data.lastVol) : formatVolume10(data.lastVol);

    //lot
    if (_rootLot && data.totalVol) {
        _rootLot.innerHTML =
            _type === 'D'
                ? numberFormat(data.totalVol)
                : formatVolume10(data.totalVol);
        if (!arrUpdate[data.sym + 'lot']) {
            arrUpdate[data.sym + 'lot'] = true
            _rootLot.classList.add('active');
        }

        // lastPrice
        if (_oldPrice !== _newPrice && _rootLastPrice) {
            if (!arrUpdate[data.sym + 'lastPrice']) {
                arrUpdate[data.sym + 'lastPrice'] = true;
                _rootLastPrice.classList.remove('d', 'e', 'i', 'r', 'c', 'f');
                _rootLastPrice.classList.add(data.cl, 'active');
            }
            _rootLastPrice.children[0].innerHTML = _newPrice;

            if (_rootSym) _rootSym.classList.remove('d', 'e', 'i', 'r', 'c', 'f');
            if (_rootSym) _rootSym.classList.add(data.cl);
        }

        // lastVol
        if (_oldVol !== _newVol && _rootLastVol) {
            if (!arrUpdate[data.sym + 'lastVolume']) {
                arrUpdate[data.sym + 'lastVolume'] = true;
                _rootLastVol.classList.remove('d', 'e', 'i', 'r', 'c', 'f');
                _rootLastVol.classList.add(data.cl, 'active');
            }
            _rootLastVol.children[0].innerHTML = _newVol;
        }

        // change
        if (_rootChange) {
            const _oldChange = _rootChange.innerHTML;
            const _newChange = numberFormat(data.change, _type === 'D' ? 1 : 2);

            if (_oldChange !== _newChange) {
                _rootChange.classList.remove('d', 'e', 'i', 'r', 'c', 'f');
                _rootChange.classList.add(data.cl);
                _rootChange.innerHTML =
                    (data.cl === 'd' ? '-' : '') + _newChange;
            }
        }

        // highP
        if (_rootHighP) {
            const _oldHP = _rootHighP.innerHTML;
            const _newHP = numberFormat(data.hp, _type === 'D' ? 1 : 2);
            if (_oldHP !== _newHP) {
                _rootHighP.classList.remove('d', 'e', 'i', 'r', 'c', 'f');
                _rootHighP.classList.add(data.ch);
                _rootHighP.innerHTML = _newHP;
            }
        }

        //lowP
        if (_rootLowP) {
            const _oldLP = _rootLowP.innerHTML;
            const _newLP = numberFormat(data.lp, _type === 'D' ? 1 : 2);
            if (_oldLP !== _newLP) {
                _rootLowP.classList.remove('d', 'e', 'i', 'r', 'c', 'f');
                _rootLowP.classList.add(data.lc);
                _rootLowP.innerHTML = _newLP;
            }
        }

        //aveP
        if (_rootAveP) {
            const _oldAP = _rootAveP.innerHTML;
            const _newAP = numberFormat(data.ap, _type === 'D' ? 1 : 2);
            if (_oldAP !== _newAP) {
                _rootAveP.classList.remove('d', 'e', 'i', 'r', 'c', 'f');
                _rootAveP.classList.add(data.ca);
                _rootAveP.innerHTML = _newAP;
            }
        }

        if (arrUpdate[data.sym + 'lot']) {
            setTimeout(() => {
                arrUpdate[data.sym + 'lot'] = false;
                _rootLot.classList.remove('active');
            }, 500);
        }
        if (arrUpdate[data.sym + 'lastPrice']) {
            setTimeout(() => {
                arrUpdate[data.sym + 'lastPrice'] = false;
                _rootLastPrice.classList.remove('active');
            }, 500);
        }
        if (arrUpdate[data.sym + 'lastVolume']) {
            setTimeout(() => {
                arrUpdate[data.sym + 'lastVolume'] = false;
                _rootLastVol.classList.remove('active');
            }, 500);
        }
    }
}

export function _process3250(data) {
    const _type = data.symbol.startsWith('VN30F') ? 'D' : 'A';
    let _rootFBVol = document.getElementById(data.symbol + 'fBVol');
    let _rootFSVol = document.getElementById(data.symbol + 'fSVol');

    if (!_rootFBVol || !_rootFSVol) return;

    _rootFBVol.innerHTML =
        _type === 'D' ? numberFormat(data.fBVol) : formatVolume10(data.fBVol);
    _rootFSVol.innerHTML =
        _type === 'D' ? numberFormat(data.fSVolume) : formatVolume10(data.fSVolume)

    _rootFBVol.classList.add('active');
    _rootFSVol.classList.add('active');

    setTimeout(() => {
        if (_rootFBVol) _rootFBVol.classList.remove('active');
        if (_rootFSVol) _rootFSVol.classList.remove('active');
    }, 500);
}
