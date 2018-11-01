import {AsyncStorage} from 'react-native'

export const storeData = async (label, data) => {
  try {
    await AsyncStorage.setItem(label, data)
  } catch (error) {
    // Error saving data
  }
}

export const retrieveData = async (label) => {
  try {
    const localData = await AsyncStorage.getItem(label)
    if (localData !== null) {
      // set state to local data
    }
  } catch (error) {
    // Error saving data
  }
}
