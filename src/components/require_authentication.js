import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
        static contextTypes = {
            router: PropTypes.object
        };

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.history.push('/');
            }
        }

        render() {
            console.log(this.props.authenticated);
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => {
        return { authenticated: state.authenticated };
    };

    return connect(mapStateToProps)(Authentication);
};
