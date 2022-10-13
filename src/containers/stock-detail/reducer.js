import {
    STOCK_DETAIL_REQUESTING,
    STOCK_DETAIL_REQUEST_SUCCESS,
    STOCK_DETAIL_REQUEST_ERROR,
    STOCK_MANAGEMENT_REQUESTING,
    STOCK_MANAGEMENT_REQUEST_SUCCESS,
    STOCK_MANAGEMENT_REQUEST_ERROR,
    COMPANY_INFO_REQUESTING,
    COMPANY_INFO_REQUEST_ERROR,
    COMPANY_INFO_REQUEST_SUCCESS,
    ASSOCIATE_REQUESTING,
    ASSOCIATE_REQUEST_SUCCESS,
    ASSOCIATE_REQUEST_ERROR,
    CDKT_REQUESTING,
    CDKT_REQUEST_SUCCESS,
    CDKT_REQUEST_ERROR,
    KQKD_REQUESTING,
    KQKD_REQUEST_SUCCESS,
    KQKD_REQUEST_ERROR,
    STOCK_NEWS_REQUESTING,
    STOCK_NEWS_REQUEST_SUCCESS,
    STOCK_NEWS_REQUEST_ERROR,
    STOCK_EVENTS_REQUESTING,
    STOCK_EVENTS_REQUEST_SUCCESS,
    STOCK_EVENTS_REQUEST_ERROR,

} from './constants';

const initalState = {
    stockDetail: {},
    stockDetailRequesting: false,
    stockDetailSuccessful: false,
    stockDetailErrors: [],
    topMatch: [],

    stockManage: {},
    stockManageRequesting: false,
    stockManageSuccessful: false,
    stockManageErrors: [],

    companyInfo: {},
    companyInfoRequesting: false,
    companyInfoSuccessful: false,
    companyInfoErrors: [],


    cdkt: {},
    cdktRequesting: false,
    cdktSuccessful: false,
    cdktErrors: [],

    kqkd: {},
    kqkdRequesting: false,
    kqkdSuccessful: false,
    kqkdErrors: [],

    stockNews: {},
    stockNewsRequesting: false,
    stockNewsSuccessful: false,
    stockNewsErrors: [],

    stockEvents: {},
    stockEventsRequesting: false,
    stockEventsSuccessful: false,
    stockEventsErrors: [],

    associate: [],
};

const reducer = function widgetReducer(state = initalState, action) {
    switch (action.type) {
        case STOCK_DETAIL_REQUESTING:
            return {
                ...state,
                stockDetailRequesting: true,
                stockDetailSuccessful: false,
                stockDetailErrors: [],
            };

        case STOCK_DETAIL_REQUEST_SUCCESS:
            return {
                ...state,
                stockDetail: action.resData,
                stockDetailRequesting: false,
                stockDetailSuccessful: true,
                stockDetailErrors: [],
            };

        case STOCK_DETAIL_REQUEST_ERROR:
            return {
                ...state,
                stockDetailRequesting: false,
                stockDetailSuccessful: false,
                stockDetailErrors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };
        case "TOP_MATCH_REQUESTING":
        case "TOP_MATCH_REQUEST_ERROR":
            return {
                ...state,
                topMatch: [],
            };
        case "TOP_MATCH_REQUEST_SUCCESS":
            return {
                ...state,
                topMatch: action.resData,
            };
        case STOCK_MANAGEMENT_REQUESTING:
            return {
                ...state,
                stockManageRequesting: true,
                stockManageSuccessful: false,
                stockManageErrors: [],
            };

        case STOCK_MANAGEMENT_REQUEST_SUCCESS:
            return {
                ...state,
                stockManage: action.resData,
                stockManageRequesting: false,
                stockManageSuccessful: true,
                stockManageErrors: [],
            };

        case STOCK_MANAGEMENT_REQUEST_ERROR:
            return {
                ...state,
                stockManageRequesting: false,
                stockManageSuccessful: false,
                stockManageErrors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        case COMPANY_INFO_REQUESTING:
            return {
                ...state,
                companyInfoRequesting: true,
                companyInfoSuccessful: false,
                companyInfoErrors: [],
            };

        case COMPANY_INFO_REQUEST_SUCCESS:
            return {
                ...state,
                companyInfo: action.resData,
                companyInfoRequesting: false,
                companyInfoSuccessful: true,
                companyInfoErrors: [],
            };

        case COMPANY_INFO_REQUEST_ERROR:
            return {
                ...state,
                companyInfoRequesting: false,
                companyInfoSuccessful: false,
                companyInfoErrors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        case ASSOCIATE_REQUESTING:
        case ASSOCIATE_REQUEST_ERROR:
            return {
                ...state,
                associate: [],
            };
        case ASSOCIATE_REQUEST_SUCCESS:
            return {
                ...state,
                associate: action.resData,
            };
        case CDKT_REQUESTING:
            return {
                ...state,
                cdktRequesting: true,
                cdktSuccessful: false,
                cdktErrors: [],
            };

        case CDKT_REQUEST_SUCCESS:
            return {
                ...state,
                cdkt: action.resData,
                cdktRequesting: false,
                cdktSuccessful: true,
                cdktErrors: [],
            };

        case CDKT_REQUEST_ERROR:
            return {
                ...state,
                cdktRequesting: false,
                cdktSuccessful: false,
                cdktErrors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        case KQKD_REQUESTING:
            return {
                ...state,
                kqkdRequesting: true,
                kqkdSuccessful: false,
                kqkdErrors: [],
            };

        case KQKD_REQUEST_SUCCESS:
            return {
                ...state,
                kqkd: action.resData,
                kqkdRequesting: false,
                kqkdSuccessful: true,
                kqkdErrors: [],
            };

        case KQKD_REQUEST_ERROR:
            return {
                ...state,
                kqkdRequesting: false,
                kqkdSuccessful: false,
                kqkdErrors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        case STOCK_NEWS_REQUESTING:
            return {
                ...state,
                stockNewsRequesting: true,
                stockNewsSuccessful: false,
                stockNewsErrors: [],
            };

        case STOCK_NEWS_REQUEST_SUCCESS:
            return {
                ...state,
                stockNews: action.resData,
                stockNewsRequesting: false,
                stockNewsSuccessful: true,
                stockNewsErrors: [],
            };

        case STOCK_NEWS_REQUEST_ERROR:
            return {
                ...state,
                stockNewsRequesting: false,
                stockNewsSuccessful: false,
                stockNewsErrors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        case STOCK_EVENTS_REQUESTING:
            return {
                ...state,
                stockEventsRequesting: true,
                stockEventsSuccessful: false,
                stockEventsErrors: [],
            };

        case STOCK_EVENTS_REQUEST_SUCCESS:
            return {
                ...state,
                stockEvents: action.resData,
                stockEventsRequesting: false,
                stockEventsSuccessful: true,
                stockEventsErrors: [],
            };

        case STOCK_EVENTS_REQUEST_ERROR:
            return {
                ...state,
                stockEventsRequesting: false,
                stockEventsSuccessful: false,
                Errors: [
                    ...[
                        {
                            body: action.error.toString(),
                            time: new Date(),
                        },
                    ],
                ],
            };

        default:
            return state;
    }
}

export default reducer;