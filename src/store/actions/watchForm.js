import * as actionTypes from './actionTypes';
import transformData from '../../utils/data/transformData';
import { postProduct, postImages, removeImages } from '../../_secret/auth';

export const setWatchFormField = (fieldName, value) => ({
    type: actionTypes.SET_WATCHFORM_FIELD,
    fieldName,
    value
});

export const toggleWatchFormCheckbox = (fieldName) => ({
    type: actionTypes.TOGGLE_WATCHFORM_CHECKBOX,
    fieldName
});

export const toggleMassWatchFormCheckbox = (fieldName, name) => ({
    type: actionTypes.TOGGLE_MASS_WATCHFORM_CHECKBOX,
    fieldName,
    name
})

export const setWatchImages = (urls) => ({
    type: actionTypes.SET_WATCH_IMAGES,
    urls
});

// These are added to the list of removeable id's after upload
export const setRemoveIds = (ids) => ({
    type: actionTypes.SET_REMOVE_IDS,
    ids
});

export const startLoading = () => ({
    type: actionTypes.START_LOADING
});

export const stopLoading = () => ({
    type: actionTypes.STOP_LOADING
})

export const confirmImages = (files) => {
    return (dispatch) => {
        dispatch(startLoading());
        postImages(files)
            .then((list) => {
                console.log(list);
                const urlList = [];
                const idList = [];
                list.forEach((listItem) => {
                    urlList.push(listItem.url);
                    idList.push(listItem.id);
                });
                dispatch(setRemoveIds(idList));
                dispatch(setWatchImages(urlList));
                dispatch(stopLoading());
            })
            .catch((error) => {
                console.log(error);
                dispatch(stopLoading());
            });
        
    }
} 

export const postWatchFormOffer = () => {
    return (dispatch, getState) => {
        const watchForm = { ...getState().watchForm };
        const data = transformData(watchForm);
        console.log(watchForm.watchImageRemoveList);
        postProduct(data, watchForm.watchImageRemoveList);
        
    }
}