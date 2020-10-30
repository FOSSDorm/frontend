import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './page_not_found.scss';
class PageNotFound extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="page_not_found">
                <p>404 Page Not Found</p>
            </div>
        );
    }
}

PageNotFound.propTypes = {

};

export default PageNotFound;