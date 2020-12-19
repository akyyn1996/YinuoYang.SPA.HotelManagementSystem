import { RoomType } from "./roomType";

export interface Room {
    id: number;
    rtCode: number;
    status: boolean;
    roomType: RoomType;
  }