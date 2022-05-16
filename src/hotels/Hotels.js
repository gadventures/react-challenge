import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchHotelsAsync,
  selectAllHotels,
  selectHotelsStatus,
} from './slice';
import {Loading} from '../core/base/loading';
import styles from './styles.module.scss';


const HotelRow = ({ name, description, imagePath }) => {
  return (
    <li className={styles.hotelRow}>
      <img src={imagePath} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </li>
  )
}

export function Hotels() {
  const dispatch = useDispatch();
  const hotels = useSelector(selectAllHotels);
  const status = useSelector(selectHotelsStatus);
  
  useEffect(() => {
    dispatch(fetchHotelsAsync());
  }, [dispatch]);
  
  if (status !== 'idle') {
    return <Loading />;
  }
  
  return (
    <div className={styles.hotelsList}>
      <em className={styles.hotelsResults}>
        Found {' '}
        <strong>{hotels.length}</strong> {' '}
        hotel
        {hotels.length === 1 ? '' : 's'}
      </em>
      <ul>
        {hotels.map(hotel => (
          <HotelRow key={hotel.id} {...hotel} />
        ))}
      </ul>
    </div>
  );
}
