import { Plant } from '@/types/Plant';
import axiosInstance from './axiosInstance';

// Get all plants
export async function getAllPlants(): Promise<Plant[]> {
  try {
    const response = await axiosInstance.get<Plant[]>('/plants');

    return response.data;
  } catch (error: any) {
    // Log for debugging (will show in browser console if called client-side, terminal if server-side)
    if (error.response) {
      console.error('API error:', error.response.status, error.response.data);
      throw new Error('Failed to fetch plant data from server.');
    } else if (error.request) {
      console.error('No response from API:', error.request);
      throw new Error('No response from server. Check your API URL and server status.');
    } else {
      console.error('Axios error:', error.message);
      throw new Error('An unexpected error occurred.');
    }
  }
}

// Get plant by ID
export async function getPlantById(id: number): Promise<Plant> {
  try{
    const response = await axiosInstance.get<Plant>(`/plants/${id}`);

    return response.data;
  } catch (error: any) {
    // Log for debugging (will show in browser console if called client-side, terminal if server-side)
    if (error.response) {
      console.error('API error:', error.response.status, error.response.data);
      throw new Error('Failed to fetch plant data from server.');
    } else if (error.request) {
      console.error('No response from API:', error.request);
      throw new Error('No response from server. Check your API URL and server status.');
    } else {
      console.error('Axios error:', error.message);
      throw new Error('An unexpected error occurred.');
    }
  }
}