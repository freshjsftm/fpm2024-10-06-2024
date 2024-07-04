import React from 'react';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js';
import styles from './Header.module.scss';

import { WithTheme, WithUser } from '../HOCs';

import Menu from '../Menu';
import CONSTANTS from '../../constants';

const { THEME } = CONSTANTS;

const Header = ({ theme, setTheme, user: { ava } }) => {
  const classNames = cx(styles.header, {
    [styles.light]: theme === THEME.LIGHT,
    [styles.dark]: theme === THEME.DARK,
  });
  const handlerClickIcon = () => {
    setTheme();
  };
  const currentIcon =
    theme === THEME.LIGHT ? mdiWhiteBalanceSunny : mdiWeatherNight;
  return (
    <header className={classNames}>
      <Menu />
      <Icon onClick={handlerClickIcon} path={currentIcon} size={1} />
      <img src={ava} alt="ava" />
    </header>
  );
};

export default WithUser(WithTheme(Header));
