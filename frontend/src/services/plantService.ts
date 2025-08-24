import { Plant } from '@/types/Plant';
import axiosInstance from './axiosInstance';
import { PaginationFilterResults } from '@/types/PaginationFilterResults';

// Query API endpoint for paginated plants (by default, ask for records starting on page 1, with 3 records / page)
export async function getPlants(page: number = 1, pageSize: number = 3): Promise<PaginationFilterResults<Plant>> {
  try {
    const response = await axiosInstance.get<PaginationFilterResults<Plant>>(
      '/plants',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params: { page, pageSize },
    });

    console.log(response.data);

    return response.data;
  }catch(error: unknown){
    if(error instanceof Error){
      if(typeof error === 'object' && error !== null && 'response' in error){
        // console.error('API error:', error.response.status, (error as any).response.data);
        throw new Error('Failed to fetch plant data from server.');
      }
      else if(typeof error === 'object' && error !== null && 'request' in error){
        // console.error('No response from API:', (error as any).request);
        throw new Error('No response from server. Check your API URL and server status.');
      }
      else if(error instanceof Error){
        console.error('Axios error:', error.message);
        throw new Error('An unexpected error occurred.');
      }
      else{
        console.error('Unknown error:', error);
        throw new Error('An unexpected error occurred.');
      }
    }

    throw new Error('Unexpected problems and errors');
  }
}

// Get plant by ID
// export async function getPlantById(id: number): Promise<Plant> {
//   try{
//     const response = await axiosInstance.get<Plant>(
//       `/plants/${id}`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     return response.data;
//   } catch (error: unknown) {
//     // Log for debugging (will show in browser console if called client-side, terminal if server-side)
//     // if (error.response) {
//     //   console.error('API error:', error.response.status, error.response.data);
//     //   throw new Error('Failed to fetch plant data from server.');
//     // } else if (error.request) {
//     //   console.error('No response from API:', error.request);
//     //   throw new Error('No response from server. Check your API URL and server status.');
//     // } else {
//     //   console.error('Axios error:', error.message);
//     //   throw new Error('An unexpected error occurred.');
//     // }
//     throw new Error('Unexpected error');
//   }
// }

// change the "any" Promise to something more relevant later on (after deciding what to send back from the backend)
// export async function uploadPlantCsvFile(file: File): Promise<> {
export async function uploadPlantCsvFile(file: File){
  const formData = new FormData();
  formData.append("file", file);

  for (const [key, value] of formData.entries()) {
    console.log(key, value); // should see "file" and the File object
  }

  try{
    const response = await axiosInstance.post(
      `FileUpload/upload-csv`,
      formData,
      {
        headers: {
          // 'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  }catch(error: unknown){
    if(error instanceof Error){
      throw new Error("File upload error!");
    }
  }
}