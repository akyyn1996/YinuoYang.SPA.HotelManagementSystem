import { Room } from "./room";
import { Service } from "./service";

export interface CustomerDetail {
    id: number;
    roomNo: number;
    cName: string;
    address: string;
    phone: string;
    email: string;
    checkIn: string;
    totalPersons: number;
    bookingDays: number;
    advance: number;
    room: Room;
    services: Service[];
  }