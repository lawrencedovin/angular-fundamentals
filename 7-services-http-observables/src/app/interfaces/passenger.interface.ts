import { Child } from "./child.interface";

export interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkedInDate?: number,
  children?: Array<Child>
}
