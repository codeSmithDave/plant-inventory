'use client';

import React, { useState } from "react";
import Alert from "./Alert";
import { AlertType } from "@/types/AlertType";
import { AlertContent } from "@/types/AlertContent";
import { uploadPlantCsvFile } from "@/services/plantService";

type Props = {
    
};

export default function FileUpload(props: Props) {
    // holds file info from file uploader
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    // update user about various actions (give error, warning messages, etc.)
    const [alertMessage, setAlertMessage] = useState<AlertContent>();

    // check the user's selected file and run some basic validation (is the file a CSV)
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files && event.target.files.length > 0){
            const userFile = event.target.files[0];
            setSelectedFile(userFile);

            // validate if the user's selected file passes some initial / basic validation
            if(userFile.type == 'text/csv' && userFile.name.endsWith('csv')){
                setAlertMessage({
                    content: `"${userFile.name}" is ready to be uploaded!`,
                    type: AlertType.info
                });
                return;
            }
            else{
                setAlertMessage({
                    content: `"${userFile.name}" is not a valid CSV file!`,
                    type: AlertType.warning
                });
            }
        }
        // make sure to empty the state if the user opens the file uploader but fails to select a file
        // we don't want to be looking at the previously selected file; only care about current
        else{
            setSelectedFile(null);
        }
    }

    const handleFileUpload = async () => {
        console.log("Uploading time");

        if(!selectedFile){
            setAlertMessage({
                content: `No file is selected!`,
                type: AlertType.error
            });
            
            return;
        }

        try{
            const response = await uploadPlantCsvFile(selectedFile);
        }catch(error: any){
            throw error;
        }
    };

    return (
        <div className="space-y-4 p-4 max-w-xl m-auto">
            <label className="block border-1 border-dashed">
                {/* <span className="sr-only">Choose file to upload</span> */}
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".csv"
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                    p-8"
                />
            </label>

            <div>
                {selectedFile && (
                    // <p>{selectedFile.name}</p>
                    <Alert
                    alertInfo={alertMessage}
                    ></Alert>
                )}
            </div>

            <button
                onClick={handleFileUpload}
                disabled={selectedFile ? false : true}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-grab"
            >
            Upload File
            </button>
      </div>
    );
}