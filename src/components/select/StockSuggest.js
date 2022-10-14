import React from 'react';
import Autosuggest from 'react-autosuggest';

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestionValue(suggestion) {
    return suggestion.stock_code;
}

//html
function renderSuggestion(suggestion) {
    return (
        <span>
            <span className="fz-14 font-weight-bold text-white">
                {suggestion.stock_code}
            </span>
            <span style={{ color: '#D1E0DE' }} className="fz-12  font-weight-bold">{` - ${suggestion.name_vn}`}</span>
        </span>
    );
}

class StockSuggest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            method: '',
            value: '',
            suggestions: [],
        };
    }

    getSuggestions = (value) => {
        const { dataSuggest } = this.props;

        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        const suggestion = dataSuggest.filter((item) => regex.test(item.stock_code));

        return suggestion;
    };

    onChange = (event, { newValue, method }) => {
        this.setState({
            method: (method === 'type' ? '' : method),
            value: newValue,
        });
    };

    onKeyDown = (e) => {
        // return;

        if (e.keyCode === 13 && !this.state.method) {
            // Enter
            e.preventDefault();
            e.stopPropagation();
            const { suggestions } = this.state;
            // return;
            if (suggestions && !!suggestions.length) {
                this.props.addStock(suggestions[0].stock_code);
                this.setState({ value: '' });
            }
        }
    };

    // call thông qua mouse & keyboard
    onSuggestionSelected = (event, { suggestionValue, method }) => {
        // return
        this.props.addStock(suggestionValue);
        this.setState({ value: '' });
    };

    //khi cần load lại suggestions
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value),
        });
    };

    //clear suggestions
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };
    render() {
        const { classname, placeholder } = this.props;
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: placeholder, // 'Thêm mã CK'
            value,
            onChange: this.onChange,
            onKeyDown: this.onKeyDown,
            className: classname,
        };
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                onSuggestionSelected={this.onSuggestionSelected}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default StockSuggest;
