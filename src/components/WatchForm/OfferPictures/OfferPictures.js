import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './OfferPictures.css';

import SectionHeader from '../../UI/SectionHeader/SectionHeader';
import Dropzone from 'react-dropzone';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import TextInput from '../../UI/Inputs/TextInput/TextInput';

class OfferPictures extends Component {

  state = {
    files: [],
    loading: false,
    confirmed: false
  }

  handleRemoveImage = (e, key) => {
    e.stopPropagation();
    this.setState({ files: this.state.files.filter((file, index) => index !== key )});
  }

  handleRemoveImportImage = (e, id) => {
    e.stopPropagation();
    this.props.onRemoveImportImage(id);
  }

  onDrop = (acceptedFiles) => {
    this.setState({ 
      files: this.state.files.concat(acceptedFiles),
      confirmed: false 
    })
  }

  onImagesConfirmed = () => {
    this.props.onImagesConfirmed(this.state.files);
    this.setState({
      confirmed: true
    });
  }

  render() {
    const preview = (this.state.files.length > 0 || this.props.importImages.length > 0) ? (
      <div className={classes.preview}>
        {this.props.importImages.map((image, key) => (
          <div
            key={`importImg${key}`}
            className={classes.image}
          >
            <img
              alt="preview"
              className={'formImage'}
              src={image.url}
            />
            <button
              onClick={(e) => this.handleRemoveImportImage(e, image.id)}
              type="button"
              className={classes.removeButton}
            >
              X
            </button>
          </div>
        ))}
        {this.state.files.map((file, key) => (
          <div
            key={`wimg${key}`}
            className={classes.image}
          >
            <img
              alt="preview"
              className={'formImage'}
              src={file.preview}
            />
            <button
              onClick={(e) => this.handleRemoveImage(e, key)}
              type="button"
              className={classes.removeButton}
            >
              X
            </button>
          </div>
        ))}
      </div>
    ) : (
        <div>Drag images here</div>
      )

    return (
      <section className={classes.OfferPictures}>
        <SectionHeader>Pictures of your watch</SectionHeader>
        {/* <TextInput 
          label={'Youtube URL'}
          onChange={this.props.onValueChange}
          input={this.props.youtubeLink}
        /> */}
        <div className={classes.confirmContainer}>
          <Button
            type="button"
            // disable if no images, or if the component state is loading.
            disabled={((this.state.files.length <= 0) && (this.props.importImages.length <= 0)) || this.props.loading}
            onClick={this.onImagesConfirmed}
          >
            Confirm Images
          </Button>
          {(this.state.confirmed && !this.props.loading) ? (
            <p className={classes.confirmed}>CONFIRMED</p> 
          ) : (
            <p className={classes.unconfirmed}>NOT CONFIRMED</p>
          )}
        </div>
        <Dropzone
          accept="image/*"
          onDrop={this.onDrop}
          disablePreview={false}
          className={classes.dropzone}
        >
          {this.props.loading ? <Spinner /> : preview}
        </Dropzone>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.watchForm.imageLoading,
  importImages: state.watchForm.watchImportImages,
  youtubeLink: state.watchForm.watchYoutubeLink
});

const mapDispatchToProps = (dispatch) => ({
  onImagesConfirmed: (files) => dispatch(actions.confirmImages(files)),
  onRemoveImportImage: (id) => dispatch(actions.startRemoveImportImage(id)),
  onValueChange: (fieldName, value) => dispatch(actions.setWatchFormField(fieldName, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferPictures);