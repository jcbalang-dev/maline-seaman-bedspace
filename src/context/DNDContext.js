"use client";

import { DragDropContext } from "react-beautiful-dnd";

export const DndContext = ({ children, onDragEnd }) => {
  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};
