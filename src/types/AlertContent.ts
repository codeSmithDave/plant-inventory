import { AlertType } from "./AlertType";

export interface AlertContent{
   title?: string,
   content: string,
   type: AlertType,
}