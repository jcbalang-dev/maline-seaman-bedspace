"use client";

import { DragDropContext } from "react-beautiful-dnd";

export const DNDContext = ({ children, onDragEnd }) => {
  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};
