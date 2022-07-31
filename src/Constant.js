export default {
  // 변이(Mutation) 와 액션(Action) 모두에서 사용
  ADD_CONTACT_FORM : "addContactForm",
  CANCEL_FORM : "cancelForm",
  EDIT_CONTACT_FORM : "editContactForm",
  EDIT_PHOTO_FORM : "editPhotoForm",
  FETCH_CONTACTS : "fetchContacts",
  FETCH_CONTACT_ONE : "fetchContactOne",          // 연락처 1건 조회
  INITIALIZE_CONTACT_ONE : 'initializeContactOne', // 연락처 초기화
  CHANGE_ISLOADING : "changeIsLoading",             // 스피너 UI 보여줄 지 여부 결정

  // 액션(Action) 에서만 사용
  ADD_CONTACT : "addContact",
  UPDATE_CONTACT : "updateContact",
  UPDATE_PHOTO : "updatePhoto",
  DELETE_CONTACT : "deleteContact",
}
