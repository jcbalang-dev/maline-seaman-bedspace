"use client";

import { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import LoadingSkeleton from "./LoadingSkeleton";
import { DNDContext } from "../../../../context/DNDContext";
import * as styles from "../../../../styles/drag-and-drop.module.css";
import fetchRoomData from "./RoomDataFetching";
import initializeDndData from "./DNDDataInitializer";

const DragAndDrop = () => {
  const [data, setData] = useState([]);
  const [roomCodes, setRoomCodes] = useState([]);

  const onDragEnd = (result) => {
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
      newData[droppableIndex].components.splice(
        destination.index,
        0,
        movedItem
      );
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

  useEffect(() => {
    const fetchRoomCodes = async () => {
      const codes = await fetchRoomData();
      setRoomCodes(codes);
    };

    fetchRoomCodes();
  }, []);

  useEffect(() => {
    setData(initializeDndData(roomCodes));
  }, [roomCodes]);

  if (!data.length) {
    return <LoadingSkeleton />;
  }

  return (
    <DNDContext onDragEnd={onDragEnd}>
      <div className="flex">
        <div className="my-8 mx-8 rounded-xl border">
          <div className={styles.dataContainer}>
            <div className={styles.buttonContainer}>
              {data.map((val, index) => (
                <Droppable key={index} droppableId={`droppable${index}`}>
                  {(provided) => (
                    <div
                      className={`p-5 border-gray-400 border border-dashed" ${styles.borderContainer}`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{ width: "290px", backgroundColor: "#ECECEC" }}
                    >
                      <h2 className="text-center font-bold mb-6 text-black">
                        {val.title}
                      </h2>
                      {val && val.components
                        ? val.components.map((component, index) => (
                            <Draggable
                              key={`${val.id}-${component.id}`}
                              draggableId={`${val.id}-${component.id}`}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className={styles.componentBorder}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                  ref={provided.innerRef}
                                >
                                  {component.name}
                                </div>
                              )}
                            </Draggable>
                          ))
                        : null}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DNDContext>
  );
};

export default DragAndDrop;
