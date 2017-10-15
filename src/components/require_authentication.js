import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * in order to use this:
 * import Authentication -> my HOC
 * import Resources -> component I want to wrap
 * const ComposedCompoent = Authentication(Resources)
 * in seom render method -> <ComposedComponent something={something}/> 
 * 
 */

export default ComposedComponent => {
    class Authentication extends Component {
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return { authenticated: state.authenticated };
    };

    return connect(mapStateToProps)(Authentication);
};
