'use client';

import { AlertContent } from "@/types/AlertContent";

type Props = {
    alertInfo?: AlertContent,
};

export default function Alert(props: Props) {
    return (
        <div role="alert" className="alert-container {{props.alertInfo.type}}">
            {props.alertInfo?.title && (
                <h3 className="obj-title">{props.alertInfo.title}</h3>
            )}
            {props.alertInfo?.content && (
                <p className="content">{props.alertInfo?.content}</p>
            )}
        </div>
    );
}