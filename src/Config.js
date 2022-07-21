//var BASE_URL = "/api";
var BASE_URL = "http://sample.bmaster.kro.kr";

export default {
  // 한 페이지에 보여줄 페이지 사이즈
  PAGESIZE : 5,

  // API
  FETCH : BASE_URL + "/contacts",
  ADD : BASE_URL + "/contacts",
  UPDATE : BASE_URL + "/contacts/${no}",
  FETCH_ONE : BASE_URL + "/contacts/${no}",
  DELETE : BASE_URL + "/contacts/{no}",
  UPDATE_PHOTO : BASE_URL + "/contacts/${no}/photo",
}
