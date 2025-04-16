import axios from 'axios';
import type { components } from './petstore-api';

// Define the API base URL
const API_BASE_URL = 'https://petstore3.swagger.io/api/v3';

// Define the Pet type from the generated types
type Pet = components['schemas']['Pet'];

/**
 * PetStore API client - focused only on the /pet/{petId} endpoint
 */
export class PetStoreApiClient {
  /**
   * Get a pet by its ID
   * @param petId - The ID of the pet to retrieve
   * @returns A promise that resolves to the Pet object
   */
  async getPetById(petId: number): Promise<Pet> {
    try {
      const response = await axios.get<Pet>(`${API_BASE_URL}/pet/${petId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching pet:', error);
      throw error;
    }
  }
}

// Export a singleton instance of the API client
export const petApi = new PetStoreApiClient();

// Helper function for fetching a pet by ID
export async function fetchPet(petId: number): Promise<Pet> {
  return petApi.getPetById(petId);
}