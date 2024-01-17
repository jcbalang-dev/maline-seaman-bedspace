const initializeDndData = (roomCodes) => {
  return [
    {
      id: "droppable0",
      title: "Available Pending",
      components: roomCodes.map((code, index) => ({
        id: `component-${index}`,
        name: code,
      })),
    },
    {
      id: "droppable1",
      title: "On-Going",
      components: [],
    },
    {
      id: "droppable2",
      title: "Out-Going",
      components: [],
    },
    {
      id: "droppable3",
      title: "Out",
      components: [],
    },
  ];
};

export default initializeDndData;
