const onDayChange = (value, form) => {
  switch (value) {
    case "1 day":
      form.setFieldsValue({
        room_rate: 150,
      });
      break;
    case "5 days":
      form.setFieldsValue({
        room_rate: 800,
      });
      break;
    case "1 week":
      form.setFieldsValue({
        room_rate: 1050,
      });
      break;
    case "2 weeks":
      form.setFieldsValue({
        room_rate: 2100,
      });
      break;
    case "1 month":
      form.setFieldsValue({
        room_rate: 3500,
      });
      break;
    default:
  }
};

export default onDayChange;
