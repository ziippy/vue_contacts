import Constant from '../Constant';
import axios from 'axios';
import CONF from '../Config';

export default {
  [Constant.ADD_CONTACT_FORM] : (store) => {
    console.log('Actions - ', Constant.ADD_CONTACT_FORM);
    store.commit(Constant.ADD_CONTACT_FORM);
  },
  [Constant.ADD_CONTACT] : (store) => {
    console.log('Actions - ', Constant.ADD_CONTACT);
    axios.post(CONF.ADD, store.state.contact)
      .then((response) => {
        if (response.data.status == 'success') {
          store.dispatch(Constant.CANCEL_FORM);
          store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1});
        } else {
          console.log('연락처 추가 실패 : ' + response.data);
        }
      })
  },
  [Constant.EDIT_CONTACT_FORM] : (store, payload) => {
    console.log('Actions - ', Constant.EDIT_CONTACT_FORM);
    axios.get(CONF.FETCH_ONE.replace('${no}', payload.no))
      .then((response) => {
        store.commit(Constant.EDIT_CONTACT_FORM, { contact : response.data });
      })
  },
  [Constant.UPDATE_CONTACT] : (store) => {
    console.log('Actions - ', Constant.UPDATE_CONTACT);
    var currentPageNo = store.state.contactlist.pageno;
    var contact = store.state.contact;
    axios.put(CONF.UPDATE.replace('${no}', contact.no), contact)
      .then((response) => {
        if (response.data.status == 'success') {
          store.dispatch(Constant.CANCEL_FORM);
          store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo});
        } else {
          console.log('연락처 변경 실패 : ' + response.data);
        }
      })
  },
  [Constant.EDIT_PHOTO_FORM] : (store, payload) => {
    console.log('Actions - ', Constant.EDIT_PHOTO_FORM);
    axios.get(CONF.FETCH_ONE.replace('${no}', payload.no))
      .then((response) => {
        store.commit(Constant.EDIT_PHOTO_FORM, { contact : response.data });
      })
  },
  [Constant.UPDATE_PHOTO] : (store, payload) => {
    console.log('Actions - ', Constant.UPDATE_PHOTO);
    var currentPageNo = store.state.contactlist.pageno;
    var data = new FormData();
    data.append('photo', payload.file);
    axios.post(CONF.UPDATE_PHOTO.replace('${no}', payload.no), data)
      .then((response) => {
        if (response.data.status == 'success') {
          store.dispatch(Constant.CANCEL_FORM);
          store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo});
        } else {
          console.log('사진 변경 실패 : ' + response.data);
        }
      })
  },
  [Constant.FETCH_CONTACTS] : (store, payload) => {
    console.log('Actions - ', Constant.FETCH_CONTACTS);
    var pageno;
    if (typeof payload === 'undefined' || typeof payload.pageno === 'undefined') {
      pageno = 1;
    } else {
      pageno = payload.pageno;
    }
    var pagesize = store.state.contactlist.pagesize;

    axios.get(CONF.FETCH, {
      params: { pageno: pageno, pagesize: pagesize }
    }).then((response) => {
      store.commit(Constant.FETCH_CONTACTS, { contactlist: response.data });
    })
  },
  [Constant.CANCEL_FORM] : (store) => {
    console.log('Actions - ', Constant.CANCEL_FORM);
    store.commit(Constant.CANCEL_FORM);
  },
  [Constant.DELETE_CONTACT] : (store, payload) => {
    console.log('Actions - ', Constant.DELETE_CONTACT);
    var currentPageNo = store.state.contactlist.pageno;
    axios.delete(CONF.DELETE.replace('${no}', payload.no))
      .then(() => {
        store.dispatch(Constant.FETCH_CONTACTS, { pageno: currentPageNo });
      })
  },
}
