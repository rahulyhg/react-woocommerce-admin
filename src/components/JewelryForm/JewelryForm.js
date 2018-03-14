import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from './JewelryForm.css';
import * as actions from '../../store/actions/index';

import JewelryPrice from './JewelryPrice/JewelryPrice';
import JewelryBasicInformation from './JewelryBasicInformation/JewelryBasicInformation';
import JewelryMeasurements from './JewelryMeasurements/JewelryMeasurements';
import JewelryDetails from './JewelryDetails/JewelryDetails';
import JewelryDeliveryInformation from './JewelryDeliveryInformation/JewelryDeliveryInformation';
import JewelryCategories from './JewelryCategories/JewelryCategories';
import Button from '../UI/Button/Button';
import JewelryDescription from './JewelryDescription/JewelryDescription';
import JewelryInternalInformation from './JewelryInternalInformation/JewelryInternalInformation';
import JewelryPictures from './JewelryPictures/JewelryPictures';
import Spinner from '../UI/Spinner/Spinner';

class JewelryForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleCheckForm = () => {
    this.props.onCheckForm()
  }

  render() {
    if(this.props.submitted) {
      return <Redirect to="/jewelry/list" />;
    }

    return (
      <form className={classes.JewelryForm}>
        <JewelryBasicInformation />
        <hr />
        <JewelryCategories />
        <hr />
        <JewelryDescription />
        <hr />
        <JewelryPrice />
        <hr />
        <JewelryDeliveryInformation />
        <hr />
        <JewelryDetails />
        <hr />
        <JewelryMeasurements />
        <hr />
        <JewelryInternalInformation />
        <hr />
        <JewelryPictures />
        <hr />
        {this.props.loading ? <Spinner /> : null}
        <div>
          <Button
            type="button"
            onClick={this.handleCheckForm}
            disabled={this.props.valid}
          >
            Validate
          </Button>
          <Button
            onClick={this.handleSubmit}
            disabled={!this.props.valid}
          >
            Save Offer
          </Button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  valid: state.jewelryForm.valid,
  submitted: state.jewelryForm.submitted,
  loading: state.jewelryForm.loading,
  error: state.jewelryForm.error
});

const mapDispatchToProps = (dispatch) => ({
  onCheckForm: () => dispatch(actions.checkJewelryForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelryForm);