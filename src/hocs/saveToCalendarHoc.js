/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-13 21:42:12
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-14 08:46:02
 */
import {compose, withHandlers} from 'recompose'
import {Alert} from 'react-native'
import {Calendar, Permissions} from 'expo'
import {getFromStorage, saveToStorage} from '../helpers/storageHelper';
import {CALENDAR, CALENDAR_EVENT} from '../constants/StorageKeys';

export default compose(
  withHandlers({
    /* @TODO: Discover why creating a separate calendar is not working */
    getCalendar: () => async () => {
      // Fetches for the calendarId from the local storage
      let calendarId = await getFromStorage(CALENDAR)
      // If it doesnt find it create a new calendar
      if (!calendarId) {
        try {
          const newCalendar = {
            id: 'mymoxy_calendar',
            title: 'mymoxy',
            entityType: Calendar.EntityTypes.EVENT,
            color: 'blue',
            type: Calendar.CalendarType.SUBSCRIBED,
            sourceId: 'mymoxy_calendar',
          }
          
          calendarId = await Calendar.createCalendarAsync(newCalendar)

        } catch (err) {
          Alert.alert('Calendar could not be saved', err.message)
          return null
        }
        saveToStorage(CALENDAR, calendarId)
      }
      return calendarId

    },
  }),
  withHandlers({
    deleteFromCalendar: ({eventId}) => async () => {
      const eventCalendarKey = await getFromStorage(`${CALENDAR_EVENT}_${eventId}`)
      if (eventCalendarKey) {
        await Calendar.deleteEventAsync(eventCalendarKey)
        saveToStorage(`${CALENDAR_EVENT}_${eventId}`, null)
      }
    },
  }),
  withHandlers({
    saveToCalendar: ({
      event,
    }) => async () => {
      const {status} = await Permissions.askAsync(Permissions.CALENDAR)
      const permission = await Permissions.askAsync(Permissions.REMINDERS)
      if (status !== 'granted' || permission.status !== 'granted') {
        return null
      }
      // get event key
      const eventCalendarKey = await getFromStorage(`${CALENDAR_EVENT}_${eventId}`)
      // if Event is already on calendar dont do anything
      if (eventCalendarKey) {
        return null
      }

      // save event to the calendar
      const eventId = await Calendar.createEventAsync(Calendar.DEFAULT, {
        title: event.title,
        startDate: event.beginning,
        endDate: event.ending,
        address: event.address.name,
        timezone: event.timezone,
        organizerEmail: event.author.email,
      })
      // save event id to the calendar
      saveToStorage(`${CALENDAR_EVENT}_${eventId}`, eventId)
      return eventId
    },
  }),
  withHandlers({
    askUserForSaving: ({saveToCalendar}) => () => {
      Alert.alert(
        'Save to calendar',
        'Save event to calendar?',
        [
          {text: 'Cancel', onPress: () => {}},
          {text: 'Confirm', onPress: saveToCalendar},
        ],
      )
    },
  }),
)
