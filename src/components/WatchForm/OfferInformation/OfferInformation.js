import React, { Component } from 'react';
import classes from './OfferInformation.css';
import { connect } from 'react-redux';
import { setWatchFormField, toggleWatchFormCheckbox } from '../../../store/actions/index';

import { watchTypes, watchBrands, watchMovement, watchCaseMaterial, watchBraceletMaterial, watchGender, watchCondition } from '../../../_secret/watchFormData';

import DropdownInput from '../../UI/Inputs/DropdownInput/DropdownInput';
import TextInput from '../../UI/Inputs/TextInput/TextInput';
import CheckboxInput from '../../UI/Inputs/CheckboxInput/CheckboxInput';
import NumberInput from '../../UI/Inputs/NumberInput/NumberInput';
import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import VariableInput from '../../UI/Inputs/VariableInput/VariableInput';

class OfferInformation extends Component {
    render() {
        return (
            <section className={classes.OfferInformation}>
                <div className={classes.row1}>
                    <SectionHeader>Offer Information</SectionHeader>
                    <TextInput 
                        label={'Offer name'}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchOfferName}
                    />
                    <DropdownInput
                        label={'Type of watch'}
                        options={watchTypes}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchType}
                    />
                </div>
                <h4>Add watch to these categories</h4>
                <div className={classes.checkboxRow}>
                    <CheckboxInput 
                        label={'Diving Watches'}
                        input={this.props.inputs.watchCategoryDiving}
                        onChange={this.props.onCheckboxChange}
                    />
                    <CheckboxInput 
                        label={'Pilot Watches'}
                        input={this.props.inputs.watchCategoryPilot}
                        onChange={this.props.onCheckboxChange}
                    />
                    <CheckboxInput 
                        label={'Vintage Watches'}
                        input={this.props.inputs.watchCategoryVintage}
                        onChange={this.props.onCheckboxChange}
                    />
                    <CheckboxInput
                        label={'Mechanical Watches'}
                        input={this.props.inputs.watchCategoryMechanic}
                        onChange={this.props.onCheckboxChange}
                    />
                    <CheckboxInput
                        label={'Military Watches'}
                        input={this.props.inputs.watchCategoryMilitary}
                        onChange={this.props.onCheckboxChange}
                    />
                    <CheckboxInput
                        label={'Golden Watches'}
                        input={this.props.inputs.watchCategoryGolden}
                        onChange={this.props.onCheckboxChange}
                    />
                    <CheckboxInput
                        label={'Automatic Watches'}
                        input={this.props.inputs.watchCategoryAutomatic}
                        onChange={this.props.onCheckboxChange}
                    />
                </div>
                <hr />
                <div className={classes.block2}>
                    <VariableInput 
                        label={'Brand'}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchBrand}
                        options={watchBrands}
                    />
                    <TextInput
                        label={'Model'}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchModel}
                    />
                    <TextInput
                        label={'Ref. No.'}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchRef}
                    />
                    <DropdownInput
                        label={'Movement'}
                        options={watchMovement}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchMovement}
                    />
                    <DropdownInput
                        label={'Case material'}
                        options={watchCaseMaterial}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchCaseMaterial}
                    />
                    <DropdownInput
                        label={'Bracelet material'}
                        options={watchBraceletMaterial}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchBraceletMaterial}
                    />
                    <DropdownInput
                        label={'Gender'}
                        options={watchGender}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchGender}
                    />
                </div>
                <hr />
                <div className={classes.row4}>
                    <div className={classes.condition}>
                        <DropdownInput
                            label={'Condition'}
                            options={watchCondition}
                            onChange={this.props.onValueChange}
                            input={this.props.inputs.watchCondition}
                        />
                        <CheckboxInput
                            label={'New'}
                            onChange={this.props.onCheckboxChange}
                            input={this.props.inputs.watchConditionNew}
                        />
                    </div>
                    <NumberInput
                        label={'Year'}
                        onChange={this.props.onValueChange}
                        input={this.props.inputs.watchYear}
                    />
                </div>
                <div className={classes.row5}>
                    <label>Scope of delivery</label>
                    <div className={classes.checkboxes}>
                        <CheckboxInput
                            label={'With box'}
                            onChange={this.props.onCheckboxChange}
                            input={this.props.inputs.watchWithBox}
                        />
                        <CheckboxInput
                            label={'With papers'}
                            onChange={this.props.onCheckboxChange}
                            input={this.props.inputs.watchWithPapers}
                        />
                    </div>
                </div>
            </section>
        )

    }
}

const mapStateToProps = (state) => ({
    inputs: {
        watchCategoryAutomatic: state.watchForm.watchCategoryAutomatic,
        watchCategoryPilot: state.watchForm.watchCategoryPilot,
        watchCategoryMechanic: state.watchForm.watchCategoryMechanic,
        watchCategoryVintage: state.watchForm.watchCategoryVintage,
        watchCategoryGolden: state.watchForm.watchCategoryGolden,
        watchCategoryMilitary: state.watchForm.watchCategoryMilitary,
        watchCategoryDiving: state.watchForm.watchCategoryDiving,
        watchOfferName: state.watchForm.watchOfferName,
        watchType: state.watchForm.watchType,
        watchBrand: state.watchForm.watchBrand,
        watchModel: state.watchForm.watchModel,
        watchRef: state.watchForm.watchRef,
        watchMovement: state.watchForm.watchMovement,
        watchCaseMaterial: state.watchForm.watchCaseMaterial,
        watchBraceletMaterial: state.watchForm.watchBraceletMaterial,
        watchGender: state.watchForm.watchGender,
        watchCondition: state.watchForm.watchCondition,
        watchConditionNew: state.watchForm.watchConditionNew,
        watchYear: state.watchForm.watchYear,
        watchWithBox: state.watchForm.watchWithBox,
        watchWithPapers: state.watchForm.watchWithPapers
    }
});

const mapDispatchToProps = (dispatch) => ({
    onValueChange: (fieldName, value) => dispatch(setWatchFormField(fieldName, value)),
    onCheckboxChange: (fieldName) => dispatch(toggleWatchFormCheckbox(fieldName))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferInformation);