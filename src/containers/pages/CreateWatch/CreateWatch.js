import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './CreateWatch.css';

import WatchForm from '../../../components/WatchForm/WatchForm';

class CreateWatch extends Component {

    componentDidMount() {
        this.props.onResetWatchform();
    }

    render() {
        return (
            <div className={classes.Container}>
                <h1>Create a new Offer</h1>
                <WatchForm onSubmit={this.props.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onResetWatchform: () => dispatch(actions.resetWatchform()),
    onSubmit: () => dispatch(actions.postWatchFormOffer())
});

export default connect(null, mapDispatchToProps)(CreateWatch);