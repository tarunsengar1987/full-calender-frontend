const { setEvents } = require("../redux/slice/eventSlice");
const { store } = require("../redux/store");
const { ROUTES } = require("../utils/apiRoutes");
const { default: baseService } = require("./baseService");


exports.createEvent = (itemData) => { 
  return baseService
    .post(
      ROUTES.EVENT,
      { ...itemData}
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.editEvent = (id, eventData) => {
  return baseService
    .put(
      `${ROUTES.EVENT}/${id}`,
      { ...eventData }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteEvent = (id) => {
  return baseService
    .delete(
      `${ROUTES.EVENT}/${id}`,
      {}
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllEvents = () => {
  return baseService
    .get(ROUTES.EVENT)
    .then((res) => {
      console.log(res.data);
      store.dispatch(setEvents(res.data));
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
