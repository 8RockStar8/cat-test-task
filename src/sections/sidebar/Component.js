import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { SidebarSection, SidebarNav, SidebarNavItem } from './styled';
import './component.css';

const Sidebar = () => {
  const { categories } = useSelector(state => state.categoriesList);

  const dispatch = useDispatch();
  const location = useLocation();

  const handleSetId = (id) => {
    dispatch({
      type: 'CLEAR_IMAGES',
    });
    dispatch({
      type: 'SET_ID',
      payload: id
    });
  }

  return <SidebarSection>
    <SidebarNav>
      {categories && categories.map((item, index) => {
        console.log(location.pathname,' location.pathname');
        return <SidebarNavItem className={location.pathname === `/${item.name}` ? 'active' : ''} key={`${index}_${item.id}`}>
          <Link onClick={_ => handleSetId(item.id)} to={`/${item.name}`}>{ item.name }</Link>
        </SidebarNavItem>
      })}
    </SidebarNav>
  </SidebarSection>;
};

export default Sidebar;
