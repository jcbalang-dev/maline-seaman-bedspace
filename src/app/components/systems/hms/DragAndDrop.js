"use client";

import { cardsData } from "../../bin/CardsData";
import { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import LoadingSkeleton from "./LoadingSkeleton";
import { DNDContext } from "../../../../context/DNDContext";
import * as styles from "../../../../styles/drag-and-drop.module.css";

const DragAndDrop = () => {
  const [data, setData] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      const newData = [...JSON.parse(JSON.stringify(data))];
      const oldDroppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1]
      );
      const newDroppableIndex = newData.findIndex(
        (x) => x.id == destination.droppableId.split("droppable")[1]
      );
      const [item] = newData[oldDroppableIndex].components.splice(
        source.index,
        1
      );
      newData[newDroppableIndex].components.splice(destination.index, 0, item);
      setData([...newData]);
    } else {
      const newData = [...JSON.parse(JSON.stringify(data))];
      const droppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1]
      );
      const [item] = newData[droppableIndex].components.splice(source.index, 1);
      newData[droppableIndex].components.splice(destination.index, 0, item);
      setData([...newData]);
    }
  };

  useEffect(() => {
    setData(cardsData);
  }, []);

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
                      className="p-5 border-gray-400 border border-dashed"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{ width: "290px", backgroundColor: "#ECECEC" }}
                    >
                      <h2 className="text-center font-bold mb-6 text-black">
                        {val.title}
                      </h2>
                      {val.components?.map((component, index) => (
                        <Draggable
                          key={component.id}
                          draggableId={component.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="bg-gray-200 mx-1 px-4 py-3 my-3"
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                            >
                              {component.name}
                            </div>
                          )}
                        </Draggable>
                      ))}
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
