import React, { Component } from 'react';
import classes from './JewelryForm.css';

import JewelryPrice from './JewelryPrice/JewelryPrice';
import JewelryBasicInformation from './JewelryBasicInformation/JewelryBasicInformation';
import JewelryMeasurements from './JewelryMeasurements/JewelryMeasurements';
import JewelryDetails from './JewelryDetails/JewelryDetails';
import JewelryDeliveryInformation from './JewelryDeliveryInformation/JewelryDeliveryInformation';
import Button from '../UI/Button/Button';

class JewelryForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form className={classes.JewelryForm}>
        <JewelryBasicInformation />
        <hr />
        <JewelryPrice />
        <hr />
        <JewelryDeliveryInformation />
        <hr />
        <JewelryDetails />
        <hr />
        <JewelryMeasurements />
        <hr />
        <Button
          onClick={this.handleSubmit}
        >
          Save Offer
        </Button>
      </form>
    )
  }
}

export default JewelryForm;