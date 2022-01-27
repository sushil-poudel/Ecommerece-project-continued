import React from 'react';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directorymenu.style.scss';

import MenuItem from '../menuitem/menuitem.component';
import { selectDirectorySections } from '../../redux/directory/directory_selectors';


const DirectoryMenu =({sections})=>{ 
    return(
        <div className='directory-menu'>
        { sections.map(({id,...otherrSectionProps})=>(
                <MenuItem key={id} {...otherrSectionProps}/>
            ))
        } 
        </div>
    );
    
}

const mapStateToProps=createStructuredSelector({
    sections:selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);
