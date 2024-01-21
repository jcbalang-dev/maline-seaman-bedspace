const onDragEnd = (data, setData, result) => {
  const { source, destination } = result;

  if (!destination) return;

  const newData = [...data];

  if (source.droppableId === destination.droppableId) {
    const droppableIndex = parseInt(
      source.droppableId.replace("droppable", ""),
      10
    );
    const [movedItem] = newData[droppableIndex].components.splice(
      source.index,
      1
    );
    newData[droppableIndex].components.splice(destination.index, 0, movedItem);
  } else {
    const sourceDroppableIndex = parseInt(
      source.droppableId.replace("droppable", ""),
      10
    );
    const destinationDroppableIndex = parseInt(
      destination.droppableId.replace("droppable", ""),
      10
    );
    const [movedItem] = newData[sourceDroppableIndex].components.splice(
      source.index,
      1
    );
    newData[destinationDroppableIndex].components.splice(
      destination.index,
      0,
      movedItem
    );
  }

  setData(newData);
};

export default onDragEnd;
