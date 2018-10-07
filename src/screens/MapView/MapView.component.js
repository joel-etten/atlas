/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-07 21:20:47
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-17 10:02:41
 */
import React from 'react'
import {MapView} from 'expo';
import Slider from 'react-native-slider'
import MapViewDirections from 'react-native-maps-directions'
import {View, Platform, StatusBar} from 'react-native'
import Icon from '../../components/ImageIcon/ImageIcon';
import Layout from '../../constants/Layout';
import {GOOGLE_MAPS_APIKEY} from '../../config/Maps';
import EventCardContainer from '../../components/EventCard/EventCard.container';
import IconButton from '../../components/IconButton/IconButton';
import {Typography, Spinner} from '../../components';
import Colors from '../../constants/Colors';

export default ({
  title,
  onPress,
  getCurrentLocation,
  events,
  selectEvent,
  sliderValue,
  selected,
  calculateRegion,
  loading,
  getEventLocation,
  openGoogleMapsNavigation,
  refetchBasedOnRadius,
  onClose,
  changeSliderValue,
}) => (
  <React.Fragment>
    {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
    <MapView
      onPress={onPress}
      style={styles.container}
      initialRegion={{...getCurrentLocation(), ...calculateRegion()}}
      region={selected ? {...calculateRegion(), ...getEventLocation(selected)} : calculateRegion()}
    >
      <MapView.Marker
        coordinate={getCurrentLocation()} title='My Location'
      >
        <Icon icon='locationMark' />
      </MapView.Marker>
      {
        events.map((item, index) => {
          const longitude = item.location.coordinates[0]
          const latitude = item.location.coordinates[1]
          return (
            <MapView.Marker
              key={index}
              onPress={() => selectEvent(item)}
              coordinate={{longitude, latitude}} title={title}
            >
              {
                selected && selected._id === item._id ?
                  <Icon icon='mapMarker' /> :
                  <Icon icon='mapDot' />
              }
            </MapView.Marker>
          )
        })
      }
      {
        selected && <MapViewDirections
          origin={getCurrentLocation()}
          destination={getEventLocation(selected)}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor='hotpink'
        />
      }
    </MapView>
    {
      !!selected &&
      <View style={styles.eventContainer}>
        <EventCardContainer {...selected} />
      </View>
    }
    <View style={styles.backButton}>
      <IconButton icon='close' onPress={onClose} />
    </View>
    {
      !!selected &&
      <View style={styles.navigationButton}>

        <IconButton icon='navigation' size={30} onPress={openGoogleMapsNavigation(selected)} />
      </View>
    }
    <View style={styles.sliderContainer}>
      <View style={styles.slidingLabelRow}>
        <Typography color='black' variant='caption'>Umkreis</Typography>
        <Typography color='black' variant='caption'>{sliderValue} Km</Typography>
      </View>
      <Slider
        value={sliderValue}
        minimumValue={0}
        maximumValue={1000}
        onSlidingComplete={refetchBasedOnRadius}
        onValueChange={changeSliderValue}
      />
    </View>
    {
      loading &&
      <View style={styles.loadingContainer}>
        <Spinner />
      </View>
    }
  </React.Fragment>
)

const styles = {
  container: {
    flex: 1,
  },
  eventContainer: {
    position: 'absolute',
    left: Layout.spacing * 2,
    right: Layout.spacing * 2,
    bottom: Layout.spacing * 10,
  },
  backButton: {
    position: 'absolute',
    left: Layout.spacing * 3,
    top: Layout.spacing * 8,
  },
  sliderContainer: {
    position: 'absolute',
    left: Layout.spacing * 10,
    top: Layout.spacing * 7,
    right: Layout.spacing * 2,
  },
  navigationButton: {
    position: 'absolute',
    right: Layout.spacing * 3,
    top: Layout.spacing * 15,
  },
  slidingLabelRow: {
    paddingVertical: Layout.spacing / 2, flexDirection: 'row', justifyContent: 'space-between',
  },
  loadingContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: Colors.overlay,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
}
