import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Link } from '../link'
import { Drawer, IconButton } from '@material-ui/core'
import styles from './layout.module.css'
import enviroscanLogo from '../../images/enviroscan-logo.png'
import { useMediaQuery } from '@material-ui/core'
import { Menu as MenuIcon, Close as CloseMenuIcon } from '@material-ui/icons'
import classnames from 'classnames'
//imports for dropdown menu
import { Button, Menu, MenuItem, Popover } from '@material-ui/core';

const mainMenuLinks = [
  { text: 'Environmental Indicators',         path: '/environmental-indicators' },
  { text: 'Sociodemographic Indicators',      path: '/sociodemographic-indicators' },
  { text: 'Environmental Justice Indicators', path: '/environmental-justice-indicators' },
  { text: 'Health Outcomes',                  path: '/health-outcomes' },
  { text: 'Documentation',                    path: '/documentation' },
]

const TopNav = () => {
  const compact = useMediaQuery('(max-width: 1142px)');
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  // MUI code for dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //pre-existing function
  const handleClickToggler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
        <header className={ styles.header }>
          <Link to="/" className={ styles.brand }>
            <Image src={ enviroscanLogo } alt="" width={ 100 } height={ 59 }  />
          </Link>
          {
            compact && (
              <Fragment>
                <Drawer open={ menuOpen } onClose={ () => setMenuOpen(false) } classes={{ root: styles.mobileMenuDrawer, paper: styles.mobileMenuPaper }}>
                  <Link to="/" className={ styles.brand } style={{ margin: '1rem auto' }}>
                    <Image src={ enviroscanLogo } alt="" />
                  </Link>
                  <Link
                    to="/"
                    key={ `mobile-main-menu-home` }
                    className={ classnames(styles.mobileMenuItem, router.asPath === '/' ? styles.active : undefined) }
                    onMouseOver={ () => router.prefetch('/') }
                    onClick={ () => setMenuOpen(false) }
                  >Home</Link>
                  {
                    mainMenuLinks.map(({ path, text }) => (
                      <Link
                        to={ path }
                        key={ `mobile-main-menu-${ text }` }
                        className={ classnames(styles.mobileMenuItem, router.asPath === path ? styles.active : undefined) }
                        onMouseOver={ () => router.prefetch(path) }
                        onClick={ () => setMenuOpen(false) }
                      >{ text }</Link>
                    ))
                  }
                </Drawer>
                <IconButton
                  className={ styles.menuToggler }
                  size="small"
                  onClick={ handleClickToggler }
                >
                  {
                    menuOpen
                      ? <CloseMenuIcon fontSize="large" />
                      : <MenuIcon fontSize="large" />
                  }
                </IconButton>
              </Fragment>
            )
          }
          {
            !compact && (
                <nav className={ styles.navigation }>
                  {
                    mainMenuLinks.map(({ path, text }) => (
                      <Link
                        to={ path }
                        key={ `main-menu-${ text }` }
                        className={ classnames(styles.menuItem, router.asPath === path ? styles.active : undefined) }
                        onMouseOver={ () => router.prefetch(path) }
                      >{ text }</Link>
                    ))
                  }
                </nav>
            )
          }
        </header>
        
      
  )
}   

export default TopNav