import { fetchPet } from './src/api-client';

// Example: Fetch pet with ID 1
async function main() {
  try {
    console.log('Fetching pet with ID 1...');
    const pet = await fetchPet(1);
    console.log('Pet details:', JSON.stringify(pet, null, 2));
  } catch (error) {
    console.error('Error in main:', error);
  }
}

main();