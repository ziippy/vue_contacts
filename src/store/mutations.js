import Constant from '../Constant';

export default {
  // 상태를 변경하는 기능만을 구현
  /*
  [Constant.ADD_CONTACT_FORM] : (state) => {
    console.log('Mutations - ', Constant.ADD_CONTACT_FORM);
    state.contact = { no: '', name: '', address: '', photo: ''};
    state.mode = 'add';
    state.currentView = 'contactForm';
  },
  [Constant.CANCEL_FORM] : (state) => {
    console.log('Mutations - ', Constant.CANCEL_FORM);
    state.currentView = null;
  },
  [Constant.EDIT_CONTACT_FORM] : (state, payload) => {
    console.log('Mutations - ', Constant.EDIT_CONTACT_FORM);
    state.contact = payload.contact;
    state.mode = 'update';
    state.currentView = 'contactForm';
  },
  [Constant.EDIT_PHOTO_FORM] : (state, payload) => {
    console.log('Mutations - ', Constant.EDIT_PHOTO_FORM);
    state.contact = payload.contact;
    state.currentView = 'updatePhoto';
  },
  */
  [Constant.FETCH_CONTACTS] : (state, payload) => {
    console.log('Mutations - ', Constant.FETCH_CONTACTS);
    state.contactlist = payload.contactlist;
  },
  [Constant.FETCH_CONTACT_ONE] : (state, payload) => {
    console.log('Mutations - ', Constant.FETCH_CONTACT_ONE);
    state.contact = payload.contact;
  },
  [Constant.INITIALIZE_CONTACT_ONE] : (state) => {
    console.log('Mutations - ', Constant.INITIALIZE_CONTACT_ONE);
    state.contact = { no: '', name: '', address: '', photo: ''};
  },
}
