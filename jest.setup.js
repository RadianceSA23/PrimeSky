//import 'react-native-gesture-handler/jestSetup';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks(); // ✅ Correctly enables the mock

// Optional: Reset mocks before each test
beforeEach(() => {
  fetchMock.resetMocks();
});